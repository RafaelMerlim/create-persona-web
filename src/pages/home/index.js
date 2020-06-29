import React from 'react';
import "./styles.css"
import logo from "./assets/logo.png"

import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <h1>Fantástico Criador de Personas</h1>
      <img alt="foto principal" src={logo}></img>
      <h2>Empresas que documentam sua estratégia de Marketing de Conteúdo são 100% mais efetivas.</h2>
      <p>Uma persona é a representação do seu cliente típico, com todas as suas principais características e necessidades.</p>
      <Link to="/user" className="btn btn-primary">Começar</Link>
    </div>
  );
}

export default Home;