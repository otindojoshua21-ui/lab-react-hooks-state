import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (item) => {
    if (!cart.find((c) => c.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: darkMode ? "#1a1a2e" : "#f5f5f0",
      color: darkMode ? "#e8e8e8" : "#1a1a1a",
      transition: "background-color 0.3s ease, color 0.3s ease",
      fontFamily: "'Georgia', serif",
    }}>
      <header style={{
        padding: "1.5rem 2rem",
        borderBottom: darkMode ? "2px solid #444" : "2px solid #c8a96e",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: darkMode ? "#16213e" : "#fff8ee",
      }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem", color: darkMode ? "#c8a96e" : "#8b5e2d" }}>
          🛒 FreshCart
        </h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <main style={{
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: "2rem",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <section>
          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="category-filter" style={{ marginRight: "0.75rem", fontWeight: "bold" }}>
              Filter by Category:
            </label>
            <select
              id="category-filter"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                border: darkMode ? "1px solid #555" : "1px solid #c8a96e",
                backgroundColor: darkMode ? "#222" : "#fff",
                color: darkMode ? "#eee" : "#333",
                fontSize: "1rem",
              }}
            >
              <option value="All">All</option>
              <option value="Dairy">Dairy</option>
              <option value="Fruits">Fruits</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
            </select>
          </div>

          <ProductList
            products={sampleProducts}
            category={category}
            cart={cart}
            addToCart={addToCart}
            darkMode={darkMode}
          />
        </section>

        <aside>
          <Cart cart={cart} darkMode={darkMode} />
        </aside>
      </main>
    </div>
  );
}

export default App;
