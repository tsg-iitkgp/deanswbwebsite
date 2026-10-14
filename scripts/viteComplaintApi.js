import { createComplaintHandler } from '../server/complaints.js';

export const viteComplaintApi = (env) => ({
  name: 'complaint-api',
  configureServer(server) {
    const handler = createComplaintHandler(env);
    server.middlewares.use((request, response, next) => {
      const pathname = new URL(request.url || '/', 'http://localhost').pathname;
      if (pathname !== '/api/complaints' && pathname !== '/api/complaints/') return next();
      handler(request, response).catch(() => {
        if (!response.headersSent) {
          response.statusCode = 500;
          response.end(JSON.stringify({ error: 'Unable to submit the complaint right now.' }));
        }
      });
    });
  }
});
