const fs = require('fs');
const path = require('path');
const { parseLogLine, formatDuration, logLevel } = require('./utils');

const LOG_FILE = path.join(__dirname, 'logs.log');
const logEntries = fs.readFileSync(LOG_FILE, 'utf-8').trim().split('\n');

const jobMap = {}; // Stores { PID: { start: Date, description } }
const completedJobs = [];

logEntries.forEach((line, index) => {
  const parsed = parseLogLine(line);

  if (!parsed) {
    console.warn(`Line ${index + 1} could not be parsed: ${line}`);
    return;
  }

  const { time, description, action, pid } = parsed;

  if (action === 'START') {
    jobMap[pid] = { start: time, description };
  } else if (action === 'END') {
    const job = jobMap[pid];
    if (!job) {
      console.error(`Missing START for PID ${pid}`);
      return;
    }

    const durationMs = time - job.start;
    const durationMin = durationMs / (1000 * 60);
    const formatted = formatDuration(durationMs);

    let status = 'OK';

    if (durationMin > 10) {
      logLevel('ERROR', `PID ${pid} - "${job.description}" took ${formatted}`);
      status = 'ERROR';
    } else if (durationMin > 5) {
      logLevel('WARNING', `PID ${pid} - "${job.description}" took ${formatted}`);
      status = 'WARNING';
    }

    completedJobs.push({
      pid,
      description: job.description,
      duration: formatted,
      status,
    });

    delete jobMap[pid]; // Clean up
  }
});

// Optionally output full job report
console.log('\n--- Job Report ---');
completedJobs.forEach((job) => {
  console.log(`[${job.status}] ${job.pid} - ${job.description} - ${job.duration}`);
});
