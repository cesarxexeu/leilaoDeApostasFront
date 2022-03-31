import React from "react";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";

class Head extends React.Component {
    render() {
      return(
        <header id="header">         
          <img alt="logo" id="logo" src={ logo }/>
          <section id="sections">
            <Link class="link" to="/"><h2>Futebol</h2></Link>
            <Link class="link" to="/regulament"><h2>Regulamento</h2></Link>
            <Link class="link" to="/bilhete"><h2>Bilhete</h2></Link>
          </section>
        </header>
      );
    }
  }
  
  export default Head;


