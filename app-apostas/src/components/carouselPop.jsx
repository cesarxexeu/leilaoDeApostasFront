import React from "react";
import { Carousel } from "react-bootstrap";

class CarouselPop extends React.Component {
    render() {
      return(
          <div id="carouselPop">
            <div id="head" className="carouselHead">
              <h3 id="apostas">Eventos Populares</h3>
              <h4 id="futebol"> </h4>
            </div>
          <Carousel>
            <Carousel.Item>
              <div className="item">
              <div className="componentOne">
              <p className="p-carousel-top">21:30 05-04-2022</p>
              <h4 className="h4-caarousel">Always Ready - Corinthians SP</h4>
              <div className="carousel-mid">
                <p className="one-paragraph">1x2</p>
                <p className="two-paragraph"><b>+744</b></p>
              </div>
              <div className="carousel-bot">
              <div className="blocos">
                  <h3>2.15</h3>
                  <p>Always Ready</p>
                </div>
                <div className="blocos">
                  <h3>3.15</h3>
                  <p>Empate</p>
                </div>
                <div className="blocos">
                  <h3>3.35</h3>
                  <p>Corinthians SP</p>
                </div>
              </div>
              </div>
              <div className="componentTwo">
              <p className="p-carousel-top">21:30 05-04-2022</p>
              <h4 className="h4-caarousel">Always Ready - Corinthians SP</h4>
              <div className="carousel-mid">
                <p className="one-paragraph">1x2</p>
                <p className="two-paragraph"><b>+744</b></p>
              </div>
              <div className="carousel-bot">
              <div className="blocos">
                  <h3>2.15</h3>
                  <p>Always Ready</p>
                </div>
                <div className="blocos">
                  <h3>3.15</h3>
                  <p>Empate</p>
                </div>
                <div className="blocos">
                  <h3>3.35</h3>
                  <p>Corinthians SP</p>
                </div>
              </div>
              </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="item">
              <div className="componentOne">
              <p className="p-carousel-top">21:30 05-04-2022</p>
              <h4 className="h4-caarousel">Always Ready - Corinthians SP</h4>
              <div className="carousel-mid">
                <p className="one-paragraph">1x2</p>
                <p className="two-paragraph"><b>+744</b></p>
              </div>
              <div className="carousel-bot">
              <div className="blocos">
                  <h3>2.15</h3>
                  <p>Always Ready</p>
                </div>
                <div className="blocos">
                  <h3>3.15</h3>
                  <p>Empate</p>
                </div>
                <div className="blocos">
                  <h3>3.35</h3>
                  <p>Corinthians SP</p>
                </div>
              </div>
              </div>
              <div className="componentTwo">
              <p className="p-carousel-top">21:30 05-04-2022</p>
              <h4 className="h4-caarousel">Always Ready - Corinthians SP</h4>
              <div className="carousel-mid">
                <p className="one-paragraph">1x2</p>
                <p className="two-paragraph"><b>+744</b></p>
              </div>
              <div className="carousel-bot">
              <div className="blocos">
                  <h3>2.15</h3>
                  <p>Always Ready</p>
                </div>
                <div className="blocos">
                  <h3>3.15</h3>
                  <p>Empate</p>
                </div>
                <div className="blocos">
                  <h3>3.35</h3>
                  <p>Corinthians SP</p>
                </div>
              </div>
              </div>
              </div>
            </Carousel.Item>
          </Carousel>
          </div>
      )
    }
  }
  
  export default CarouselPop;