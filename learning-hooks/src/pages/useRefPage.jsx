import React, { useState, useRef } from "react";

function UseRefPage() {
  const [message, setMessage] = useState("");
  const inputRef = useRef()

  return (
    <>
      <h1>UseRef Page</h1>
      <input
        ref={inputRef}
        placeholder="Nome"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={() => {
        inputRef.current.focus()
        setMessage('')
      }}>
        Enviar
      </button>
    </>
  );
}

export default  UseRefPage;
