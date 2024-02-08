import { createContext, useContext, useState } from "react";

import ChildrenOne from "./componentes/ChildrenOne";
import ChildrenTwo from "./componentes/ChildrenTwo";

import "./App.css";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <ChildrenOne></ChildrenOne>
      <ChildrenTwo></ChildrenTwo>
    </AppProvider>
  ); 
}


export default App;
