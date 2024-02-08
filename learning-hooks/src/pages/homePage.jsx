import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function homePage() {

  const user = useContext(UserContext);

  return (
    <>
      <h1>Bem vindo aos Hooks</h1>
      <Link to="/useState">Va para o UseState</Link>
      <br />
      <Link to="/useEffect">Va para o UseEffect</Link>
      <br />
      <Link to="/useCallback">Va para o UseCallback</Link>
      <br />
      <Link to="/useMemo">Va para o UseMemo</Link>
      <br />
      <Link to="/useRef">Va para o UseRef</Link>
    </>
  );
}

export default homePage;
