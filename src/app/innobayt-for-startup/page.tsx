import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import '../../../public/assets/css/lineicons.css'
import Head from 'next/head'
import HubspotContactForm from '../components/Mobileapp/HubspotContactForm'
import BlogList from '../components/Mobileapp/BlogList'
import BuisinessPlanningSlider from '../components/BuisinessPlanningSlider'
import Footer from '../components/Footer'
import Image from 'next/image'
import HeroImage from '@/../public/assets/images/hero-ms.png'
import Contact from '../components/Contact'
import ContactCTA from '../components/contactus'
import SecondaryNav from '../components/SecondaryNav'
// import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

function page() {

    // explode and take first element from pathname

    return (
        <>
            <Script strategy='afterInteractive' id='gm-1'>
                {`(function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({
                        'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WNJ8F9DF');`}
            </Script>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-WNJ8F9DF"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
            <div>
                <SecondaryNav />
                {/* overflow hidden */}
                <div>
                    <section id="home" className="hero-area ib__hero">
                        <div className="custom-shape-divider-bottom-1692814324">
                            <svg data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
                            </svg>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="hero-content">
                                        <h1 className="wow fadeInLeft ib__hero-title" data-wow-delay=".4s">
                                            <span>EMPOWERING YOUR </span><br />
                                            <span>STARTUP - </span><br />
                                            <span>From IDEA </span><br />
                                            <span>TO SUCCESS! </span>
                                        </h1>
                                        <p className="wow fadeInLeft" data-wow-delay=".6s">Revolutionize your startup with our cutting-edge mobile tech!
                                            Get ready to scale, perform, and secure your way to unicorn
                                            status while we take care of the rest!</p>
                                        <div className="button wow fadeInLeft" data-wow-delay=".8s">
                                            <a className="page-scroll btn-main bg-btn3 lnk px-5" href="#contact_form">Get In Touch <i className="fas fa-chevron-right" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                                        {/* <img src="assets/images/" alt="#" /> */}
                                        <Image src={HeroImage} alt="hero-image" width={720} height={1500} quality={100} className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="second-hero-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-12 col-12">
                                    <div className="hero-content secondary">
                                        <h1 className="wow fadeInLeft" data-wow-delay=".4s">Get a <span className="theme-color">FREE</span> design for
                                            your website or mobile app</h1>
                                        <p className="wow fadeInLeft mb-5" data-wow-delay=".6s"><span className="ib__highlight">10 minutes!</span> That`s
                                            all
                                            we need to create magic.
                                            Schedule
                                            a
                                            call with us and get a Free mobile app design that`ll make your competitors jealous</p>
                                        <div className="button wow fadeInLeft" data-wow-delay=".8s">
                                            <a href="#contact_form" className="page-scroll btn-main bg-btn3 lnk px-5">Get In Touch <i className="fas fa-chevron-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="our-achievement section gradient-bg" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="title">
                                    <h2>Our App Showcase</h2>
                                    <p>Check out the amazing apps we have designed recently for our clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5 slider-container">
                        <div className="col-12 mb-4 d-none d-md-block">
                            <ul className="our__showcase_controls controls" id="showcase-controls" aria-label="Carousel Navigation" tabIndex={0}>
                                <li className="prev" id="prevBtn"><i className="fas fa-thin fa-arrow-left" />
                                </li>
                                <li className="next" id="nextBtn"><i className="fas fa-thin fa-arrow-right" />
                                </li>
                            </ul>
                        </div>
                        <div className="slider our__showcase mb-5">
                            {/* Boothat */}
                            <div className="slider-item">
                                <div className="card h-100">
                                    <div className="item-1">
                                        <figure>
                                            {/* You can adjust the background image URL above */}
                                            <img src="assets/images/works/boothat.png" className="card-img-top" alt="Image 1" />
                                            <span>
                                                <svg xmlns="https://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                                                    <path d="M9.49974 1.26612C9.50864 0.990122 9.29212 0.759164 9.01612 0.75026L4.51846 0.605175C4.24246 0.596271 4.0115 0.812795 4.0026 1.08879C3.9937 1.36479 4.21022 1.59575 4.48622 1.60465L8.48414 1.73362L8.35517 5.73154C8.34627 6.00754 8.56279 6.2385 8.83879 6.2474C9.11479 6.2563 9.34575 6.03978 9.35465 5.76378L9.49974 1.26612ZM1.34197 9.11477L9.34197 1.61477L8.65803 0.885232L0.658029 8.38523L1.34197 9.11477Z" fill="#081C15" />
                                                </svg>
                                            </span>
                                        </figure>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Boothat Shopping</h5>
                                        <p className="card-text">Looking for e-commerce marketplace – We promise you can’t find anyone better than
                                            our team.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Zedit */}
                            <div className="slider-item">
                                <div className="card h-100">
                                    {/* <a href="https://www.behance.net/gallery/178408975/Social-Media-App-Design" target="_blank"> */}
                                    <a href={`/projects/zedit`}>
                                        <div className="item-3">
                                            <figure>
                                                {/* You can adjust the background image URL above */}
                                                <img src="assets/images/works/zedit.png" className="card-img-top" alt="Image 1" />
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                                                        <path d="M9.49974 1.26612C9.50864 0.990122 9.29212 0.759164 9.01612 0.75026L4.51846 0.605175C4.24246 0.596271 4.0115 0.812795 4.0026 1.08879C3.9937 1.36479 4.21022 1.59575 4.48622 1.60465L8.48414 1.73362L8.35517 5.73154C8.34627 6.00754 8.56279 6.2385 8.83879 6.2474C9.11479 6.2563 9.34575 6.03978 9.35465 5.76378L9.49974 1.26612ZM1.34197 9.11477L9.34197 1.61477L8.65803 0.885232L0.658029 8.38523L1.34197 9.11477Z" fill="#081C15" />
                                                    </svg>
                                                </span>
                                            </figure>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Zedit Digital Wardrobe</h5>
                                            <p className="card-text">Fashion stylist &amp; influencer Zufi Alexander relied on our team’s boutique designing
                                                skills for her app!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Yandexgram */}
                            <div className="slider-item">
                                <div className="card h-100">
                                    {/* <a href="https://www.behance.net/gallery/178408975/Social-Media-App-Design" target="_blank"> */}
                                    <a href={`/projects/yandexgram`}>
                                        <div className="item-5">
                                            <figure>
                                                {/* You can adjust the background image URL above */}
                                                <img src="assets/images/works/yandexgram.png" className="card-img-top" alt="Image 1" />
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                                                        <path d="M9.49974 1.26612C9.50864 0.990122 9.29212 0.759164 9.01612 0.75026L4.51846 0.605175C4.24246 0.596271 4.0115 0.812795 4.0026 1.08879C3.9937 1.36479 4.21022 1.59575 4.48622 1.60465L8.48414 1.73362L8.35517 5.73154C8.34627 6.00754 8.56279 6.2385 8.83879 6.2474C9.11479 6.2563 9.34575 6.03978 9.35465 5.76378L9.49974 1.26612ZM1.34197 9.11477L9.34197 1.61477L8.65803 0.885232L0.658029 8.38523L1.34197 9.11477Z" fill="#081C15" />
                                                    </svg>
                                                </span>
                                            </figure>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Yandexgram Social App</h5>
                                            <p className="card-text">Challenge accepted: We were asked to develop a social media app better than
                                                Instagram – Check out Yandexgram!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Safefit */}
                            <div className="slider-item">
                                <div className="card h-100">
                                    <a href={`/projects/safefit`}>
                                        <div className="item-6">
                                            <figure>
                                                {/* You can adjust the background image URL above */}
                                                <img src="assets/images/works/safefit.png" className="card-img-top" alt="Image 1" />
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                                                        <path d="M9.49974 1.26612C9.50864 0.990122 9.29212 0.759164 9.01612 0.75026L4.51846 0.605175C4.24246 0.596271 4.0115 0.812795 4.0026 1.08879C3.9937 1.36479 4.21022 1.59575 4.48622 1.60465L8.48414 1.73362L8.35517 5.73154C8.34627 6.00754 8.56279 6.2385 8.83879 6.2474C9.11479 6.2563 9.34575 6.03978 9.35465 5.76378L9.49974 1.26612ZM1.34197 9.11477L9.34197 1.61477L8.65803 0.885232L0.658029 8.38523L1.34197 9.11477Z" fill="#081C15" />
                                                    </svg>
                                                </span>
                                            </figure>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Safefit Fitness App</h5>
                                            <p className="card-text">World’s first fully unmanned techno-gym concept was brought to life by our
                                                amazing team!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Paypark */}
                            <div className="slider-item">
                                <div className="card h-100">
                                    <a href="https://www.paypark.ae/" target="_blank">
                                        <div className="item-7">
                                            <figure>
                                                {/* You can adjust the background image URL above */}
                                                <img src="assets/images/works/paypark.png" className="card-img-top" alt="Image 1" />
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                                                        <path d="M9.49974 1.26612C9.50864 0.990122 9.29212 0.759164 9.01612 0.75026L4.51846 0.605175C4.24246 0.596271 4.0115 0.812795 4.0026 1.08879C3.9937 1.36479 4.21022 1.59575 4.48622 1.60465L8.48414 1.73362L8.35517 5.73154C8.34627 6.00754 8.56279 6.2385 8.83879 6.2474C9.11479 6.2563 9.34575 6.03978 9.35465 5.76378L9.49974 1.26612ZM1.34197 9.11477L9.34197 1.61477L8.65803 0.885232L0.658029 8.38523L1.34197 9.11477Z" fill="#081C15" />
                                                    </svg>
                                                </span>
                                            </figure>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">PayPark Smart City</h5>
                                            <p className="card-text">UAE&apos;s favourite public parking app - designed and developed by our team! Let&apos;s
                                                redefine smart cities together.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Agrotech */}
                            <div className="slider-item">
                                <div className="card h-100">
                                    <a href="#" target="_blank">
                                        <div className="item-9">
                                            <figure>
                                                {/* You can adjust the background image URL above */}

                                                <img src="assets/images/works/agrotech.png" className="card-img-top" alt="Image 1" />
                                                <span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                                                        <path d="M9.49974 1.26612C9.50864 0.990122 9.29212 0.759164 9.01612 0.75026L4.51846 0.605175C4.24246 0.596271 4.0115 0.812795 4.0026 1.08879C3.9937 1.36479 4.21022 1.59575 4.48622 1.60465L8.48414 1.73362L8.35517 5.73154C8.34627 6.00754 8.56279 6.2385 8.83879 6.2474C9.11479 6.2563 9.34575 6.03978 9.35465 5.76378L9.49974 1.26612ZM1.34197 9.11477L9.34197 1.61477L8.65803 0.885232L0.658029 8.38523L1.34197 9.11477Z" fill="#081C15" />
                                                    </svg>
                                                </span>
                                            </figure>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Navistar Agrotech</h5>
                                            <p className="card-text">Complex app needs? Rely on us, as Navistar did for their transformative Agritech
                                                project!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div></section>
                <section className="app-info section" id="services">
                    <div className="container">
                        <div className="info-one style2 pt-0">
                            <div className="row align-items-center">
                                <div className="about__section">
                                    <div className="wow fadeInLeft" data-wow-delay=".3s">
                                        <h2 className="d-block d-lg-none">Shamlia Shukkur</h2>
                                        <h6 className="mb-3 d-block d-lg-none">Co-founder &amp; CTO</h6>
                                        <div>
                                            <img src="assets/images/intro.png" alt="#" className="mb-3 " />
                                            <div className="ib__linkedin">
                                                <a href="https://www.linkedin.com/in/shamliashukkur/" target="_blank"><img src="assets/images/logo/LI-Logo.png" width={100} /></a>
                                            </div>
                                        </div>
                                        <div className="ib__consultation_link">
                                            <div>
                                                <p className="quotes me-0 me-md-2">Book a FREE 30-minute consultation with our CTO to discuss
                                                    your project idea
                                                </p>
                                            </div>
                                            <div>
                                                <a href="https://calendly.com/shamlia/30-min-sync?month=2023-09" target="_blank" className="btn-main bg-btn3 lnk" data-wow-delay="0.8s">Book Now<i className="fas fa-chevron-right fa-ani" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wow fadeInRight" data-wow-delay=".5s">
                                        <h2 className="d-none d-md-block">Shamlia Shukkur</h2>
                                        <h6 className="mb-3 d-none d-md-block">Co-founder &amp; CTO</h6>
                                        <p>Meet Shamlia Shukkur - With a distinguished career spanning over 10+ years at Microsoft, she has been a
                                            driving force behind several startup successes in the region through the Microsoft for Startups program.
                                        </p>
                                        <p>She has had the privilege of working closely with unicorns like Careem, Kitopi and Noon during their
                                            formative years. In addition to her exceptional corporate journey, she has also ventured into
                                            entrepreneurship, having launching and scaling startups herself. As an advisory board member for several
                                            startups in the region, she continues to champion and guide the entrepreneurial spirit.</p>
                                        <p>We invite you to come visit us and see firsthand how we craft our project with passion and skill. Let
                                            us help you create the next unicorn!.</p>
                                        <div className="ib__quick_count mt-3">
                                            <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                                                <h3 className="counter"><span id="secondo2" className="countup" cup-end={7}>7</span>+</h3>
                                                <p>Industry Awards</p>
                                            </div>
                                            <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                                                <h3 className="counter"><span id="secondo2" className="countup" cup-end={10}>10</span>+</h3>
                                                <p>Years of Experience</p>
                                            </div>
                                            <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                                                <h3 className="counter"><span id="secondo2" className="countup" cup-end={250}>250</span>+</h3>
                                                <p>Projects Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* tech we use */}
                <section className="tech-we-use py-5">
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-12">
                                <div className="section-title mb-3">
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Clients who have placed their trust on us!
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Building trust across industries, from Startups to Enterprises
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        <div className="logos ib__clients">
                            <div className="logos-slide">
                                <img src="assets/images/clients/Aster.png" />
                                <img src="assets/images/clients/careem.png" />
                                <img src="assets/images/clients/Carrefour.png" />
                                <img src="assets/images/clients/Finance Gate.png" />
                                <img src="assets/images/clients/Julius baer.png" />
                                <img src="assets/images/clients/KACF.png" />
                                <img src="assets/images/clients/Majid Al Futtaim.png" />
                                <img src="assets/images/clients/Navistar Asia.png" />
                                <img src="assets/images/clients/Rawafid.png" />
                                <img src="assets/images/clients/REGA.png" />
                                <img src="assets/images/clients/RSM369.png" />
                                <img src="assets/images/clients/SafeFit.png" />
                                <img src="assets/images/clients/Tackle talk.png" />
                                {/* <img src="assets/images/clients/total.png" /> */}
                                <img src="assets/images/clients/World Bank.png" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className='py-5'>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="text-center">
                                    <h2 className="wow fadeInUp mb-2" data-wow-delay=".2s">From Business Planning to Fundraiser Support</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">Crafting Solutions for Your Digital Journey</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5">
                        <div className="slider-get-free-design__container wow fadeInUp pb-5" data-wow-delay=".6s">
                            <BuisinessPlanningSlider />
                        </div>
                    </div>
                </section>

                {/* <section className="section call-action" style={{ paddingBottom: 0 }}>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="cta-content new-cta">
                                    <h2 className="wow fadeInUp mb-2" data-wow-delay=".2s">From Mobile Apps to AI Magic </h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">Crafting Solutions for Your Digital Journey</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5">
                        <div className="slider-get-free-design__container wow fadeInUp pb-5" data-wow-delay=".6s">
                            <div className="slider-get-free-design">
                                <div className="slider-get-free-design-inner">
                                    <div className="ib__slider-slide ">
                                        <div className="container__work">
                                            <div className="ib__number">01</div>
                                            <div className="ib__content">
                                                <div className="ib__header">Mobile App Development</div>
                                                <div>
                                                    <div className="ib__tags">
                                                        <span className="ib__tag">iOS</span>
                                                        <span className="ib__tag">Android</span>
                                                        <span className="ib__tag">Cross Platform</span>
                                                    </div>
                                                </div>
                                                <div className="ib__description">
                                                    We build and design creative mobile apps. Our developers are experienced with both native and cross
                                                    platform.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ib__slider-slide">
                                        <div className="container__work">
                                            <div className="ib__number">02</div>
                                            <div className="ib__content">
                                                <div className="ib__header">Web Development</div>
                                                <div>
                                                    <div className="ib__tags">
                                                        <span className="ib__tag">NodeJS</span>
                                                        <span className="ib__tag">ReactJS</span>
                                                        <span className="ib__tag">JAVA</span>
                                                        <span className="ib__tag">.NET Core</span>
                                                    </div>
                                                </div>
                                                <div className="ib__description">
                                                    Our exceptional designers can create stunning and intuitive websites or web apps for your business.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ib__slider-slide">
                                        <div className="container__work">
                                            <div className="ib__number">03</div>
                                            <div className="ib__content">
                                                <div className="ib__header">Artificial Intelligence (AI)</div>
                                                <div>
                                                    <div className="ib__tags">
                                                        <span className="ib__tag">AI</span>
                                                        <span className="ib__tag">ML</span>
                                                        <span className="ib__tag">Chatbot</span>
                                                    </div>
                                                </div>
                                                <div className="ib__description">
                                                    Build award-winning Al powered apps such as chatbots, augmented reality or virtual reality apps with
                                                    our experts.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ib__slider-slide">
                                        <div className="container__work">
                                            <div className="ib__number">04</div>
                                            <div className="ib__content">
                                                <div className="ib__header">IoT Development</div>
                                                <div>
                                                    <div className="ib__tags">
                                                        <span className="ib__tag">Hardware Integration</span>
                                                        <span className="ib__tag">Sensors</span>
                                                    </div>
                                                </div>
                                                <div className="ib__description">
                                                    Gain timely and actionable insights to fine- tune business operations, optimize revenue streams, and
                                                    practice intelligent decision- making.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section className="section pt-0" id="engagement_models">
                    <div className="container pt-5">
                        <div className="row pb-5">
                            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                                <div className="cta-content text-center">
                                    <h2 className="wow fadeInUp mb-3" data-wow-delay=".2s">Engagement model</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">Our developers have expertise in a wide array of industry
                                        leading technologies</p>
                                </div>
                            </div>
                        </div>
                        <div className="gx-4 gy-4">
                            <div className="row row-cols-3 ib__engagement_model">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="wow fadeInUp px-5 my-2 py-5" data-wow-delay=".6s">
                                        <span className="em__span mb-4">
                                            <svg width={88} height={52} viewBox="0 0 88 52" fill="none" xmlns="https://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_310_519)">
                                                    <path d="M58.7175 12.0806C57.3761 12.4598 56.0853 12.9403 54.8958 13.5471C53.8834 12.6116 52.5167 12.03 50.9982 12.03H31.7126L31.6873 12.0553C31.1811 12.0553 30.7002 11.853 30.3459 11.4737L23.1834 4.34333H8.55467C7.49169 4.34333 6.63117 5.20302 6.63117 6.265V17.8203C6.63117 18.8822 5.77066 19.7419 4.70768 19.7419C3.64469 19.7419 2.78418 18.8822 2.78418 17.8203V6.265C2.78418 3.07908 5.36572 0.5 8.55467 0.5H23.9933C24.4994 0.5 24.9803 0.702281 25.36 1.05627L32.4971 8.18666H50.9728C54.1365 8.18666 56.9711 9.72905 58.7175 12.0806Z" fill="black" />
                                                    <path d="M50.593 46.4175C50.0362 46.6198 49.4288 46.721 48.8214 46.721H14.5781C11.9206 46.721 9.61749 44.9257 8.95945 42.3466L3.92292 22.1439C3.8723 21.9921 3.84699 21.8404 3.84699 21.6887C3.84699 20.6267 4.73282 19.7418 5.7958 19.7418H47.6572C48.6948 18.3005 49.935 17.011 51.3017 15.8984H5.7958C4.6822 15.8984 3.66983 16.2019 2.78401 16.7581C1.1136 17.7695 0 19.6153 0 21.6887C0 22.1439 0.0506183 22.599 0.177164 23.0541L5.21369 43.2822C6.30198 47.5806 10.149 50.5643 14.5781 50.5643H48.8214C50.7955 50.5643 52.6178 49.9827 54.1616 48.946C52.8709 48.2381 51.6813 47.4036 50.593 46.4175Z" fill="black" />
                                                    <path d="M67.93 11.3979C66.1077 11.3979 64.3614 11.6508 62.691 12.0806C61.3496 12.4599 60.0588 12.9403 58.8693 13.5472C57.5785 14.2046 56.389 14.9884 55.2754 15.8987C53.9087 17.0112 52.6685 18.3008 51.6308 19.742C49.2518 23.0291 47.8345 27.1 47.8345 31.449C47.8345 37.4163 50.4413 42.7514 54.5667 46.4178C55.655 47.4039 56.8445 48.2383 58.1353 48.9463C61.0206 50.5645 64.3867 51.5001 67.93 51.5001C78.9901 51.5001 88.0001 42.5239 88.0001 31.449C88.0001 20.3742 78.9901 11.3979 67.93 11.3979ZM67.93 47.6567C65.4497 47.6567 63.0706 47.1005 60.9699 46.0385C59.8057 45.5328 58.6921 44.8248 57.705 43.9904C54.0352 41.0573 51.7068 36.5313 51.7068 31.449C51.7068 26.8218 53.6556 22.6751 56.7686 19.742C57.9328 18.6295 59.2236 17.6939 60.6662 17.0112C61.4002 16.6067 62.1848 16.3033 62.9694 16.0504H62.9947C63.4502 15.8987 63.8805 15.7723 64.3361 15.6711C65.5003 15.393 66.6898 15.2666 67.93 15.2666C76.8641 15.2666 84.1278 22.5234 84.1278 31.449C84.1278 40.3746 76.8641 47.6567 67.93 47.6567Z" fill="black" />
                                                    <path d="M75.8515 35.6464H67.9045C66.8415 35.6464 65.981 34.7867 65.981 33.7247V24.6726C65.981 23.6107 66.8415 22.751 67.9045 22.751C68.9674 22.751 69.828 23.6107 69.828 24.6726V31.803H75.8262C76.8892 31.803 77.7497 32.6627 77.7497 33.7247C77.7497 34.7867 76.8892 35.6464 75.8262 35.6464H75.8515Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_310_519">
                                                        <rect width={88} height={51} fill="white" transform="translate(0 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <h2 className="pb-3">Time &amp; Material</h2>
                                        <p>Do you foresee a lot of change in your idea? Or do you want to build unique &amp; custom features that
                                            would need some research time? If yes, a time &amp; material model would best suit your requirement as we
                                            bill you the actual number of hours consumed for developing your product.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="wow fadeInUp px-5 my-2 py-5" data-wow-delay=".8s">
                                        <span className="em__span mb-4">
                                            <svg width={88} height={54} viewBox="0 0 88 54" fill="none" xmlns="https://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_305_227)">
                                                    <path d="M0 34.1614C0.459218 33.4611 1.13427 33.3165 1.92642 33.3233C5.30627 33.3486 8.68611 33.3348 12.066 33.3325H13.0694C12.9408 32.8136 12.7938 32.3865 12.7295 31.9457C12.4609 30.1042 12.9293 28.4832 14.2587 27.1469C15.5721 25.8266 16.89 24.5109 18.208 23.1953C19.9117 21.4962 21.9277 20.9428 24.1824 21.8176C26.4418 22.6924 27.5416 24.4696 27.6564 26.8713C27.661 26.9815 27.6794 27.0895 27.6955 27.2594C29.3165 27.2456 30.7493 27.7117 31.9042 28.8666C33.0568 30.0216 33.516 31.4589 33.5252 33.0455C37.5066 33.5897 39.1667 35.2475 39.3826 38.9028C39.8716 38.9671 40.3768 39.0039 40.8704 39.1072C43.4076 39.6376 45.194 41.7913 45.1848 44.3744C45.1848 44.9668 45.3134 45.4031 45.7703 45.7911C46.2915 46.2366 46.7369 46.7693 47.2444 47.2331C48.4636 48.3513 50.1535 48.3306 51.2602 47.2055C52.367 46.0827 52.3807 44.3675 51.2304 43.1919C49.1846 41.1048 47.1043 39.0544 45.0424 36.9856C44.822 36.7629 44.5763 36.5448 44.4248 36.2784C44.1033 35.7159 44.1814 35.1602 44.6567 34.7148C45.1297 34.2716 45.683 34.2188 46.2295 34.5839C46.4637 34.74 46.6589 34.9605 46.8609 35.1625C49.2741 37.5711 51.6827 39.982 54.0936 42.3906C54.9638 43.2608 55.9948 43.5455 57.1612 43.146C58.2679 42.7695 58.8833 41.9452 59.0279 40.7948C59.1519 39.8167 58.7753 39.0154 58.0842 38.3265C55.6687 35.9225 53.2601 33.5093 50.8538 31.0961C50.6311 30.8734 50.39 30.6553 50.2316 30.3889C49.8964 29.8264 49.9859 29.273 50.4566 28.8276C50.9296 28.3799 51.4853 28.3385 52.0294 28.6921C52.2889 28.8597 52.5047 29.1031 52.7274 29.3258C55.9902 32.584 59.2369 35.8605 62.5272 39.0911C63.0139 39.5687 63.6752 39.9843 64.3273 40.1519C65.5396 40.4665 66.7244 39.8396 67.3099 38.7903C67.9253 37.6905 67.7875 36.4116 66.8874 35.4541C66.0448 34.5563 65.1562 33.7022 64.286 32.832C62.4032 30.9469 60.5112 29.071 58.6422 27.1744C58.0176 26.5407 58.0039 25.8036 58.5366 25.2664C59.0647 24.7314 59.7948 24.7566 60.4469 25.3421C60.6168 25.496 60.7729 25.6636 60.936 25.8266C63.1035 27.9941 65.2365 30.1961 67.4615 32.3016C67.9987 32.8113 68.8139 33.181 69.5509 33.2912C70.7334 33.4657 71.6541 32.8297 72.1822 31.7551C72.7287 30.6438 72.5863 29.5577 71.762 28.6416C70.9584 27.7484 70.0698 26.931 69.2295 26.0723C68.5039 25.3306 68.4327 24.6257 69.0021 24.0402C69.5509 23.4777 70.3247 23.5443 71.0365 24.2331C71.5095 24.69 71.948 25.186 72.4394 25.6245C74.0375 27.0504 75.22 28.6761 75.0707 31.0433C75.4565 31.0433 75.7664 31.0433 76.0741 31.0433C79.5389 31.0433 83.006 31.0387 86.4708 31.0479C87.5109 31.0502 88.1676 31.7161 87.9633 32.5587C87.7589 33.4083 87.1183 33.6264 86.3261 33.6241C83.6053 33.6149 80.8844 33.6218 78.1635 33.6218C77.5895 33.6218 77.0155 33.6517 76.4461 33.6149C75.1166 33.53 73.9571 33.6264 72.9147 34.7492C72.2718 35.4403 71.1352 35.6722 70.1869 36.1246C71.1811 41.4194 65.6269 44.5397 61.5215 41.7638C61.0209 43.4078 60.0612 44.6683 58.4929 45.4077C57.3013 45.9679 56.0637 45.9978 54.7205 45.7314C54.1969 48.2479 52.8331 50.0297 50.1742 50.5417C47.5084 51.0561 45.7244 49.5705 44.0918 47.7175C43.8025 48.0252 43.5844 48.2939 43.3295 48.5212C42.7188 49.0653 42.0024 49.0608 41.4881 48.5304C40.9944 48.0206 40.9875 47.3479 41.4835 46.7463C41.6465 46.5488 41.8486 46.3789 42.0047 46.1769C42.9025 45.0242 42.8152 43.4399 41.8026 42.4136C40.7671 41.362 39.0864 41.2127 37.9888 42.2276C36.4137 43.6856 34.8937 45.2102 33.4334 46.7807C32.4759 47.8094 32.5838 49.4442 33.5183 50.4728C34.4574 51.5038 36.0142 51.6967 37.1967 50.9229C37.339 50.8287 37.4676 50.7116 37.6077 50.6106C38.2621 50.1353 39.0014 50.1744 39.4583 50.7048C39.9336 51.2581 39.8372 52.0342 39.2241 52.6105C37.0451 54.6563 33.3324 54.3532 31.4105 51.9768C30.5265 50.8838 30.1683 49.6164 30.2074 48.1446C28.5565 48.1791 27.1191 47.7221 25.9619 46.5718C24.8001 45.4191 24.3064 43.9979 24.3523 42.2988C22.706 42.3171 21.2641 41.8694 20.1092 40.7168C18.9519 39.5641 18.4399 38.1474 18.5134 36.368C16.6191 36.2164 14.7891 35.9753 12.9545 35.9432C9.23258 35.8766 5.50832 35.9087 1.78406 35.934C0.996504 35.9386 0.378855 35.7526 0.00229609 35.0202V34.1614H0ZM18.123 33.9708C18.6649 33.7458 19.3262 33.6494 19.7303 33.2728C21.3605 31.7505 22.9678 30.1961 24.4671 28.5475C25.443 27.4752 25.234 25.8105 24.2031 24.8117C23.1492 23.7923 21.4639 23.6912 20.3847 24.7084C18.844 26.1595 17.3424 27.6589 15.8958 29.2042C15.0784 30.079 15.0095 31.188 15.5193 32.2534C16.0152 33.2912 16.8969 33.8239 18.123 33.9731V33.9708ZM24.2169 39.7065C24.5016 39.5894 25.195 39.4906 25.6175 39.098C27.2293 37.5987 28.8114 36.058 30.2946 34.4324C31.3003 33.3302 31.096 31.6403 30.0191 30.6323C28.9721 29.6496 27.3235 29.544 26.2673 30.5336C24.7014 31.9985 23.1813 33.5208 21.7187 35.089C20.9266 35.9363 20.8715 37.0269 21.3536 38.0648C21.8381 39.1095 22.7106 39.6537 24.2169 39.7042V39.7065ZM29.8262 45.6671C30.3704 45.4421 31.034 45.348 31.4358 44.9737C33.066 43.4514 34.6733 41.8946 36.1726 40.2461C37.1508 39.1715 36.9372 37.5114 35.8994 36.5103C34.8616 35.5092 33.213 35.3737 32.1499 36.3565C30.5748 37.8145 29.0593 39.3391 27.5921 40.905C26.777 41.7775 26.7081 42.8889 27.2225 43.9542C27.723 44.9921 28.6001 45.5271 29.8262 45.6648V45.6671Z" fill="black" />
                                                    <path d="M61.558 14.7572C63.2341 16.431 64.7955 17.9855 66.3522 19.5422C66.5543 19.7443 66.7678 19.9372 66.9492 20.1576C67.4337 20.7477 67.4199 21.4503 66.9309 21.9417C66.4487 22.4261 65.707 22.4698 65.1514 21.9646C64.4327 21.3102 63.7577 20.6053 63.0711 19.9142C62.0241 18.858 60.984 17.7926 59.8543 16.6423C59.5053 16.9844 59.2022 17.2668 58.9129 17.5653C56.8877 19.641 54.4424 20.6926 51.5264 20.6283C50.5528 20.6076 49.5793 20.6214 48.6057 20.6214C46.5324 20.6214 44.6863 19.9372 42.8862 18.6605C41.4649 20.114 40.0804 21.5972 38.6223 23.0024C36.5053 25.0414 33.4653 25.3559 31.0292 23.8612C27.872 21.9256 27.096 17.6204 29.4288 14.7411C30.0924 13.9214 30.873 13.1913 31.6399 12.4611C32.2162 11.9146 32.9923 11.9537 33.4837 12.4749C33.9682 12.9892 33.9819 13.6688 33.4561 14.252C32.9189 14.8467 32.3219 15.3863 31.7708 15.9672C30.3059 17.5056 30.2852 19.6938 31.7111 21.1334C33.1485 22.5846 35.4009 22.5616 36.9393 21.0508C38.5328 19.4848 40.101 17.8936 41.6853 16.3185C42.5785 15.4299 43.1112 15.4093 44.0365 16.229C45.3774 17.4184 46.9296 18.0429 48.7274 18.0452C49.6734 18.0452 50.6171 18.0268 51.5631 18.0521C53.7214 18.1072 55.5239 17.3334 57.0278 15.8019C58.371 14.4334 59.7372 13.0833 61.0965 11.7309C61.9185 10.9112 62.6601 10.8125 63.2525 11.4256C63.8242 12.0157 63.7071 12.778 62.8897 13.5816C62.4833 13.9811 62.0356 14.3393 61.5557 14.7595L61.558 14.7572Z" fill="black" />
                                                    <path d="M77.7983 8.7553C74.9924 8.7553 72.1843 8.73923 69.3785 8.76678C68.6621 8.77367 68.1294 8.54865 67.638 8.03433C66.4693 6.8151 65.2409 5.65328 64.0653 4.43865C62.8828 3.21713 61.4593 2.61326 59.7693 2.61326C55.703 2.61326 51.6366 2.61326 47.5702 2.61326C45.878 2.61326 44.4659 3.24009 43.2765 4.45013C41.3685 6.39033 39.4329 8.30068 37.5087 10.2248C37.0105 10.7231 36.4456 10.9067 35.805 10.5302C35.2701 10.2133 35.091 9.699 35.2494 9.12497C35.3275 8.84026 35.5341 8.56473 35.7476 8.34889C37.7016 6.37426 39.6625 4.40651 41.6371 2.45253C43.2627 0.845268 45.2328 0.0439319 47.5151 0.0393397C51.6389 0.0324514 55.7627 0.0278592 59.8864 0.0416358C62.2353 0.0485241 64.2284 0.91415 65.8724 2.60178C66.8321 3.5868 67.8447 4.51901 68.7746 5.52929C69.2476 6.04362 69.7505 6.19516 70.4301 6.19286C75.5848 6.16761 80.7395 6.17909 85.8943 6.17909C86.1239 6.17909 86.3535 6.1699 86.5808 6.18368C87.4487 6.23649 87.9952 6.74852 87.9906 7.49016C87.986 8.23179 87.4349 8.74841 86.5624 8.75071C83.6418 8.76449 80.7212 8.7553 77.8005 8.7553H77.7983Z" fill="black" />
                                                    <path d="M9.27178 6.7921C11.7355 6.7921 14.1992 6.81506 16.6606 6.77143C17.0992 6.76454 17.5974 6.56479 17.9556 6.30073C18.7822 5.68768 19.5353 4.97819 20.3229 4.31232C21.751 3.10458 23.4042 2.42264 25.2687 2.39738C28.5612 2.35375 31.8561 2.37442 35.1487 2.3836C36.0878 2.3859 36.6366 2.89104 36.6343 3.68089C36.632 4.47534 36.0947 4.93456 35.1373 4.95752C34.9375 4.96211 34.7354 4.95752 34.5357 4.95752C31.6426 4.95752 28.7495 4.9713 25.8587 4.95293C24.2974 4.94145 22.9427 5.41444 21.7763 6.45917C20.9221 7.22147 20.0818 8.01591 19.1496 8.668C18.6261 9.03538 17.9258 9.33387 17.3012 9.34076C12.2039 9.39357 7.10657 9.37061 2.00695 9.37061C1.77734 9.37061 1.54544 9.3775 1.32042 9.34306C0.558116 9.22596 0.121859 8.71393 0.154004 7.99984C0.186149 7.29035 0.659144 6.82654 1.45359 6.80358C2.48454 6.77603 3.51548 6.79439 4.54643 6.7921C6.12155 6.7921 7.69666 6.7921 9.27178 6.7921Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_305_227">
                                                        <rect width={88} height="53.9352" fill="white" transform="translate(0 0.0322266)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <h2 className="pb-3">Fixed Scope</h2>
                                        <p>Do you know exactly what you want to build? If you are fully certain of your requirements and expect
                                            very limited alternations to your project idea, we can engage on a fixed price &amp; timeline model where
                                            the scope of work is clearly defined prior to commencement of the project.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="wow fadeInUp px-5 my-2 py-5" data-wow-delay="1s">
                                        <span className="em__span mb-4">
                                            <svg width={88} height={82} viewBox="0 0 88 82" fill="none" xmlns="https://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_306_259)">
                                                    <path d="M14.7993 71.3526C14.0361 74.7823 12.5358 75.9792 9.08479 75.9792C7.66505 75.9792 6.24769 75.9958 4.82795 75.9745C2.02877 75.9318 0.0141168 73.929 0.00937645 71.144C-0.00247444 62.5119 -0.00247444 53.8797 0.00937645 45.2475C0.0117466 42.5786 1.79412 40.5995 4.4582 40.4407C6.40175 40.3246 8.36189 40.3388 10.3078 40.4407C12.4386 40.5521 13.9128 41.8297 14.5575 43.8751C14.6002 44.0102 14.6571 44.1406 14.7092 44.2828C16.648 43.7543 18.5347 43.1783 20.4522 42.7327C22.6138 42.2302 24.8062 41.9387 27.0436 42.2397C28.6625 42.4578 30.2078 42.9342 31.4261 43.9984C34.5998 46.7691 38.3826 48.5539 41.9521 50.6823C44.4123 52.1494 46.9128 53.5478 49.3897 54.9865C52.6179 56.8613 53.701 59.3216 52.881 63.0902C53.2554 63.0309 53.5849 62.9906 53.9096 62.9243C62.5157 61.1111 71.1147 59.2505 79.7351 57.4966C83.3425 56.7618 86.9973 59.1983 87.8079 62.6683C88.6707 66.361 86.611 70.0016 82.9064 71.0255C75.4545 73.0852 67.9766 75.0525 60.5082 77.0553C55.3483 78.4395 50.16 79.7194 45.0404 81.2339C42.2934 82.0469 39.698 81.8881 37.1999 80.7053C34.2158 79.2927 31.3147 77.7023 28.4065 76.1333C25.4461 74.5358 22.5474 72.8079 19.2932 71.8409C17.8426 71.4095 16.3707 71.118 14.8017 71.3526H14.7993ZM14.7234 68.442C17.8047 68.269 20.5944 69.0156 23.2182 70.2931C26.0292 71.6607 28.7525 73.2061 31.528 74.6495C33.8318 75.8465 36.1285 77.0576 38.475 78.1621C40.3214 79.0296 42.2578 79.2264 44.2417 78.494C45.0973 78.1787 46.0027 78.0057 46.8868 77.7687C58.5433 74.6424 70.2022 71.5256 81.8564 68.3852C84.2526 67.7405 85.5681 65.6429 85.0467 63.4338C84.5086 61.1585 82.3921 59.8288 79.946 60.3384C71.9135 62.0117 63.8833 63.7064 55.8603 65.4272C53.2957 65.9771 50.7573 66.6407 48.2022 67.2356C46.5502 67.6196 44.9669 67.4063 43.4927 66.5601C39.2927 64.1473 35.0999 61.725 30.9118 59.2955C29.9969 58.7646 29.7385 57.9824 30.1841 57.2311C30.6202 56.4987 31.4403 56.3399 32.3434 56.8519C33.9361 57.7549 35.5147 58.6816 37.1003 59.5965C39.6838 61.0874 42.2507 62.6067 44.8532 64.0619C47.1665 65.3537 49.8282 64.0928 50.3164 61.5282C50.6056 60.0137 49.8519 58.5394 48.2947 57.6364C43.5685 54.8988 38.8234 52.1897 34.1139 49.4237C32.9738 48.7553 31.8598 47.9992 30.8738 47.1223C28.8213 45.2949 26.4416 44.5862 23.8155 45.0863C21.0139 45.6196 18.2669 46.4349 15.4866 47.0938C14.8301 47.2503 14.7069 47.6082 14.7069 48.2244C14.7282 54.6689 14.7187 61.1134 14.7187 67.5556V68.442H14.7234ZM2.84174 58.1412C2.84174 62.3981 2.837 66.6549 2.84174 70.9118C2.84174 72.4239 3.55042 73.1279 5.07208 73.1374C6.57951 73.1468 8.08695 73.1468 9.59438 73.1374C11.1634 73.1303 11.8745 72.4263 11.8769 70.8644C11.8816 62.4099 11.8816 53.9555 11.8769 45.5011C11.8769 43.9368 11.18 43.247 9.59438 43.2304C8.11539 43.2162 6.63877 43.2186 5.15978 43.2304C3.5125 43.2423 2.84174 43.9154 2.84174 45.5485C2.837 49.7461 2.84174 53.9437 2.84174 58.1412Z" fill="black" />
                                                    <path d="M50.3829 7.51637C52.2435 6.74606 53.8458 6.08478 55.5239 5.39031C55.5239 4.68637 55.5096 3.91843 55.5262 3.15287C55.557 1.75446 56.3534 0.787427 57.7163 0.564631C60.2144 0.15696 62.7221 0.15933 65.2203 0.564631C66.5405 0.777947 67.3629 1.74024 67.4127 3.06991C67.4411 3.86392 67.4174 4.6603 67.4174 5.39268C69.0931 6.08952 70.693 6.75554 72.537 7.52111C72.9328 7.07314 73.4021 6.46401 73.9496 5.93309C75.0541 4.86176 76.3885 4.71007 77.531 5.74347C79.2778 7.32438 80.9535 8.99536 82.532 10.7422C83.5891 11.913 83.4138 13.2403 82.2974 14.3875C81.802 14.8947 81.2687 15.3617 80.8137 15.793C81.4607 17.4356 82.0485 18.9691 82.6814 20.486C82.7525 20.659 83.0606 20.8131 83.2715 20.8297C83.8593 20.8771 84.4543 20.8297 85.0444 20.851C86.5471 20.9031 87.6374 21.6877 87.718 23.1572C87.8531 25.5961 87.8531 28.0516 87.7133 30.4905C87.6279 31.9695 86.5542 32.7114 85.0255 32.7588C84.2931 32.7825 83.3948 32.5739 82.8757 32.9223C82.3993 33.2399 82.3543 34.1761 82.0817 34.8256C81.7736 35.5603 81.4678 36.2998 81.0791 36.9919C80.8018 37.4849 80.79 37.8167 81.245 38.1983C81.6977 38.5752 82.103 39.0113 82.4941 39.4545C83.3687 40.4429 83.4659 41.6398 82.6956 42.7064C81.2142 44.759 79.4342 46.5271 77.3982 48.0275C76.3198 48.8215 74.9167 48.8381 74.1037 47.8023C72.8712 46.2285 71.6529 46.046 70.0744 47.1837C69.6572 47.4847 69.1074 47.6696 68.593 47.7478C67.543 47.9066 67.2681 48.4849 67.4008 49.4543C67.4696 49.9449 67.4435 50.464 67.37 50.957C67.2041 52.0852 66.3414 53.0309 65.18 53.0712C62.7079 53.1589 60.2287 53.1707 57.7589 53.0712C56.4174 53.0167 55.3864 51.8837 55.557 50.547C55.8012 48.6437 55.1399 47.6909 53.2722 47.3448C52.5137 47.205 51.8382 46.6622 51.094 46.3849C50.8428 46.2925 50.4209 46.3517 50.2099 46.5153C49.7217 46.8898 49.3282 47.3851 48.8708 47.8047C47.8824 48.7077 46.6191 48.8238 45.5454 48.0417C43.5023 46.5508 41.7247 44.7779 40.2362 42.7325C39.4422 41.6398 39.4256 40.2675 40.4851 39.445C42.0897 38.2007 42.1987 36.9658 41.08 35.4086C40.8477 35.0839 40.7648 34.6478 40.6225 34.2615C40.2591 33.2644 39.5299 32.7643 38.4349 32.7611C36.1263 32.7588 35.2493 32.0762 35.1214 29.8008C35.0005 27.6558 35.0526 25.4942 35.1593 23.3468C35.2375 21.8038 36.3159 20.7514 37.8637 20.9102C39.6579 21.0951 40.5657 20.5144 40.8904 18.7463C41.0255 18.0139 41.4616 17.3265 41.8337 16.6558C42.1039 16.1675 42.1205 15.8215 41.6631 15.4399C41.2127 15.0606 40.8074 14.6245 40.4163 14.1813C39.5678 13.2238 39.4469 12.0292 40.1746 11.0029C41.6749 8.89107 43.4952 7.07551 45.5976 5.56334C46.6357 4.81673 47.8231 4.89495 48.7736 5.76006C49.3804 6.31468 49.8899 6.97833 50.3758 7.51637H50.3829ZM37.9111 29.9406C39.0416 29.9406 39.985 29.9288 40.9283 29.943C42.0281 29.9596 42.348 30.2985 42.7225 31.2916C43.4407 33.1878 44.2134 35.065 45.0477 36.9113C45.4956 37.9021 45.5288 38.3524 44.7467 39.1251C44.0569 39.8077 43.3317 40.4524 42.476 41.2487C44.0569 42.8225 45.5027 44.2589 47.0054 45.7545C47.8279 44.9036 48.4749 44.2162 49.1457 43.5478C49.9208 42.7751 50.4019 42.787 51.3595 43.2207C53.2082 44.055 55.0806 44.8396 56.9768 45.5601C58.0149 45.9536 58.3467 46.2688 58.3539 47.416C58.361 48.3569 58.3539 49.3002 58.3539 50.3384H64.5779C64.5779 49.2268 64.5708 48.2811 64.5779 47.3377C64.5874 46.2593 64.9192 45.9512 65.9337 45.5648C67.8298 44.8443 69.7046 44.0622 71.551 43.2279C72.5133 42.7941 73.0016 42.7728 73.7648 43.5455C74.445 44.2352 75.0921 44.9628 75.879 45.8042C77.4456 44.2328 78.8891 42.7846 80.4131 41.2559C79.5835 40.4666 78.9104 39.848 78.261 39.2033C77.3698 38.3216 77.4101 37.9163 77.9386 36.781C78.7587 35.0223 79.5053 33.2257 80.169 31.403C80.5885 30.2488 80.8611 29.9288 82.1244 29.9217C83.0582 29.9146 83.9944 29.9217 85.0018 29.9217V23.6834C83.8712 23.6834 82.8994 23.6928 81.9277 23.681C80.8966 23.6691 80.5577 23.3136 80.2022 22.3726C79.484 20.4765 78.7161 18.597 77.8818 16.7506C77.4291 15.748 77.3864 15.3095 78.1614 14.5392C78.8654 13.8376 79.6073 13.1764 80.4487 12.3871C78.8583 10.8014 77.4243 9.36984 75.9121 7.86241C75.1063 8.70619 74.445 9.42199 73.7553 10.1117C72.9968 10.8678 72.5157 10.8417 71.5368 10.3961C69.7165 9.56894 67.8701 8.79152 65.9977 8.09469C64.8861 7.68228 64.5851 7.41919 64.5803 6.19381C64.5756 5.25521 64.5803 4.31899 64.5803 3.25004H58.3562C58.3562 4.39484 58.3562 5.39268 58.3562 6.3929C58.3562 7.28409 57.9011 7.74627 57.0668 8.05914C55.1423 8.78204 53.2366 9.56657 51.3595 10.408C50.3877 10.8441 49.9208 10.8654 49.1481 10.088C48.4655 9.40066 47.8089 8.68723 46.8988 7.72731C45.3511 9.26319 43.9124 10.6877 42.3717 12.2188C43.3554 13.1692 44.0712 13.8684 44.7941 14.5582C45.4388 15.172 45.4862 15.8025 45.1117 16.6297C44.2489 18.5282 43.4573 20.4623 42.713 22.4106C42.3978 23.233 41.9688 23.7118 41.0492 23.6881C40.049 23.6644 39.0487 23.6834 37.9158 23.6834V29.9383L37.9111 29.9406Z" fill="black" />
                                                    <path d="M75.6587 26.8828C75.6516 34.7092 69.2782 41.0399 61.4044 41.0399C53.6563 41.0399 47.2094 34.5859 47.2379 26.8591C47.2687 18.983 53.616 12.6191 61.4282 12.6333C69.3611 12.6475 75.6658 18.9617 75.6587 26.8828ZM72.8216 26.8615C72.8524 20.5331 67.7945 15.4941 61.3831 15.4657C55.2444 15.4396 50.1082 20.5616 50.0774 26.7454C50.0442 32.9813 55.1235 38.1602 61.3144 38.2004C67.6783 38.2407 72.7932 33.2017 72.824 26.8615H72.8216Z" fill="black" />
                                                    <path d="M59.7923 28.5042C61.6292 26.3971 63.3357 24.4322 65.0494 22.4768C65.7083 21.7255 66.5023 21.588 67.1517 22.0881C67.7869 22.574 67.9126 23.4723 67.3437 24.136C65.2437 26.5796 63.1272 29.0091 60.9845 31.4172C60.3612 32.1187 59.56 32.1258 58.8727 31.4717C57.7611 30.4098 56.6732 29.3219 55.609 28.215C54.9856 27.5656 55.0093 26.7171 55.59 26.1577C56.1659 25.6031 56.9908 25.615 57.6473 26.2573C58.3631 26.9565 59.0315 27.7078 59.7899 28.5066L59.7923 28.5042Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_306_259">
                                                        <rect width={88} height="81.4773" fill="white" transform="translate(0 0.26123)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <h2 className="pb-3">Maintenance &amp; Testing</h2>
                                        <p>We ensure your website or mobile app remains robust and error-free. We rigorously test for bugs,
                                            glitches, and vulnerabilities, providing regular updates and support to keep your digital products
                                            running smoothly, delivering an exceptional user experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <section className="testimonials section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="cta-content">
                                    <h2 className="wow fadeInUp mb-3" data-wow-delay=".2s">Founders’ feedback - they love us!</h2>
                                    <p className="wow fadeInUp mb-3" data-wow-delay=".3s">Check out what our clients have to say about us!</p>
                                    <div className="ib__followers-card  mb-5 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="follow__images mb-2 ">
                                            <span><img src="assets/images/testimonial/Edward Elliot.png" className="shadow" alt="Profile 1" /></span>
                                            <span><img src="assets/images/testimonial/Zufi Alexander.png" className="shadow" alt="Profile 2" style={{ left: '-10px' }} /></span>
                                            <span><img src="assets/images/testimonial/Rashid Abhoul.png" className="shadow" alt="Profile 3" style={{ left: '-20px' }} /></span>
                                        </div>
                                        <div className="follow__text">
                                            <p>+250 Satisfied Clients &amp; Growing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="testimonial-slider ib__testimonial">
                                    <div>
                                        <div className="single-testimonial">
                                            <div className="text">
                                                <p>&quot;Innobayt Solutions has been instrumental in shaping our futuristic gym concept and vision. Their
                                                    tech expertise accelerated our journey, bringing innovation and precision to every aspect of our
                                                    business. Exceptional partnership!&quot;</p>
                                            </div>
                                            <div className="author">
                                                <img src="assets/images/testimonial/Edward Elliot.png" alt="#" />
                                                <div>
                                                    <h4 className="name ms-3">
                                                        Edward Elliot
                                                        <span className="deg">SafeFit</span>
                                                    </h4>
                                                    <div className="ib__rating ms-3 mt-1 d-flex align-items-center">
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <div className="ms-1">
                                                            10 months ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single-testimonial">
                                            <div className="text">
                                                <p>&quot;Our journey with Innobayt Solutions was incredible. They are a bunch of very smart and
                                                    collaborative techies and are undoubtedly the backbone of TackleandTalk.com&apos;s achievements&quot;</p>
                                            </div>
                                            <div className="author">
                                                <img src="assets/images/testimonial/Takhmina Masumova.png" alt="#" />
                                                <div>
                                                    <h4 className="name ms-3">
                                                        Takhmina Masumova
                                                        <span className="deg">Tackle&amp;Talk</span>
                                                    </h4>
                                                    <div className="ib__rating ms-3 mt-1 d-flex align-items-center">
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <div className="ms-1">
                                                            2 months ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single-testimonial">
                                            <div className="text">
                                                <p>&quot;We love working with this company because they&apos;re very flexible and available to discuss
                                                    anything.&quot;</p>
                                            </div>
                                            <div className="author">
                                                <img src="assets/images/testimonial/Anil Kumar.png" alt="#" />
                                                <div>
                                                    <h4 className="name ms-3">
                                                        Anil Kumar
                                                        <span className="deg">ibTech</span>
                                                    </h4>
                                                    <div className="ib__rating ms-3 mt-1 d-flex align-items-center">
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <div className="ms-1">
                                                            11 months ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single-testimonial ar">
                                            <div className="text">
                                                <p>&quot;لقد ساعدوا في بناء مشروع Fintech الخاص بي في وقت أقل وبأفضل جودة. أوصي بشدة بخدماتهم لجميع
                                                    الشركات. إن الرئيس التنفيذي للتكنولوجيا في الشركة، شمس، مفيد للغاية&quot;</p>
                                            </div>
                                            <div className="author">
                                                <img src="assets/images/testimonial/Ahmed Safrar.png" alt="#" />
                                                <div>
                                                    <h4 className="name ms-3">
                                                        Ahmed Safrar
                                                        <span className="deg">Rawafid</span>
                                                    </h4>
                                                    <div className="ib__rating ms-3 mt-1 d-flex align-items-center">
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <div className="ms-1">
                                                            5 months ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single-testimonial">
                                            <div className="text">
                                                <p>&quot;They are the best thing you can do for your business! They made our digital wardrobe dream come
                                                    true. Top-notch tech partners, no doubt&quot;</p>
                                            </div>
                                            <div className="author">
                                                <img src="assets/images/testimonial/Zufi Alexander.png" alt="#" />
                                                <div>
                                                    <h4 className="name ms-3">
                                                        Zufi Alexander
                                                        <span className="deg">Zedit</span>
                                                    </h4>
                                                    <div className="ib__rating ms-3 mt-1 d-flex align-items-center">
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <div className="ms-1">
                                                            1 month ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single-testimonial ar">
                                            <div className="text">
                                                <p>&quot;ساعدت شركة INNOBAYT في الإنشاء عبر موقع الويب RSM369. لقد اهتموا بجميع الأعمال مثل مواقع الويب
                                                    وتطبيقات الأجهزة المحمولة وقاموا بتصميم جيد جدًا&quot;</p>
                                            </div>
                                            <div className="author">
                                                <img src="assets/images/testimonial/Rashid Abhoul.png" alt="#" />
                                                <div>
                                                    <h4 className="name ms-3">
                                                        Rached Al Nabulsi
                                                        <span className="deg">RSM369</span>
                                                    </h4>
                                                    <div className="ib__rating ms-3 mt-1 d-flex align-items-center">
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <span><img src="assets/images/star.svg" /></span>
                                                        <div className="ms-1">
                                                            3 months ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></section>
                <section className="faq section" id="faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <div className="cta-content">
                                    <h2 className="wow fadeInUp mb-3" data-wow-delay=".2s">We have helped 100+ startups in the region - Ground Up!
                                    </h2>
                                    <p className="wow fadeInUp mb-3" data-wow-delay=".3s">Transform your startup vision into reality with our expert
                                        software development team! Whether you need a sleek MVP or a full-fledged product, we have got the
                                        technical expertise to bring your ideas to life. </p>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <span className="title"><span className="serial">01</span>How long does it typically take to develop a mobile
                                                    app or website?</span><i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>The development timeline varies depending on project complexity. We provide estimates after
                                                    discussing your project in detail. Rest assured; we focus on delivering high-quality results
                                                    efficiently.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span className="title"><span className="serial">02</span> What industries do you specialize in?</span><i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We have experience working across various industries, like social media, healthcare &amp; wellbeing,
                                                    fitness, finance, retail, e-commerce, entertainment, manufacturing etc. Our diverse expertise allows
                                                    us to tailor solutions to your specific industry needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span className="title"><span className="serial">03</span>Do you offer ongoing support and
                                                    maintenance?</span><i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Yes, we provide post-launch support and maintenance services to ensure your software continues to
                                                    run smoothly. You can choose from various support plans tailored to your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <span className="title"><span className="serial">04</span>What sets your software development house apart from
                                                    others?</span><i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Our commitment to quality, scalability &amp; cybersecurity, a highly skilled team, a diverse technology
                                                    stack, and a customer-centric approach set us apart. We aim not just to meet but to exceed your
                                                    expectations, ensuring your project&apos;s success.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <span className="title"><span className="serial">05</span>What technologies do you use for AI
                                                    development?</span><i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Our AI development team leverages a wide array of technologies, including machine learning
                                                    frameworks, natural language processing tools, and data analytics platforms, to create intelligent
                                                    and scalable solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseFive">
                                                <span className="title"><span className="serial">06</span>Can you work with startups and established
                                                    businesses?</span><i className="lni lni-plus" />
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Yes, we cater to both startups looking to launch their first product and established businesses
                                                    seeking to enhance their digital presence or streamline operations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="ib__blog py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title mb-5">
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Industry Insights</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Embark on a journey through the ever-evolving world of
                                        technology, guided by our experts who provide insightful updates to keep you informed and inspired.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ib__blog_items">
                                    <div className="slider-item">
                                        <div className="card h-100 border-0">
                                            <a href="https://innobaytsolutions.com/BlogDetails/Details/Artificial-Intelligence-Cybersecurity">
                                                <figure>
                                                    <img src="assets/images/blogs/artificial-intelligence-in-cybersecurity-the-sentinel-of-the-digital-age2.jpg" className="card-img-top" alt="Image 1" />
                                                </figure>
                                                <div className="card-body">
                                                    <span className="card-tag mb-2">Web</span>
                                                    <h5 className="card-title">Artificial Intelligence in Cybersecurity: The Sentinel of the Digital Age
                                                    </h5>
                                                    <p className="card-text mb-3">In today&apos;s digital landscape, where cyber threats lurk around every
                                                        corner...</p>
                                                    <span className="card-date">June 02, 2023</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="card h-100 border-0">
                                            <a href="https://innobaytsolutions.com/BlogDetails/Details/use-azure-open-ai-services-to-build-chatbot">
                                                <figure>
                                                    <img src="assets/images/blogs/how-to-use-azure-open-ai-services-to-build-a-chatbot.png" className="card-img-top" alt="Image 1" />
                                                </figure>
                                                <div className="card-body">
                                                    <span className="card-tag mb-2">Web</span>
                                                    <h5 className="card-title">How to Use Azure Open AI Services to Build a Chatbot
                                                    </h5>
                                                    <p className="card-text mb-3">As businesses continue to grow and expand their digital presence, chatbots
                                                        have
                                                        become increasingly popular for...</p>
                                                    <span className="card-date">May 02, 2023</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="card h-100 border-0">
                                            <a href="https://innobaytsolutions.com/BlogDetails/Details/AI-Powered-Mobile-Apps">
                                                <figure>
                                                    <img src="assets/images/blogs/artificial-intelligence-mobile-application-development.webp" className="card-img-top" alt="Image 1" />
                                                </figure>
                                                <div className="card-body">
                                                    <span className="card-tag mb-2">Iot</span>
                                                    <h5 className="card-title">AI-Enhanced mobile Apps: The Next Frontier of Mobile App Development
                                                    </h5>
                                                    <p className="card-text mb-3"> In today&apso;s world, mobile apps are an essential part of our daily lives.
                                                        From
                                                        ordering food to booking a ride, mobile...</p>
                                                    <span className="card-date">May 20, 2023</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="ib__ma_blog py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-8 mx-auto">
                                <div className="section-title mb-5">
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Industry Insights</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Embark on a journey through the ever-evolving world of
                                        technology, guided by our experts who provide insightful updates to keep you informed and inspired.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <BlogList />
                        </div>
                    </div>
                </section>



                {/* <footer className="footer" id="contact">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-8 col-md-4 col-12 mb-5">
                                    <div className="single-footer f-about">
                                        <h1 className="text-white">Let’s build the next unicorn together!</h1>
                                        <p>Transform your startup vision into reality with our expert software development team! Whether you need
                                            a sleek MVP or a full-fledged product, we have got the technical expertise to bring your ideas to life.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12 ib__address mb-3">
                                    <div className="row gx-5">
                                        <div className="col-md-6 ib__hsform">
                                            <div>
                                                <h6 className="text-secondary pb-2 mb-2 text-uppercase">Reach Us</h6>
                                                
                                                <HubspotContactForm />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 mb-5">
                                            <address>
                                                <h6>Branch Office</h6>
                                                <p>138, Doddakannelli Karmelaram Post,</p>
                                                <p>Bangalore, India</p>
                                            </address>
                                            <div className="d-flex gap-2">
                                                <div><img src="assets/images/footer/3.png" alt="" /></div>
                                                <div><img src="assets/images/footer/4.png" alt="" /></div>
                                            </div>
                                            <br />
                                            <br />
                                            <address>
                                                <h6>Head Office</h6>
                                                <p>1602, API Trio Tower, </p>
                                                <p>Sheikh Zayed Road, Dubai,</p>
                                                <p>United Arab Emirates</p>
                                            </address>
                                            <div className="d-flex gap-2">
                                                <div><img src="assets/images/footer/1.png" alt="" /></div>
                                                <div><img src="assets/images/footer/2.png" alt="" /></div>
                                            </div>
                                            <br />
                                            <br />
                                            <address>
                                                <h6>Contact Info</h6>
                                                <p className="mb-3"><svg xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5C3.44772 5 3 5.44772 3 6V7.43381L12 12.8338L21 7.43381V6C21 5.44772 20.5523 5 20 5H4ZM21 9.76619L13.029 14.5488C12.3956 14.9288 11.6044 14.9288 10.971 14.5488L3 9.76619V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V9.76619Z" fill="white" />
                                                </svg> &nbsp;<a href="mailto:info@innobaytsolutions.com">info@innobaytsolutions.com</a></p>
                                                <p className="mb-3"><svg xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.47517 3.72657C4.54793 2.2247 6.74784 2.13444 7.94003 3.54339L9.84666 5.79669C10.3997 6.45028 10.4754 7.3834 10.0349 8.11756L8.56609 10.5655C8.68383 10.7582 8.84338 10.9882 9.04748 11.2504C9.41145 11.7181 9.87652 12.2372 10.3952 12.7559C11.2686 13.6293 12.2464 14.454 13.0881 15.0113L15.4884 13.5711C16.2226 13.1306 17.1557 13.2063 17.8093 13.7593L20.1713 15.7579C21.5251 16.9034 21.4384 19.0172 19.9953 20.048C17.7699 21.6375 14.779 22.0156 12.3285 20.52C10.6392 19.489 8.56919 18.0334 6.7173 16.1815C5.00043 14.4647 3.7486 12.6849 2.8755 11.2044C1.43721 8.76557 1.94262 5.87214 3.47517 3.72657ZM6.41326 4.83527C6.0633 4.42169 5.41753 4.44818 5.10263 4.88904C3.91121 6.55703 3.65587 8.59052 4.59823 10.1885C5.4046 11.5558 6.55758 13.1934 8.13152 14.7673C9.83586 16.4717 11.7655 17.8333 13.3704 18.8128C15.0242 19.8221 17.1456 19.6257 18.8328 18.4205C19.2149 18.1476 19.2378 17.588 18.8794 17.2847L16.5174 15.2861L13.5958 17.039C13.2864 17.2246 12.9011 17.2292 12.5875 17.0511C11.4392 16.3991 10.097 15.2861 8.98094 14.1701C8.41748 13.6066 7.89457 13.0254 7.46916 12.4788C7.0556 11.9474 6.68959 11.3926 6.49279 10.8881C6.3803 10.5998 6.40767 10.2756 6.56692 10.0102L8.31989 7.08857L6.41326 4.83527Z" fill="white" />
                                                </svg> &nbsp;
                                                    <a href="tel:+97142685856">+971 42 685 856</a>
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 single-footer f-about">
                                    <ul className="social">
                                        <li><a href="https://www.facebook.com/innobayt/" target="_blank"><i className="lni lni-facebook-fill" /></a></li>
                                        <li><a href="https://www.instagram.com/innobayt/" target="_blank"><i className="lni lni-instagram" /></a>
                                        </li>
                                        <li><a href="https://ae.linkedin.com/company/innobayt-solutions" target="_blank"><i className="lni lni-linkedin-original" /></a></li>
                                    </ul>
                                    <a href="https://wa.me/971585348237?text=Hello%20Innobayt" className="whatsapp_btn" target="_blank">
                                        Whatsapp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </div>

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title='Contact Us' tagline='Startup dreamers and corporate giants, your aspirations find a home here. Reach out to us now, and let&apos;s script your success story, chapter by chapter.' />
            </section>
            <section className='contact_form'>
                <Contact pageName="Innobayt for startup"/>
            </section>

            <Footer />
            <Script src="assets/js/bootstrap.min.js" />
            <Script src="assets/js/wow.min.js" />
            <Script src="assets/js/tiny-slider.js" />
            <Script src="assets/js/glightbox.min.js" />
            <Script src="assets/js/count-up.min.js" />
            <Script src="assets/js/main.js" />
            <Script src="assets/js/custom.js" />
        </>
    )
}

export default page














