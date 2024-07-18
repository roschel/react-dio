import { useState, useEffect, useMemo, useCallback } from "react";

const Test = () => {
  const [name, setName] = useState("João");
  const [age, setAge] = useState(32);

  // useMemo = referencia em variáveis(const, let, var)
  // useCallBack = referencia de função

  const handleChangeName = useCallback(() => {
    setName((prev) => (prev === "João" ? "Pablo" : "João"));
  }, []);

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log("Age atual", age, newAge);
    setAge((prev) => (prev === 32 ? 26 : 32));
  }, [age]);

  return (
    <div>
      <p>Idade: {age}</p>
      <br />
      <p>Nome: {name}</p>
      <br />
      <button onClick={handleChangeAge}>Alterar idade</button>
      <br />
      <button onClick={handleChangeName}>Alterar nome</button>
    </div>
  );
};

export { Test };
