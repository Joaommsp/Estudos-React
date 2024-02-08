import React, { useState, useMemo } from "react";

function UseMemoPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = useMemo(() => {
    return <ValidatePassword password={password}/>
  }, [password])

  return (
    <>
      <h1>UseMemo Page</h1>
      <input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {validatePassword}
      {/* <ValidatePassword password={password} /> */}
    </>
  );
}

const ValidatePassword = ({ password }) => {
  console.log(password)
  if (!password.length) {
    return <span>A Senha deve ser preenchida!</span>;
  }
  if (password.length < 5) {
    return <span>A senha deve ter mais de 5 caracteres</span>;
  }
  return <span>Senha aprovada!</span>;
};

export default UseMemoPage;
