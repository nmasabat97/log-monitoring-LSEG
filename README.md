# Log Monitoring App

This is a simple Node.js CLI and UI app that monitors a job log file and reports jobs that exceed duration thresholds.

## Features

- Parses a CSV-like log file
- Tracks job START and END events using PID
- Reports:
  - Warning if a job runs longer than 5 minutes
  - Error if a job runs longer than 10 minutes
- Outputs a job summary report

## Repository
    https://github.com/nmasabat97/log-monitoring-LSEG.git

## Usage
There are three ways you can execute this app

- Clone the repository and run index.html in your browser to upload different log files.
    git clone https://github.com/nmasabat97/log-monitoring-LSEG.git

- Run this app on a deployed vercel app.
    https://log-monitoring-lseg.vercel.app

- Clone the repository and execute in Bash. Upload logs with name "logs.log" in root directory.

    git clone https://github.com/nmasabat97/log-monitoring-LSEG.git
    cd log-monitoring-LSEG
    npm start
