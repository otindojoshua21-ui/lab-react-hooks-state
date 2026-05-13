function Cart({ cart, darkMode }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        borderRadius: "10px",
        border: darkMode ? "1px solid #333" : "1px solid #e0d6c8",
        backgroundColor: darkMode ? "#1e2a3a" : "#fff8ee",
        boxShadow: darkMode
          ? "0 2px 12px rgba(0,0,0,0.4)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        position: "sticky",
        top: "1.5rem",
      }}
    >
      <h2
        style={{
          margin: "0 0 1rem 0",
          fontSize: "1.1rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: darkMode ? "#c8a96e" : "#8b5e2d",
          borderBottom: darkMode ? "1px solid #444" : "1px solid #e0d6c8",
          paddingBottom: "0.75rem",
        }}
      >
       Shopping Cart ({cart.length})
      </h2>

      {cart.length === 0 ? (
        <p
          style={{
            color: darkMode ? "#aaa" : "#888",
            fontStyle: "italic",
            fontSize: "0.9rem",
          }}
        >
          Your cart is empty.
        </p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: "0.6rem 0",
                  borderBottom: darkMode ? "1px solid #333" : "1px solid #eee",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.95rem",
                }}
              >
                <span>{item.name}</span>
                <span
                  style={{
                    fontWeight: "bold",
                    color: darkMode ? "#9ed89e" : "#3a7a3a",
                  }}
                >
                  ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "1rem",
              paddingTop: "0.5rem",
              borderTop: darkMode ? "2px solid #555" : "2px solid #c8a96e",
            }}
          >
            <span>Total</span>
            <span style={{ color: darkMode ? "#9ed89e" : "#3a7a3a" }}>
              $
              {cart
                .reduce((sum, item) => sum + item.price, 0)
                .toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;