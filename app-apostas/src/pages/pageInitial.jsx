import React from "react";
import Carousell from "../components/carousel";
import CarouselPop from "../components/carouselPop";
import Head from "../components/head";
import Search from "../components/search";
import Table from "../components/table";

class pageInitial extends React.Component {
  render() {
    return(
      <div className="pageInitial">
        <Head />
        <Search />
        <Carousell />
        <CarouselPop />
        <Table />
      </div>
    );
  }
}

export default pageInitial;
