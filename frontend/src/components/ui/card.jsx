export function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      background: "#fff"
    }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div style={{ padding: "0.5rem" }}>
      {children}
    </div>
  );
}
