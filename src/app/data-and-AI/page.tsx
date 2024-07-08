import React from 'react'
import Link from 'next/link'
import DataServices from '../components/DataAI/DataServices'
import ChatBotDevelopment from '../components/DataAI/ChatBotDevelopment'
import Footer from '../components/Footer'
import Script from 'next/script'
import MainNav from '../components/MainNav'
import Contact from '../components/Contact'
import BlogList from '../components/Mobileapp/BlogList'
import ContactCTA from '../components/contactus'


export default function Web3Development() {
    return (
        <>
            <MainNav />
            <section className='DataAI_hero'>
                <div className="container-fluid">
                    <div className="container pt-5">
                        <div className="col-md-8 mx-auto text-center py-5">
                            <h1 className="fw-800 display-2 wow fadeInUp" data-wow-delay=".2s">Data & AI Consulting Services</h1>
                            <p className='h6 lh-base wow fadeInUp' data-wow-delay=".5s">
                                Explore the power of data driven decision making by sourcing, cleansing, classifying and analyzing data from various sources to unleash exceptional business value helping you drive your business decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className="container">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto">
                            <h6 className='small indigo-500 wow fadeInUp' data-wow-delay=".2s">DATA SERVICES</h6>
                            <h1 className='h3 fw-800 wow fadeInUp' data-wow-delay=".5s">Data & AI Consultancy</h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-10 mx-auto">
                        <DataServices />
                    </div>
                </div>
            </section>


            <section className='DataAI_cta3'>
                <div className='container'>
                    <div className='col-md-6 mx-auto row text-center mb-5'>
                        <h2 className='h3 fw-bold mb-4wow fadeInUp' data-wow-delay=".2s">Chatbot Development</h2>
                        <p className='wow fadeInUp' data-wow-delay=".5s">A Chatbot Development Service refers to the provision of expertise, technology, and resources to create, deploy, and maintain chatbots for various purposes.</p>
                    </div>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 col-md-12 mx-auto game_dev_items position-relative text-center'>
                        <ChatBotDevelopment />
                    </div>
                </div>
            </section>

            {/* <section className='DataAI_cta3'>
                <div className='container'>
                    <div className='col-md-8 mx-auto row text-center mb-5'>
                        <h2>Game Development</h2>
                        Innobayt offers the best game development services with a key focus on designs and performance. Our team of highly skilled game developers can help you with building high performance games in iOS, Android, Windows, and Web both in 2D or 3D versions in line requirements and vision of the game. Our end-to-end game development offerings ensures you have the right partner on the job.
                    </div>
                    <div className='row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 col-md-8 mx-auto game_dev_items position-relative text-center'>
                        <GameDevelopment />
                    </div>
                </div>
            </section> */}

            <section className="ib__ma_blog py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <div className="section-title mb-5 text-center">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Industry Insights</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Creativity is a highfalutin word for the work I have to do between now and Tuesday.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <BlogList />
                    </div>
                </div>
            </section>

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Data & AI Consulting Services'} tagline={'Where Data Drives Decisions and AI Fuels Growth: Reach Out Now to Revolutionize Your Business Landscape with Expert Data & AI Services. '} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Data and AI"/>
            </section>
            <Footer />

        </>
    )
}