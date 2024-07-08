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
        title: "Threat Intelligence",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Stay ahead of emerging threats with our real-time threat intelligence feeds and analysis",
    },
    {
        title: "Endpoint Protection",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Secure your endpoints with advanced solutions that detect and prevent malware, ransomware, and other malicious activities",
    },
    {
        title: "Network Security",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Fortify your network against unauthorized access, data breaches, and other cyber threats with our robust network security solutions",
    },
    {
        title: "Incident Response",
        image: "/assets/images/cyber/risk.svg",
        description:
            "In the event of a security incident, our rapid incident response team is ready to minimize damage and restore normalcy swiftly",
    },
    {
        title: "Security Awareness Training",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Equip your team with the knowledge and skills needed to recognize and mitigate security risks",
    },
];

const points = [
    {
        title: "Proactive Threat Management",
        image: "/assets/images/cyber/resilience/check.svg",
        imageSize: 25,
        description:
            "Our team of cybersecurity experts employs cutting-edge technologies to identify and neutralize threats before they impact your organization.",
    },
    {
        title: "Tailored Solutions",
        image: "/assets/images/cyber/resilience/check.svg",
        imageSize: 25,
        description:
            "We understand that every business is unique. Our customized solutions are designed to address your specific cybersecurity needs and challenges.",
    },
    {
        title: "Cybersecurity Education",
        image: "/assets/images/cyber/resilience/check.svg",
        imageSize: 25,
        description:
            "Knowledge is power. We empower your team with ongoing training and awareness programs to enhance your organization's overall security posture.",
    },
    {
        title: "24/7 Security Operations Center (SOC)",
        image: "/assets/images/cyber/resilience/check.svg",
        imageSize: 25,
        description:
            "Our dedicated SOC ensures constant vigilance, providing real-time monitoring and rapid response to any security incidents.",
    },
    {
        title: "Compliance Assurance",
        image: "/assets/images/cyber/resilience/check.svg",
        imageSize: 25,
        description:
            "Stay ahead of regulatory requirements with our compliance-focused services, ensuring your organization meets industry standards and regulations",
    },
];


const faqs = [
    {
        question: "Does your SOC operate 24/7?",
        answer: "Yes, our SOC operates around the clock with a team of dedicated analysts and advanced technologies, ensuring constant monitoring, incident analysis, and threat hunting to safeguard your organization",
    },
    {
        question: "How much does Innobayt's SOC services cost?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "How can MSSP services benefit my organization?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "Is Innobayt’s cybersecurity services suitable for small businesses?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "What is the significance of PCI DSS compliance for my business?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },

];

export default function CyberConsaltancy() {
    return (
        <>
            <MainNav />
            <div className="container-fluid cyber_resilience hero-bg">
                <div className="container">
                    <div className="col-md-10">
                        <h1 className="gradient h1 mb-3 fw-bold">Cyber <br />
                            Resilience Services
                        </h1>
                        <h4>Fortifying Your Digital Frontier Against <br />
                            Unseen Threats
                        </h4><br />


                    </div>
                </div>
            </div>



            <section className='service-advisory py-5 white-900 m-5 bg-light'>
                <div className="container">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto" >
                            <h5 className='h5 mb-5 fw-bold'>Why Choose Us?</h5>
                            <h1 className='h1 fw-800 mb-4'>Managed Security Service Provider (MSSP)</h1>
                            <p>In today&apos;s interconnected world, cybersecurity is not just a necessity; it&apos;s a strategic imperative. As a leading Managed Security Service Provider (MSSP), we specialize in providing comprehensive solutions that safeguard your digital assets, allowing you to focus on what you do best—growing your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='service-advisory py-5 white-900'>
                <div className="container">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto" >
                            <h6 className='h6'>Secure Operations</h6>
                            <h1 className='h1 fw-800'>MSSP & SOC Services</h1>
                            <p>Experience defensive excellence with our MSSP and SOC services. We provide robust security solutions, combining advanced threat intelligence, 24/7 monitoring, and rapid response capabilities. Safeguard your digital assets with our tailored security expertise.</p>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4 mb-4">
                        <img src="/assets/images/cyber/resilience/s1.png" alt="" className='img-fluid' />
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-10 mx-auto">
                        <DataServices data={points} />
                    </div>
                </div>
            </section>

            <section className='service-advisory py-5 white-900' style={{ background: '#151432' }}>
                <div className="container">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto text-white" >
                            <h5 className='h5 fw-800'>MSSP Services</h5>
                            <h1 className='h1 fw-800'>Managed Security Service Provider (MSSP) Services</h1>
                            <p>In an era where cyber threats are constantly evolving, your organization needs more than just security measures—it needs a comprehensive, adaptive strategy. Our MSSP services go beyond traditional cybersecurity, providing a proactive and dynamic defense against the latest threats.</p>
                            <h5 className='h5 fw-800'>Our MSSP Offerings:</h5>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-10 mx-auto text-white">
                        <DataServices data={data} />
                    </div>
                </div>
            </section>

            <section className='py-5 cloud_colsultancy_cta1'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                <h6 className='h6 mb-3 fw-bold indigo-500'>SOC Services</h6>

                                <h1 className='h1 fw-bold mb-4'>Security Operations Center (SOC) Excellence</h1>
                                <p>In a digital landscape teeming with threats, having a Security Operations Center (SOC) is not just a necessity—it&apos;s a strategic advantage. Our SOC services are designed to provide real-time threat detection, response, and mitigation, ensuring your organization remains secure and resilient.</p>
                            </div>
                            <div className="col-md-6">
                                <img src="/assets/images/cyber/resilience/s2.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5" id="our_services">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-sm mx-auto mb-3 wow" data-wow-delay=".3s">
                            <h5 className='fw-800'>Key SOC Features: </h5>
                        </div>
                    </div>
                    <div className="row-container">
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100" style={{ border: 'none' }}>
                                    <div className="card-body p-5">
                                        <img src="/assets/images/cyber/resilience/k1.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3 fw-bold">24/7 Monitoring</h5>
                                        <p className="card-text">Our SOC operates around the clock, providing continuous monitoring to detect and respond to security incidents promptly.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100" style={{ border: 'none' }}>
                                    <div className="card-body p-5">
                                        <img src="/assets/images/cyber/resilience/k2.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3 fw-bold">Incident Analysis</h5>
                                        <p className="card-text">Our team of analysts investigates and analyzes security incidents, providing detailed insights for proactive threat management.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100" style={{ border: 'none' }}>
                                    <div className="card-body p-5">
                                        <img src="/assets/images/cyber/resilience/k3.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3 fw-bold">Threat Hunting</h5>
                                        <p className="card-text">Stay ahead of potential threats with our proactive threat hunting services, identifying and neutralizing threats before they escalate</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row-container">
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100" style={{ border: 'none' }}>
                                    <div className="card-body p-5">
                                        <img src="/assets/images/cyber/resilience/k4.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3 fw-bold">Log Management</h5>
                                        <p className="card-text">Effectively manage and analyze logs to identify patterns, anomalies, and potential security risks</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100" style={{ border: 'none' }}>
                                    <div className="card-body p-5">
                                        <img src="/assets/images/cyber/resilience/k5.png" alt="Picture of the author" width={75} className="mb-3" />
                                        <h5 className="card-title mb-3 fw-bold">Customized Reporting</h5>
                                        <p className="card-text">Receive regular, detailed reports on your organization&apos;s security status, incidents, and recommendations for continuous improvement</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 mb-3 wow fadeInUp" data-wow-delay=".4s">
                        </div>
                    </div>
                </div>
            </section>



            <section className='service-advisory py-5 white-900'>
                <div className="container">
                    <Faq title={'Guardians of Your Digital Fortress'}
                        description={'Our cutting-edge MSSP and SOC services fortify cyber defenses, ensuring our clients navigate the evolving threat landscape with confidence and resilience.'}
                        faqs={faqs} />
                </div>
            </section>





            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Innovation Secured Risks Defied'} tagline={'Strategic cybersecurity solutions for the modern digital landscape'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Cyber Resilience"/>
            </section>

            <Footer />

        </>
    )
}