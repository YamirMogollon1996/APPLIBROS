import { useContext, useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { contextoglobal } from "./contexto";
import { types } from "./assets/helpers";
import Formulario from "./Formulario";
import add from "./assets/add.svg";
import basrua from "./assets/basura.svg";
import circle from "./assets/circle.svg";

function App() {
  const { estado, dispatch, Descision, SetDecision } =
    useContext(contextoglobal);
  const [pasarVar, setpasarVar] = useState();

  const meterSginica = () => {
    console.log(pasarVar);
  };
  const ActualizarButton = (item) => {
    SetDecision(false);
    setpasarVar(item);
  };
  
  return (
    <>
      <Formulario meterSginica={meterSginica} pasarVar={pasarVar}></Formulario>

      <hr></hr>
      <div className="denter">
        {estado.map((item, index) => (
          <div key={index}>
            <h4> {item.id} </h4>
            <h4> {item.nombre} </h4>
            <h4> {item.cantidad} </h4>
            <div className="Novedad">
              <button
                onClick={() =>
                  dispatch({
                    type: "add",
                  })
                }
              >
                <img src={add}></img>
              </button>
              <br></br>
              <button
                onClick={() =>
                  dispatch({
                    type: types.remove,
                    paylodad: item,
                  })
                }
              >
                <img src={basrua}></img>
              </button>
              <button onClick={() => ActualizarButton(item)}>
                {" "}
                <img src={circle}></img>{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


export default App;
