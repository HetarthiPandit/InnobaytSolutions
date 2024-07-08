import Link from 'next/link';
import VideoIntro from '../../components/videoIntro';
import BlogList from '../../components/BlogList';
import Footer from '../../components/Footer'
import Script from 'next/script';
import DataServices from '../../components/Cyber/DataService';
import Faq from '../../components/Cyber/Faq';
import MainNav from '../../components/MainNav';
import IotSlider from '../../components/IotSlider';
import ClientSlider from '../../components/ClientSlider';
import cloudSvg from '../../../../public/assets/images/exhibition/cards/cloud.svg';
import iotSvg from '../../../../public/assets/images/exhibition/cards/iot.svg';
import iosSvg from '../../../../public/assets/images/exhibition/cards/ios.svg';
import web3Svg from '../../../../public/assets/images/exhibition/cards/web3.svg';
import aiSvg from '../../../../public/assets/images/exhibition/cards/ai.svg';
import gisSvg from '../../../../public/assets/images/exhibition/cards/gis.svg';
import cyberImg from '../../../../public/assets/images/cyber/assurance.png'
import assurance from '../../../../public/assets/images/cyber/assurance.png'
import cyber_resilience from '../../../../public/assets/images/cyber/cyber_resilience.png'
import ContactCTA from '../../components/contactus'

import Contact from '../../components/Contact';
import Image from 'next/image';

const data = [
    {
        title: "Regulatory Compliance",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Ensure compliance with industry regulations such as ISR, NESA, ADHICS, and DHA.",
    },
    {
        title: "Cloud Security Assessments",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Protect your cloud infrastructure with our advanced security assessments",
    },
    {
        title: "IoT- and OT Assessment",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Identify and mitigate risks associated with IoT and Operational Technology.",
    },
    {
        title: "Technical Security Assessments (VAPT)",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Comprehensive Vulnerability Assessment and Penetration Testing for robust security.",
    },
    {
        title: "Cloud Architecture Review",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Evaluate and enhance the security of your cloud architecture for optimal performance.",
    },
    {
        title: "Third Party Risk Management",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Effectively manage third-party risks to secure your supply chain.",
    },
];


const faqs = [
    {
        question: "How often should I conduct Mobile / Web Application Penetration Testing?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "How long does it typically take to complete a Red Team Testing engagement?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "What types of IoT devices can be assessed in IoT Security Testing?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "How often should I conduct a Cloud Security Assessment?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "Does Network Security cover both internal and external threats in the cloud?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },

];

export default function CyberConsaltancy() {
    return (
        <>
            <MainNav />
            <div className="container-fluid assurance_and_assignment hero-bg ">
                <div className="container">
                    <div className="col-md-10">
                        <h1 className="gradient h1 fw-bold">Cyber Confidence <br />
                            Starts Here
                        </h1>
                        <p>Strategic Assessment & Assurance Services for<br />
                            Unrivaled Digital Security
                        </p><br />


                    </div>
                </div>
            </div>

            <section className='service-advisory py-5 white-900'>
                <div className="container">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto">
                            <h1 className='h1 fw-800'>Our Services</h1>
                            <h1 className='h6 fw-800'>Assessment & Assessment Services</h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-10 mx-auto">
                        <DataServices data={data} />
                    </div>
                </div>
            </section>


            <section className="cloud_security pt-5 pb-5" id="our_services">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-8 col-sm mx-auto text-center mb-3 wow " data-wow-delay=".3s">
                            <h1 className='fw-800'>Technical Security Assessments</h1>
                            <p className="small">At Innobayt, we specialize in fortifying your digital defenses through targeted Technical Security Assessments. Our expert team utilizes advanced methodologies and tools to ensure the resilience of your systems. Explore our specialized services!</p>
                        </div>
                    </div>
                    <div className="row-container m-2">
                        <div className="col-md-2 wow fadeInUp" data-wow-delay=".4s" >
                            <a>
                                <div className="card h-100 w-100 text-center service-card" style={{ backgroundColor: '#262551' }}>
                                    <div className="card-body p-4 m-4">
                                        <img src="/assets/images/cyber/assurance/t1.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Mobile Application Penetration Testing</h5>
                                        <p className="card-text small sm">Secure your mobile applications with our rigorous testing, identifying vulnerabilities and ensuring data privacy.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2  wow fadeInUp " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center service-card" style={{ backgroundColor: '#262551' }}>
                                    <div className="card-body p-4 m-4">
                                        <img src="/assets/images/cyber/assurance/t2.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Web Application Penetration Testing</h5>
                                        <p className="card-text small sm">Guard your online presence against cyber threats by identifying and addressing vulnerabilities in your web applications.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2  wow fadeInUp " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center service-card" style={{ backgroundColor: '#262551' }}>
                                    <div className="card-body p-4 m-4">
                                        <img src="/assets/images/cyber/assurance/t3.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">Source Code Review</h5>
                                        <p className="card-text small sm">Elevate your software security with our source code review services ensure robust, secure, and efficient applications. Uncover vulnerabilities with our expert analysis.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2  wow fadeInUp " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center service-card" style={{ backgroundColor: '#262551' }}>
                                    <div className="card-body p-4 m-4">
                                        <img src="/assets/images/cyber/assurance/t4.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3">IoT Security Testing</h5>
                                        <p className="card-text small sm">Ensure the security of your interconnected devices and networks, identifying vulnerabilities to protect your connected ecosystem.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5 cloud_colsultancy_cta2'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <img src="/assets/images/cyber/assurance/c1.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6">
                                <h1 className='h3 mb-3 fw-bold'>Cloud Security Assessment</h1>
                                <h4 className='h5 fw-bold mb-4'>Elevate Your Cloud Security</h4>
                                <p>Gain comprehensive insights into the security posture of your cloud environment. Our Cloud Security Assessment identifies vulnerabilities, assesses risks, and provides actionable recommendations to fortify your digital fortress in the cloud.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5 cloud_colsultancy_cta1'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <h1 className='h3 mb-3 fw-bold'>Cloud Architecture Review</h1>
                                <h4 className='h5 fw-bold mb-4'>Secure Foundations, Strong Cloud</h4>
                                <p>Ensure your cloud architecture aligns with industry best practices and security standards. Our Cloud Architecture Review examines the design and configuration of your cloud environment, delivering a robust foundation for secure operations.</p>
                            </div>
                            <div className="col-md-6">
                                <img src="/assets/images/cyber/assurance/c2.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5 cloud_colsultancy_cta2'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <img src="/assets/images/cyber/assurance/c3.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6">
                                <h1 className='h3 mb-3 fw-bold'>Identity and Access Management (IAM)</h1>

                                <h4 className='h5 fw-bold mb-4'>Effortless Access, Ironclad Security</h4>
                                <p>Empower your organization with a secure and streamlined access control system. Our IAM services meticulously manage user permissions, ensuring that the right individuals have the right access to resources within your cloud environment</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5 cloud_colsultancy_cta1'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <h1 className='h3 mb-3 fw-bold'>Network Security</h1>

                                <h4 className='h5 fw-bold mb-4'>Guardians of Cloud Networks</h4>
                                <p>Safeguard your cloud networks against evolving threats. Our Network Security services implement firewall rules, segmentation, and intrusion prevention, providing robust defense mechanisms to protect your cloud infrastructure.</p>
                            </div>
                            <div className="col-md-6">
                                <img src="/assets/images/cyber/assurance/c4.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5 cloud_colsultancy_cta2'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <img src="/assets/images/cyber/assurance/c5.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6">
                                <h1 className='h3 mb-3 fw-bold'>Endpoint Protection</h1>

                                <h4 className='h5 fw-bold mb-4'>Securing Every Cloud Endpoint</h4>
                                <p>Extend security to your cloud-based endpoints. Our Endpoint Protection services deploy advanced measures to prevent, detect, and respond to threats, ensuring the security of devices accessing your cloud resources.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className='service-advisory py-5 white-900'>
                <div className="container">
                    <Faq title={'Empowering Businesses to Thrive Securely'} description={'Our cybersecurity assessment and assurance services have fortified countless organizations against digital threats, ensuring resilient and risk-resistant operations.'}
                        faqs={faqs} />
                </div>
            </section>





            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Innovation Secured Risks Defied'} tagline={'Strategic cybersecurity solutions for the modern digital landscape'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Assurance And Assignment"/>
            </section>

            <Footer />

        </>
    )
}