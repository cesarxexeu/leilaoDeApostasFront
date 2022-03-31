import React from "react";
import Head from "../components/head";
import Search from "../components/search";
import Table from "../components/table";

class pageInitial extends React.Component {
  render() {
    return(
      <div>
        <Head />
        <Search />
        <Table />
      </div>
    );
  }
}

export default pageInitial;
