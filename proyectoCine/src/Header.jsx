import React, { useEffect } from 'react'
import deseo from "../src/assets/book.svg";
import deseoblanco from "../src/assets/bookwhite.svg"

const Header = ({ vertebra, Deseso, handlerefenecia, setVertebra }) => {
  const modelo = () => {
    setVertebra(!vertebra);
  };

  return (
    <>

      <header>
        <nav>
          <ul className="narbarbar">
            <h1 className="librosapp">Libros App and tools</h1>
            <div onClick={handlerefenecia} className="Book-session">
              <strong
                style={{
                  color: "gray",
                  fontSize :"1.5em"
                }}
              >
                {Deseso.length}
                {
                  !vertebra  ?  

                  <p>

                    <img src={  deseo } ></img>
                  </p> :  

                  <p>
                        <img src= {   deseoblanco } ></img>

                  </p>
                }  
              </strong>
            </div>
          </ul>
        </nav>

        {/* <button onClick={modelo}>sdsd</button> */}
      </header>
    </>
  );
};

export default Header