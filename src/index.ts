addEventListener('fetch', (event: FetchEvent): void => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const origin = 'blog.cloudflare.com';
  const now = Math.floor(Date.now() / 1000);
  const buster = `https://${origin}/?mrkeng_cache_buster?=${now}`;

  return Response.redirect(buster, 302);
}
