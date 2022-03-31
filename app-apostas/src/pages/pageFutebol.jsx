import React from "react";
import Head from "../components/head";
import Search from "../components/search";

class pageFutebol extends React.Component {
  render() {
    return(
      <div>
        <Head />
        <Search />
        <p>Página de futebol</p>
      </div>
    );
  }
}

export default pageFutebol;