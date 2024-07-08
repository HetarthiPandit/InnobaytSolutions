import React from 'react'
import Image from 'next/image'
import EclipseSvg from "@/../../public/assets/images/exhibition/ellipse.svg";

function contactus({ title, tagline }) {
    return (
        <>
            <div className="container  wow fadeInUp" data-wow-delay=".2s">
                <div className="col-md-6 mx-auto mb-5 text-center">
                    <h4>{title}</h4>
                    <p>{tagline}</p>
                </div>
            </div>
            <div className="position-absolute top-0 start-100 translate-middle w-50">
                <Image src={EclipseSvg} alt="" className="" quality={100} />
            </div>
            <div className="position-absolute top-65 start-0 translate-middle w-50">
                <Image src={EclipseSvg} alt="" className="" quality={100} />
            </div>
        </>
    )
}

export default contactus

{/* <h4>Beyond Clouds Beyond Limits</h4>
<p>Dive into the limitless possibilities of cloud computing with Innobayt&apos;s consultation services. Reach out to us to uncover unmatched flexibility, reliability, and innovation. Let&apos;s transcend boundaries, together.</p> */}