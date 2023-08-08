import React, { useEffect } from "react";
import { pronvicas, sitios } from "./assets/Datapronvicas";
import { useState } from "react";


const initalVariable  =  { 

      departamento : "", 
      provincia: "",
      distrito : ""

}

const App3 = () => {
  const [Textomandar, setTextomandar] = useState(initalVariable);
    const [estado, setEstado] = useState([]);
  const [provnicia, segundoestado] = useState([]);
  const [lugaresNUevos, setLuagresnuevos] = useState([]);

  const chanugeSelect = (e) => {

    setTextomandar({
      ...Textomandar,
      [e.target.name]: e.target.value,
    });
    const letra = pronvicas.filter(
      (item) => item.departamento === e.target.value
    );
    let soni = Object.values(letra);
    setEstado(soni[0].distrito);
  };

  const chanugeSelect2 = (e) => {


     console.log(e.target.name, e.target.value);
      setTextomandar({
        ...Textomandar,
        [e.target.name]: e.target.value,
      });
    const distrit = sitios.find((item) => item.distrit === e.target.value);
    setLuagresnuevos(distrit.lugares);


  };
  const esucharcambiao = (  e  )=>{
       setTextomandar({
        ...Textomandar , 
             [e.target.name]: e.target.value,
       })
  }

  const handleSUBMIT = (e)=>{
    e.preventDefault()
    console.log(Textomandar)
    setLuagresnuevos([])
    setEstado([])
  }

  useEffect(() => {
    
  }, []);
  return (
    <>
      <form onSubmit={handleSUBMIT}>
        {/* //todo first Select  */}
        <label forname="departmaneto">Departamento : </label>
        <select
          name="departamento"
          defaultChecked="lima"
          onChange={chanugeSelect}
          className="SelectedPos"
        >
          {pronvicas.map((item, index) => (
            <option value={item.departamento} key={index}>
              {/* --seleccionar */}
              {item.departamento}
            </option>
          ))}
        </select>

        <br></br>
        {estado.length > 0 && (
          <>
            <label forname="prinvica">Provincia : </label>
            <select
              name="provincia"
              id="prinvica"
              onChange={chanugeSelect2}
              className="SelectedPos"
            >
              {estado.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </>
        )}
        <br></br>
        {lugaresNUevos.length > 0 && (
          <>
            <label forname="distrito">Distrito :</label>
            <select
              name="distrito"
              onChange={esucharcambiao}
              id="distrito"
              // onChange={chanugeSelect2}
              className="SelectedPos"
            >
              {lugaresNUevos.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </>
        )}
<br></br>
        <input type="submit"></input>
      </form>

      {/* {
        JSON.stringify(Textomandar)
      } */}
    </>
  );
};

export default App3;
