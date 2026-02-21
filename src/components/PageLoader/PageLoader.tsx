export function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        color: "hsl(var(--color-muted-foreground))",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          Loading...
        </div>
      </div>
    </div>
  );
}
