import React, { useState, useEffect } from "react";

function UseEffectPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(name)
  }, [name])

  return (
    <>
      <h1>UseEffect Page</h1>
      <input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </>
  );
}

export default UseEffectPage;
