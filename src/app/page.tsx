import Image from 'next/image';
// import whiteLogo from '../public/android-chrome-512x512.png'
import whiteLogo from '../../public/assets/images/logo/white-logo.svg';
import heroImage from '../../public/assets/images/home/hero-image.svg';
import cloudSvg from '../../public/assets/images/exhibition/cards/cloud.svg';
import iotSvg from '../../public/assets/images/exhibition/cards/iot.svg';
import iosSvg from '../../public/assets/images/exhibition/cards/ios.svg';
import web3Svg from '../../public/assets/images/exhibition/cards/web3.svg';
import aiSvg from '../../public/assets/images/exhibition/cards/ai.svg';
import gisSvg from '../../public/assets/images/exhibition/cards/gis.svg';
import cyberSvg from '../../public/assets/images/exhibition/cards/cyber.svg';
import fintechSvg from '../../public/assets/images/exhibition/cards/fintech.svg';
import cta1 from '../../public/assets/images/exhibition/cta1.png';
import cta2 from '../../public/assets/images/exhibition/cta2.png';
import type { Metadata } from 'next'
import BlogList from './components/BlogList'
import Link from 'next/link';
import HomeScripts from './components/HomeScripts';
import Footer from './components/Footer';
import MainNav from './components/MainNav';
import Contact from './components/Contact';
import ClientSlider from './components/ClientSlider';
import ContactCTA from './components/contactus'
import './styles.css'


export const metadata: Metadata = {
  title: 'Innobayt',
  description: 'Homepage of Innobayt',
}

// import image from public directory
// import Image from 'next/image'
// import profilePic from '../public/me.png'
//
// export default function Home() {
//   return (
//     <div>
//       <h1>My Homepage</h1>
//       <Image
//         src={profilePic}
//         alt="Picture of the author"
//         width={500}
//         height={500}
//       />
//     </div>
//   )
// }
//




export default function Home() {
  return (<>
    <MainNav />

    {/* <section className="hero-container position-relative ibbbbbs">
      <div className='d-flex align-items-center'>
        <div className="container">
          <div className='row g-5'>
            <div className='col-md-4 d-flex align-items-center'>
              <div className="hero-content wow fadeInLeft" data-wow-delay=".4s">
                <h1 className="d-flex flex-column pb-2 mb-lg-3 mb-3">
                  <span>Think.</span>
                  <span>Connect.</span>
                  <span>Digitize.</span>
                </h1>
                <p className="pb-3">Innobayt &quot;The Home of Innovation&quot; - we help you discover new ways to unlock your business potential by leveraging the power of our unique digital transformation services.</p>
                <a href="#services" className="page-scroll main-btn">Learn More</a>
              </div>
            </div>
            <div className='col-md-8'>
              <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                <img src="assets/images/exhibition/hero.png" alt="Hero Image" className="w-100" />
                <Image
                  src='/assets/images/Frame52.png'
                  alt='Hero Image'
                  width={1700}
                  height={1156}
                  quality={100}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  className="w-100"
                />

                <Image
              src={heroImage}
              width={450}
              alt='Hero Image'
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 20vw"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className='ib___hero'>
      <div className="container-fluid custom-height d-flex flex-column py-5" >
        <div className="row ib_hero__title">
          <div className="col p-5 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".2s"> 
            <div className='container text-center col-md-10 mx-auto'>
              <h1 className='fw-bold  wow fadeInUp' data-wow-duration=".5s" data-wow-delay=".2s" >Think. Connect. Digitize.</h1>
              <p className='font-sm col-md-8 mx-auto  wow fadeInUp' data-wow-duration=".5s" data-wow-delay=".2s">Innobayt &quot;The Home of Innovation&quot; - we help you discover new ways to unlock your business potential by leveraging the power of our unique digital transformation services.</p>
            </div>
          </div>
        </div>
        <div className="row ib_hero__image">
          <div className="col d-flex justify-content-center">
            <Image src={heroImage}
              alt="Hero Image"
              width={1500}
              quality={100}
              style={{ maxWidth: '2000px', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section >

    <div className='container px-5 py-4'>
      <ClientSlider />
    </div>


    {/* <section className="cloud__platform p-5">
      <div className="container text-center">
        <ul className='list-unstyled d-flex flex-column flex-lg-row gap-5 m-0 gap-5 justify-content-center align-items-center'>
          <li><img src='assets/images/exhibition/cloud/azure.png' width={120} /> </li>
          <li><img src='assets/images/exhibition/cloud/ms.png' width={120} /> </li>
          <li><img src='assets/images/exhibition/cloud/gcp.png' width={120} /> </li>
          <li><img src='assets/images/exhibition/cloud/aws.png' width={120} /> </li>
          <li><img src='assets/images/exhibition/cloud/alibaba.png' width={120} /> </li>
        </ul>
      </div>
    </section> */}


    <section className="kick__start" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center mb-5 wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".2s">
            <h6>INNOVATION SIMPLIFIED</h6>
            <h2><span>Kick-start</span> Your Digital Transformation Journey</h2>
            <p>At Innobayt, we specialize in Internet of Things (IoT), Cloud adoption, Data & AI, and
              application
              design & development, shaping the future of businesses and transforming dreams into
              realities.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4 wow fadeInUp " data-wow-delay=".4s">
            <Link href="/cloud-consultancy" className='allCard' >
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  {/* <img src="assets/images/exhibition/cards/cloud.svg" className="mb-3" alt="Card Image"
                  width="75"> */}
                  <Image src={cloudSvg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">Cloud Consultancy</h5>
                  <p className="card-text">Discover new ways to unlock your business potential by
                    leveraging the
                    power of our digital and cloud services.</p>
                  <div className="mt-auto"><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4 wow fadeInUp" data-wow-delay=".4s">
            <Link href="/cyber-security-solutions" className='allCard'>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  <Image src={cyberSvg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">Cybersecurity Services</h5>
                  <p className="card-text">As a cybersecurity leader, Innobayt offers expert solutions tailored to protect businesses through cutting-edge technology and strategic advisory services.</p>
                  <div className="mt-auto"><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4 wow fadeInUp" data-wow-delay=".5s">
            <Link href="/iot" className='allCard'>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  {/* <img src="assets/images/exhibition/cards/iot.svg" className="mb-3" alt="Card Image" width="75"> */}
                  <Image src={iotSvg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">Internet of Things</h5>
                  <p className="card-text">Gain timely and actionable insights to fine-tune business
                    operations,
                    optimize revenue streams, and practice intelligent decision-making.</p>
                  <div className="mt-auto"><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4 wow fadeInUp" data-wow-delay=".6s">
            <a href="/mobile-app-development" className='allCard'>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  {/* <img src="assets/images/exhibition/cards/ios.svg" className="mb-3" alt="Card Image" width="75"> */}
                  <Image src={iosSvg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">App Development</h5>
                  <p className="card-text">Engineering digital solutions by combining our technical
                    expertise with
                    industry experience. Bring your ideas to life with our custom app development
                    service.
                  </p>
                  <div className="mt-auto"><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4 wow fadeInUp" data-wow-delay=".7s">
            <Link href="/web-3.0-development" className='allCard'>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  {/* <img src="assets/images/exhibition/cards/web3.svg" className="mb-3" alt="Card Image" width="75"> */}
                  <Image src={web3Svg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">Web 3.0 Development</h5>
                  <p className="card-text">Get onboard tomorrow&apos;s internet by embracing the latest trends
                    in
                    technology with our Web 3.0 development services.</p>
                  <div className="mt-auto"><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4 wow fadeInUp" data-wow-delay=".8s">
            <Link href="/data-and-AI" className='allCard'>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  {/* <img src="assets/images/exhibition/cards/ai.svg" className="mb-3" alt="Card Image" width="75"> */}
                  <Image src={aiSvg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">Data & Artificial Intelligence</h5>
                  <p className="card-text">Uncover the potential of your most valuable yet underutilized
                    assets
                    through our Data and Artificial Intelligence services</p>
                  <div className="mt-auto"><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4 wow fadeInUp" data-wow-delay=".9s">
            <Link href="/GIS-development" className='allCard'>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  {/* <img src="assets/images/exhibition/cards/gis.svg" className="mb-3" alt="Card Image" width="75"> */}
                  <Image src={gisSvg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">GIS Development</h5>
                  <p className="card-text">Discover the power of Geographic Information System (GIS) and
                    how it
                    can help your business through popular services like ESRI ArcGIS/QGIS,
                    OpenLayers etc.
                  </p>
                  <div className="mt-auto"><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4 wow fadeInUp" data-wow-delay=".9s">
            <Link href="/fintech" className='allCard'>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  <Image src={fintechSvg} alt="Picture of the author" width={50} className="mb-3" />
                  <h5 className="card-title mb-3">FinTech Solutions</h5>
                  <p className="card-text">Innobayt pioneers FinTech solutions, specializing in app development. From Dubai, we redefine financial services with innovation, scalability, and cybersecurity.
                  </p>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="ib__cta2" id="industries">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              className="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between gap-5 align-items-center">
              <div className="w-75 w-md-50 wow fadeInLeft" data-wow-delay=".4s">
                <h4>Innobayt for<br />
                  STARTUPS</h4>
                <p><b>Empowering your startup – from idea to success!</b></p>
                <p className='mb-4'>At Innobayt, we understand the heartbeat of startups – the audacious dreams, the
                  creative
                  sparks, and the relentless drive for success. Our dedicated startup support
                  services are
                  crafted to nurture these aspirations, guiding entrepreneurs through every step
                  of their
                  exhilarating journey.
                </p>
                <a href="/innobayt-for-startup" className="main-btn">Explore</a>
              </div>
              <div className="w-100 text-center wow fadeInRight" data-wow-delay=".4s">
                {/* <img src=" assets/images/exhibition/cta1.png" alt="Hero Image" className="w-100"> */}
                {/* <Image src={cta1} alt="Innobayt for Startups" width={450} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 20vw" /> */}
                <Image src={cta1} alt="Innobayt for Startups" width={450} style={{ maxWidth: '100%', height: 'auto' }} className='w-100' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    {/* <section className="ib__cta2">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="d-flex flex-column flex-lg-row justify-content-between gap-5 align-items-center">
              <div className="w-100 wow fadeInLeft text-center" data-wow-delay=".4s">
                <img src="assets/images/exhibition/cta2.png" alt="Hero Image" className="w-100" />
                <Image src={cta2} alt="Innobayt for Enterprises" width={450} style={{ maxWidth: '100%', height: 'auto' }} className='w-100' />
              </div>
              <div className="w-75 w-md-50 wow fadeInRight" data-wow-delay=".4s">
                <h4>Innobayt for <br /> ENTERPRISES</h4>
                <p><b>Digitally Transforming Industries - One step at a time!</b></p>
                <p className='mb-4'>In the dynamic realm of Industry 4.0, enterprises require more than just solutions – they need strategic partners. Innobayt for Enterprises is precisely that. We specialize in delivering IoT solutions that transcend traditional boundaries. From revolutionizing manufacturing processes to enhancing retail experiences, optimizing smart city initiatives to ensuring health & safety standards, our expertise spans a multitude of industries.
                </p>
                <Link href="/iot" className="main-btn mt-5">Explore</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section> */}


    <section className="ib__tab" id="industriessection">
      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-md-8 text-center mx-auto wow fadeInUp" data-wow-delay=".4s">
            <h6>INNOVATION SIMPLIFIED</h6>
            <h2 className="gradient">Expertise that cuts across
              Industries</h2>
            <p>Innobayt is your gateway to innovation, specializing in a spectrum of industries:
              manufacturing
              precision, retail evolution, smart city solutions, health & safety enhancements,
              wellness
              innovations, and fintech excellence.</p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10 mx-auto mx-auto wow fadeInUp" data-wow-delay=".8s">
            <div className="overflow-scroller mb-5">
              <ul className="nav nav-pills nav-fill gap-3 flex-nowrap" id="myTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="manufacturing-tab" data-bs-toggle="tab"
                    href="#manufacturing" role="tab" aria-controls="manufacturing"
                    aria-selected="true">Manufacturing</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="retails-tab" data-bs-toggle="tab" href="#retails" role="tab"
                    aria-controls="retails" aria-selected="false">Retail</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="health-safety-tab" data-bs-toggle="tab" href="#health-safety"
                    role="tab" aria-controls="health-safety" aria-selected="false">Health & Wellness</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="smart-city-tab" data-bs-toggle="tab" href="#smart-city"
                    role="tab" aria-controls="smart-city" aria-selected="false">Smart City</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="fintech-tab" data-bs-toggle="tab" href="#fintech" role="tab"
                    aria-controls="fintech" aria-selected="false">FinTech</a>
                </li>
              </ul>
            </div>
            <div className="tab-content mb-5" id="myTabContent">
              <div className="tab-pane fade show active" id="manufacturing" role="tabpanel"
                aria-labelledby="manufacturing-tab">
                <div
                  className="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between gap-5 align-items-center">
                  <div className="w-100 w-md-75">
                    <p>Explore our innovative solutions, leveraging technology for trust, compliance, efficiency, and security in manufacturing. </p>
                    <ul>
                      <li>Counterfeit Deterrence: QR codes and a mobile app for proactive anti-counterfeiting.</li>
                      <li>Export Control: QR codes integrated with ERP for global compliance and traceability.</li>
                      <li>Smart Manufacturing: Industry 4.0 automation and tailored solutions for efficient manufacturing.</li>
                      <li>Tallying Solution: Digital automation with QR codes and weighing scales for accurate tracking and enhanced security.</li>
                    </ul>
                    <br />
                    {/* <div className=''>
                      <a href="javascript:void(0)" className="main-btn">Explore</a>
                    </div> */}

                  </div>
                  <div>
                    <img src="assets/images/exhibition/tab1.png" alt="Hero Image" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="retails" role="tabpanel" aria-labelledby="retails-tab">
                <div
                  className="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between gap-5 align-items-center">
                  <div className="w-100 w-md-75">
                    <p>Explore our suite of retail-specific offerings: </p>
                    <ul className='list-styled'>
                      <li>Retail Analytics: Informed decision-making with people counting and analytics. </li>
                      <li>Queue Management: Streamlined customer service with token-based queuing. </li>
                      <li>Smart Visitor Management: Secure and convenient building access. </li>
                      <li>Smart Parking Solutions: IoT-enabled parking optimization and efficient enforcement. </li>
                      <li>Retail Display Solutions: AR/VR and holographic displays for in-store innovation.</li>
                    </ul>
                    <p>Beyond our pre-built solutions, we specialize in crafting bespoke IoT solutions tailored to your retail needs. </p>
                    <br />
                    {/* <div><a href="javascript:void(0)" className="main-btn">Explore</a></div> */}
                  </div>
                  <div>
                    <img src="assets/images/exhibition/tab2.png" alt="Hero Image" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="health-safety" role="tabpanel"
                aria-labelledby="health-safety-tab">
                <div
                  className="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between gap-5 align-items-center">
                  <div className="w-100 w-md-75">
                    <h3>Health & Wellness</h3>
                    <p>At Innobayt, we lead the charge in re-shaping health and wellness experiences. 
                      From pioneering a cutting-edge digital fitness solution in Dubai to developing online medical consultation platforms and wellness or meditation apps, we&apos;re dedicated to transforming lives through technology.
                      <br/>
                      <br/>
                      Join us in the digital wellness revolution, where innovation meets well-being.
                    </p>
                    {/* <a href="javascript:void(0)" className="main-btn">Explore</a> */}
                  </div>
                  <div>
                    <img src="assets/images/exhibition/tab3.png" alt="Hero Image" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="smart-city" role="tabpanel" aria-labelledby="smart-city-tab">
                <div
                  className="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between gap-5 align-items-center">
                  <div className="w-100 w-md-75">
                    <h3>Smart City</h3>
                    <p>Reshaping Urban Living: Our Smart City Solutions redefine cities with
                      IoT, data
                      analytics, sustainability, and safety. Join us in building smarter,
                      connected,
                      and eco-friendly communities</p>
                    {/* <a href="javascript:void(0)" className="main-btn">Explore</a> */}
                  </div>
                  <div>
                    <img src="assets/images/exhibition/tab4.png" alt="Hero Image" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="fintech" role="tabpanel" aria-labelledby="fintech-tab">
                <div
                  className="d-flex flex-column flex-column-reverse flex-lg-row justify-content-between gap-5 align-items-center">
                  <div className="w-100 w-md-75">
                    <p>Empower your financial future with Innobayt, offering specialized app development and FinTech solutions. Choose us for innovative scalability, exclusive regulatory expertise, robust cybersecurity, and a local team presence in Dubai. </p>
                    <ul>
                      <li>Custom FinTech Solutions: Tailored software for financial institutions and start-ups.</li>
                      <li>Blockchain and Cryptocurrency Development: Decentralized technologies for enhanced security.</li>
                      <li>Mobile and Web Applications: Intuitive, responsive platforms for exceptional user experiences.</li>
                      <li>Cybersecurity Services: Robust measures for safeguarding your financial ecosystem.</li>
                    </ul>
                    <br />
                    <div className=''>
                      <Link href="/fintech" className="main-btn">Explore</Link>
                    </div>
                  </div>
                  <div>
                    <img src="assets/images/exhibition/tab5.png" alt="Hero Image" className="w-100" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>



    <section className="ib__blog">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mb-5 text-center wow fadeInUp" data-wow-delay=".2s">
            <h6>NEWS & ARTICLES</h6>
            <h2 className="gradient">Industry Insights</h2>
            <p>Dive into our thoughtfully curated articles, where industry experts, visionaries, and
              tech
              enthusiasts converge to explore the latest trends, transformative technologies, and
              groundbreaking ideas.</p>
          </div>
        </div>
        <div className="row" id="blog-posts">
          <BlogList />
        </div>
      </div>
    </section>


    <section className="ib__cta_secondary overflow-hidden position-relative" id='contact_form'>
      <ContactCTA title='Contact Us' tagline='Startup dreamers and corporate giants, your aspirations find a home here. Reach out to us now, and let&apos;s script your success story, chapter by chapter.' />
    </section>
    <section className='contact_form'>
      <Contact pageName="Home" />
    </section>

    <Footer />
  </>
  )
}
