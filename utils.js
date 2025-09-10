function parseLogLine(line) {
    const parts = line.split(',');
  
    if (parts.length !== 4) return null;
  
    const [timeStr, description, action, pidStr] = parts.map(p => p.trim());
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  
    const time = new Date();
    time.setHours(hours, minutes, seconds, 0);
  
    return {
      time,
      description,
      action,
      pid: pidStr,
    };
  }
  
  function formatDuration(ms) {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    return `${min}m ${sec}s`;
  }
  
  function logLevel(level, message) {
    const color = {
      ERROR: '\x1b[31m',
      WARNING: '\x1b[33m',
      INFO: '\x1b[36m',
    }[level] || '\x1b[0m';
  
    console.log(`${color}[${level}] ${message}\x1b[0m`);
  }
  
  module.exports = {
    parseLogLine,
    formatDuration,
    logLevel,
  };
  