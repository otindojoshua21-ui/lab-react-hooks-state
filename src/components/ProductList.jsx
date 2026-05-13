import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy", price: 1.99 },
  { id: 2, name: "Cheddar Cheese", category: "Dairy", price: 3.49 },
  { id: 3, name: "Yogurt", category: "Dairy", price: 2.29 },
  { id: 4, name: "Apple", category: "Fruits", price: 0.99 },
  { id: 5, name: "Banana", category: "Fruits", price: 0.59 },
  { id: 6, name: "Mango", category: "Fruits", price: 1.49 },
  { id: 7, name: "Sourdough Bread", category: "Bakery", price: 4.99 },
  { id: 8, name: "Bagels", category: "Bakery", price: 3.79 },
  { id: 9, name: "Chicken Breast", category: "Meat", price: 6.99 },
  { id: 10, name: "Ground Beef", category: "Meat", price: 5.49 },
];

function ProductList({ products, category, cart, addToCart, darkMode }) {
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      <h2
        style={{
          marginBottom: "1rem",
          fontSize: "1.2rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          borderBottom: darkMode ? "1px solid #444" : "1px solid #ddd",
          paddingBottom: "0.5rem",
        }}
      >
        {category === "All" ? "All Products" : category} ({filteredProducts.length})
      </h2>

      {filteredProducts.length === 0 ? (
        <p style={{ color: darkMode ? "#aaa" : "#888" }}>
          No products available
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={!!cart.find((c) => c.id === product.id)}
              addToCart={addToCart}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
