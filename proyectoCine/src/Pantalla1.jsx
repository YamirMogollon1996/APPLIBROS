import React, { useContext, useState } from "react";
import { contextoglobalconsumir } from "./Global2";
import { useEffect } from "react";
import { types } from "./Data";
import FormularioADD from "./FormularioADD";

const Pantalla1 = () => {
  const { state, dispatch } = useContext(contextoglobalconsumir);
  const { product, ACTUAL, CART } = state;
  const [total, setotal] = useState(0);

  const [modal, setmodal] = useState(false);

  const FunReler = () => {
    let total = CART.map((item) => item.total);
    setotal(total.reduce((item, acum) => acum + item, 0));
  };

  const Sirverdir = () => {
    setmodal(!modal);
  };

  useEffect(() => {
    FunReler();
  }, [state]);
  return (
    <>
      {modal && <FormularioADD setmodal={setmodal}></FormularioADD>}
      <h1  style={{
        color:"gray",
        textAlign:"center"
      }}>Product all </h1>
      <hr></hr>
      <div className="Container">
        {product.length > 0 ? (
          product.map((item, index) => (
            <div className="itemCenter" key={index}>
              <h2>{item.nombre}</h2>
              <h2>{item.cantidad}</h2>
              <div>
                <button
                  onClick={() => {
                    dispatch({
                      type: types.add,
                      payload: item,
                    });
                  }}
                >
                  Agregrar
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: types.actual,
                      payload: item,
                    })
                  }
                >
                  Actual
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: types.borrardestorre,
                      paylodad: item,
                    })
                  }
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>CVaacio...</h1>
        )}
      </div>

      <h1>Cart all</h1>
      {ACTUAL && <h1>{ACTUAL.nombre}</h1>}

      <h1>VIEW </h1>
      <div className="Container">
        {CART.map((item, index) => (
          <div key={index} className="itemCenter">
            <h1>{item.nombre}</h1>
            <h3>{item.stock}</h3>
            <div>
              <button
                onClick={() => {
                  dispatch({
                    type: types.remove,
                    payload: item,
                  });
                }}
              >
                All
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: types.removeone,
                    payload: item,
                  });
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: types.aumentar,
                    payload: item,
                  });
                }}
              >
                +
              </button>
            </div>
            <strong>Total: {item?.total}</strong>
          </div>
        ))}
      </div>

      <h1>{"$" + total || 0}</h1>

      <button onClick={() => Sirverdir()} className="Goding">
        ADD
      </button>
    </>
  );
};

export default Pantalla1;
