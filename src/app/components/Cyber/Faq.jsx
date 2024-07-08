'use client'
import React, { useState } from 'react'
export default function Faq({ title, description, faqs }) {

    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <section className='py-5 cloud_colsultancy_cta2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-4 col-12">
                            <div className="cta-content">
                                <h2 className="wow fadeInUp mb-3">{title}</h2>
                                <p className="wow fadeInUp mb-3" style={{}}>{description}</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-12">
                            {faqs.map((item, index) => (
                                <div className="col p-3 faq" key={item.question}>
                                    <div
                                        className="d-flex gap-3"
                                        onClick={() => handleToggle(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="d-flex flex-column">
                                            <h3 className="h6 fw-bold">{item.question}</h3>
                                            <p style={{ display: openIndex === index ? 'block' : 'none' }}>{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
