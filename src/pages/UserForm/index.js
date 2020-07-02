import React, { Component } from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';

class UserForm extends Component {
  
  
  render () {
    return (
      <div className="myContainer">
        <h2 className="header">Gerador de Personas</h2>
      <h4 className="myControl">Queremos saber quem você é</h4>
        <form className="myForm">
    <div class="form-group">
      <label for="exampleInputEmail1">Qual seu nome?</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu nome?"></input>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Qual seu e-mail?</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Qual seu e-mail?"></input>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>CEO</option>
        <option>Diretor</option>
        <option>Estudante</option>
        <option>Outros</option>
      </select>
    </div>
  </form>
  <footer className="spaceContainer">
    <Link to="/" class="btn btn-primary btn-lg">Voltar</Link>
    <button type="submit" class="btn btn-primary btn-lg">Avançar</button>
  </footer>
      </div>
    )
  }
}

export default UserForm;