function captureConsoleLogs() {
    const oldConsoleLog = console.log;
    console.log = function (...args) {
      oldConsoleLog.apply(console, args);
      const logMessage = args.map(arg => String(arg)).join(' '); 
      fetch('http://localhost:3000/log', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: logMessage }),
});

    };
  }

  
  captureConsoleLogs();