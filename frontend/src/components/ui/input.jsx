export function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 px-3 py-2 rounded w-full mb-2"
      style={{
        marginBottom: "0.5rem",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%"
      }}
    />
  );
}
