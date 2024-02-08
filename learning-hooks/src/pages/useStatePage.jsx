import React, { useState } from "react";

function UseStatePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useState Page</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>
      <span>{count}</span>
    </>
  );
}

export default UseStatePage;
