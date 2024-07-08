import React from 'react'
import Link from 'next/link'
import GISservices from '../components/GIS/GISServices'
import Footer from '../components/Footer'
import Script from 'next/script'
import MainNav from '../components/MainNav'
import Contact from '../components/Contact'
import BlogList from '../components/Mobileapp/BlogList'
import Image from 'next/image'
import icon1 from '@/../public/assets/images/exhibition/GISdevelopment/icon1.svg'
import icon2 from '@/../public/assets/images/exhibition/GISdevelopment/icon2.svg'
import icon3 from '@/../public/assets/images/exhibition/GISdevelopment/icon3.svg'
import ContactCTA from '../components/contactus'

export default function GISdevelopment() {

    const items = [

        {
            title: 'Identify<br/> problems',
            icon: icon1
        },
        {
            title: 'Monitor <br/>change',
            icon: icon2
        },
        {
            title: 'Manage & respond<br/> to events',
            icon: icon1
        },
        {
            title: 'Perform <br/> forecasting',
            icon: icon1
        },
        {
            title: 'Set<br/> priorities',
            icon: icon3
        },
        {
            title: 'Understand<br/>  trends',
            icon: icon1
        },
    ];

    return (
        <>
            <MainNav />

            <section className='GISdevelopment_hero'>
                <div className="container-fluid">
                    <div className="container pt-5">
                        <div className="col-md-8 mx-auto text-center py-5">
                            <h1 className="fw-800 display-2 wow fadeInUp" data-wow-delay=".2s">GIS Development Service</h1>
                            <p className='h6 lh-base wow fadeInUp' data-wow-delay=".5s">
                                A Geographic Information System (GIS) is a computerized system that can aid in capturing, storing, analyzing, and rendering data specific to a geo location on the earths plain. A GIS system can show details such as buildings, vegetation, street, Ponds, rocks, bushes etc., in a 2D view enabling users to analyze data more efficiently as they can understand patterns and relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='GISdevelopment_cta3'>
                <div className='container'>
                    <div className="col-md-8 text-center mx-auto">
                        <h1 className='h3 fw-800 wow fadeInUp' data-wow-delay=".6s">Why is GIS Used?</h1>
                        <p className='lh-lg wow fadeInUp' data-wow-delay=".7s">GIS is emerging as a highly intuitive tool that is being used in several industries in various applications today. GIS helps in creating maps that can be used to perform analysis, compare & forecast data, share information etc and thereby helping to resolve multifaceted complications in several areas around the world.</p>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container mb-5'>
                    <div className="col-md-6 text-center mx-auto">
                        <h2 className='h2 fw-800 wow fadeInUp' data-wow-delay=".3s">Empowering Your<br /> Geospatial Vision</h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row col-md-8 mx-auto g-3 d-flex align-items-stretch text-center">
                        {
                            items.map((item, index) => (
                                <div className="col-md-4 h-100" key={index}>
                                    <div className='card border border-2 px-3 py-4 rounded-4 d-flex wow fadeInUp' data-wow-delay=".3s" key={index}>
                                        <div className='mb-3'>
                                            <Image src={item.icon} width={50} height={50} alt='' />
                                        </div>
                                        <div className=''><h5 dangerouslySetInnerHTML={{ __html: item.title }} /></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='GISdevelopment_cta3'>
                <div className='container'>
                    <div className="col-md-8 text-center mx-auto mb-5">
                        <h6 className='small indigo-500 wow fadeInUp' data-wow-delay=".2s">OUR SERVICES</h6>
                        <h1 className='h3 fw-800 wow fadeInUp' data-wow-delay=".5s">Expertise that cuts across Industries</h1>
                    </div>
                    <div className='row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 col-md-8 mx-auto game_dev_items position-relative text-center'>
                        <GISservices />
                    </div>
                </div>
            </section>

            <section className='cloud_colsultancy_chat_bot'>
                <div className='container'>
                    <div className="row col-md-10 mx-auto">
                        <div className='col-md-12 text-center mb-5'>
                            <h1 className='h2 fw-700  wow fadeInUp' data-wow-delay=".2s">Applications of GIS</h1>
                        </div>
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row align-items-center col-md-10 mx-auto mb-5">
                            <div className="col-md-6 me-0 me-md-5 p-3">
                                <h1 className='h3 mb-3 fw-bold  wow fadeInUp' data-wow-delay=".4s">Counterfeit Deterrence Solution</h1>
                                <p className=' wow fadeInUp' data-wow-delay=".5s">
                                    Robust anti-counterfeit solutions safeguarding manufacturing processes and products
                                </p>
                            </div>
                            <div className='col-md-6  wow fadeInUp' data-wow-delay=".6s">
                                <img src="/assets/images/gis/application-of-GIS.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5 web3_cta1 bg-light'>
                <div className='container py-5'>
                    <div className="row">
                        <div className='col-md-10 mx-auto row'>
                            <div className='col-md-12 mb-5 text-center'>
                                <h5 className='fs-xs fw-bold text-uppercase indigo-500  wow fadeInUp' data-wow-delay=".2s">Technology Stack</h5>
                                <h4 className='h2 fw-800  wow fadeInUp' data-wow-delay=".4s">Choose Your GIS Technology Stack</h4>
                            </div>
                            <div className='col-md-6 px-4'>
                                <div className='text-center  wow fadeInUp' data-wow-delay=".6s"><img src="/assets/images/gis/esri.png" alt="" width={300} /></div>
                                <p className=' wow fadeInUp' data-wow-delay=".7s">Our developers are proficient in harnessing the capabilities of ESRI&apos;s cutting-edge Geographic Information System (GIS) technology. With expertise in the ArcGIS platform, our developers can craft customized solutions for diverse industries, unlocking the power of spatial analysis, mapping, and location intelligence. Trust Innobayt to transform your vision into reality with innovative GIS solutions tailored to your unique needs.</p>
                            </div>
                            <div className='col-md-6 px-4'>
                                <div className='text-center  wow fadeInUp' data-wow-delay=".6s"><img src="/assets/images/gis/open-source.png" alt="" width={300} /></div>
                                <p className=' wow fadeInUp' data-wow-delay=".7s">Our developers are well-versed in leveraging open-source GIS tools to create tailored solutions. Proficient in harnessing the power of open-source GIS technologies, our team excels in spatial analysis, mapping, and location intelligence. Trust Innobayt to develop customized solutions using open-source GIS tools, aligning with your specific requirements and fostering innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                <ContactCTA title={'Geo-Innovations Beyond Boundaries'} tagline={'Let\'s Build Your Next GIS Masterpiece Together. Reach out to us to uncover unmatched flexibility, reliability, and innovation. Let\'s transcend boundaries, together.'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="GIS-development"/>
            </section>

            <Footer />

        </>
    )
}