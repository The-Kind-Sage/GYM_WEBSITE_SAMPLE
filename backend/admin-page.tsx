import { type ReactNode } from "react";

export function AdminPage({ children }: { children?: ReactNode }) {
  return (
    <div
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        minHeight: "100vh",
        padding: 24,
        background: "#0a0a0a",
        color: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>/admin</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>Admin backend route wired into TanStack Start.</p>

      <div
        style={{
          marginTop: 16,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          padding: 16,
          background: "rgba(255,255,255,0.03)",
        }}
      >
        {children ?? (
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontSize: 13,
              opacity: 0.95,
            }}
          >
            {JSON.stringify({ ok: true, timestamp: new Date().toISOString() }, null, 2)}
          </pre>
        )}
      </div>

      <div style={{ marginTop: 24, opacity: 0.7, fontSize: 12 }}>
        Tip: Protect this route with auth before exposing publicly.
      </div>
    </div>
  );
}
