import React, { useState, useCallback } from "react";

function UseCallbackPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const onChangeName =  (event) => {
  //   setName(event.target.value)
  // }

  const onChangeName = useCallback((event) => {
    setName(() => event.target.value)
  }, [])

  return (
    <>
      <h1>UseCallBack Page</h1>
      <input
        placeholder="Nome"
        value={name}
        onChange={onChangeName}
      />
      <input
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </>
  );
}

export default UseCallbackPage;
