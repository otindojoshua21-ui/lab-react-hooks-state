function DarkModeToggle({ darkMode, setDarkMode }) {
  const toggle = () => setDarkMode(!darkMode);

  return (
    <button
      onClick={toggle}
      style={{
        padding: "0.5rem 1.25rem",
        borderRadius: "999px",
        border: darkMode ? "2px solid #c8a96e" : "2px solid #8b5e2d",
        backgroundColor: darkMode ? "#c8a96e" : "#8b5e2d",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "0.9rem",
        cursor: "pointer",
        letterSpacing: "0.03em",
        transition: "all 0.2s ease",
      }}
    >
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;