import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');
import { render } from '@react-email/render';
import { Email } from '../../components/ContactTemplate';

// Handles POST requests to /api


export async function POST(request) {

    const username = process.env.IB_USERNAME;
    const password = process.env.IB_PASSWORD;
    const myEmail = process.env.IB_EMAIL;

    const formData = await request.formData()
    const honeypot_field = formData.get('honeypot_field')

    // validate form data for spam emails
    if (honeypot_field !== '') {
        return NextResponse.json({ message: "Error: form submission failed" })
    }

    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const enquiry_type = formData.get('enquiry_type')
    const message = formData.get('message')

    // create transporter object
    // var transporter = nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: username,
    //         pass: password
    //     }
    // });



    // const transporter = nodemailer.createTransport({
    //     host: "smtp-mail.outlook.com",
    //     port: 587,
    //     tls: {
    //         ciphers: "SSLv3",
    //         rejectUnauthorized: false,
    //     },

    //     auth: {

    //         user: username,
    //         pass: password
    //     }
    // });

    // gmail transporter for node mailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: username,
            pass: password,
        },
    });

    try {

        const emailHtml = render(<Email
            name={name}
            email={email}
            phone={phone}
            message={message}
            url="https://example.com" />);

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Innobayt website:  ${enquiry_type}`,
            // html: `
            // <p>Name: ${name} </p>
            // <p>Email: ${email} </p>
            // <p>Phone: ${phone} </p>
            // <p>Enquiry: ${enquiry_type} </p>
            // <p>Message: ${message} </p>
            // `,
            html: emailHtml
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}