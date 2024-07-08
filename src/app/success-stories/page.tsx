import React from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
import Script from 'next/script'
import Image from 'next/image'
import MainNav from '../components/MainNav'
import Contact from '../components/Contact'
import BlogList from '../components/Mobileapp/BlogList'
import Icon1 from '../components/Icons/CaseStories/IconOne'
import Icon2 from '../components/Icons/CaseStories/IconTwo'
import Icon3 from '../components/Icons/CaseStories/IconThree'
import Icon4 from '../components/Icons/CaseStories/IconFour'
import Arrow from '../components/Icons/CaseStories/Arrow'
import DigitalAutomation from '@/../../public/assets/images/case-stories/digital-automation.png'
import Safefit from '@/../../public/assets/images/case-stories/safefit.png'
import Paypark from '@/../../public/assets/images/case-stories/paypark.png'
import Agrotech from '@/../../public/assets/images/case-stories/agrotech.png'
import EclipseSvg from "@/../../public/assets/images/exhibition/ellipse.svg";
import ContactCTA from '../components/contactus'


export default function CaseStories() {
    return (
        <>
            <MainNav />

            <section className='bg-black text-white py-5 hero-case-stories'>
                <div className="container-fluid">
                    <div className="container pt-5">
                        <div className="col-md-10 mx-auto text-center py-5">
                            <h1 className="fw-bolder display-5 wow fadeInUp" data-wow-delay=".2s">Real-World Stories of our Work</h1>
                            <p className='h6 wow fadeInUp lh-lg' data-wow-delay=".5s">Welcome to our Success Stories page, where we proudly showcase the transformative journeys of our clients. Here, you&apos;ll find inspiring narratives of how we&apos;ve collaborated with diverse businesses, turning their aspirations into tangible success stories. Explore the impact of our tailor-made solutions, and envision the possibilities for your own digital evolution.</p>
                        </div>
                    </div>
                </div>
            </section>

        {/* total */}
            <section className='py-5 cloud_colsultancy_cta2'>
                <div className='container py-5'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                {/* <h1 className='fs-xs fw-bold text-uppercase '>Total Energies</h1> */}
                                <h1 className='fs-xs fw-bold text-uppercase '>Leading Lubricant Manufacturer</h1>

                                <h5 className='h2 fw-bold mb-4'>Digitalization & Automation
                                    for Factory</h5>

                                <div className='row'>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon1 />
                                        <span className='ms-3 fw-bold'>Sensor Integration</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon2 />
                                        <span className='ms-3 fw-bold'>SAP Integration</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon3 />
                                        <span className='ms-3 fw-bold'>Label Printers</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon4 />
                                        <span className='ms-3 fw-bold'>QR Code Scanners</span>
                                    </div>
                                    <div className='col-md-12 py-5'>
                                        <Link className="main-btn" href="/success-stories/total-energies">Read Success Story <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <Image src={DigitalAutomation} alt="Digitalization & Automation
                                    for Factory" className='img-fluid' quality={100} />
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5 cloud_colsultancy_cta1 bg-light'>
                <div className='container py-5'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                {/* <img src="/assets/images/exhibition/cloud/azure_db.png" alt="" className='img-fluid' /> */}
                                <Image src={Safefit} alt="Safefit" className='img-fluid' quality={100} />
                            </div>
                            <div className="col-md-6">
                                <h1 className='fs-xs fw-bold text-uppercase '>Safefit</h1>

                                <h5 className='h2 fw-bold mb-4'>Designing Modular Gyms fully powered by Technology</h5>

                                <div className='row'>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon1 />
                                        <span className='ms-3 fw-bold'>Digital Door Lock</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon2 />
                                        <span className='ms-3 fw-bold'>Workout Video Streaming</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon3 />
                                        <span className='ms-3 fw-bold'>Dynamic Booking System</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon4 />
                                        <span className='ms-3 fw-bold'>Android TV App</span>
                                    </div>
                                    <div className='col-md-12 py-5'>
                                        <Link className="main-btn" href="/success-stories/safefit">Read Success Story <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5 cloud_colsultancy_cta2'>
                <div className='container py-5'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <h1 className='fs-xs fw-bold text-uppercase '>PAYPARK</h1>
                                <h5 className='h2 fw-bold mb-4'>Designing & Delivering an Integrated Value Added Parking Solution</h5>
                                <div className='row'>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon1 />
                                        <span className='ms-3 fw-bold'>ANPR System Integration</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon2 />
                                        <span className='ms-3 fw-bold'>Private Parking</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon3 />
                                        <span className='ms-3 fw-bold'>Public Parking</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon4 />
                                        <span className='ms-3 fw-bold'>Inventory Management</span>
                                    </div>
                                    <div className='col-md-12 py-5'>
                                        <Link className="main-btn" href="/success-stories/paypark">Read Success Story <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <Image src={Paypark} alt="Paypark" className='img-fluid' quality={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5 cloud_colsultancy_cta1 bg-light'>
                <div className='container py-5'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <Image src={Agrotech} alt="Agrotech" className='img-fluid' quality={100} />
                            </div>
                            <div className="col-md-6">
                                <h1 className='fs-xs fw-bold text-uppercase'>Agrotech</h1>

                                <h5 className='h2 fw-bold mb-4'>End-to-end Agrotech Solution Development</h5>

                                <div className='row'>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon1 />
                                        <span className='ms-3 fw-bold'>SAP Integration</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon2 />
                                        <span className='ms-3 fw-bold'>Sensor Integration</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon3 />
                                        <span className='ms-3 fw-bold'>Label Printers</span>
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center mb-3'>
                                        <Icon4 />
                                        <span className='ms-3 fw-bold'>QR Code Scanners</span>
                                    </div>
                                    <div className='col-md-12 py-5'>
                                        <Link className="main-btn" href="/success-stories/agrotech">Read Success Story <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Beyond Clouds Beyond Limits'} tagline={'Dive into the limitless possibilities of cloud computing with Innobayt&apos;s consultation services. Reach out to us to uncover unmatched flexibility, reliability, and innovation. Let&apos;s transcend boundaries, together.'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Success Stories"/>
            </section>

            <Footer />
        </>
    )
}