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


export default function TotalEnergies() {
    return (
        <>
            <MainNav />

            {/* <section className='bg-black text-white py-5 hero-total-energies'>
                <div className="container-fluid py-5">
                    <div className="container pt-5">
                        <div className="col-md-10 mx-auto text-center py-5">
                            <h1 className="fw-bolder display-4 wow fadeInUp mb-4" data-wow-delay=".2s">Total Energies</h1>
                            <h2 className='h2 wow fadeInUp lh-lg' data-wow-delay=".5s">How Innobayt Helped A Lubricant Manufacturer Enhance Its Operational Efficiency
                            </h2>

                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="section-title mb-5">
                                <h3 className="h2 fw-bold">Success Story</h3>
                                <p className="fs-6">Innovation through automation - Innobayt’s custom solutions helped enhance the operational efficiency of a lubricant manufacturer through interconnecting systems and IoT integration.</p>
                                <p className="fs-6">Operational inefficiencies stemming from manual processes and other sources were a huge challenge for a global lubricant manufacturer. Innobayt successfully leverage IoT software development and smart sensors to deliver a robust custom middleware that streamlined the production process and connected their legacy systems that worked in silos. The changes addressed most of the productivity issues in the manufacturing process by minimizing human intervention, automating the processes, and centralizing all data.</p>
                                <br />
                                <h3 className="h2 fw-bold">About the client</h3>
                                <p className="fs-6">Innobayt’s client is a leading manufacturer of industrial and automotive lubricants and is well-known for its commitment to quality, safety, and sustainability. Today, the lubricant manufacturer operates in more than 130 countries and has multiple R&D centers that continuously develop innovative and efficient products for its customers. The client has been around in the market for a significant time and is the go-to lubricant choice for automotive, marine, industrial machinery, aviation, and many other industries.</p>
                                <br />
                                <h3 className="h2 fw-bold">Challenges faced by the client</h3>
                                <p className='fs-6'>The client’s production process before Innobayt’s involvement was full of inconsistencies and challenges. They understood that manual and siloed processes were the main sources of inefficiencies in the system and approached Innobayt to develop an effective solution. Before discussing the changes by Innobayt, it’s relevant to take a brief look at the original operations.</p>
                                <p className='fs-6'>The targeted production line started at the filling lines where bottles were prepared by filling them with the appropriate lubricant. After this, the prepared bottles were then sorted into cartons on a conveyor belt.  A laser printer was then used to print details such as product name, batch number and production date on a label which was then applied manually on cartons.</p>
                                <p className='fs-6'>After the manual labelling process, the cartons passed through a quality control system that accepted or rejected them based on their weight. The accepted cartons were then placed on palettes by a robotic arm, which were wrapped for safety and picked up for subsequent storage and delivery.</p>
                                <p className='fs-6'>The existing process was highly unsatisfactory in terms of operational efficiency and overall productivity. The client faced several challenges and most of them originated from the following 5 sources.</p>
                                <br />
                                <p className='fs-5 fw-bold'>1 – Disconnect between system operations</p>
                                <p className='fs-6'>The previous process consisted of multiple moving parts that operated independently. The production line contained a lot of legacy equipment, used multiple data processing systems, and had no synergy due to little or no collaboration. This lack of centralization created several problems as there were no actionable data or insights from the production setup for helping with decision-making and thereby reducing the possibility to introduce a meaningful change.</p>
                                <br />
                                <p className='fs-5 fw-bold'>2 – Inefficiencies due to manual processes</p>
                                <p className='fs-6'>The assembly line relied on manual intervention at several stages. Starting from the entry of records to the verification of content and the removal of rejected cartons, every step required human intervention which resulted in a lot of inefficiencies.</p>
                                <br />
                                <p className='fs-5 fw-bold'>3 – Lack of real-time data</p>
                                <p className='fs-6'>Decentralization of data and reliance on manual processes also affected the client’s ERP system’s ability to provide essential data when required. Inventory levels, production output, and other important parameters were scattered across multiple systems like SAP, MS Excel, emails, etc. This meant that no one at the plant had a holistic view of the operations at a given time which made their decision-making process quiet tedious and less effective.</p>
                                <br />
                                <p className='fs-5 fw-bold'>4 – Frequent production stoppages</p>
                                <p className='fs-6'>The client also dealt with the issue of frequent production stoppages due to manual intervention. This had been significantly affecting their production efficiency and was one of the major challenges that they wanted to address. Effectively reducing these stoppages was quite difficult because of the lack of accountability and inadequate tracking. The client also had a very limited number of viable options to reduce manual intervention without compromising on other essential parameters.</p>
                                <br />
                                <p className='fs-5 fw-bold'>5 – Little to no tracking of rejections and removals</p>
                                <p className='fs-6'> As reiterated multiple times, most of the client’s challenges were due to inefficient and legacy systems. As the data collected from various stages of the product line were decentralized, it made it difficult to track the rejections and removal of cartons from the production line. This led to discrepancies in inventory, production records, and other essential records.</p>
                                <br />
                                <h3 className="h2 fw-bold">How did Innobayt help?</h3>
                                <Image src={TotalImage} alt="Total Energies" className='img-fluid' width={500} quality={100} />

                                <p className='fs-6'>Innobayt started its process by developing a better understanding of the client’s pain points. Innobayt held multiple workshops and interviews with the concerned teams and the management. Once the expectations were clarified, Innobayt’s experts developed a comprehensive middleware solution designed to target production efficiency by allowing all the existing systems to work synchronously and thereby allowing them to operate at their full potential.</p>
                                <p className='fs-6'>The automated system consisted of a customized middleware that connected all previously siloed systems that were in place such as roller conveyor, weight rejector, label printer, robotic arm etc. Innobayt adopted a five-pronged approach that minimized human input through automation and ensure optimal performance with consistency.</p>
                                <br />
                                <p className='fs-5 fw-bold'>1 – Automation of the sorting process</p>
                                <p className='fs-6'>Innobayt automated the entire sorting process from the conveyor belt to final pelleting. API and PLC based integration allowed the different equipment for printing, rejection, robotic arm and scanning to work together and eliminate the need for any manual oversight.</p>
                                <br />
                                <p className='fs-6'>The offline printing model with manual data entry was replaced with an integrated system that pulled information directly from the client database (SAP) for printing. Innobayt also upgraded the carton and pallet printers, added advanced sensors (SICK photosensor), scanners (ZEBRA QR code scanner, Datalogic QR code scanner) and created an interlinked system with the capability to process and analyse data in real-time.</p>
                                <br />
                                <p className='fs-5 fw-bold'>2 – Enhanced control and transparency over operations</p>
                                <p className='fs-6'>One of the main problems the client faced due to data decentralization was the ineffective tracking of production output and inventories. No one knew how many cartons were rejected or why. This discrepancy in data made it difficult to introduce any improvement in the process and had the potential to result in inaccurate reporting for the client.</p>
                                <p className='fs-6'>Innobayt used a combination of industrial photosensors and QR code scanners to eliminate this issue. Each carton and pallet were assigned a unique code that could be used to track the contents and the location of the carton. Innobayt built a unified web portal that could be accessed by all stakeholders (with role-based access control) that provided access to real time data enabling the system to be more reliable based on which the client could make informed decisions.</p>
                                <br />
                                <p className='fs-5 fw-bold'>3 – Remote management capabilities</p>
                                <p className='fs-6'>With the custom developed admin panel, not only was the client able to keep an eye on all essential parameters and production processes but they could also start, stop and maintain control over the operations by accessing the middleware through the web.</p>
                                <br />
                                <p className='fs-5 fw-bold'>4 – Integration of legacy equipment with IoT based middleware</p>
                                <p className='fs-6'>Any automation system remains incomplete if the legacy systems are unable to interact with the new IoT infrastructure properly. Innobayt improved the weight rejector system by using a PLC to connect its middleware with the legacy setup. This allowed the client to track the rejected cartons   and sort them out separately without interrupting operations.</p>
                                <br />
                                <p className='fs-5 fw-bold'>5 – Uninterrupted production through proactive and reactive maintenance support</p>
                                <p className='fs-6'>Innobayt’s services did not just end upon the completion of development and installation of the customized solution. A proactive and reactive maintenance plan was also developed to ensure the consistency and reliability of the delivered solution.</p>
                                <br />
                                <h3 className="h2 fw-bold">Summary: Innobayt’s innovative approach successfully revamped the client’s production operations</h3>
                                <p className='fs-6'>The client approached Innobayt with an inefficient system unable to perform to its full potential. Different systems worked in silos and required consistent human intervention to operate. Innobayt’s middleware bridged the gap between the client’s hardware and operation systems to fully automate the production process and synergize its output for enhanced productivity and efficiency.</p>
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
                <Contact pageName="Total Energies" />
            </section>

            <Footer />
        </>
    )
}