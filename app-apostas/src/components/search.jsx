import React from "react";
import lupa from "../images/lupa.png"

class Search extends React.Component {
    render() {
      return(
        <label htmlFor="input-search" id="search">
          <img alt="lupa" id="lupa" src={lupa} />
          <input type="text" placeholder="pesquise os jogos aqui" id="input-search"/>
        </label>
      );
    }
  }
  
  export default Search;