import Link from 'next/link';
import VideoIntro from '../components/videoIntro';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer'
import Script from 'next/script';
import MainNav from '../components/MainNav';
import IotSlider from '../components/IotSlider';
import ClientSlider from '../components/ClientSlider';
import cloudSvg from '../../../public/assets/images/exhibition/cards/cloud.svg';
import iotSvg from '../../../public/assets/images/exhibition/cards/iot.svg';
import iosSvg from '../../../public/assets/images/exhibition/cards/ios.svg';
import web3Svg from '../../../public/assets/images/exhibition/cards/web3.svg';
import aiSvg from '../../../public/assets/images/exhibition/cards/ai.svg';
import gisSvg from '../../../public/assets/images/exhibition/cards/gis.svg';

import Contact from '../components/Contact';
import Image from 'next/image';

export default function PrivacyPolicy() {
    return (
        <>
            <MainNav />
            <Footer />
        </>
    )
}