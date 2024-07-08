import Link from 'next/link';
import VideoIntro from '../components/videoIntro';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer'
import Script from 'next/script';
import MainNav from '../components/MainNav';
import IotSlider from '../components/IotSlider';
import ClientSlider from '../components/ClientSlider';
import cloudSvg from '../../../public/assets/images/exhibition/cards/cloud.svg';
import iotSvg from '../../../public/assets/images/exhibition/cards/iot.svg';
import iosSvg from '../../../public/assets/images/exhibition/cards/ios.svg';
import web3Svg from '../../../public/assets/images/exhibition/cards/web3.svg';
import aiSvg from '../../../public/assets/images/exhibition/cards/ai.svg';
import gisSvg from '../../../public/assets/images/exhibition/cards/gis.svg';
import ContactCTA from '../components/contactus'

import Contact from '../components/Contact';
import Image from 'next/image';

export default function Iot() {
    return (
        <>
            <MainNav />
            <div className="container-fluid hero-section hero-bg">
                <div className="container">
                    <div className="col-md-10 wow fadeInUp" data-wow-delay=".7s">
                        <h1 className="gradient h1">Empowering<br />
                            Tomorrow<br />
                            Connecting Today</h1>
                        <p>Revolutionize Your World with Our Comprehensive IoT Solutions
                        </p>
                    </div>
                </div>
            </div>

            <div className='container px-5 py-4'>
                <ClientSlider />
            </div>

            <section className="kick__start" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <h6 className='text-white'>INNOVATION SIMPLIFIED</h6>
                            <h1 className='gradient fw-800'>Industry 4.0 Solutions for
                                Manufacturing</h1>
                            <p className='text-white'>Innobayt is your gateway to innovation, specializing in a spectrum of industries: manufacturing precision, retail evolution, smart city solutions, health & safety enhancements, wellness innovations, and fintech excellence.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".4s">
                            <a className='allCard'>
                                <div className="card h-100">
                                    <div className="card-body p-5">
                                        <Image src={cloudSvg} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Counterfeit Deterrence Solution</h5>
                                        <p className="card-text">Robust anti-counterfeit solutions safeguarding manufacturing processes and products.</p>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".5s">
                            <a className='allCard'>
                                <div className="card h-100">
                                    <div className="card-body p-5">
                                        <Image src={iotSvg} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Production Line Automation</h5>
                                        <p className="card-text">Automated solutions optimizing production line efficiency and reducing operational costs.</p>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".6s">
                            <a className='allCard'>
                                <div className="card h-100">
                                    <div className="card-body p-5">
                                        {/* <img src="assets/images/exhibition/cards/ios.svg" className="mb-3" alt="Card Image" width="75"> */}
                                        <Image src={iosSvg} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Warehouse Management Solution</h5>
                                        <p className="card-text">Intelligent warehouse management systems ensuring optimal inventory control.
                                        </p>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".7s">
                            <a className='allCard'>
                                <div className="card h-100">
                                    <div className="card-body p-5">
                                        {/* <img src="assets/images/exhibition/cards/web3.svg" className="mb-3" alt="Card Image" width="75"> */}
                                        <Image src={web3Svg} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Marking & Coding Solutions</h5>
                                        <p className="card-text">High-quality marking and coding solutions for product traceability and authenticity.</p>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".8s">
                            <a className='allCard'>
                                <div className="card h-100">
                                    <div className="card-body p-5">
                                        {/* <img src="assets/images/exhibition/cards/ai.svg" className="mb-3" alt="Card Image" width="75"> */}
                                        <Image src={aiSvg} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Product Export Control Solution</h5>
                                        <p className="card-text">Comprehensive solutions for export control compliance and product tracking.</p>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* <section className="iot__expertise" id="industries">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <h6>INNOVATION SIMPLIFIED</h6>
                            <h2 className="gradient">Expertise that cuts across
                                Industries</h2>
                            <p>Innobayt is your gateway to innovation, specializing in a spectrum of industries: manufacturing
                                precision, retail evolution, smart city solutions, health & safety enhancements, wellness
                                innovations, and fintech excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-xxl">
                    <div className="d-flex flex-column flex-lg-row gap-5 align-items-center">
                        <div className="col-md-6">
                            <figure className="p-0 m-0">
                                <img src="assets/images/iot/1.jpg" alt="Image" className="img-fluid" />
                            </figure>
                        </div>
                        <div className="col-md-4">
                            <h5>IoT Solutions for </h5>
                            <h3 className="mb-4"> Manufacturing </h3>
                            <ul className="list-unstyled">
                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Counterfeit Deterrence Solution</b>
                                            <p>Robust anti-counterfeit solutions safeguarding manufacturing processes and
                                                products.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Production Line Automation</b>
                                            <p>Automated solutions optimizing production line efficiency and reducing
                                                operational costs.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Warehouse Management Solution</b>
                                            <p>Intelligent warehouse management systems ensuring optimal inventory control.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Marking & Coding Solutions</b>
                                            <p>High-quality marking and coding solutions for product traceability and
                                                authenticity.</p>
                                        </div>
                                    </div>

                                </li>
                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Product Export Control Solution</b>
                                            <p>Comprehensive solutions for export control compliance and product tracking.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="main-btn">Explore</a>
                        </div>
                    </div>
                </div>
            </section>  */}

            <section className='py-5 bg-black'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-8 mx-auto text-center mb-5 wow fadeInUp' data-wow-delay=".3s">
                            <h6 className='text-white'>INNOVATION SIMPLIFIED</h6>
                            <h1 className='gradient fw-800'>IoT Solutions for Retail</h1>
                        </div>
                    </div>
                </div>
                <IotSlider />
            </section>


           {/* <section className="ib__cta1" id="solutions">
                <div className="container">
                    <div className="row">
                        <div
                            className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <h5>IoT Solutions for </h5>
                                <h3 className="mb-4"> Retail </h3>
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="d-flex gap-3">
                                            <div>
                                                <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                            </div>
                                            <div>
                                                <b>Access Control Systems</b>
                                                <p>Secure and efficient access control solutions tailored for retail
                                                    environments</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex gap-3">
                                            <div>
                                                <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                            </div>
                                            <div>
                                                <b>Smart Door Locks</b>
                                                <p>Advanced smart door lock systems enhancing security and convenience for
                                                    retail spaces</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex gap-3">
                                            <div>
                                                <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                            </div>
                                            <div>
                                                <b>Mall Parking Solution</b>
                                                <p>Smart parking solutions customized for malls, ensuring hassle-free parking
                                                    experiences</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex gap-3">
                                            <div>
                                                <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                            </div>
                                            <div>
                                                <b>Ticketing & Visitor Management Solution</b>
                                                <p>Seamless ticketing and visitor management systems for exhibitions and retail
                                                    events</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex gap-3">
                                            <div>
                                                <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                            </div>
                                            <div>
                                                <b>Retail Display Solutions</b>
                                                <p>Innovative IoT-driven solutions for enhancing retail displays and customer
                                                    engagement</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="main-btn">Explore</a>
                            </div>

                            <div className="col-md-6">
                                <figure className="p-0 m-0">
                                    <img src="assets/images/iot/iot-solution-retail.png" alt="Image" className="img-fluid" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  */}



            <section className="ib__cta2" id="case-studies">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="d-flex flex-column flex-lg-row justify-content-between gap-5 align-items-center">
                                <div className=" wow fadeInUp" data-wow-delay=".4s">
                                    {/* <img src="assets/images/iot/video.png" alt="Hero Image" className="w-100" onClick={openDialog} />
                                    <dialog open={isOpen} className='sticky-dialog'>
                                        <button onClick={closeDialog} className="btn btn-primary video-close">
                                            <i className="fas fa-times"></i>
                                        </button>
                                        <video ref={videoRef} width="400" controls>
                                            <source src="../../assets/Sequence 01_8.mp4" type="video/mp4" />
                                            Your browser does not support the video.
                                        </video>
                                    </dialog> */}
                                    <VideoIntro />
                                </div>
                                <div className="w-100 w-md-50 wow fadeInUp" data-wow-delay=".4s">
                                    <h5>IoT Solutions for</h5>
                                    <h3 className="mb-4">Health & Safety</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="d-flex gap-3">
                                                {/* <div>
                                                    <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                                </div> */}
                                                <div>
                                                    <b>Forklift Safety Solution</b>
                                                    <p>IoT-driven safety solutions enhancing forklift operations, ensuring
                                                        workplace safety</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* <a href="#" className="main-btn">Explore</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ib__cta1">
                <div className="container-xxl">
                    <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto wow fadeInUp" data-wow-delay=".7s">
                        <div className="col-md-6 ">
                            <h5>IoT Solutions for </h5>
                            <h3 className="mb-4"> Retail </h3>
                            <ul className="list-unstyled">
                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Smart Visitor Management</b>
                                            <p>Advanced visitor management systems for secure and convenient access to buildings
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Smart Parking Systems</b>
                                            <p>IoT-enabled smart parking solutions optimizing parking space utilization</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="assets/images/iot/icon-bullet.svg" alt="Image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <b>Parking Enforcement Systems</b>
                                            <p>Efficient parking enforcement solutions ensuring compliance and revenue
                                                generation.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* <a href="#" className="main-btn">Explore</a> */}
                        </div>

                        <div className="col-md-6">
                            <figure className="p-0 m-0">
                                <img src="assets/images/iot/2.jpg" alt="Image" className="img-fluid" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ib__blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto mb-5 text-center wow fadeInUp" data-wow-delay=".2s">
                            <h6>CASE STORIES</h6>
                            <h2 className="gradient">Success Stories</h2>
                            <p>Dive into our thoughtfully curated articles, where industry experts, visionaries, and tech enthusiasts converge to explore the latest trends, transformative technologies, and groundbreaking ideas.</p>
                        </div>
                    </div>

                    <div className="row" id="blog-posts">
                        <BlogList />
                    </div>
                </div>
            </section>

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Innovate Fearlessly Scale Seamlessly'} tagline={'Startup dreamers and corporate giants, your aspirations find a home here. Reach out to us now, and let\'s script your success story, chapter by chapter.'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="IOT"/>
            </section>

            <Footer />

        </>
    )
}