import process from "node:process";

// TanStack Start / h3 request handler signature: (request, env, ctx) => Response
export async function adminHandler(request: Request, _env: unknown, _ctx: unknown) {
  const url = new URL(request.url);

  if (url.pathname === "/admin" && request.method === "GET") {
    const authed = isAuthed(request);
    return handleAdminGet(authed);
  }

  if (url.pathname === "/admin" && request.method === "POST") {
    return handleAdminPost(request);
  }

  if (url.pathname === "/admin/logout" && request.method === "POST") {
    return handleAdminLogout();
  }

  return new Response("Not found", { status: 404 });
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? "";
}

function getSessionToken() {
  return process.env.ADMIN_SESSION_TOKEN ?? "";
}

function isAuthed(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const token = getSessionToken();
  if (!token) return false;
  return cookie.includes(`admin_session=${token}`);
}

async function handleAdminPost(request: Request) {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");

  const expected = getAdminPassword();
  if (!expected || password !== expected) {
    return new Response(renderLoginPage({ error: "Invalid credentials" }), {
      status: 401,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  const token = getSessionToken() || `sess_${simpleHash(expected)}`;

  return new Response(renderAuthedPage({ timestamp: new Date().toISOString() }), {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "set-cookie": `admin_session=${token}; Path=/admin; HttpOnly; SameSite=Strict; Max-Age=86400`,
    },
  });
}

function handleAdminGet(authed: boolean) {
  return new Response(
    authed ? renderAuthedPage({ timestamp: new Date().toISOString() }) : renderLoginPage(),
    {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    },
  );
}

function handleAdminLogout() {
  return new Response(renderLoginPage({ error: "Logged out" }), {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "set-cookie": `admin_session=; Path=/admin; HttpOnly; SameSite=Strict; Max-Age=0`,
    },
  });
}

function renderLoginPage({ error }: { error?: string } = {}) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>/admin login</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; min-height: 100vh; padding: 24px; background: #0a0a0a; color: #f5f5f5; margin: 0; }
    .card { max-width: 520px; margin: 56px auto 0; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 18px; background: rgba(255,255,255,0.03); }
    h1 { font-size: 26px; margin: 0 0 6px; }
    p { opacity: 0.85; margin: 0 0 14px; }
    label { display: block; font-size: 13px; opacity: 0.9; margin-bottom: 6px; }
    input { width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.05); color: #f5f5f5; }
    button { margin-top: 12px; width: 100%; padding: 10px 12px; border-radius: 10px; border: 0; background: #1f6feb; color: white; font-weight: 700; cursor: pointer; }
    .error { margin-top: 10px; color: #ffb4b4; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>/admin</h1>
    <p>Login required.</p>

    <form method="post" action="/admin">
      <label>Password</label>
      <input name="password" type="password" autocomplete="current-password" />
      <button type="submit">Login</button>
    </form>

    ${error ? `<div class="error">${escapeHtml(error)}</div>` : ""}
  </div>
</body>
</html>`;
}

function renderAuthedPage({ timestamp }: { timestamp: string }) {
  const payload = JSON.stringify({ ok: true, timestamp }, null, 2);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>/admin</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; min-height: 100vh; padding: 24px; background: #0a0a0a; color: #f5f5f5; margin: 0; }
    .row { display:flex; align-items: center; justify-content: space-between; gap: 12px; }
    pre { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; overflow:auto; }
    button.logout { padding: 10px 12px; border-radius: 10px; border: 0; background: rgba(255,255,255,0.08); color:#f5f5f5; font-weight:700; cursor:pointer; }
  </style>
</head>
<body>
  <div class="row">
    <h1 style="font-size: 28px; font-weight: 800; margin: 0;">/admin</h1>
    <form method="post" action="/admin/logout" style="margin:0;">
      <button class="logout" type="submit">Logout</button>
    </form>
  </div>

  <p style="margin-top: 8px; opacity: 0.8;">Authenticated.</p>
  <pre>${escapeHtml(payload)}</pre>
</body>
</html>`;
}

function simpleHash(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) hash = (hash * 31 + input.charCodeAt(i)) | 0;
  return Math.abs(hash).toString(16);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', """)
    .replaceAll("'", "&#39;");
}

