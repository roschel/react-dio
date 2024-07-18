import { useState } from "react";

const Test = () => {
  const [name, setName] = useState("João");

  const handleChangeName = () => {
    setName((prev) => (prev === "João" ? "Pablo" : "João"));
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  );
};

export { Test };
