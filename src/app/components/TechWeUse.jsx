"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CarouselLayoutContainer from "./SlickStyledComponjent";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const TechWeUse = [

      {
        title: 'Mobile App Development',
        techs: 'iOS  |  Android  |  Cross Platform',
        description: 'We build and design creative mobile apps. Our developers are experienced with both native and cross platform.'
      },

      {
        title: 'Web Development',
        techs: 'NodeJS | ReactJS | JAVA | .NET Core',
        description: 'Our exceptional designers can create stunning and intuitive websites or web apps for your business.'
      },

      {
        title: 'Artificial Intelligence (AI)',
        techs: 'AI | ML | Chatbot',
        description: 'Build award-winning Al powered apps such as chatbots, augmented reality or virtual reality apps with our experts.'
      },

      {
        title: 'IoT Development',
        techs: 'Hardware Integration | Sensors',
        description: 'Gain timely and actionable insights to fine- tune business operations, optimize revenue streams, and practice intelligent decision-making.'
      }


    ]
    return (



      <>
        <CarouselLayoutContainer>
          <Slider {...settings}>
            {TechWeUse.map((buisinessPlanning, index) => (
              <div key={index} className="buisinessPlanning-item p-2 h-100">
                {/* <Image src={client.image} alt={`Client ${index}`} className="img-fluid" width={462} height={184} quality={100} /> */}
                <div className="buisinessPlanning-item-inner p-4 rounded-4 h-100">
                  <div className="buisinessPlanning-item-title my-3">
                    <h2 className="h5 fw-700">{buisinessPlanning.title}</h2>
                  </div>
                  <div className="mb-4">
                    <p className="h6 fw-700">{buisinessPlanning.techs}</p>
                  </div>
                  <div className="buisinessPlanning-item-description mb-3">
                    <p>{buisinessPlanning.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </CarouselLayoutContainer>
      </>
    );
  }
}