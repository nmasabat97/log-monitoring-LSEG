# Log Monitoring App

This is a simple Node.js CLI app that monitors a job log file and reports jobs that exceed duration thresholds.

## Features

- Parses a CSV-like log file
- Tracks job START and END events using PID
- Reports:
  - Warning if a job runs longer than 5 minutes
  - Error if a job runs longer than 10 minutes
- Outputs a job summary report

## Usage
There are three ways you can execute this app

- Run index.html in your browser to upload different log files.
- Run this app on a deployed vercel app.
- Using Bash
```bash
npm start
