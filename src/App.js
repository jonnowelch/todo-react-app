import React from "react";
import Navbar from "./components/Navbar";
import ItemsList from "./components/ItemsList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      {console.log("hello")}
      <ThemeContextProvider>
        <Navbar />
        <ItemsList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
