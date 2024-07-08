"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function Contact({ pageName }) {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Add loading state

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true); // Set loading to true when form is submitted

        const formData = new FormData(event.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        const validationErrors = validateForm(formObject);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false); // Reset loading state
            return;
        }

        const requestData = {
            form: pageName,
            details: {
                Name: formObject.name,
                Email: formObject.email,
                Phone: formObject.phone,
                Enquiry_type: formObject.enquiry_type,
                Messager: formObject.message,
            },
        };
        console.log('requestData', requestData)

        try {
            const response = await fetch('https://nodeadmin.innobaytsolutions.com/api/v1/send-mail', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer YOUR_ACCESS_TOKEN', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            console.log('response', response)

            const responseData = await response.json();
            console.log('responseData', responseData);
            if (responseData.success) {
                if (responseData.data) {
                    console.log('Data received:', responseData.data);
                }
                window.location.href = '/thank-you';
                // toast.success('Message successfully sent');
                window.gtag('event', 'conversion', { 'send_to': 'AW-362401972/FYNBCO2hhpoZELSh56wB' });
                
                event.target.reset();
                setErrors({});
            } else {
                throw new Error(`API Error: ${responseData.message}`);
            }
        } catch (error) {
            console.error(error);
            toast.error('Error, please try resubmitting the form');
        } finally {
            setLoading(false); // Reset loading state regardless of success or failure
        }
    }

    function validateForm(formData) {
        const errors = {};
    
        if (!formData.name || formData.name.trim() === '') {
            errors.name = 'Name is required';
        } else if (!/^[a-zA-Z\s]*$/.test(formData.name.trim())) {
            errors.name = 'Name must contain only letters and spaces';
        }
    
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }
    
        if (!formData.phone) {
            errors.phone = 'Phone number is required';
        } else if (!isValidPhone(formData.phone)) {
            errors.phone = 'Invalid phone number format. It should be a 10-digit number';
        }
    
        if (!formData.message || formData.message.trim() === '') {
            errors.message = 'Message is required';
        }
    
        if (!formData.enquiry_type) {
            errors.enquiry_type = 'Enquiry type is required';
        }
    
        return errors;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function isValidPhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <label htmlFor="name" className="form-label fw-bold">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" autoComplete="name" maxLength={50} name="name"  />
                                {errors.name && <div className="text-danger">{errors.name}</div>}
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="email" className="form-label fw-bold">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" autoComplete="email" maxLength={80} name="email"  />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" autoComplete="phone" maxLength={20} name="phone"  />
                                {errors.phone && <div className="text-danger">{errors.phone}</div>}
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="enquiry" className="form-label fw-bold">Enquiry Type</label>
                                <select className="form-select" id="enquiry" name="enquiry_type" >
                                    <option value="">Select an Enquiry Type</option>
                                    <option value="Enquiry">Enquiry</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Job">Job</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.enquiry_type && <div className="text-danger">{errors.enquiry_type}</div>}
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <label htmlFor="message" className="form-label fw-bold">Message</label>
                                <textarea className="form-control" id="message" rows={4} placeholder="Your Message" name="message" ></textarea>
                                {errors.message && <div className="text-danger">{errors.message}</div>}
                            </div>
                        </div>
                        <div className="row justify-content-end p-3">
                            <button type="submit" className={`main-btn w-25 ${loading ? 'disabled' : ''}`} disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span className="visually-hidden">Loading...</span>
                                    </>
                                ) : (
                                <>Submit</>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
