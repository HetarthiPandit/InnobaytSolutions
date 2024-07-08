"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            adaptiveHeight: true,
            autoplaySpeed: 1000,
            cssEase: "cubic-bezier(1, 0.3, 0.6, 1)",
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
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };

        const clientList = [
            { image: "/assets/images/clients/new/1.png" },
            { image: "/assets/images/clients/new/2.png" },
            { image: "/assets/images/clients/new/3.png" },
            { image: "/assets/images/clients/new/4.png" },
            { image: "/assets/images/clients/new/5.png" },
            { image: "/assets/images/clients/new/6.png" },
            { image: "/assets/images/clients/new/7.png" },
            { image: "/assets/images/clients/new/8.png" },
            // { image: "/assets/images/clients/new/9.png" },
            { image: "/assets/images/clients/new/10.png" },
            { image: "/assets/images/clients/new/11.png" },
            { image: "/assets/images/clients/new/12.png" },
            // { image: "../../assets/images/clients/careem.png" },
            // { image: "../../assets/images/clients/Carrefour.png" },
            // { image: "../../assets/images/clients/Finance Gate.png" },
            // { image: "../../assets/images/clients/Julius baer.png" },
            // { image: "../../assets/images/clients/KACF.png" },
            // { image: "../../assets/images/clients/Majid Al Futtaim.png" },
            // { image: "../../assets/images/clients/Navistar Asia.png" },
            // { image: "../../assets/images/clients/Rawafid.png" },
            // { image: "../../assets/images/clients/REGA.png" },
            // { image: "../../assets/images/clients/RSM369.png" },
            // { image: "../../assets/images/clients/SafeFit.png" },
            // { image: "../../assets/images/clients/Tackle talk.png" },
            // { image: "../../assets/images/clients/total.png" },
            // { image: "../../assets/images/clients/World Bank.png" },

        ]
        return (
            <div>
                <Slider {...settings}>
                    {clientList.map((client, index) => (
                        <div key={index} className="client-item d-flex align-items-center p-1">
                            <Image src={client.image} alt={`Client ${index}`} className="img-fluid" width={462} height={184} quality={100} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}