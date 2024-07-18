import { useState, useEffect } from "react";

const Test = () => {
  const [name, setName] = useState("João");

  const handleChangeName = () => {
    setName((prev) => (prev === "João" ? "Pablo" : "João"));
  };

  const changeUser = () => {
    handleChangeName();
  };

  useEffect(() => {
    changeUser();
  }, []);

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  );
};

export { Test };
