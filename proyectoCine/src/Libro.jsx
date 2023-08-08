import React, { useEffect, useRef, useState } from "react";
import libros from "../src/books.json";
import Header from "./Header";
import LibrosDeseos from "./LibrosDeseos";
import suun from "../src/assets/sun.svg";
import moon from "../src/assets/moon.svg";
import suunblanco from "../src/assets/sunblanco.svg"
import moonblanco from "../src/assets/moonblanco.svg"
import librobanco  from  "../src/assets/bookwhite.svg"




const llenarcombobox = () => {
  let openhiemer = [];
  let Mirella = libros.library.map((item) => item.book.genre);
  Mirella.map((item) => {
    !openhiemer.includes(item) ? openhiemer.push(item) : item;
  });
  openhiemer.push("todos");
  return openhiemer;
};

const Busquedadeee = {
  paginas: { min: 0, max: 0, total: 0 },
  libros: "",
};

const Libro = () => {
  const [vertebra, setVertebra] = useState(false);
  const [Deseso, Setdeseso] = useState(
    JSON.parse(localStorage.getItem("libros")) || []
  );
  const [librosTo, setLibros] = useState([]);
  const [texto, setTexto] = useState([]);
  const referencia = useRef();
  const [busquedad, setbusquedad] = useState(Busquedadeee);

  const ChangeforLoading = (e) => {
    setTexto(
      librosTo.filter((item) => item.book.title.includes(busquedad.libros))
    );
  };

  //todo cargar Los rangos
  const ObtenerValues = () => {
    let Paginas = libros.library
      .map((item) => item.book.pages)
      .sort((a, b) => a - b);
    let inicio = Paginas[0];
    let final = Paginas[Paginas.length - 1];
    setbusquedad({
      ...busquedad,
      paginas: { min: inicio, max: final },
    });
  };

  const Handlebusquedad = (e) => {
    if (e.target.name === "paginas") {
      setbusquedad({
        ...busquedad,
        paginas: {
          ...busquedad.paginas,
          total: (busquedad.paginas.total = e.target.value),
        },
      });
    } else {
      setbusquedad({
        ...busquedad,
        [e.target.name]: e.target.value,
      });
    }
  };

  const Filtrango = () => {
    setTexto(
      librosTo.filter((item) => item.book.pages > busquedad.paginas.total)
    );
  };

  const Guar_ocal = () => {
    localStorage.setItem("datos", JSON.stringify(librosTo));
    localStorage.setItem("libros", JSON.stringify(Deseso));
  };

  const handleChangue = (e) => {
    if (e.target.value === "todos") {
      setTexto(librosTo);
    } else {
      setTexto(
        libros.library.filter((item) => item.book.genre === e.target.value)
      );
    }
  };

  const añadirLibro = (item) => {
    const enconrar = Deseso.find((libro) => libro.book.ISBN == item.book?.ISBN);

    setLibros(
      librosTo.map((libroactual) =>
        libroactual.book.ISBN == item.book.ISBN
          ? { ...libroactual, estado: false }
          : libroactual
      )
    );

    setTexto(
      texto.map((libroactual) =>
        libroactual.book.ISBN == item.book.ISBN
          ? { ...libroactual, estado: false }
          : libroactual
      )
    );

    if (enconrar === undefined) {
      Setdeseso([...Deseso, item]);
    } else {
      alert("el libro ya esta el la lista ");
    }
  };
  const totalDireccion = () => {
    return librosTo
      .map((item) => item.estado)
      .filter((item) => item === true)
      .reduce((acum, item) => acum + item, 0);
  };

  const handlerefenecia = () => {
    referencia.current.style.transform = "translateX(0px)";
    console.log();
  };

  const handlecerrar = () => {
    referencia.current.style.transform = "translateX(-550px)";
  };

  const Clickers = (item) => {
      

    if (item === "suun") {
        setVertebra(!vertebra);
    } else {
        setVertebra(!vertebra); 
    };
    
  };

  useEffect(() => {
    totalDireccion();
    llenarcombobox();
    ObtenerValues();
  }, [librosTo]);

  useEffect(() => {
    setLibros(
      libros.library.map((item) => Object.assign({ estado: true }, item))
    );
  }, []);

  useEffect(() => {
    Guar_ocal();
  }, [librosTo]);

  useEffect(() => {
    ChangeforLoading();
  }, [busquedad]);

  useEffect(() => {
    Filtrango();
  }, [busquedad]);

  return (
    <>
      <div
        style={{
          background: `${vertebra ? "#1b1b1b" : "whitesmoke"}`,
          animation: "all 1s  ease",
        }}
        className="container"
      >
        <div className="darh-mode">
          {vertebra ? (
            <img
              style={{
                filter: "white",
              }}
              onClick={() => Clickers("suun")}
              src={suunblanco}
            ></img>
          ) : (
            <img
              style={{
                filter: "white",
              }}
              onClick={() => Clickers("suun")}
              src={suun}
            ></img>
          )}

          {vertebra ? (
            <img
              style={{
                filter: "white",
              }}
              onClick={() => Clickers("moon")}
              src={moonblanco}
            ></img>
          ) : (
            <img
              style={{
                filter: "white",
              }}
              onClick={() => Clickers("moon")}
              src={moon}
            ></img>
          )}
        </div>

        <div ref={referencia} className="Senencia">
          <LibrosDeseos
    
            librosTo={librosTo}
            setLibros={setLibros}
            handlecerrar={handlecerrar}
            Deseso={Deseso}
            Setdeseso={Setdeseso}
          ></LibrosDeseos>
        </div>
        <Header
          setVertebra={setVertebra}
          vertebra={vertebra}
          handlerefenecia={handlerefenecia}
          Deseso={Deseso}
        ></Header>

        <h1
          style={{
            textAlign: "center",
            color: "rgb(176, 180, 180)",
          }}
        >
          libros Disponibles es de {totalDireccion()}
        </h1>

        {texto.length > 0 && (
          <h2
            style={{
              textAlign: "center",
              color: "gray",
            }}
          >
            {" "}
            Libros Disponibles : {texto.length}
          </h2>
        )}

        <div className="Raya">
          <div className="input_Desvio">
            <input
              name="paginas"
              max={busquedad.paginas.max}
              min={busquedad.paginas.min}
              onChange={Handlebusquedad}
              type="range"
            ></input>

            <div className="inputname">
              <p>{busquedad.paginas.min}</p>
              <p>{busquedad.paginas.total}</p>
              <p>{busquedad.paginas.max}</p>
            </div>
          </div>
          <input
            name="libros"
            onChange={Handlebusquedad}
            placeholder="buscar por titutlo"
          ></input>
          <div className="titutlo">
            <select onChange={handleChangue} placeholder="Filtrado">
              {llenarcombobox().map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid">
          {texto.length == 0
            ? librosTo.map((item, index) => (
                <div
                  style={{
                    opacity: `${item.estado == false ? "0.5" : "1"}`,
                    cursor: "none",
                  }}
                  onClick={() => añadirLibro(item)}
                  className="Libroitema"
                  key={index}
                >
                  <img src={item.book.cover}></img>
                </div>
              ))
            : (
                <div className="grid">
                  {texto.map((item, index) => (
                    <div
                      style={{
                        opacity: `${item.estado == false ? "0.5" : "1"}`,
                        cursor: "none",
                      }}
                      onClick={() => añadirLibro(item)}
                      className="Libroitema"
                      key={index}
                    >
                      <img src={item.book.cover}></img>
                    </div>
                  ))}
                </div>
              ) || (
                <div className="grid">
                  {segundotTexto.map((item, index) => (
                    <div
                      style={{
                        opacity: `${item.estado == false ? "0.5" : "1"}`,
                        cursor: "none",
                      }}
                      onClick={() => añadirLibro(item)}
                      className="Libroitema"
                      key={index}
                    >
                      <img src={item.book.cover}></img>
                    </div>
                  ))}
                </div>
              )}
        </div>
      </div>
    </>
  );
};

export default Libro;
