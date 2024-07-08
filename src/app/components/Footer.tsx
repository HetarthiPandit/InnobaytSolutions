'use client'
import Link from 'next/link'
import React from 'react'
import LogoFooter from '../../../public/assets/images/logo/white-logo.svg'
import Image1 from '../../../public/assets/images/footer/1.png'
import Image2 from '../../../public/assets/images/footer/2.png'
import Image3 from '../../../public/assets/images/footer/3.png'
import Image4 from '../../../public/assets/images/footer/4.png'
import LocationIcon from '@/../public/assets/images/footer/location_on.svg'
import EmailIcon from '@/../public/assets/images/footer/email.svg'
import MobileIcon from '@/../public/assets/images/footer/Mobile.svg'
import PhoneIcon from '@/../public/assets/images/footer/Phone.svg'
import TwitterIcon from '@/../public/assets/images/footer/twitter_logo.svg'
import InstagramIcon from '@/../public/assets/images/footer/Instagram_Glyph_White.svg'
import FBIcon from '@/../public/assets/images/footer/icons8-facebook.svg'
import LinkedInIcon from '@/../public/assets/images/footer/Linkedin.svg'
import Image from 'next/image'
import Script from 'next/script'
import HomeScripts from './HomeScripts'
import FooterLink from '../components/FooterLink'
import { usePathname } from "next/navigation";


function Footer() {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <>
            <footer className="text-light" id="footer">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-5 wow fadeInUp" data-wow-delay=".3s">
                                <Link href="#">
                                    <Image src={LogoFooter} width={150} alt="Logo" />
                                </Link>
                            </div>
                            <div className='flex mb-5'>
                                <div className="row mb-2 g-2">
                                    <div className="col-6 wow fadeInUp" data-wow-delay=".2s">
                                        <Image src={Image1} width={600} height={340} quality={100} alt="Image 1" className="img-fluid" />
                                    </div>
                                    <div className="col-6 wow fadeInUp" data-wow-delay=".3s">
                                        <Image src={Image2} width={600} height={340} quality={100} alt="Image 2" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row mb-4 g-2">
                                    <div className="col-6 wow fadeInUp" data-wow-delay=".4s">
                                        <Image src={Image3} width={600} height={340} quality={100} alt="Image 3" className="img-fluid" />
                                    </div>
                                    <div className="col-6 wow fadeInUp" data-wow-delay=".5s">
                                        <Image src={Image4} width={600} height={340} quality={100} alt="Image 4" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <ul className="list-unstyled list-inline d-flex gap-2 align-items-center ib___social">
                                    {/* <li className="list-inline-item me-3"><a href="https://www.facebook.com/innobayt/" target="_blank"><i
                                        className="fa-brands fa-facebook h5"></i></a></li>
                                    <li className="list-inline-item me-3"><a href="https://www.instagram.com/innobayt/" target="_blank"><i
                                        className="fa-brands fa-instagram h5"></i></a></li>
                                    <li className="list-inline-item me-3"><a href="https://ae.linkedin.com/company/innobayt-solutions"
                                        target="_blank"><i className="fa-brands fa-linkedin h5"></i></a></li> */}
                                    <li className='d-flex align-items-center justify-content-center rounded-circle wow fadeInUp' data-wow-delay=".3s">
                                        <Link href="https://twitter.com/innobayt" target="_blank" className='lh-1'>
                                            <Image src={TwitterIcon} width={15} alt="Twitter" />
                                        </Link>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-center rounded-circle wow fadeInUp' data-wow-delay=".4s">
                                        <Link href="https://www.facebook.com/innobayt/" target="_blank" className='lh-1'>
                                            <Image src={FBIcon} width={15} alt="Facebook" />
                                        </Link>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-center rounded-circle wow fadeInUp' data-wow-delay=".5s">
                                        <Link href="https://www.instagram.com/innobayt/" target="_blank" className='lh-1'>
                                            <Image src={InstagramIcon} width={15} alt="Instagram" />
                                        </Link>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-center rounded-circle wow fadeInUp' data-wow-delay=".6s">
                                        <Link href="https://ae.linkedin.com/company/innobayt-solutions" target="_blank" className='lh-1'>
                                            <Image src={LinkedInIcon} width={15} alt="LinkedIn" />
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                    <div className='mb-5 wow fadeInUp' data-wow-delay=".4s">
                                        <h6>Home</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="/innobayt-for-startup">Startups</a></li>
                                            <li><FooterLink linkTo="iot" label="Enterprises" /></li>
                                        </ul>
                                    </div>
                                </div>


                                {/* <div className="col-md-1"></div> */}
                                <div className="col-md-4 wow fadeInUp" data-wow-delay=".6s">
                                    <div className='mb-5'>
                                        <h6>Services</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="/mobile-app-development">App Development</a></li>
                                            <li><FooterLink linkTo="iot" label="IoT Development" /></li>
                                            <li><FooterLink linkTo="cloud-consultancy" label="Cloud Consultancy" /></li>
                                            <li><FooterLink linkTo="web-3.0-development" label="Web 3.0 Development" /></li>
                                            <li><FooterLink linkTo="data-and-AI" label="Data & AI Services" /></li>
                                            <li><FooterLink linkTo="GIS-development" label="GIS Development" /></li>
                                            <li><FooterLink linkTo="cyber-security-solutions" label="Cybersecurity Services" /></li>
                                            <li><FooterLink linkTo="fintech" label="Fintech Solutions" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="col-md-1"></div> */}
                                <div className="col-md-3 wow fadeInUp" data-wow-delay=".7s">
                                    <div className='mb-5'>
                                        <h6>Industries</h6>
                                        <ul className="list-unstyled">
                                            <li><a>Manufacturing</a></li>
                                            <li><a>Retail</a></li>
                                            <li><a>Health & Safety</a></li>
                                            <li><a>Smart City</a></li>
                                            <li><a>FinTech</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 wow fadeInUp" data-wow-delay=".8s">
                            <div>
                                <address>
                                    <h6>Address</h6>
                                    <p className='d-flex gap-2'>
                                        {/* <i className='fas fa-map-marker-alt me-2 mt-1 h6'></i> */}
                                        <Image src={LocationIcon} width={20} alt="Address" />
                                        1602, API Trio Office Tower, Al Barsha&nbsp;1,<br />
                                        Sheikh Zayed Road, Dubai</p>
                                    <p className='d-flex gap-2'>
                                        {/* <i className='fas fa-map-marker-alt me-2 mt-1 h6'></i> */}
                                        <Image src={LocationIcon} width={20} alt="Address" />
                                        138, Doddakannelli Karmelaram Post,
                                        Bangalore, India</p>
                                    <p className='d-flex gap-2 align-items-center'>
                                        {/* <i className='fas fa-envelope me-2 h6'></i> */}
                                        <Image src={EmailIcon} width={20} alt="Email" />
                                        <a href="mailto:info@innobaytsolutions.com" className='lh-1'>info@innobaytsolutions.com</a><br />
                                    </p>
                                    <p className='d-flex gap-2 align-items-center'>
                                        <Image src={MobileIcon} width={20} alt="Mobile" />
                                        <a href="tel:+971585348237" className='lh-1'> +971 (58) 534 82 37</a><br />
                                    </p>
                                    <p className='d-flex gap-2 align-items-center'>
                                        <Image src={PhoneIcon} width={20} alt="Phone" />
                                        <a href="tel:+97142685856" className='lh-1'> +971 (4) 2685856</a>
                                    </p>
                                </address>
                            </div>
                        </div>
                    </div >
                    <hr />
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center justify-content-md-start wow fadeInUp" data-wow-delay=".7s">© 2024 innobayt. All rights reserved</div>
                        <div className="col-md-6 gap-3 d-flex justify-content-center justify-content-md-end ">
                            {/* <a className="small" href="#">Privacy Policy</a>
                            <a className="small " href="#">Terms of Service</a> */}
                        </div>
                    </div>
                    {/* <a href="https://wa.me/971585348237?text=Hello%20Innobayt" className="whatsapp_btn" target="_blank"> */}
                    <a href={`https://wa.me/971585348237?text=${pathname === '/fintech' ? 'Hello%20Innobayt%20Fintech%20Service' : 'Hello%20Innobayt'}`}
                        className="whatsapp_btn" target="_blank">
                        Whatsapp
                    </a>
                </div >
            </footer >

            <HomeScripts />
        </>
    )
}

export default Footer




// <footer className="text-light" id="footer">
//                 <div className="container py-4">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="mb-3">
//                                 <Link href="#">
//                                     {/* <img src="assets/images/logo/white-logo.svg" width="150" /> */}
//                                     <Image src={LogoFooter} width={150} alt="Logo" />
//                                 </Link>
//                             </div>
//                             <address>
//                                 <h6>Address</h6>
//                                 <p>
//                                     1602, API Trio Office Tower, Al Barsha 1,<br />
//                                     Sheikh Zayed Road, Dubai</p>
//                                 <h6>Contact</h6>
//                                 <p>
//                                     <a href="tel:+971585348237">M: +971 (58) 534 82 37</a><br />
//                                     <a href="tel:+97142685856">T: +971 (4) 2685856</a><br />
//                                     <a href="mailto:info@innobaytsolutions.com">E:      info@innobaytsolutions.com</a>
//                                 </p>
//                             </address>

//                             <ul className="list-unstyled list-inline">
//                                 <li className="list-inline-item me-3"><a href="https://www.facebook.com/innobayt/" target="_blank"><i
//                                     className="fa-brands fa-facebook h4"></i></a></li>
//                                 <li className="list-inline-item me-3"><a href="https://www.instagram.com/innobayt/" target="_blank"><i
//                                     className="fa-brands fa-instagram h4"></i></a></li>
//                                 <li className="list-inline-item me-3"><a href="https://ae.linkedin.com/company/innobayt-solutions"
//                                     target="_blank"><i className="fa-brands fa-linkedin h4"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="d-flex flex-column flex-lg-row gap-5">
//                                 <div>
//                                     <h6>Home</h6>
//                                     <ul className="list-unstyled">
//                                         <li><a href="/mobile-app-development">Startups</a></li>
//                                         <li><Link href="/iot">Enterprises</Link></li>
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h6>Industries</h6>
//                                     <ul className="list-unstyled">
//                                         <li><a href="#">Manufacturing</a></li>
//                                         <li><a href="#">Retail</a></li>
//                                         <li><a href="#">Health & Safety</a></li>
//                                         <li><a href="#">Smart City</a></li>
//                                         <li><a href="#">FinTech</a></li>
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h6>Services</h6>
//                                     <ul className="list-unstyled">
//                                         <li><a href="/mobile-app-development">App Development</a></li>
//                                         <li><Link href="/iot">IoT Development</Link></li>
//                                         <li><Link href="/cloud-consultancy">Cloud Consultancy</Link></li>
//                                         <li><Link href="/web-3.0-development">Web 3.0 Development</Link></li>
//                                         <li><Link href="/data-and-AI">Data & AI Services</Link></li>
//                                         <li><Link href="/GIS-development">GIS Development</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className="row">
//                         <div className="col-md-6 text-secondary">© 2023 innobayt. All rights reserved</div>
//                         <div className="col-md-6 gap-3 d-flex justify-content-end"><a className=" small text-secondary" href="#">Privacy
//                             Policy</a> <a className="small text-secondary" href="#">Terms of
//                                 Service</a></div>
//                     </div>
//                 </div>
//                 <a href="https://wa.me/971585348237?text=Hello%20Innobayt" className="whatsapp_btn" target="_blank">
//                     Whatsapp
//                 </a>
//             </footer>