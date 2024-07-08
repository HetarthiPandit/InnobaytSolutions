import React from 'react'
import CloudServices from '../../components/CloudConsultancy'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Script from 'next/script'
import Image from 'next/image'
import MainNav from '../../components/MainNav'
import Contact from '../../components/Contact'
import BlogList from '../../components/Mobileapp/BlogList'
import ContactCTA from '../../components/contactus'
import TotalImage from '@/../public/assets/images/case-stories/total.png'


export default function Paypark() {
    return (
        <>
            <MainNav />

            <section className='bg-black text-white py-5 hero-paypark'>
                <div className="container-fluid py-5">
                    <div className="container pt-5">
                        <div className="col-md-10 mx-auto text-center py-5">
                            <h1 className="fw-bolder display-4 wow fadeInUp mb-4" data-wow-delay=".2s">Paypark</h1>
                            <h2 className='h2 wow fadeInUp lh-lg' data-wow-delay=".5s">Designing & Delivering an Integrated Value Added Parking Solution
                            </h2>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="section-title mb-5">
                                <h3 className="h2 fw-bold">Overview</h3>
                                <p className="fs-6">Our client, a start up from Dubai wanted to develop a mobile application for their users that could help them formulate complicated SMS parking codes to help them make payments for public parking in UAE. They also wanted to have a automatic mechanism where their users could figure out the parking codes in Dubai without hassle.</p>
                                <p className="fs-6">Our client offers farmers (their customers), soil sampling and testing service that helps the farmers analyze the nutrition content and other parameters of their farm land and can thereby take necessary actions to ensure a good harvest. Once our client assigned a farming field for soil sampling, they use UAVs to collect high resolution images of the field. These images are manually loaded onto a photogrammetry software to create a single orthophoto mosaic file. This area is then divided into smaller sectors and assigned to their soil sampling tractors. Tractors are installed with a Wintex soil sampler equipment that take some samples from each sector. These samples are then collected into a bag and delivered to their soil sampling lab for testing. The test results are then made available for their clients to take necessary action on their farms.</p>
                                <br />
                                <h3 className="h2 fw-bold">Previous/ Usual Process</h3>
                                <p><strong>Proposed Solution for Digitalization</strong></p>
                                <p className="fs-6">In the UAE there are 7 emirates namely – Dubai, Sharjah, Ajman, Ras Al Khaima, Abu Dhabi, Fujairah & Umm Al Quwain and each emirate has a different format to make a payment for the parking. Usually a user going to a new emirate would not know the parking format or the number where the SMS had to be sent. They tend to Google the information online or check with someone nearby.</p>
                                <p className="fs-6">Another problem was specific to Dubai where the parking zones created by the Road and transport authority (RTA) is quiet complex and could some times vary from even one road to another. For eg. There could be an area (eg. Karama) with a parking code starting with 318 while the zone letter depends on the busyness such as:</p>
                                <ol>
                                    <li>Main road side – 318 A (AED 5/ hr)</li>
                                    <li>community road side – 318 C (AED 3/ hr)</li>
                                    <li>parking lot - 318 D (AED 2/ hr)</li>
                                </ol>
                                <p className="fs-6">The parking charges also varies depending on the codes.</p>
                                <br />
                                <h3 className="h2 fw-bold">Challenges with the previous process:</h3>
                                <p className='fs-6'>Having 7 emirates, each with a different parking format/ requirement caused a lot of confusion for users travelling from one Emirate to another as they sometimes missed to pay or sent the wrong SMS code and ended up received fines from the authority.</p>
                                <p className='fs-6'>Due to the complex parking set up In Dubai, users sometimes had to walk in the scorching heat during summers to identify the parking codes and then make a payment. Sometimes they ended up making wrong payments as they entered the code incorrectly which led them to incur fines from the authority.</p>

                                <br />
                                <h3 className="h2 fw-bold">Proposed Solution for Digitalization</h3>
                                <p className='fs-6'>Our team of highly skilled coders developed an iOS, Android & Web app for the customer that was able to reduce the complexity around parking in different Emirates completely. We created a solution where the users could save multiple car number plates in the platform. The platform gave an option to users to select the Emirate through a drop down menu and then click on the number of hours they wanted to park. Once all the sections were made, the user could just click pay and the app auto generated the correct SMS code in the messenger and the user could directly send the SMS and pay without having to search for the format elsewhere.</p>
                                <p className='fs-6'>Another major challenge was around the complexity in the parking codes in Dubai. Our team of highly experienced developers developed a custom web based solution where our client (PayPark) could log in and see the map of Dubai. They could then zoom in and draw polygons (Ge-fencing) on the map where parking’s were located and then mark them with their respective codes. We allowed a feature in the app where, if the users location was turned on, and they open the PayPark app within a geo fenced zone, then they would get a pop up with the exact parking zone which could be clicked directly rather than walking around to find the zones. This was a life saver for people parking in Dubai as it helped ease the parking process of public parking’s in the Emirate.</p>
                            </div>
                        </div>
                        <div className='col-md-12 text-center'>
                            <Link className="main-btn" href="/case-stories"><i className="fa-solid fa-arrow-left"></i> Case Stories </Link>
                        </div>
                    </div>
                </div>
            </section >

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Beyond Clouds Beyond Limits'} tagline={'Dive into the limitless possibilities of cloud computing with Innobayt&apos;s consultation services. Reach out to us to uncover unmatched flexibility, reliability, and innovation. Let&apos;s transcend boundaries, together.'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Paypark" />
            </section>

            <Footer />
        </>
    )
}