"use client"

import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CarouselLayoutContainer from "./SlickStyledComponjent";



export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.sliderRef = React.createRef(); // Create a ref for the Slick slider
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      arrows: false,
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: false
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    };



    const IotSlider = [
      {
        title: 'Access Control Systems',
        image: '/assets/images/iot/iot-solution-retail.png',
        description: 'Secure and efficient access control solutions tailored for retail environments',
      },
      {
        title: 'Smart Door Locks',
        image: '/assets/images/iot/slider/2.png',
        description: 'Advanced smart door lock systems enhancing security and convenience for retail spaces',
      },
      {
        title: 'Mall Parking Solution',
        image: '/assets/images/iot/slider/3.png',
        description: 'Smart parking solutions customized for malls, ensuring hassle-free parking experiences',
      },
      {
        title: 'Ticketing & Visitor Management Solution',
        image: '/assets/images/iot/slider/4.png',
        description: 'Seamless ticketing and visitor management systems for exhibitions and retail events',
      },
      {
        title: 'Retail Display Solutions',
        image: '/assets/images/iot/slider/5.png',
        description: 'Innovative IoT-driven solutions for enhancing retail displays and customer engagement',
      }
    ];

    const triggerNext = () => {
      this.sliderRef.current.slickNext();
    };

    const triggerPrev = () => {
      this.sliderRef.current.slickPrev();
    };


    return (
      <>
        <div className="container py-5">
          <CarouselLayoutContainer>
            <Slider {...settings} ref={this.sliderRef}>
              {IotSlider.map((item, index) => (
                <div className="row" key={index}>
                  <div className="col-md-10 mx-auto container" key={index}>
                    <div className="row g-5">
                      <div className="col-md-5 d-flex wow fadeInUp" data-wow-delay=".7s">
                        <div className="">
                          <h2 className="text-white h4 fw-bold mb-3">{item.title}</h2>
                          <p className="text-white pb-3">{item.description}</p>
                          {/* <a className="main-btn" onClick={void (0)}>Explore</a> */}
                        </div>
                      </div>
                      <div className="col-md-7 wow fadeInUp" data-wow-delay=".7s">
                        <div className="text-center text-center d-flex align-items-center justify-content-end">
                          <Image src={item.image} alt={`Iot ${index}`} className="img-fluid " width={550} height={184} quality={100} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </Slider>
          </CarouselLayoutContainer>
          <div className="container ">
            <div className="row">
              <div className="col-md-10 mx-auto position-relative wow fadeInUp" data-wow-delay=".7s">
                <div className="position-large position-small d-flex gap-3 justify-content-center"  >
                  <button className="prev-btn main-btn" onClick={triggerPrev}><i className="fa fa-arrow-left"></i></button>
                  <button className="next-btn main-btn" onClick={triggerNext}><i className="fa fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div >
      </>
    );
  }
}



