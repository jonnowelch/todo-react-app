import React from "react";
import Navbar from "./components/Navbar";
import ItemsList from "./components/ItemsList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ItemContextProvider from "./contexts/ItemsContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <ItemContextProvider>
            <ItemsList />
          </ItemContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
