// TanStack Start / h3 request handler signature: (request, env, ctx) => Response
export async function adminHandler(_request: Request, _env: unknown, _ctx: unknown) {
  const payload = JSON.stringify(
    { ok: true, timestamp: new Date().toISOString() },
    null,
    2,
  );

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>/admin</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; min-height: 100vh; padding: 24px; background: #0a0a0a; color: #f5f5f5; margin: 0; }
    pre { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; }
    a { color: inherit; }
  </style>
</head>
<body>
  <h1 style="font-size: 28px; font-weight: 800; margin: 0;">/admin</h1>
  <p style="margin-top: 8px; opacity: 0.8;">Admin backend route wired into TanStack Start.</p>
  <pre>${escapeHtml(payload)}</pre>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', """)
    .replaceAll("'", "&#39;");
}

