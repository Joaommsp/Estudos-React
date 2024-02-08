import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function useAppContext() {
  const context = useContext(AppContext)

  if(context === undefined) {
    new Error("Não estã dentro do contexto")
  }

  return context
}

export default useAppContext