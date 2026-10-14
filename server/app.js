import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createComplaintHandler, sendJson } from './complaints.js';

const defaultDist = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

export const createAppServer = ({ env = process.env, distDirectory = defaultDist, complaintHandler = createComplaintHandler(env) } = {}) => {
  const dist = resolve(distDirectory);
  return createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    try {
      let pathname;
      try {
        pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
      } catch {
        return sendJson(response, 400, { error: 'Invalid URL.' });
      }
      if (pathname === '/api/complaints' || pathname === '/api/complaints/') {
        return await complaintHandler(request, response);
      }
      if (pathname === '/api/health') {
        if (!['GET', 'HEAD'].includes(request.method)) {
          response.setHeader('Allow', 'GET, HEAD');
          return sendJson(response, 405, { error: 'Method not allowed.' });
        }
        return sendJson(response, 200, { status: 'ok' });
      }
      if (pathname.startsWith('/api/')) return sendJson(response, 404, { error: 'Not found.' });
      if (!['GET', 'HEAD'].includes(request.method)) {
        response.setHeader('Allow', 'GET, HEAD');
        return sendJson(response, 405, { error: 'Method not allowed.' });
      }
      if (pathname.includes('\0') || pathname.split('/').some((segment) => segment.startsWith('.'))) {
        return sendJson(response, 404, { error: 'Not found.' });
      }
      let filePath = resolve(dist, `.${pathname}`);
      if (filePath !== dist && !filePath.startsWith(`${dist}${sep}`)) {
        return sendJson(response, 404, { error: 'Not found.' });
      }
      let fileInfo = await stat(filePath).catch(() => null);
      if (!fileInfo?.isFile()) {
        if (extname(pathname) || pathname.startsWith('/assets/')) {
          return sendJson(response, 404, { error: 'Not found.' });
        }
        filePath = resolve(dist, 'index.html');
        fileInfo = await stat(filePath);
      }
      response.writeHead(200, {
        'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream',
        'Content-Length': fileInfo.size,
        'Cache-Control': pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache'
      });
      if (request.method === 'HEAD') return response.end();
      const stream = createReadStream(filePath);
      stream.on('error', () => response.destroy());
      stream.pipe(response);
    } catch {
      if (!response.headersSent) return sendJson(response, 500, { error: 'Internal server error.' });
      response.destroy();
    }
  });
};
