import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ItemContext } from "../contexts/ItemsContext";

const ItemsList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { items } = useContext(ItemContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="items-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {items.map(item => {
          return (
            <li style={{ background: theme.ui }} key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsList;
