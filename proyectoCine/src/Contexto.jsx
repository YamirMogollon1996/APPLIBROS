// import React, { createContext, useContext, useState , useReducer} from 'react'
import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { Funreducir, initalStado, types } from "./assets/helpers";
export const contextoglobal = createContext();

const Contexto = ({ children }) => {
  const [estado, dispatch] = useReducer(
    Funreducir,
    JSON.parse(localStorage.getItem("listayamirusuarios"))
  );
  const [Descision, SetDecision] = useState(true);
  const [Update, SetUpadte] = useState();

  const data = { estado, dispatch, Descision, SetDecision };

  useEffect(() => {
    localStorage.setItem("listayamirusuarios", JSON.stringify(estado));
  }, [estado]);

  return (
    <contextoglobal.Provider value={data}>{children}</contextoglobal.Provider>
  );
};

export default Contexto;
