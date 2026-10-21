// Cloudflare Pages Worker Middleware
// Runs on Cloudflare's Edge Network for every request to ayushsachan.in

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Execute the standard page request
  const response = await next();

  // Add edge security & performance headers
  const newHeaders = new Headers(response.headers);
  newHeaders.set('X-Edge-Server', 'Cloudflare Pages / Edge Worker');
  newHeaders.set('X-Portfolio-Owner', 'Ayush Sachan');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
