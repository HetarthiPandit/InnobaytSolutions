import Link from 'next/link';
import VideoIntro from '../components/videoIntro';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer'
import Script from 'next/script';
import MainNav from '../components/MainNav';
import cloudSvg from '../../../public/assets/images/exhibition/cards/cloud.svg';
import cyberImg from '../../../public/assets/images/cyber/cyber_i.png';
import cloud_security from "../../../public/assets/images/cyber/cloud_security.png";
import data_privacy from "../../../public/assets/images/cyber/data_privacy.png";
import security_opreation from "../../../public/assets/images/cyber/security_opreation.png";
import regularity from "../../../public/assets/images/cyber/regularity.png";
import vapt from "../../../public/assets/images/cyber/vapt.png";
import ot_security from "../../../public/assets/images/cyber/ot_security.png";

import assurance from '../../../public/assets/images/cyber/assurance.png'
import cyber_resilience from '../../../public/assets/images/cyber/cyber_resilience.png'
import ContactCTA from '../components/contactus'

import Contact from '../components/Contact';
import Image from 'next/image';

export default function CyberSecurity() {
    return (
        <>
            <MainNav />
            <div className="container-fluid cyber_security hero-bg ">
                <div className="container">
                    <div className="col-md-10">
                        <h1 className="gradient h1 fw-bold">Digital Protection<br />
                            Services</h1>
                        <p>Your partner in cybersecurity excellence - delivering <br/> cybersecurity consulting, assurance, and resilience for a <br/> secure digital future
                        </p><br/>

                       <a href="#contact" className="page-scroll main-btn">Learn More</a>
                    </div>
                </div>
            </div>
            <section className="kick__start" id="cybersecurity">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <h1 className='gradient fw-800'>Cybersecurity Mastery <br/> Your Shield of Confidence</h1>
                            <p className='text-white'>Your trusted partner in cybersecurity consulting, assessment, and resilience</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".4s">
                            <a className='allCard'>
                                <div className="card h-100" style={{textAlign:"center"}}>
                                    <div className="card-body p-5">
                                        <Image src={cyberImg} alt="Picture of the author" width={100}  className="mb-3" />
                                        <h5 className="card-title mb-3">Cybersecurity Consulting & Advisory</h5>
                                        <p className="card-text">Navigate cybersecurity confidently with our Consulting & Advisory services.
                                                From Risk Advisory to Cloud Security,
                                                we offer strategic insights and a vCISO for tailored leadership, ensuring your
                                                digital assets stay resilient.</p>
                                        <a href="/cyber-security-solutions/cyber-security-consultancy-and-advisory" className="page-scroll main-btn">Learn More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".5s">
                            <a className='allCard'>
                                <div className="card h-100" style={{textAlign:"center"}}>
                                    <div className="card-body p-5">
                                        <Image src={assurance} alt="Picture of the author" width={100}  className="mb-3" />
                                        <h5 className="card-title mb-3">Assurance & Assessment</h5>
                                        <p className="card-text">Elevate your security posture with our comprehensive Assurance & Assessment services. From Regulatory Compliance to VAPT and Cloud Security Assessments, we empower your organization to proactively identify and mitigate vulnerabilities.</p>
                                        <a href="/cyber-security-solutions/assurance-and-assignment" className="page-scroll main-btn">Learn More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay=".6s">
                            <a className='allCard'>
                                <div className="card h-100" style={{textAlign:"center"}}>
                                    <div className="card-body p-5">
                                        <Image src={cyber_resilience} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Cyber Resilience</h5>
                                        <p className="card-text mb-3">Forge a proactive defense against cyber threats with our Cyber Resilience services. As an MSSP, we provide continuous protection, and our SOC ensures real-time monitoring and threat detection, equipping your organization with the agility to thrive in challenges.</p>
                                        <a href="/cyber-security-solutions/cyber-resilience" className="page-scroll main-btn">Learn More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                  
                </div>
            </section>
            <section className="our_services pt-5 pb-5" id="our_services">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 col-sm mx-auto text-center mb-3 wow " data-wow-delay=".3s">
                            <h1 className='fw-800'>Our Services </h1>
                        </div>
                    </div>
                    <div className="row-container">
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center" >
                                    <div className="card-body p-5">
                                        <Image src={cloud_security} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Cloud Security (Azure / AWS)</h5>
                                        <p className="card-text">Secure Azure and AWS environments for data and infrastructure protection in the cloud.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center" >
                                    <div className="card-body p-5">
                                        <Image src={data_privacy} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Data Privacy & Protection</h5>
                                        <p className="card-text">Ensure compliance and safeguard sensitive information with advanced data privacy solutions.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center" >
                                    <div className="card-body p-5">
                                        <Image src={security_opreation} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Security Operations Center (SOC)</h5>
                                        <p className="card-text">Elevate security with real-time monitoring, threat detection, and incident response capabilities.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                  <div className="row-container">
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center" >
                                    <div className="card-body p-5">
                                        <Image src={regularity} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Regulatory Compliance</h5>
                                        <p className="card-text">Navigate regulations effortlessly, ensuring industry-specific and regional compliance standards are met.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center" >
                                    <div className="card-body p-5">
                                        <Image src={vapt} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">VAPT Services</h5>
                                        <p className="card-text">Strengthen defenses through comprehensive Vulnerability Assessment & Penetration Testing solutions.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center" >
                                    <div className="card-body p-5">
                                        <Image src={ot_security} alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">OT Security</h5>
                                        <p className="card-text">Safeguard critical infrastructure, ensuring the continuity and security of your operational technology environment.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            





            <section className="cyber__blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto mb-5 text-center wow fadeInUp" data-wow-delay=".2s">
                            <h6>BLOGS</h6>
                            <h2 className="">Industry Insights</h2>
                            <p>Creativity is a highfalutin word for the work I have to do between now and Tuesday.</p>
                        </div>
                    </div>

                    <div className="row" id="blog-posts">
                        <BlogList />
                    </div>
                </div>
            </section>

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact'>
                <ContactCTA title={'Innovation Secured Risks Defied'} tagline={'Strategic cybersecurity solutions for the modern digital landscape'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Cyber Security Soluctions" />
            </section>

            <Footer />

        </>
    )
}