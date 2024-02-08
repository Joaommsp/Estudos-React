import { useState } from "react";

import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
  const [name, setName] = useState("João Marcos");

  const num = 10;

  return (
    <AppContext.Provider value={{ name, setName, num }}>
      {children}
    </AppContext.Provider>
  );
}
