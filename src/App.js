import React from "react";
import Navbar from "./components/Navbar";
import ItemsList from "./components/ItemsList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      {console.log("hello")}
      <ThemeContextProvider>
        <Navbar />
        <ItemsList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
