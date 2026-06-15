const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, HOST);

server.on('listening', () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nError: Port ${PORT} is already in use.`);
    console.error(`Another server is likely still running. Try:`);
    console.error(`  lsof -i :${PORT}`);
    console.error(`  kill <PID>`);
    process.exit(1);
  }

  console.error('Server error:', err.message);
  process.exit(1);
});
