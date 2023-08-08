import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Objetglobal, FuncionReducir } from "./Data";
export const contextoglobalconsumir = createContext();
const Global2 = ({ children }) => {
  const [state, dispatch] = useReducer(
    FuncionReducir,
    JSON.parse(localStorage.getItem("guardartodos")  ) || Objetglobal
  );
  useEffect(() => {
    localStorage.setItem("guardartodos", JSON.stringify(state));
  }, [state]);
  const data = { state, dispatch };
  return (
    <>
      <contextoglobalconsumir.Provider value={data}>
        {children}
      </contextoglobalconsumir.Provider>
    </>
  );
};

export default Global2;
