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

    const BuisinessPlanning = [
      {
        number: '01',
        title: 'Business Planning',
        description: 'Craft a solid business plan tailored to your startup vision.',
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_390_6598)">
                  <path d="M2.83436 14.9485L29.1201 2.99425M29.1201 2.99425L24.2058 1.14282M29.1201 2.99425L27.2915 7.90854M30.2858 30.88H24.5715V14.88C24.5715 14.5769 24.6919 14.2862 24.9062 14.0718C25.1206 13.8575 25.4113 13.7371 25.7144 13.7371H29.1429C29.446 13.7371 29.7367 13.8575 29.9511 14.0718C30.1654 14.2862 30.2858 14.5769 30.2858 14.88V30.88ZM18.8572 30.88H13.1429V18.3085C13.1429 18.0054 13.2633 17.7147 13.4777 17.5004C13.692 17.2861 13.9827 17.1657 14.2858 17.1657H17.7144C18.0175 17.1657 18.3082 17.2861 18.5225 17.5004C18.7368 17.7147 18.8572 18.0054 18.8572 18.3085V30.88ZM7.42864 30.88H1.71436V21.7371C1.71436 21.434 1.83476 21.1433 2.04909 20.929C2.26342 20.7147 2.55411 20.5943 2.85721 20.5943H6.28578C6.58889 20.5943 6.87958 20.7147 7.09391 20.929C7.30823 21.1433 7.42864 21.434 7.42864 21.7371V30.88Z" stroke="white" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_390_6598">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>`
      },
      {
        number: '02',
        title: 'UI/UX Design',
        description: 'Create stunning UI/UX designs that brings your app idea to life.',
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9998 2.3999H3.9998C3.15111 2.3999 2.33718 2.73704 1.73706 3.33716C1.13695 3.93728 0.799805 4.75121 0.799805 5.5999V21.5999C0.799805 22.4486 1.13695 23.2625 1.73706 23.8626C2.33718 24.4628 3.15111 24.7999 3.9998 24.7999H27.9998C28.8485 24.7999 29.6624 24.4628 30.2625 23.8626C30.8627 23.2625 31.1998 22.4486 31.1998 21.5999V5.5999C31.1998 4.75121 30.8627 3.93728 30.2625 3.33716C29.6624 2.73704 28.8485 2.3999 27.9998 2.3999ZM2.3998 5.5999C2.3998 5.17556 2.56838 4.76859 2.86843 4.46853C3.16849 4.16847 3.57546 3.9999 3.9998 3.9999H27.9998C28.4242 3.9999 28.8311 4.16847 29.1312 4.46853C29.4312 4.76859 29.5998 5.17556 29.5998 5.5999V21.5999C29.5998 22.0242 29.4312 22.4312 29.1312 22.7313C28.8311 23.0313 28.4242 23.1999 27.9998 23.1999H3.9998C3.57546 23.1999 3.16849 23.0313 2.86843 22.7313C2.56838 22.4312 2.3998 22.0242 2.3998 21.5999V5.5999Z" fill="white"/>
                <path d="M15.9998 22.4C15.6815 22.4 15.3763 22.2736 15.1513 22.0485C14.9262 21.8235 14.7998 21.5183 14.7998 21.2C14.7998 20.8817 14.9262 20.5765 15.1513 20.3515C15.3763 20.1264 15.6815 20 15.9998 20C16.3181 20 16.6233 20.1264 16.8483 20.3515C17.0734 20.5765 17.1998 20.8817 17.1998 21.2C17.1998 21.5183 17.0734 21.8235 16.8483 22.0485C16.6233 22.2736 16.3181 22.4 15.9998 22.4Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4 23.2H13.6C13.1757 23.2 12.7687 23.3685 12.4686 23.6686C12.1686 23.9686 12 24.3756 12 24.8V28.8C12 29.2243 12.1686 29.6313 12.4686 29.9313C12.7687 30.2314 13.1757 30.4 13.6 30.4H18.4C18.8243 30.4 19.2313 30.2314 19.5314 29.9313C19.8314 29.6313 20 29.2243 20 28.8V24.8C20 24.3756 19.8314 23.9686 19.5314 23.6686C19.2313 23.3685 18.8243 23.2 18.4 23.2ZM13.6 28.8V24.8H18.4V28.8H13.6Z" fill="white"/>
                <path d="M8.8 30.3998C8.58783 30.3998 8.38434 30.3155 8.23431 30.1655C8.08429 30.0155 8 29.812 8 29.5998C8 29.3876 8.08429 29.1841 8.23431 29.0341C8.38434 28.8841 8.58783 28.7998 8.8 28.7998H23.2C23.4122 28.7998 23.6157 28.8841 23.7657 29.0341C23.9157 29.1841 24 29.3876 24 29.5998C24 29.812 23.9157 30.0155 23.7657 30.1655C23.6157 30.3155 23.4122 30.3998 23.2 30.3998H8.8Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3996 19.1999H1.59961V17.5999H30.3996V19.1999Z" fill="white"/>
              </svg>`
      },
      {
        number: '03',
        title: 'App Design & Development',
        description: 'From UI/UX to successful launch of your apps, we will be by your side.',
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12.6668 11.3334L14.6668 13.3334L10.6668 17.3334L14.6668 21.3334L12.6668 23.3334L6.66683 17.3334L12.6668 11.3334ZM19.3335 23.3334L17.3335 21.3334L21.3335 17.3334L17.3335 13.3334L19.3335 11.3334L25.3335 17.3334L19.3335 23.3334ZM28.0002 2.66675H4.00016C3.29292 2.66675 2.61464 2.9477 2.11454 3.4478C1.61445 3.94789 1.3335 4.62617 1.3335 5.33341V26.6667C1.3335 27.374 1.61445 28.0523 2.11454 28.5524C2.61464 29.0525 3.29292 29.3334 4.00016 29.3334H28.0002C28.7074 29.3334 29.3857 29.0525 29.8858 28.5524C30.3859 28.0523 30.6668 27.374 30.6668 26.6667V5.33341C30.6668 4.62617 30.3859 3.94789 29.8858 3.4478C29.3857 2.9477 28.7074 2.66675 28.0002 2.66675ZM28.0002 26.6667H4.00016V8.00008H28.0002V26.6667Z" fill="white"/>
              </svg>`
      },
      {
        number: '04',
        title: 'Cloud Consultation',
        description: 'Making sure performance, security and scalability is taken care of at minimal costs.',
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 17.3333V21.3333M16 21.3333C16.7072 21.3333 17.3855 21.6143 17.8856 22.1144C18.3857 22.6145 18.6667 23.2928 18.6667 24M16 21.3333C15.2928 21.3333 14.6145 21.6143 14.1144 22.1144C13.6143 22.6145 13.3333 23.2928 13.3333 24M13.3333 24C13.3333 24.7073 13.6143 25.3855 14.1144 25.8856C14.6145 26.3857 15.2928 26.6667 16 26.6667C16.7072 26.6667 17.3855 26.3857 17.8856 25.8856C18.3857 25.3855 18.6667 24.7073 18.6667 24M13.3333 24H4M18.6667 24H28M6.66667 13.196C6.66667 10.9107 8.61333 9.05735 11.0133 9.05735C11.38 7.43068 12.6867 6.10402 14.4427 5.57602C16.1987 5.04668 18.136 5.39735 19.524 6.49602C20.9133 7.59202 21.5427 9.26935 21.176 10.896H22.1C22.9555 10.8942 23.7768 11.2323 24.3831 11.8359C24.9894 12.4395 25.3312 13.2591 25.3333 14.1147C25.3312 14.9702 24.9894 15.7899 24.3831 16.3935C23.7768 16.997 22.9555 17.3351 22.1 17.3333H11.0133C8.61333 17.3333 6.66667 15.48 6.66667 13.196Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
      },
      {
        number: '05',
        title: 'Post-launch Maintenance',
        description: 'Ensure your app runs smoothly with our expert maintenance services.',
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M20.2948 3.3335C21.6041 3.3335 22.8435 3.63216 23.9475 4.16416L21.8115 6.28416C21.5189 6.57373 21.2866 6.91844 21.1281 7.29836C20.9695 7.67827 20.8879 8.08584 20.8879 8.4975C20.8879 8.90915 20.9695 9.31673 21.1281 9.69664C21.2866 10.0765 21.5189 10.4213 21.8115 10.7108C22.4047 11.298 23.2057 11.6274 24.0405 11.6274C24.8752 11.6274 25.6762 11.298 26.2695 10.7108L28.1715 8.82283C28.4915 9.70416 28.6668 10.6548 28.6668 11.6455C28.6668 16.2368 24.9181 19.9582 20.2948 19.9582C19.1881 19.9582 18.1321 19.7448 17.1661 19.3582L8.71345 27.7502C8.12041 28.3373 7.31962 28.6666 6.48512 28.6666C5.65062 28.6666 4.84983 28.3373 4.25679 27.7502C3.96442 27.4607 3.73232 27.1161 3.57393 26.7364C3.41554 26.3566 3.33398 25.9493 3.33398 25.5378C3.33398 25.1264 3.41554 24.719 3.57393 24.3393C3.73232 23.9596 3.96442 23.615 4.25679 23.3255L12.6348 15.0068C12.1635 13.949 11.9206 12.8036 11.9221 11.6455C11.9221 7.05483 15.6708 3.3335 20.2948 3.3335Z" stroke="white" stroke-width="2.66667" stroke-linejoin="round"/>
              </svg>`
      },
      {
        number: '06',
        title: 'Social Media Marketing',
        description: 'Engage your audience and boost your startup`s online presence.',
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_390_6638)">
                  <path d="M7.70307 13.3716L13.5088 4.09159C13.7338 3.7248 14.0499 3.42253 14.4265 3.21424C14.803 3.00594 15.2271 2.89872 15.6574 2.90302C15.9962 2.89079 16.3341 2.94661 16.6511 3.06719C16.968 3.18778 17.2576 3.37067 17.5026 3.60506C17.7476 3.83946 17.9432 4.1206 18.0778 4.43187C18.2123 4.74313 18.2831 5.07821 18.2859 5.4173V12.0687H28.3202C28.691 12.0808 29.055 12.1711 29.3884 12.3339C29.7217 12.4967 30.0168 12.7282 30.2543 13.0132C30.4918 13.2981 30.6663 13.6302 30.7663 13.9874C30.8663 14.3447 30.8895 14.719 30.8345 15.0859L29.0059 26.8802C28.9279 27.5105 28.6224 28.0906 28.1468 28.5115C27.6712 28.9324 27.0582 29.1651 26.4231 29.1659H11.4288C10.715 29.1687 10.0105 29.0043 9.37164 28.6859L7.72592 27.863M7.70307 13.3716V27.7944H2.28592C1.98282 27.7944 1.69213 27.674 1.4778 27.4597C1.26347 27.2454 1.14307 26.9547 1.14307 26.6516V14.5144C1.14307 14.2113 1.26347 13.9207 1.4778 13.7063C1.69213 13.492 1.98282 13.3716 2.28592 13.3716H7.70307Z" stroke="white" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_390_6638">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>`
      },
      {
        number: '07',
        title: 'Fundraise Support',
        description: 'Craft compelling pitch decks, connect with potential investors and diverse fundraising channels.',
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9305 1.6665H16.0692C17.2678 1.6665 18.2665 1.6665 19.0585 1.77317C19.8958 1.88517 20.6518 2.13317 21.2585 2.73984C21.8665 3.34784 22.1145 4.10384 22.2265 4.93984C22.3065 5.5265 22.3265 6.22517 22.3318 7.03317C23.1958 7.06117 23.9665 7.11317 24.6518 7.20384C26.2145 7.4145 27.4798 7.85717 28.4785 8.8545C29.4758 9.85317 29.9185 11.1185 30.1292 12.6812C30.3332 14.2012 30.3332 16.1412 30.3332 18.5918V18.7412C30.3332 21.1918 30.3332 23.1332 30.1292 24.6518C29.9185 26.2145 29.4758 27.4798 28.4785 28.4785C27.4798 29.4758 26.2145 29.9185 24.6518 30.1292C23.1318 30.3332 21.1918 30.3332 18.7412 30.3332H13.2585C10.8078 30.3332 8.8665 30.3332 7.34784 30.1292C5.78517 29.9185 4.51984 29.4758 3.52117 28.4785C2.52384 27.4798 2.08117 26.2145 1.8705 24.6518C1.6665 23.1318 1.6665 21.1918 1.6665 18.7412V18.5918C1.6665 16.1412 1.6665 14.1998 1.8705 12.6812C2.08117 11.1185 2.52384 9.85317 3.52117 8.8545C4.51984 7.85717 5.78517 7.4145 7.34784 7.20384C8.11786 7.1085 8.89215 7.05154 9.66784 7.03317C9.67317 6.22517 9.6945 5.5265 9.77317 4.93984C9.88517 4.10384 10.1332 3.34784 10.7398 2.73984C11.3478 2.13317 12.1038 1.8865 12.9398 1.77317C13.7332 1.6665 14.7332 1.6665 15.9305 1.6665ZM11.6692 7.0025C12.1732 6.99984 12.7025 6.99984 13.2585 6.99984H18.7412C19.2972 6.99984 19.8265 6.99984 20.3305 7.0025C20.3252 6.2425 20.3065 5.66917 20.2452 5.2065C20.1612 4.59184 20.0185 4.32784 19.8452 4.1545C19.6718 3.98117 19.4078 3.8385 18.7918 3.7545C18.1492 3.66917 17.2852 3.6665 15.9998 3.6665C14.7145 3.6665 13.8505 3.66917 13.2065 3.75584C12.5918 3.8385 12.3278 3.98117 12.1545 4.15584C11.9812 4.32917 11.8385 4.59184 11.7545 5.2065C11.6932 5.66784 11.6745 6.24117 11.6692 7.0025ZM7.61317 9.1865C6.27184 9.3665 5.4985 9.70517 4.93317 10.2692C4.3705 10.8332 4.03184 11.6065 3.85184 12.9478C3.66784 14.3172 3.66517 16.1238 3.66517 18.6665C3.66517 21.2092 3.66784 23.0158 3.85184 24.3865C4.03184 25.7265 4.3705 26.4998 4.9345 27.0638C5.4985 27.6278 6.27184 27.9665 7.61317 28.1465C8.98384 28.3305 10.7892 28.3332 13.3318 28.3332H18.6652C21.2078 28.3332 23.0145 28.3305 24.3852 28.1465C25.7252 27.9665 26.4985 27.6278 27.0625 27.0638C27.6265 26.4998 27.9652 25.7265 28.1452 24.3852C28.3292 23.0158 28.3318 21.2092 28.3318 18.6665C28.3318 16.1238 28.3292 14.3185 28.1452 12.9465C27.9652 11.6065 27.6265 10.8332 27.0625 10.2692C26.4985 9.70517 25.7252 9.3665 24.3838 9.1865C23.0145 9.0025 21.2078 8.99984 18.6652 8.99984H13.3318C10.7892 8.99984 8.98517 9.0025 7.61317 9.1865ZM15.9998 12.3332C16.2651 12.3332 16.5194 12.4385 16.7069 12.6261C16.8945 12.8136 16.9998 13.068 16.9998 13.3332V13.3465C18.4518 13.7118 19.6665 14.8572 19.6665 16.4438C19.6665 16.7091 19.5611 16.9634 19.3736 17.1509C19.1861 17.3385 18.9317 17.4438 18.6665 17.4438C18.4013 17.4438 18.1469 17.3385 17.9594 17.1509C17.7719 16.9634 17.6665 16.7091 17.6665 16.4438C17.6665 15.9318 17.0985 15.2225 15.9998 15.2225C14.9012 15.2225 14.3332 15.9318 14.3332 16.4438C14.3332 16.9558 14.9012 17.6665 15.9998 17.6665C17.8465 17.6665 19.6665 18.9465 19.6665 20.8892C19.6665 22.4758 18.4518 23.6198 16.9998 23.9865V23.9998C16.9998 24.2651 16.8945 24.5194 16.7069 24.7069C16.5194 24.8945 16.2651 24.9998 15.9998 24.9998C15.7346 24.9998 15.4803 24.8945 15.2927 24.7069C15.1052 24.5194 14.9998 24.2651 14.9998 23.9998V23.9865C13.5478 23.6212 12.3332 22.4758 12.3332 20.8892C12.3332 20.624 12.4385 20.3696 12.6261 20.1821C12.8136 19.9945 13.068 19.8892 13.3332 19.8892C13.5984 19.8892 13.8527 19.9945 14.0403 20.1821C14.2278 20.3696 14.3332 20.624 14.3332 20.8892C14.3332 21.4012 14.9012 22.1105 15.9998 22.1105C17.0985 22.1105 17.6665 21.4012 17.6665 20.8892C17.6665 20.3772 17.0985 19.6665 15.9998 19.6665C14.1532 19.6665 12.3332 18.3865 12.3332 16.4438C12.3332 14.8572 13.5478 13.7118 14.9998 13.3465V13.3332C14.9998 13.068 15.1052 12.8136 15.2927 12.6261C15.4803 12.4385 15.7346 12.3332 15.9998 12.3332Z" fill="white"/>
              </svg>`
      },

    ]
    return (



      <>
        <CarouselLayoutContainer>
          <Slider {...settings}>
            {BuisinessPlanning.map((buisinessPlanning, index) => (
              <div key={index} className="buisinessPlanning-item p-2 h-100">
                {/* <Image src={client.image} alt={`Client ${index}`} className="img-fluid" width={462} height={184} quality={100} /> */}
                <div className="buisinessPlanning-item-inner p-4 rounded-4 h-100">
                  <div className="buisinessPlanning-item-number position-relative mb-4">
                    <h2 className="position-absolute top-0 end-0 text-white-50">{buisinessPlanning.number}</h2>
                    <div dangerouslySetInnerHTML={{ __html: buisinessPlanning.image }} />
                  </div>
                  <div className="buisinessPlanning-item-title mb-3">
                    <h2 className="h5 fw-700">{buisinessPlanning.title}</h2>
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