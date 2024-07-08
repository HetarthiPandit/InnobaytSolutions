import React from 'react'
import CloudServices from './../components/CloudConsultancy'
import Link from 'next/link'
import Footer from '../components/Footer'
import Script from 'next/script'
import Image from 'next/image'
import MainNav from '../components/MainNav'
import Contact from '../components/Contact'
import BlogList from '../components/Mobileapp/BlogList'
import ContactCTA from '../components/contactus'


export default function CloudConsultancy() {
    return (
        <>
            <MainNav />

            <section className='cloud_consultancy_hero'>
                <div className="container-fluid">
                    <div className="container pt-5">
                        {/* <div className="overlay"></div> */}
                        <div className="col-md-8 mx-auto text-center py-5">
                            <h1 className="gradient fw-bolder display-2 wow fadeInUp" data-wow-delay=".2s">Embrace<br />
                                Cloud Excellence</h1>
                            <p className='h6 lh-base wow fadeInUp' data-wow-delay=".5s"> Our expertise across Azure & AWS cloud platforms makes us the right partner to help design & architect your digital solutions built for the future. Our cloud services include architecture design & review, migration, optimization, cloud security, DevOps and more!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cloud__platform p-5">
                <div className="container text-center">
                    <ul className='list-unstyled d-flex flex-column flex-lg-row gap-5 m-0 gap-5 justify-content-center align-items-center'>
                        <li className="wow fadeInUp" data-wow-delay=".2s"><img src='assets/images/exhibition/cloud/azure.png' width={120} /> </li>
                        <li className="wow fadeInUp" data-wow-delay=".3s"><img src='assets/images/exhibition/cloud/ms.png' width={120} /> </li>
                        <li className="wow fadeInUp" data-wow-delay=".4s"><img src='assets/images/exhibition/cloud/gcp.png' width={120} /> </li>
                        <li className="wow fadeInUp" data-wow-delay=".5s"><img src='assets/images/exhibition/cloud/aws.png' width={120} /> </li>
                        <li className="wow fadeInUp" data-wow-delay=".6s"><img src='assets/images/exhibition/cloud/alibaba.png' width={120} /> </li>
                    </ul>
                </div>
            </section>

            <section className='py-5'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-10 mx-auto">
                        <CloudServices />
                    </div>
                </div>
            </section>

            <section className='py-5 cloud_colsultancy_cta1 bg-light'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6">
                                {/* <h2 className='h6 text-capitalize small indigo-500'>OUR CLOUD EXPERTISE</h2> */}
                                <h1 className='h3 mb-4 fw-bold wow fadeInUp' data-wow-delay=".2s">Azure Expertise</h1>

                                {/* <h6>Track Business Expenses until its Millisecond</h6> */}
                                <h5 className='h6 fw-bold mb-4 indigo-500 wow fadeInUp' data-wow-delay=".3s">Azure Certified Experts at Your Service</h5>
                                <ul className='list-unstyled'>
                                    <li className='mb-1 d-flex gap-2 wow fadeInUp' data-wow-delay=".4s">
                                        <div><img src="/assets/images/exhibition/cloud-consultancy/tick-circle.svg" alt="" width={20} /></div>
                                        <p>Azure Infrastructure Services – Virtual Machines, VM Scale Sets, VNet Configuration, Load balancer configuration and more!</p>
                                    </li>
                                    <li className='mb-1 d-flex gap-2 wow fadeInUp' data-wow-delay=".5s">
                                        <div><img src="/assets/images/exhibition/cloud-consultancy/tick-circle.svg" alt="" width={20} /></div>
                                        <p>Azure Database as a Service – Azure MySQL Database, Azure SQL Database, Azure Cosmos DB, Azure PostgreSQL and more!</p>
                                    </li>
                                    <li className='mb-1 d-flex gap-2 wow fadeInUp' data-wow-delay=".6s">
                                        <div><img src="/assets/images/exhibition/cloud-consultancy/tick-circle.svg" alt="" width={20} /></div>
                                        <p>Azure Cognitive Services – Conversational language understanding, Speech to text services, Sentiment analysis, Computer Vision, Face Recognition Service and more!</p>
                                    </li>
                                    <li className='mb-1 d-flex gap-2 wow fadeInUp' data-wow-delay=".7s">
                                        <div><img src="/assets/images/exhibition/cloud-consultancy/tick-circle.svg" alt="" width={20} /></div>
                                        <p>Azure Serverless Services – Azure Logic Apps, Azure Functions, Azure Kubernetes Service and more!</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/exhibition/cloud/azure_db.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-5 cloud_colsultancy_cta2'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <img src="/assets/images/exhibition/cloud/aws_db.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6">
                                {/* <h2 className='h6 text-capitalize small indigo-500'>OUR CLOUD EXPERTISE</h2> */}
                                <h1 className='h3 mb-4 fw-bold wow fadeInUp' data-wow-delay=".2s">AWS Expertise</h1>

                                {/* <h6>Track Business Expenses until its Milisecond</h6> */}
                                <h5 className='h6 fw-bold mb-4 indigo-500 wow fadeInUp' data-wow-delay=".3s">Your AWS Journey, Elevated</h5>
                                <ul className='list-unstyled'>
                                    <li className='mb-1 d-flex gap-2 wow fadeInUp' data-wow-delay=".4s">
                                        <div><img src="/assets/images/exhibition/cloud-consultancy/tick-circle.svg" alt="" width={20} /></div>
                                        <p>AWS Infrastructure Services – AWS EC2, EC2 Auto Scaling, Amazon VPC, Elastic Load Balancing services and more!</p>
                                    </li>
                                    <li className='mb-1 d-flex gap-2 wow fadeInUp' data-wow-delay=".5s">
                                        <div><img src="/assets/images/exhibition/cloud-consultancy/tick-circle.svg" alt="" width={20} /></div>
                                        <p>AWS Serverless Services – AWS Lambda Services, Elastic Kubernetes Service, Elastic Container Services and more!</p>
                                    </li>
                                    <li className='mb-1 d-flex gap-2 wow fadeInUp' data-wow-delay=".6s">
                                        <div><img src="/assets/images/exhibition/cloud-consultancy/tick-circle.svg" alt="" width={20} /></div>
                                        <p>AWS Database as a Service – Amazon RDS, Amazon Redshift, Amazon DynamoDB, Amazon Aurora and more!</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <section className='cloud_colsultancy_cta3'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto mb-5">
                            <div className="col-md-6">
                                <h1 className='h3 mb-5 fw-bold wow fadeInUp ' data-wow-delay=".2s">Data & AI Services</h1>
                                <h5 className='indigo-500 h6 fw-bold wow fadeInUp ' data-wow-delay=".3s">Azure Synapse Analysis</h5>
                                <p className='pb-4 wow fadeInUp ' data-wow-delay=".4s">
                                    Do you have data sources spread across multiple databases or cloud platforms? Azure Synapse Analysis enables you to ingest data from multiple data sources (90+ data sources supported) into a single pool to effectively analyse all your data from one place.
                                </p>
                                <Link href='/data-and-AI' className='main-btn wow fadeInUp ' data-wow-delay=".5s">Data & AI Services</Link>
                            </div>
                            <div className="col-md-6 wow fadeInUp " data-wow-delay=".6s">
                                <img src="/assets/images/exhibition/cloud-consultancy/cta3.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-10 mx-auto d-flex flex-column flex-lg-row align-items-top gap-5">
                            <div className='flex-fill col-md-6 mb-4 wow fadeInUp' data-wow-delay=".7s">
                                <h2 className='h6 fw-bold indigo-500'>Power BI</h2>
                                <p>Fraud is a deliberate act (or failure to act) with the intention of obtaining an unauthorized benefit, either for oneself or for the institution.</p>
                                <img src="/assets/images/exhibition/cloud-consultancy/pbi.png" alt="" className='w-100' />
                            </div>
                            <div className='flex-fill col-md-6 mb-4 wow fadeInUp' data-wow-delay=".8s">
                                <h2 className='h6 fw-bold indigo-500'>Machine Learning</h2>
                                <p>by using deception or false suggestions or suppression of truth or other unethical means, which are believed and relied upon by. <br /> &nbsp;</p>
                                <img src="/assets/images/exhibition/cloud-consultancy/ml.png" alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cloud_colsultancy_cta4'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-4 wow fadeInUp" data-wow-delay=".4s">
                                <img src="/assets/images/exhibition/cloud-consultancy/cloud-net.png" alt="" className='img-fluid' width={250} />
                            </div>
                            <div className="col-md-8">
                                <h2 className='h3 mb-5 fw-bold wow fadeInUp' data-wow-delay=".2s">Cloud-powered <br />IoT Solutions</h2>
                                <div className='row'>
                                    <div className='col-md-6 wow fadeInUp' data-wow-delay=".3s">
                                        <img src="/assets/images/exhibition/cloud-consultancy/cloudNetWifi.svg" alt="" width={50} className='mb-3' />
                                        <h5 className='h6 fw-bold'>Azure IoT Services</h5>
                                        <p>We specialize in Azure IoT Services such as Azure IoT Hub, Azure IoT Central, Azure IoT Edge, Azure Time Series Insights and more!</p>
                                    </div>
                                    <div className='col-md-6 wow fadeInUp' data-wow-delay=".4s">
                                        <img src="/assets/images/exhibition/cloud-consultancy/cloudNetHot.svg" alt="" width={50} className='mb-3' />
                                        <h5 className='h6 fw-bold'>Azure Digital Twin</h5>
                                        <p>Create scalable digital models of your physical assets to collect & display real-time data using the power of Azure cloud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='cloud_colsultancy_chat_bot'>
                <div className='container'>
                    <div className='text-center mb-5'>
                        <h4 className='fw-bold wow fadeInUp' data-wow-delay=".2s">Chatbot Development</h4>
                    </div>
                    <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-3 align-items-center col-md-10 mx-auto align-items-stretch">
                        <div className="col rounded p-4 wow fadeInUp" data-wow-delay=".3s">
                            <img src="/assets/images/exhibition/cloud-consultancy/chatbot1.svg" alt="" width={50} className='mb-3' />
                            <h4 className='h6 small fw-bold'>FAQ bot (QnA bot service)</h4>
                            <p>Easily build FAQ (QnA) bots that can point to any data source of frequently asked questions & responses.</p>
                        </div>
                        <div className="col rounded p-4 wow fadeInUp" data-wow-delay=".4s">
                            <img src="/assets/images/exhibition/cloud-consultancy/chatbot1.svg" alt="" width={50} className='mb-3' />
                            <h4 className='h6 small fw-bold'>Custom Bot Scenarios</h4>
                            <p>More complex bots to meet custom scenarios such as customer / sales support, technical support, appointment booking etc.</p>
                        </div>
                        <div className="col rounded p-4 wow fadeInUp" data-wow-delay=".5s">
                            <img src="/assets/images/exhibition/cloud-consultancy/chatbot1.svg" alt="" width={50} className='mb-3' />
                            <h4 className='h6 small fw-bold'>Healthcare bot</h4>
                            <p>Highly scalable AI-powered chatbots customized for healthcare industry meeting compliance requirements & privacy protected to HIPAA standards.</p>
                        </div>
                        <div className="col rounded p-4 wow fadeInUp" data-wow-delay=".6s">
                            <img src="/assets/images/exhibition/cloud-consultancy/chatbot1.svg" alt="" width={50} className='mb-3' />
                            <h4 className='h6 small fw-bold'>Cognitive Chatbots</h4>
                            <p>Conversational bots where your customers can interact using natural language powered by Azure Cognitive Services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
                <ContactCTA title={'Beyond Clouds Beyond Limits'} tagline={'Dive into the limitless possibilities of cloud computing with Innobayt&apos;s consultation services. Reach out to us to uncover unmatched flexibility, reliability, and innovation. Let&apos;s transcend boundaries, together.'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="Cloud Consultancy" />
            </section>

            <Footer />
        </>
    )
}