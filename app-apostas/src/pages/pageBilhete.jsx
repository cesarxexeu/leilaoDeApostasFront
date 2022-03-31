import React from "react";
import Head from "../components/head";

class pageBilhete extends React.Component {
  render() {
    return(
      <div>
        <Head />
        <h3 className="title-regulament">CONFERIR BILHETE</h3>
        <form id="form-bilhete">
          <label htmlFor="input-bilhete">
            Código do bilhete:
            <input type="text" id="input-bilhete" placeholder="digite seu código aqui"/>
            <button type="button" id="button-bilhete">Procurar</button>
          </label>
        </form>
      </div>
    );
  }
}

export default pageBilhete;