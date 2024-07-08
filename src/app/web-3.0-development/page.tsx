import React from 'react'
import Link from 'next/link'
import Web3Services from '../components/web3/Web3Service'
import GameDevelopment from '../components/web3/GameDev'
import Footer from '../components/Footer'
import Script from 'next/script'
import MainNav from '../components/MainNav'
import Contact from '../components/Contact'
import BlogList from '../components/Mobileapp/BlogList'
import ContactCTA from '../components/contactus'

export default function Web3Development() {
    return (
        <>

            <MainNav />

            <section className='web3_hero'>
                <div className="container-fluid">
                    <div className="container pt-5">
                        <div className="col-md-8 mx-auto text-center py-5">
                            <h1 className="fw-800 display-2 wow fadeInUp" data-wow-delay=".2s">What is Web 3.0?</h1>
                            <p className='h6 lh-base wow fadeInUp' data-wow-delay=".5s">
                                Have you been hearing a lot about Web 3.0 lately? Web 3.0 is the future of web & internet powered by concepts such as metaverse, blockchain technology, NFTs, cryptocurrencies, decentralization, smart contracts & virtual reality. Reach out to us to build custom Web 3.0 solutions using these cutting-edge technologies to get your business ready for the future!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
      
            <section className='py-5'>
                <div className="container">
                    <div className='row mb-4'>
                        <div className="col-md-8 text-center mx-auto">
                            <h6 className='small indigo-500 wow fadeInUp' data-wow-delay=".2s">OUR WEB 3.0 EXPERTISE</h6>
                            <h1 className='h3 fw-800 wow fadeInUp' data-wow-delay=".4s">Web 3.0 Services</h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 col-md-10 mx-auto">
                        <Web3Services />
                    </div>
                </div>
            </section>


            <section className='py-5 web3_cta1'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-10 mx-auto row'>
                            <div className='col-md-12 mb-5'>
                                <h5 className='fs-xs fw-bold text-uppercase indigo-500 wow fadeInUp' data-wow-delay=".2s">Blockchain technologies</h5>
                                <h4 className='h2 fw-800 wow fadeInUp' data-wow-delay=".5s">Choose Your Blockchain</h4>
                            </div>
                            <div className='col-md-6'>
                                <div className='text-center wow fadeInUp' data-wow-delay=".2s"><img src="/assets/images/exhibition/web3/etherium.png" alt="" width={300} /></div>
                                <p className='wow fadeInUp' data-wow-delay=".5s">Our developers are experienced in developing solutions powered by Ethereum smart contracts and integrating with Ethereum wallets such as Phantom.</p>
                            </div>
                            <div className='col-md-6'>
                                <div className='text-center wow fadeInUp' data-wow-delay=".2s"><img src="/assets/images/exhibition/web3/solana.png" alt="" width={300} /></div>
                                <p className='wow fadeInUp' data-wow-delay=".5s">Our developers are experienced in developing solutions powered by Solana smart contracts and integrating with Solana wallets such as Metamask.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='web3_cta2'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-10 mx-auto row'>
                            <div className='col-md-12 mb-5'>
                                <h5 className='fs-xs fw-bold text-uppercase indigo-500 wow fadeInUp' data-wow-delay=".2s">Valuable Metrics</h5>
                                <h4 className='h2 fw-800 wow fadeInUp' data-wow-delay=".2s">Immersive Experience</h4>
                            </div>
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 col-md-12'>
                                <div className='col pe-3 mb-5'>
                                    <h4 className='h5 fw-700 wow fadeInUp' data-wow-delay=".3s">Virtual Reality Apps</h4>
                                    <p className='wow fadeInUp' data-wow-delay=".5s">Design beautiful mobile apps with 3D features, designed for VR devices such as Oculus, Vive, Quest and more!</p>
                                </div>
                                <div className='col pe-3 mb-5'>
                                    <h4 className='h5 fw-700 wow fadeInUp' data-wow-delay=".3s">Augmented Reality Apps</h4>
                                    <p className='wow fadeInUp' data-wow-delay=".5s">Launch the camera of your smartphone to view a live stream of your surroundings while superimposing digital assests</p>
                                </div>
                                <div className='col pe-3 mb-5 wow fadeInUp' data-wow-delay=".3s">
                                    <h4 className='h5 fw-700'>Holographic Display Apps</h4>
                                    <p className='wow fadeInUp' data-wow-delay=".5s">3D applications designed for holographic displays that do not require any wearable or smartphone to interact with.</p>
                                </div>
                                <div className='col pe-3 mb-5 wow fadeInUp' data-wow-delay=".3s">
                                    <h4 className='h5 fw-700'>HoloLens Development</h4>
                                    <p className='wow fadeInUp' data-wow-delay=".5s">Have you ever heard of Mixed Reality? HoloLens takes you to a whole new world of experience – visit us to experience!</p>
                                </div>
                                <div className='col pe-3 mb-5 wow fadeInUp' data-wow-delay=".3s">
                                    <h4 className='h5 fw-700'>Gesture Controlled App Development</h4>
                                    <p className='wow fadeInUp' data-wow-delay=".5s">Most natural way of interacting you’re your apps using gestures powered by Kinect, LeapMotion etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='web3_cta3'>
                <div className='container'>
                    <div className='col-md-8 mx-auto row text-center mb-5'>
                        <h2 className='wow fadeInUp' data-wow-delay=".2s">Game Development</h2>
                       <p className='wow fadeInUp' data-wow-delay=".5s"> Innobayt offers the best game development services with a key focus on designs and performance. Our team of highly skilled game developers can help you with building high performance games in iOS, Android, Windows, and Web both in 2D or 3D versions in line requirements and vision of the game. Our end-to-end game development offerings ensures you have the right partner on the job.</p>
                    </div>
                    <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 col-md-10 mx-auto game_dev_items position-relative text-center'>
                        <GameDevelopment />
                    </div>
                </div>
            </section>

            <section className='web3_cta4'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-12 text-center mb-5'>
                            <h1 className='h2 fw-700 wow fadeInUp' data-wow-delay=".6s">Game Development Services</h1>
                        </div>
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row align-items-center col-md-10 mx-auto mb-5">
                            <div className="col-md-6 me-0 me-md-5 p-3">
                                <h1 className='h3 mb-2 fw-bold wow fadeInUp' data-wow-delay=".2s">Game Development Services</h1>
                                <p className=' wow fadeInUp' data-wow-delay=".5s">
                                    See how we helped our client use technologies like satellites, drones, soil sampling machines, QR code scanners and AI to use in farming and agricultural enabling them to deliver optimized farming solutions to farmers around the world.
                                </p>
                            </div>
                            <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/exhibition/web3/Unity.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row align-items-center col-md-10 mx-auto">
                            <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <img src="/assets/images/exhibition/web3/unreal.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6 ms-0 ms-md-5 p-3">
                                <h1 className='h3 mb-2 fw-bold wow fadeInUp' data-wow-delay=".2s">Game Development Services</h1>
                                <p className='wow fadeInUp' data-wow-delay=".5s">
                                    See how we helped our client use technologies like satellites, drones, soil sampling machines, QR code scanners and AI to use in farming and agricultural enabling them to deliver optimized farming solutions to farmers around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='web3_cta5'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-column-reverse flex-lg-row gap-5 align-items-center col-md-10 mx-auto mb-5">
                            <div className="col-md-6">
                                <h1 className='h4 mb-3 fw-bold wow fadeInUp' data-wow-delay=".2s">iOS Game Development</h1>
                                <p className='lh-lg wow fadeInUp' data-wow-delay=".5s">
                                    Our iOS game development skill originates from the way that our group of iOS gaming designers have reliably produced unimaginable games for the Apple gadgets, with high emphasis on performance and designs. Our iOS games have navigated exceptional riddles and interesting critical thinking games alongside endless runner games, activity spectacles, and that&apos;s only the tip of the iceberg. We make ideal use of Apple gadgets to deliver the games in full brilliance.
                                </p>
                            </div>
                            <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <img src="/assets/images/exhibition/web3/ios.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='web3_cta6'>
                <div className='container'>
                    <div className="row">
                        <div className="d-flex flex-column flex-lg-row gap-5 align-items-center col-md-10 mx-auto">
                            <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <img src="/assets/images/exhibition/web3/androidGameDevelopment.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6">
                                <h2 className='h4 mb-3 fw-bold wow fadeInUp' data-wow-delay=".2s">Android Game Development</h2>
                                <p className='wow fadeInUp' data-wow-delay=".5s">Android has now attained an immense portion of the overall gaming industry due a massive expansion of gadgets across the world. Our expertise in creating Android games lies in the simplicity, seamless gameplay, high resolution graphics, intuitive elements, and most importantly a team of highly skilled and experience android game developers!! Moreover, our android games are carefully built with to meet performance while also consuming the least processor speed.</p>
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
                <ContactCTA title={'Innovate Fearlessly With Web 3.0'} tagline={'Dive into the limitless possibilities of cloud computing with Innobayt\'s consultation services. Reach out to us to uncover unmatched flexibility, reliability, and innovation. Let\'s transcend boundaries, together.'} />
            </section>
            <section className='contact_form'>
                <Contact pageName="WEB 3.0 Development"/>
            </section>

            <Footer />
        </>
    )
}