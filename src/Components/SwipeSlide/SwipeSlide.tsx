import React, { Component } from "react";
const Slider = require('react-slick');
import './SwipeSlide.css'

export default class SwipeSlide extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div>
          <Slider {...settings}>
                <div>
                    <img className='comment' src={require("../../Image/swipe1.png")}></img>
                </div>
                <div>
                    <img className='comment' src={require("../../Image/swipe2.png")}></img>
                </div>
                <div>
                    <img className='comment' src={require("../../Image/swipe3.png")}></img>
                </div>
          </Slider>
        </div>
      );
    }
  }