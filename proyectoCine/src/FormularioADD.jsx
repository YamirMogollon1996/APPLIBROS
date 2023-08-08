import React, { useContext, useState } from "react";
import { contextoglobalconsumir } from "./Global2";
import { types } from "./Data";

const initalText = {

  id: "",
  nombre: "",
  cantidad: 0,
};

const FormularioADD = ({ setmodal }) => {
  const [estado, settado] = useState(initalText);
  const { state, dispatch } = useContext(contextoglobalconsumir);

  const handleChanuge = (e) => {
    settado({
      ...estado,
      [e.target.name]: e.target.value,
    });

    
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    estado.id = Math.floor(Math.random(0, 1) * 1000);
    let erroes = Object.values(estado);
    let contador = 0;
    erroes.map((item) => item != "" && contador++);
    if (contador != 3) {
      alert("llenar todos");
    } else {
      dispatch({
        type: types.agregar,
        paylodad: estado,
      });
    }

    setmodal(false)
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          onChange={handleChanuge}
          name="nombre"
          placeholder="nombre"
        ></input>
        <input
          type="number"
          onChange={handleChanuge}
          name="cantidad"
          placeholder="cantidad"
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default FormularioADD;
