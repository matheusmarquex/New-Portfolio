import React from "react";
import "./sectionInicio.css";
import fundo from "../../assets/imgs/fundo.svg";
import foto from "../../assets/imgs/takumi.jpg";

export default function sectionInicio() {
  return (
    <>
      <div className="containerInicio" style={{ backgroundImage: { fundo } }}>
        <div className="containerTop">
          <div className="title_inicio">
            <h1>Seja bem-vindo, meu nome é Matheus Marques 👽✌🏻</h1>
          </div>
          <div className="div_textInicioDesk">
            <p>
              Tenho 22 anos, moro em Jundiaí-SP e atualmente sou desenvolvedor
              Front-End. Aqui neste portfólio você encontrará alguns projetos
              simples que venho desenvolvendo.
            </p>
          </div>
          <div className="btnInicioDesk">
            <button>Meu currículo</button>
          </div>
        </div>
          <div id="fotodesk">
            <img src={foto} />
          </div>
        <div className="containerBottomInicio">
          <div id="fotoMobile">
            <img src={foto} />
          </div>
          <div className="div_textInicio">
            <p>
              Tenho 22 anos, moro em Jundiaí-SP e atualmente sou desenvolvedor
              Front-End. Aqui neste portfólio você encontrará alguns projetos
              simples que venho desenvolvendo.
            </p>
          </div>
          <div className="btnInicio">
            <button>Meu currículo</button>
          </div>
        </div>
      </div>
    </>
  );
}
