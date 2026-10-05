import { onRequest as handleComplaintRequest } from '../functions/api/complaints.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/complaints' || url.pathname === '/api/complaints/') {
      return handleComplaintRequest({ request, env });
    }

    if (url.pathname.startsWith('/api/')) {
      return Response.json({ error: 'Not found.' }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  }
};
