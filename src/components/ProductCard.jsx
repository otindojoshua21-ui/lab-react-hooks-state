function ProductCard({ product, inCart, addToCart, darkMode }) {
  return (
    <div
      data-testid={`product-card-${product.id}`}
      style={{
        padding: "1.25rem",
        borderRadius: "10px",
        border: darkMode ? "1px solid #333" : "1px solid #e0d6c8",
        backgroundColor: darkMode ? "#1e2a3a" : "#fff",
        boxShadow: darkMode
          ? "0 2px 8px rgba(0,0,0,0.4)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: darkMode ? "#c8a96e" : "#a07840",
          fontWeight: "bold",
        }}
      >
        {product.category}
      </div>

      <h3
        style={{
          margin: 0,
          fontSize: "1rem",
          fontFamily: "'Georgia', serif",
          color: darkMode ? "#f0f0f0" : "#1a1a1a",
        }}
      >
        {product.name}
      </h3>

      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: darkMode ? "#9ed89e" : "#3a7a3a",
        }}
      >
        ${product.price.toFixed(2)}
      </div>

      {inCart ? (
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            color: darkMode ? "#88cc88" : "#3a7a3a",
            fontStyle: "italic",
          }}
        >
          {product.name} is in your cart.
        </p>
      ) : (
        <button
          data-testid={`product-${product.id}`}
          onClick={() => addToCart(product)}
          style={{
            marginTop: "0.25rem",
            padding: "0.5rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: darkMode ? "#c8a96e" : "#8b5e2d",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "0.85rem",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "background-color 0.2s ease",
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;