import Link from 'next/link';
import VideoIntro from '../../components/videoIntro';
import BlogList from '../../components/BlogList';
import Footer from '../../components/Footer'
import Script from 'next/script';
import DataServices from '../../components/Cyber/DataService'
import MainNav from '../../components/MainNav';
import IotSlider from '../../components/IotSlider';
import ClientSlider from '../../components/ClientSlider';
import cloudSvg from '../../../../public/assets/images/exhibition/cards/cloud.svg';
import incedent from "../../../../public/assets/images/cyber/incedent.png";
import configration from "../../../../public/assets/images/cyber/configration.png";
import risk_magement from "../../../../public/assets/images/cyber/risk_magement.png";
import identity from "../../../../public/assets/images/cyber/identity.png";
import data_encryption from "../../../../public/assets/images/cyber/data_encryption.png";
import monitor from "../../../../public/assets/images/cyber/monitor.png";
import ContactCTA from '../../components/contactus'
import Faq from '../../components/Cyber/Faq';
import Contact from '../../components/Contact';
import Image from 'next/image';

const data = [
    {
        title: "Risk Advisory",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Comprehensive risk assessments and strategies tailored to your organization's needs",
    },
    {
        title: "Regulatory Compliance: ISR & NESA",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Expert guidance on complying with ISR & NESA regulations to fortify your cybersecurity posture",
    },
    {
        title: "ISO 27001",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Achieve and maintain ISO 27001 certification with our proven methodologies",
    },
    {
        title: "SOC-II",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Strengthen your security controls and meet SOC-II compliance standards",
    },
    {
        title: "PCI DSS",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Protect payment card data with our PCI DSS compliance solutions",
    },
    {
        title: "Cloud Security (Microsoft Azure, AWS)",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Secure your cloud infrastructure with customized solutions for Azure and AWS",
    },
    {
        title: "Data Privacy - PDPL, GDPR, ISO 27701",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Navigate complex data privacy regulations seamlessly and ensure compliance",
    },
    {
        title: "Virtual CISO",
        image: "/assets/images/cyber/risk.svg",
        description:
            "Access expert cybersecurity leadership on demand with our Virtual CISO services",
    },
];
const faqs = [
    {
        question: "What is the importance of ISO 27001 certification?",
        answer: "ISO 27001 certification signifies that your organization has implemented robust information security management systems. It enhances data protection, builds trust with stakeholders, and helps meet regulatory requirements.",
    },
    {
        question: "How can Innobayt assist with Cloud Security on Microsoft Azure and AWS?",
        answer: "Answer: It's recommended to conduct Penetration Testing regularly, especially after significant updates or changes to your mobile / web applications. Regular assessments help maintain a strong defense against evolving threats.",
    },
    {
        question: "How can Innobayt help with Regulatory Compliance (ISR & NESA)?",
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
            <div className="container-fluid consultancy_and_advisory hero-bg ">
                <div className="container">
                    <div className="col-md-10">
                        <h1 className="gradient h1 fw-bold">Securing Your <br />
                            Digital Future
                        </h1>
                        <p>Expert Cybersecurity Consulting <br />
                            & Advisory Services
                        </p><br />


                    </div>
                </div>
            </div>

            <section className='service-advisory py-5 white-900'>
                <div className="container">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto">
                            <h1 className='h1 fw-800'>Our Services</h1>
                            <h1 className='h6 fw-800'>Cybersecurity Consulting & Advisory Services</h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-10 mx-auto">
                        <DataServices data={data} />
                    </div>
                </div>
            </section>


            <section className="cloud_security pt-5 pb-5" id="our_services">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-8 col-sm mx-auto text-center mb-3 wow " data-wow-delay=".3s">
                            <h1 className='fw-800'>Cloud Security</h1>
                            <p className="">Cloud Security Services: Securing Your Digital Transformation</p>
                            <p className="small">Our Cloud Security services, tailored for Microsoft Azure and Amazon Web Services (AWS), are designed to fortify your cloud infrastructure and safeguard your digital assets</p>
                        </div>
                    </div>
                    <div className="row-container m-3">
                        <div className="col-md-3  wow fadeInUp" data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center cloud_card" >
                                    <div className="card-body m-3">
                                        <Image src={risk_magement} alt="Picture of the author" width={75} className="mt-4 mb-4" />
                                        <h5 className="card-title mb-3">Risk Assessment and Mitigation</h5>
                                        <p className="card-text cloud_card_sub_text">Our team conducts comprehensive risk assessments specific to Microsoft Azure or AWS, identifying potential vulnerabilities and developing strategic mitigation plans. We prioritize risk reduction while optimizing your cloud environment for peak security performance.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3  wow fadeInUp " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center cloud_card" >
                                    <div className="card-body m-3">
                                        <Image src={identity} alt="Picture of the author" width={75} className="mt-4 mb-4" />
                                        <h5 className="card-title mb-3">Identity and Access Management (IAM)</h5>
                                        <p className="card-text cloud_card_sub_text">Effective IAM is critical in the cloud. We implement robust identity and access controls, ensuring that only authorized personnel can access your Azure or AWS resources. From single sign-on (SSO) to multi-factor authentication (MFA), we enhance your cloud security posture.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3  wow fadeInUp " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center cloud_card" >
                                    <div className="card-body m-3">
                                        <Image src={data_encryption} alt="Picture of the author" width={75} className="mt-4 mb-4" />
                                        <h5 className="card-title mb-3">Data Encryption and Privacy</h5>
                                        <p className="card-text cloud_card_sub_text">Protecting your data is non-negotiable. Our Azure and AWS security services include robust encryption protocols, both in transit and at rest. We help you navigate data privacy regulations and implement measures to safeguard sensitive information.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row-container m-3">
                        <div className="col-md-3  wow fadeInUp  " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center cloud_card" >
                                    <div className="card-body m-3">
                                        <Image src={monitor} alt="Picture of the author" width={75} className="mt-4 mb-4" />
                                        <h5 className="card-title mb-3">Continuous Monitoring and Threat Detection</h5>
                                        <p className="card-text cloud_card_sub_text">Prevention is key, but so is early detection. Our continuous monitoring and threat detection protocols ensure that any anomalies or potential security threats are identified and addressed promptly, minimizing the risk of data breaches.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3  wow fadeInUp " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center cloud_card" >
                                    <div className="card-body m-3">
                                        <Image src={configration} alt="Picture of the author" width={75} className="mt-4 mb-4" />
                                        <h5 className="card-title mb-3">Configuration Management</h5>
                                        <p className="card-text cloud_card_sub_text">Both Azure & AWS offers a wealth of configuration options, but misconfigurations can lead to vulnerabilities. We optimize your cloud configurations, adhering to best practices and industry standards to enhance your cloud security posture.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3  wow fadeInUp " data-wow-delay=".4s">
                            <a>
                                <div className="card h-100 w-100 text-center cloud_card" >
                                    <div className="card-body m-3">
                                        <Image src={data_encryption} alt="Picture of the author" width={75} className="mt-4 mb-4" />
                                        <h5 className="card-title mb-3">Incident Response and Recovery</h5>
                                        <p className="card-text cloud_card_sub_text">In the event of a security incident, our Azure & AWS security services include a comprehensive incident response plan. We guide you through the recovery process, minimizing downtime and ensuring a swift return to normal operations.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-5 mb-4">
                        <a href='#contact' className="page-scroll main-btn">Secure Your Cloud Now</a>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-5">
                <div className="container-fluid">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto">
                            <h1 className='h1 fw-800'>Data Privacy Excellence</h1>
                            <h1 className='h6 '>Navigating UAE PDPL, GDPR, and ISO 27701</h1>
                        </div>
                    </div>
                    <div className="row row-cols-12 row-cols-sm-12 row-cols-md-12 col-md-10 mx-auto  ">
                        <div className="col p-3" key={"item.title"}>
                            <div className="row d-flex gap-3 justify-content-center align-items-center">
                                <div className='flex-column col'>
                                    <img src={"/assets/images/cyber/UAE_data_law.png"} className='image-container' alt="Image" />
                                </div>
                                <div className=" flex-column col">
                                    <h3 className="h6 fw-bold">UAE Personal Data Protection Law (PDPL)</h3>
                                    <p>The UAE PDPL sets forth comprehensive regulations for the processing of personal data. At Innobayt, we guide organizations through the intricacies of the PDPL, ensuring compliance with its provisions. From data mapping to consent management, our tailored solutions empower you to navigate the nuances of this regional legislation seamlessly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-12 row-cols-sm-12 row-cols-md-12 col-md-10 mx-auto  ">
                        <div className="col p-3" key={"item.title"}>
                            <div className="row d-flex gap-3 justify-content-center align-items-center">
                                <div className=" flex-column col">
                                    <h3 className="h6 fw-bold">General Data Protection Regulation (GDPR)</h3>
                                    <p>For organizations operating in or dealing with European markets, compliance with the GDPR is imperative. Our GDPR services cover data subject rights, data protection impact assessments (DPIAs), and the appointment of Data Protection Officers (DPOs), ensuring your operations align with the stringent requirements of the European Union.</p>
                                </div>
                                <div className='flex-column col'>
                                    <img src={"/assets/images/cyber/genral_data.png"} className='image-container' alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-12 row-cols-sm-12 row-cols-md-12 col-md-10 mx-auto  ">
                        <div className="col p-3" key={"item.title"}>
                            <div className="row d-flex gap-3 justify-content-center align-items-center">
                                <div className='flex-column col'>
                                    <img src={"/assets/images/cyber/privacy_info.png"} className='image-container' alt="Image" />
                                </div>
                                <div className=" flex-column col">
                                    <h3 className="h6 fw-bold">ISO 27701: <br />
                                        Privacy Information Management System (PIMS)</h3>
                                    <p>ISO 27701 extends the ISO 27001 framework to include privacy considerations. As a natural extension of our ISO 27001 services, we assist organizations in implementing and maintaining a Privacy Information Management System. This ensures that your approach to data privacy aligns with international standards, instilling confidence in your stakeholders..</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a href='#contact' className="page-scroll main-btn">Request Data Privacy Consultation</a>
                </div>
            </section>
            <section className="pt-5 pb-5 virtual_ciso">
                <div className="container-fluid ">
                    <div className="row row-cols-12 row-cols-sm-12 row-cols-md-12 col-md-10 mx-auto  ">
                        <div className="col p-3" key={"item.title"}>
                            <div className="row d-flex gap-3 justify-content-center align-items-center">

                                <div className=" flex-column col">
                                    <h3 className="h6 fw-bold">Virtual CISO Service</h3>
                                    <p>Strengthen your cybersecurity with our Virtual Chief Information Security Officer (vCISO) services. Benefit from expert guidance on policies, risk management, and compliance without the need for a full-time in-house executive. Secure your business with tailored strategies and proactive threat intelligence.</p>
                                    <div className='d-flex'>
                                        <a href="#contact" className="page-scroll main-btn d-block">Learn More</a>
                                    </div>
                                </div>
                                <div className='flex-column col'>
                                    <img src={"/assets/images/cyber/virtual_ciso.png"} className='virtual_image' alt="Image" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <section className='service-advisory py-5 white-900'>
                <div className="container">
                    <Faq title={'Empowering Businesses Against Digital Threats'}
                        description={'We have fortified our clients defenses with cutting-edge cybersecurity solutions, ensuring uninterrupted operations in an ever-evolving threat landscape.'}
                        faqs={faqs} />
                </div>
            </section>

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact'>
                <ContactCTA title={'Innovation Secured Risks Defied'} tagline={'Strategic cybersecurity solutions for the modern digital landscape'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Cyber Security Consultancy And Advisory"/>
            </section>

            <Footer />

        </>
    )
}