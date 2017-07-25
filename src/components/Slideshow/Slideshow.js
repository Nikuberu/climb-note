import React, { Component } from 'react';
import Slider from 'react-slick';
import screen1 from '../../images/screen1.png';
import screen2 from '../../images/screen2.png';
import screen3 from '../../images/screen3.png';
import './Slideshow.css'

class Slideshow extends Component {
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Slider {...settings} className='slideshow-wrapepr'>
        <img src={screen3} alt='screenshot1' className='screenshot'/>
        <img src={screen1} alt='screenshot2' className='screenshot'/>
        <img src={screen2} alt='screenshot3' className='screenshot'/>
      </Slider>
    );
  }
}

export default Slideshow;