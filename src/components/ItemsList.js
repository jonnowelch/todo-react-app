import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ItemsList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="items-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>milk</li>
        <li style={{ background: theme.ui }}>eggs</li>
        <li style={{ background: theme.ui }}>butter</li>
      </ul>
    </div>
  );
};

export default ItemsList;
