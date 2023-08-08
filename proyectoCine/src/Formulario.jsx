import React, { createContext, useContext, useEffect, useState } from "react";
import { contextoglobal } from "./contexto";
import { types } from "./assets/helpers";

const initalSet = {
  id: "",
  nombre: "",
  cantidad: "",
};
const Formulario = ({ meterSginica, pasarVar }) => {
  const { estado, dispatch, Descision, SetDecision } =   useContext(contextoglobal);
  const [entrada, setentrada] = useState(initalSet);

  const handlechangue = (e) => {
    setentrada({
      ...entrada,
      [e.target.name]: e.target.value,
    });
  };

  const hanldeformSubmit = (e) => {
    entrada.id = Math.floor(Math.random(0, 1) * 100);
    e.preventDefault();
    if (Descision === true) {
      dispatch({
        type: types.add,
        paylodad: entrada,
      });
    } else {
      dispatch({
        type: types.update,
        paylodad: entrada,
      });
    }
    setTimeout(() => {
      setentrada(initalSet);
    }, 1000);
  };
  useEffect(() => {

    if (pasarVar){
      setentrada(pasarVar);
    }
  });
  return (
    <>
      <div className="session_form">
        <form onSubmit={(e) => hanldeformSubmit(e)}>
          <input
            value={pasarVar?.nombre || entrada?.nombre}
            name="nombre"
            onChange={handlechangue}
            placeholder="nombre"
          ></input>
          <input
            value={pasarVar?.cantidad || entrada?.cantidad}
            name="cantidad"
            onChange={handlechangue}
            placeholder="cantidad"
          ></input>
          
          {Descision  ?   <input type="submit"></input>  : <button>Actualizar</button>}
        </form>
      </div>
    </>
  );
};

export default Formulario;
