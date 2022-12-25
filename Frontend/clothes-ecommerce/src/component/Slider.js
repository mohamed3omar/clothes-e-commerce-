import React, { Component } from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import clothes1 from '../assets/shopping (1).png';
import clothes2 from '../assets/shopping (2).png';
import clothes3 from '../assets/shopping-1.png';
import clothes4 from'../assets/shopping.png';
import clothes5 from'../assets/clothes5.webp';
import cloth6 from'../assets/cloth6.webp';
import clothes8 from'../assets/clothes8.webp';
import { render } from "@testing-library/react";

export default class Slider extends Component {
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1
    };
  
    return(
        <div>
        <h2 color="red"> Single Item</h2>
        <Sliders {...settings}>
          <div>
            <img src={clothes1}/>
            <h4>T-shirt</h4>
          <span>100$</span>
          </div>
          <div>
            <img src ={clothes2}/>
            <h4>blover</h4>
          <span>150$</span>
          </div>
          <div>
          <img src ={clothes3}/>
          <h4>dress</h4>
          <span>190$</span>
          </div>
          <div>
          <img src ={clothes4}/>
          <h4>Jacket</h4>
          <span>150$</span>
          </div>
          <div>
          <img src ={clothes5}/>
          <h4>Jacket</h4>
          <span>150$</span>
          </div>
          <div>
          <img src ={cloth6}/>
          <h4>dress</h4>
          <span>250$</span>
          </div>
          <div >
          <img src ={clothes8} width="280px"/>
          <h4>Jacket</h4>
          <span>150$</span>
          </div>
        </Sliders>
      </div>

    );
  }
 }

