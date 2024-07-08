import Link from 'next/link';
import VideoIntro from '../../components/videoIntro';
import BlogList from '../../components/BlogList';
import Footer from '../../components/Footer'
import ProjectSummaryLink from '@/app/components/ProjectSummaryLink';
import Script from 'next/script';
import MainNav from '../../components/MainNav';
import ContactCTA from '../../components/contactus'

import HeroBgImage from '@/../public/assets/images/projects/safefit/hero_bg.svg';
import HeroImage from '@/../public/assets/images/projects/safefit/hero_image.svg';

import SS1 from '@/../public/assets/images/projects/safefit/ss1.png';
import SS2 from '@/../public/assets/images/projects/safefit/ss2.png';
import SS3 from '@/../public/assets/images/projects/safefit/ss3.png';
import SS4 from '@/../public/assets/images/projects/safefit/ss4.png';

import Ico1 from '@/../public/assets/images/projects/ico1.svg';
import Ico2 from '@/../public/assets/images/projects/ico2.svg';
import Ico3 from '@/../public/assets/images/projects/ico3.svg';

import Contact from '../../components/Contact';
import Image from 'next/image';

export default function SafeFit() {
    return (
        <>
            <MainNav />
            <div className="container-fluid py-5 hero-bg" style={{ background: `url('${HeroBgImage.src}') no-repeat scroll center center / cover` }}>
                <div className="container">
                    <div className="col-md-8 py-5 mx-auto">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='fw-800 text-white w-50 display-3'>SafeFit Fully Digital Technogym</h1>
                            </div>
                            <div className="col-md-6">
                                <Image src={HeroImage} alt="Safefit" width={600} quality={100} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='py-5'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto text-center wow fadeInUp" data-wow-delay=".3s">
                            <h2 className='mb-4 h1 fw-700'>About the Project</h2>
                            <p className='Lead mb-5'>
                                The SafeFit application, crafted by Innobayt, is a game-changer in the fitness industry. It redefines the workout experience with a user-centric mobile app, personalized fitness programs, and a seamless booking system. The tech-driven studio experience, equipped with smart sensors, transforms workouts into dynamic and secure sessions. SafeFit is the embodiment of innovation, setting a new standard for modern, personalized fitness journeys.
                            </p>
                            <a className='main-btn' href=''>
                                Download Full Case Story
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-light py-5'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <h6 className='indigo-500'>WHY USE SPEND.IN</h6>
                            <h2 className='mb-4 h2 fw-700'>Easy, Simple, Affordable</h2>
                            <p>Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.</p>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className='col-md-6 mb-4'>
                            {/* Two images in flex */}
                            <div className='d-flex justify-content-center mb-3 gap-5'>
                                <Image src={SS1} alt="Safefit" width={500} className='img-fluid shadow-lg rounded rounded-4' />
                                <Image src={SS2} alt="Safefit" width={500} className='img-fluid shadow-lg rounded rounded-4' />
                            </div>
                        </div>
                        <div className='col-md-6 p-3' >
                            <div className='d-flex gap-1 mb-4'>
                                <div className='me-3'>
                                    <Image src={Ico1} alt="Safefit" width={50} height={50} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-2'>Personalized Workout Algorithms</h3>
                                    <p> Automatic payments help you to arrange payments on a certain date without doing it manually again.</p>
                                </div>
                            </div>
                            <div className='d-flex gap-1 mb-4'>
                                <div className='me-3'>
                                    <Image src={Ico1} alt="Safefit" width={50} height={50} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-2'>Seamless Studio Integration</h3>
                                    <p> Clear payment history helps you to track your business expenses on specific dates.</p>
                                </div>
                            </div>
                            <div className='d-flex gap-1 mb-4'>
                                <div className='me-3'>
                                    <Image src={Ico1} alt="Safefit" width={50} height={50} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-2'>Smart Sensor Technology and IoT integration</h3>
                                    <p> Have more than one debit or credit card? Don&apos;t worry, we support payments using more than one card.</p>
                                </div>
                            </div>
                            <div className='d-flex gap-1 mb-4'>
                                <div className='me-3'>
                                    <Image src={Ico1} alt="Safefit" width={50} height={50} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-2'>Comprehensive Admin Panel</h3>
                                    <p> Have more than one debit or credit card? Don&apos;t worry, we support payments using more than one card.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-5 bg-light-100">
                <div className="container text-center py-5">
                    <div className="row">
                        <div className="col-md-6 col-sm mx-auto text-center mb-3 wow " data-wow-delay=".3s">
                            <h3 className='fw-800 mb-4'>Screens</h3>
                            <p>Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.</p>
                        </div>
                    </div>
                    {/* slider with 4 SS image */}
                    <div className="row">
                        <div className="col-md-12 mx-auto py-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <Image src={SS1} alt="Safefit" height={550} className='img-fluid shadow rounded-4 m-3' />
                                </div>
                                <div className="col-md-3">
                                    <Image src={SS2} alt="Safefit" height={550} className='img-fluid shadow rounded-4 m-3' />
                                </div>
                                <div className="col-md-3">
                                    <Image src={SS3} alt="Safefit" height={550} className='img-fluid shadow rounded-4 m-3' />
                                </div>
                                <div className="col-md-3">
                                    <Image src={SS4} alt="Safefit" height={550} className='img-fluid shadow rounded-4 m-3' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProjectSummaryLink />

                </div>
            </section>




            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Infinite Possibilities One Team'} tagline={'From Concept to Code – Contact Us for Seamless Web & Mobile App Development Services'} />
            </section>
            <section className='contact_form'>
                <Contact  pageName="Safefit"/>
            </section>

            <Footer />

        </>
    )
}