import React from 'react';
import logo from './logo.png';
import link from './linkedin.png';
import git from './github.png';
import './nav.css';
import Home from '../home/home'
import Conoceme from '../conoceme/conoceme'
import Contacto from '../contacto/contacto'
import Cv from '../cv/cv'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  return (
  <div>
    <div className="cajagrande" >
        <div className="logo">
          <img src={logo} alt="Foto logo" width='200px'/>
        </div>
        <nav>
          <ul className="menu">
            
            <li className="item">
              <Link to="/">Home</Link>
            </li>

            <li className="item">
              <Link to="/conoceme">Conóceme</Link>
            </li>

            <li className="item">
              <Link to="/cv">CV</Link>
            </li>
            <li className="item">
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
      </nav>

      <div className="redes">
        <a href="https://github.com/lyvargast" target="_blank"><img src={git} width='30px'/></a>
        <a href="https://www.linkedin.com/in/laura-vargas-torres-460510133/" target="_blank"><img src={link} width='30px'/></a>
      </div>
    </div>
  </div>
  );
}

export default Nav;