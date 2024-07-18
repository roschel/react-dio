import { useState, useEffect, useMemo } from "react";

const Test = () => {
  const [age, setAge] = useState("João");

  const handleChangeName = () => {
    setAge((prev) => (prev === 32 ? 26 : 32));
  };

  const changeUser = () => {
    handleChangeName();
  };

  const calculo = useMemo(() => {
    console.log("calculou", age);
    return 10 * age;
  }, [age]);

  console.log("renderizou", calculo);

  useEffect(() => {
    changeUser();
  }, []);

  return (
    <div>
      <p>{age}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  );
};

export { Test };
