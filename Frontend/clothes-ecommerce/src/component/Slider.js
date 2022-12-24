import React, { Component } from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import clothes1 from '../assets/shopping (1).png';
import clothes2 from '../assets/shopping (2).png';
import { render } from "@testing-library/react";

export default class Slider extends Component {
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return(
        <div>
        <h2 color="red"> Single Item</h2>
        <Sliders {...settings}>
          <div>
            <img src={clothes1}/>
          </div>
          <div>
            <img src ={clothes2}/>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Sliders>
      </div>

    );
  }
 }

