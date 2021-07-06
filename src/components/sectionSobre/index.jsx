import React from "react";
import "./sectionSobre.css";
import fundo from "../../assets/imgs/fundoSobre.svg";
import foto from "../../assets/imgs/takumi.jpg";

export default function sectionSobre() {
  return (
    <>
      <div className="containerSobre" style={{ backgroundImage: { fundo } }}>
        <div className="containerTop">
          <h1>Seja bem-vindo, meu nome é Matheus Marques 👽✌🏻</h1>
        </div>
        <div className="containerBottom">
          <div id="foto">
            <img src={foto} />
          </div>
          <div className="div_textSobre">
            <p>
              Tenho 22 anos, moro em Jundiaí-SP e atualmente sou desenvolvedor
              Front-End. Aqui neste portfólio você encontrará alguns projetos
              simples que venho desenvolvendo.
            </p>
          </div>
          <div className="btnSobre">
            <button>Meu currículo</button>
          </div>
        </div>
      </div>
    </>
  );
}
