import Link from 'next/link';
import VideoIntro from '../components/videoIntro';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer'
import Script from 'next/script';
import MainNav from '../components/MainNav';
import ContactCTA from '../components/contactus'

import fintechCard1 from '../../../public/assets/images/fintech/p1.png';
import fintechCard2 from '../../../public/assets/images/fintech/p2.png';
import fintechCard3 from '../../../public/assets/images/fintech/p3.png';

import list1 from '../../../public/assets/images/fintech/1.png';
import list2 from '../../../public/assets/images/fintech/2.png';
import list3 from '../../../public/assets/images/fintech/3.png';
import list4 from '../../../public/assets/images/fintech/4.png';
import list5 from '../../../public/assets/images/fintech/5.png';

import imgFinanceGate from '../../../public/assets/images/fintech/financegate.png';
import imgPaypark from '../../../public/assets/images/fintech/paypark.png';
import imgRawafid from '../../../public/assets/images/fintech/rawafid.png';

import imgNodejs from '../../../public/assets/images/fintech/nodejs.png';
import imgReact from '../../../public/assets/images/fintech/react.png';
import imgAzure from '../../../public/assets/images/fintech/azure.png';
import imgDP from '../../../public/assets/images/fintech/od.png';

import imgCard1 from '../../../public/assets/images/fintech/l1.png';
import imgCard2 from '../../../public/assets/images/fintech/l2.png';
import imgCard3 from '../../../public/assets/images/fintech/l3.png';
import imgCard4 from '../../../public/assets/images/fintech/l4.png';

import Contact from '../components/Contact';
import Image from 'next/image';

export default function Fintech() {
    return (
        <>
            <MainNav />
            <div className="container-fluid fintech hero-bg">
                <div className="container">
                    <div className="col-md-10 py-5 wow fadeInUp" data-wow-delay=".7s">
                        <h1 className="gradient display-4 fw-bold">Leading the Digital <br />
                            Financial Revolution</h1>
                        <p className='lead lh-base'>Transforming Ideas into Powerful<br />
                            FinTech Solutions
                        </p><br />

                        {/* <a href="#contact" className="page-scroll main-btn">Learn More</a> */}
                    </div>
                </div>
            </div>
            <section className="fintech_cta1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <h5 className='h2 fw-800'>Our Expertise</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4 wow fadeInUp allCard" data-wow-delay=".4s">
                            <div className="card h-100 border-0 py-4" >
                                <div className="card-body p-5 text-center">
                                    <Image src={fintechCard1} alt="Picture of the author" width={75} className="mb-4" />
                                    <h5 className="card-title mb-3 h4">Custom <br /> FinTech Solutions</h5>
                                    <p className="card-text">Tailored mobile & web app solutions for financial institutions and startups, designed to meet unique business needs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 wow fadeInUp allCard" data-wow-delay=".4s">
                            <div className="card h-100 border-0 py-4" >
                                <div className="card-body p-5 text-center">
                                    <Image src={fintechCard2} alt="Picture of the author" width={75} className="mb-4" />
                                    <h5 className="card-title mb-3 h4">Blockchain &<br />
                                        Crypto Development</h5>
                                    <p className="card-text">Leading-edge services harnessing decentralized technologies to enhance security and transparency</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 wow fadeInUp allCard" data-wow-delay=".4s">
                            <div className="card h-100 border-0 py-4" >
                                <div className="card-body p-5 text-center">
                                    <Image src={fintechCard3} alt="Picture of the author" width={75} className="mb-4" />
                                    <h5 className="card-title mb-3 h4">Security &<br />
                                        Compliance</h5>
                                    <p className="card-text">High-standard solutions ensuring data security and regulatory compliance in the ever-evolving financial landscape</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="kick__start" id="cybersecurity">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <h4 className='mb-4'>Cybersecurity for FinTech</h4>
                            <h2 className='mb-4 h1 fw-700'>Cybersecurity Services for FinTech</h2>
                            <p className='text-white'>Our dedicated Cybersecurity Services for FinTech ensures robust protection of your digital assets, sensitive data, and customer information</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-12 mx-auto">
                        <div className='col p-3' >
                            <div className='d-flex gap-3 wow fadeInUp' data-wow-delay=".3s">
                                <div className='me-3'>
                                    <Image src={list1} alt="Picture of the author" width={50} className="mb-3" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-3'>Threat Detection and Prevention</h3>
                                    <p> Proactive measures and advanced threat detection to secure your FinTech platforms against evolving cyber threats </p>
                                </div>
                            </div>
                        </div>
                        <div className='col p-3' >
                            <div className='d-flex gap-3 wow fadeInUp' data-wow-delay=".5s">
                                <div className='me-3'>
                                    <Image src={list2} alt="Picture of the author" width={50} className="mb-3" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-3'>Secure Coding Practices</h3>
                                    <p>Integration of secure coding practices, ensuring your software is fortified against vulnerabilities and potential exploits.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col p-3' >
                            <div className='d-flex gap-3 wow fadeInUp' data-wow-delay=".7s">
                                <div className='me-3'>
                                    <Image src={list3} alt="Picture of the author" width={50} className="mb-3" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-3'>Regulatory Compliance</h3>
                                    <p> Adherence to industry standards, keeping your solutions compliant with data protection and privacy regulations.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col p-3' >
                            <div className='d-flex gap-3 wow fadeInUp' data-wow-delay=".8s">
                                <div className='me-3'>
                                    <Image src={list4} alt="Picture of the author" width={50} className="mb-3" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-3'>Data Encryption and Privacy</h3>
                                    <p> Robust encryption protocols to secure financial transactions and sensitive user data, ensuring confidentiality and privacy.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col p-3' >
                            <div className='d-flex gap-3 wow fadeInUp' data-wow-delay=".9s">
                                <div className='me-3'>
                                    <Image src={list5} alt="Picture of the author" width={50} className="mb-3" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3 className='h6 fw-bold mb-3'>Incident Response and Recovery</h3>
                                    <p>Swift and effective response in the face of a security incident, with a focus on risk mitigation and quick recovery</p>
                                </div>
                            </div>
                        </div>
                        <div className='col p-3' >
                            <Link href="/cyber-security-solutions" className='main-btn px-5 wow fadeInUp' data-wow-delay=".9s">Learn More</Link>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-5 pb-5" id="our_services">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-6 col-sm mx-auto text-center mb-3 wow fadeInUp" data-wow-delay=".3s">
                            <h3 className='fw-800 mb-4'>Recent Projects</h3>
                            <p>Discover a collection of cutting-edge Fintech projects, illustrating our commitment to shaping tomorrow&apos;s finance.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className='container '>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto mb-5">
                            <div className="col-md-7 text-start">
                                <h1 className='h3 mb-2 fw-bold wow fadeInUp' data-wow-delay=".2s">Finance Gate</h1>
                                <h5 className='h6 mb-4 fw-bold wow fadeInUp' data-wow-delay=".3s">Digital Finance Brokerage Platform</h5>
                                <p className='pb-2 wow fadeInUp' data-wow-delay=".4s">
                                    FinanceGate emerges as a digital finance brokerage platform, revolutionizing the way individuals engage with financial markets.
                                    This innovative platform empowers users with tools and insights to make informed investment decisions, simplifying the complexities of digital finance.
                                </p>
                                <p className='pb-2 wow fadeInUp' data-wow-delay=".5s">
                                    As the development engine behind FinanceGate, we conceptualized and implemented a dynamic, responsive, and feature-rich platform. Our solutions enhance user experience, provide real-time market data, and streamline the investment process, positioning FinanceGate as a leader in the digital finance space.
                                </p>
                                <div className='d-flex gap-3'>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".6s">
                                        <Image src={imgNodejs} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".7s">
                                        <Image src={imgReact} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".8s">
                                        <Image src={imgDP} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-5 wow fadeInUp" data-wow-delay=".10s">
                                <Image src={imgFinanceGate} width={600} quality={100} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="py-5 our_services">
                <div className='container pt-5'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto mb-5">
                            <div className="col-md-5 wow fadeInUp" data-wow-delay=".2s">
                                <Image src={imgRawafid} width={600} quality={100} alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-7 text-start">
                                <h1 className='h3 mb-2 fw-bold wow fadeInUp' data-wow-delay=".3s">Rawafid</h1>
                                <h5 className='h6 mb-4 fw-bold wow fadeInUp' data-wow-delay=".4s">Crowdfunding Platform</h5>
                                <p className='pb-2 wow fadeInUp' data-wow-delay=".5s">
                                    Rawafid stands as a groundbreaking crowdfunding platform, proudly earning the distinction of being the second platform to receive approval from the Capital Markets Authority in Oman after BeeHive. It represents a fusion of financial ingenuity and regulatory compliance, providing a space for innovative projects to flourish through community support.
                                </p>
                                <p className='pb-2 wow fadeInUp' data-wow-delay=".6s">
                                    As the technology partner for Rawafid, we collaborated closely to develop a robust, secure, and user-friendly crowdfunding platform. Our solution not only met the stringent regulatory requirements but also incorporated cutting-edge features, ensuring a seamless experience for both project creators and backers.
                                </p>
                                <div className='d-flex gap-3'>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".7s">
                                        <Image src={imgNodejs} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".8s">
                                        <Image src={imgReact} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".9s">
                                        <Image src={imgDP} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section >
            <section className="py-5">
                <div className='container pt-5'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto mb-5">
                            <div className="col-md-7 text-start">
                                <h1 className='h3 mb-2 fw-bold wow fadeInUp' data-wow-delay=".2s">Sustema</h1>
                                <h5 className='h6 mb-4 fw-bold wow fadeInUp' data-wow-delay=".3s">InsureTech</h5>
                                <p className='pb-2 wow fadeInUp' data-wow-delay=".4s">
                                    Sustema is an InsureTech company founded by seasoned underwriters and risk managers. It specializes in behavioral data analytics, offering commercial insurers a powerful tool to enhance underwriting performance. Sus leverages advanced analytics to provide actionable insights into risk assessment and mitigation.
                                </p>
                                <p className='pb-2 wow fadeInUp' data-wow-delay=".5s">
                                    Partnering with Sustema from its inception, we played a key role in developing the technological backbone of their data analytics platform. Our solutions enable Sus to process and analyze vast datasets efficiently, providing insurers with valuable insights to make informed underwriting decisions.
                                </p>
                                <div className='d-flex gap-3'>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".6s">
                                        <Image src={imgNodejs} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".7s">
                                        <Image src={imgReact} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                    <div className='me-3 wow fadeInUp' data-wow-delay=".8s">
                                        <Image src={imgAzure} alt="Picture of the author" height={30} quality={100} className="mb-3" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-5 wow fadeInUp" data-wow-delay=".9s">
                                <Image src={imgPaypark} width={600} quality={100} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                {/* generate four card column with icon image small title and paragraph with small drop shadow for the cards */}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <h3 className='fw-700 mb-4 h3'>Why Choose Us</h3>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                        <div className="col wow fadeInUp" data-wow-delay=".3s">
                            <div className="card h-100 border-0 shadow-lg py-5">
                                <div className="card-body p-4">
                                    <Image src={imgCard1} alt="App Scalability Expertise" height={40} quality={100} className="mb-4" />
                                    <h5 className="card-title mb-3 h6 fw-700">App Scalability<br /> Expertise</h5>
                                    <p className="card-text">Experience specialized app development ensuring high scalability to match your business growth effortlessly</p>
                                </div>
                            </div>
                        </div>
                        <div className="col wow fadeInUp" data-wow-delay=".4s">
                            <div className="card h-100 border-0 shadow-lg py-5">
                                <div className="card-body p-4">
                                    <Image src={imgCard2} alt="App Scalability Expertise" height={40} quality={100} className="mb-4" />
                                    <h5 className="card-title mb-3 h6 fw-700">Exclusive<br />
                                        FinTech Insight</h5>
                                    <p className="card-text">Navigate regulatory complexities with ease. Our exclusive FinTech expertise guarantees compliance, streamlining approval processes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col wow fadeInUp" data-wow-delay=".6s">
                            <div className="card h-100 border-0 shadow-lg py-5">
                                <div className="card-body p-4">
                                    <Image src={imgCard3} alt="App Scalability Expertise" height={40} quality={100} className="mb-4" />
                                    <h5 className="card-title mb-3 h6 fw-700">Robust Cybersecurity<br /> Assurance</h5>
                                    <p className="card-text">Fortify your financial solutions against cyber threats. Our dedicated cybersecurity team ensures the utmost security for your systems</p>
                                </div>
                            </div>
                        </div>
                        <div className="col wow fadeInUp" data-wow-delay=".8s">
                            <div className="card h-100 border-0 shadow-lg py-5">
                                <div className="card-body p-4">
                                    <Image src={imgCard4} alt="App Scalability Expertise" height={40} quality={100} className="mb-4" />
                                    <h5 className="card-title mb-3 h6 fw-700">Dubai-Based Team <br /> Presence</h5>
                                    <p className="card-text">Gain confidence with a local team in our Dubai office. We&apos;re not just a claim – we&apos;re your accessible and trusted partner in the heart of the region</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-5 ib__accordion">
                {/* generate bootstrap accordion */}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className='fw-800 pb-3 wow fadeInUp' data-wow-delay=".3s" >100+ FinTech<br />
                                Solutions Built<br /> Ground Up for Success</h3>
                            <p className='wow fadeInUp' data-wow-delay=".4s">Our expert team seamlessly integrates cutting-edge technology with financial expertise, delivering transformative solutions that optimize operations, enhance security, and drive unparalleled growth.</p>
                        </div>
                        <div className="col-md-8">

                            {/* generate simple accordion with title and paragraph
                             */}

                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                    <h2 className="accordion-header h6" id="headingOne">
                                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Will my idea be kept confidential if I share it with Innobayt?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes. Before detailed discussions, we prioritize the confidentiality of your ideas. We&apos;re happy to sign a Non-Disclosure Agreement (NDA) for added security.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                    <h2 className="accordion-header h6" id="headingTwo">
                                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How does the Non-Disclosure Agreement (NDA) process work?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            Simply put, we offer an NDA before in-depth discussions. This legal agreement ensures the confidentiality of all shared information, protecting your intellectual property.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                                    <h2 className="accordion-header h6" id="headingThree">
                                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Is Innobayt experienced in regulatory compliance for financial software?

                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we prioritize security and compliance in our solutions. Our team is well-versed in financial regulations across UAE, Saudi, Oman and other GCC countries to ensure your software meets industry standards.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay=".9s">
                                    <h2 className="accordion-header h6" id="headingFour">
                                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What makes Innobayt stand out in cybersecurity for FinTech?

                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We prioritize a proactive and comprehensive cybersecurity strategy, combining advanced technologies with industry expertise. Our goal is to fortify your financial ecosystem against evolving cyber threats.
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section >

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Reach Out for FinTech Excellence'} tagline={'Reach out to us for innovative FinTech solutions and personalized service'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Fintech"/>
            </section>

            <Footer />

        </>
    )
}