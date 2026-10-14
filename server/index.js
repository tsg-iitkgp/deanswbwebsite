import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createAppServer } from './app.js';

const port = Number(process.env.PORT || 9500);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}
await stat(fileURLToPath(new URL('../dist/index.html', import.meta.url))).catch(() => {
  throw new Error('Production build is missing. Run npm run build first.');
});
const server = createAppServer();
server.listen(port, process.env.HOST || '0.0.0.0', () => {
  console.log(`Student Wellbeing website listening on port ${port}`);
});
server.on('error', (error) => {
  console.error('Server failed to start:', error.message);
  process.exitCode = 1;
});
const shutdown = () => {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 30000).unref();
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
