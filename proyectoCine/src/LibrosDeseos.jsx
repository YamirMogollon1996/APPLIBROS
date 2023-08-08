import React, { useEffect, useState } from "react";
import basura from "../src/assets/basura.svg";
const LibrosDeseos = ({
  Deseso,
  handlecerrar,
  librosTo,
  setLibros,
  Setdeseso,
  dathmode,
  setdathmode,
}) => {
  const [textoforchanguin, Settextoforchanguin] = useState("");
  const [valores, setValores] = useState([]);
  const chanugebutoncolor = (e) => {
    Settextoforchanguin(e.target.value);
  };

  const Busquedad_filtro = () => {
    let miseclea = Deseso.filter((item) =>
      item.book.title.includes(textoforchanguin)
    );
    return miseclea;
  };

  const handleClick = (item) => {
    Setdeseso(Deseso.filter((libro) => libro.book.ISBN != item.book.ISBN));
    setLibros(
      librosTo.map((libro) =>
        libro.book.ISBN === item.book.ISBN ? { ...libro, estado: true } : libro
      )
    );
  };
  useEffect(() => {
    Busquedad_filtro();
  }, [textoforchanguin]);
  return (
    <>
      <input
        onChange={chanugebutoncolor}
        placeholder="   BUSQUEDAD LIBRO"
        className="filtro_busquedad"
      ></input>
      <div className="Renderbutton">
        <button onClick={handlecerrar} className="close">
          x
        </button>

        <h2>Libros en carrito : {Deseso.length}</h2>
        <hr></hr>
      </div>

      {Busquedad_filtro().map((item, index) => (
        <div key={index} className="div_children">
          <p>{item.book?.title}</p>
          <p>{item.book?.genre}</p>
          <button
            onClick={() => handleClick(item)}
            className="redicuiusTotalum"
          >
            <img src={basura}></img>
          </button>
        </div>
      ))}
    </>
  );
};

export default LibrosDeseos;
