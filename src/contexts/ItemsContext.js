import React, { createContext, useState } from "react";

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [items, setItems] = useState([
    { title: "Learn React Native", id: 1 },
    { title: "Complete two react native apps", id: 2 },
    { title: "Decide on new tech to learn", id: 3 },
    { title: "Cure corona virus", id: 4 }
  ]);
  return (
    <ItemContext.Provider value={{ items }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
