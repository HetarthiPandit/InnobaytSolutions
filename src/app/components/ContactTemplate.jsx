
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';
import { Row } from '@react-email/row';
import { Column } from '@react-email/column';

export function Email(props) {
    const { name, email, phone, message, url } = props;

    // return (
    //     <Html lang="en">
    //         <Row>
    //             <Column>Name: {name}</Column>
    //             <Column>Email: {email}</Column>
    //             <Column>Phone: {phone}</Column>
    //             <Column>Message: {message}</Column>
    //         </Row>
    //         <Button href={url}>Click me</Button>
    //     </Html>
    // );
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <title>Contact Form Submission</title>
                <style>
                    {`
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                  }
                  .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                  }
                  h1 {
                    color: #333;
                  }
                  p {
                    color: #555;
                  }
                  .message {
                    padding: 15px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    margin-top: 20px;
                  }
                `}
                </style>
            </head>
            <body>
                <div className="container">
                    <h3>Contact Form Submission</h3>
                    <p>You&apos;ve received a new message from the contact form:</p>
                    <div className="message">
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone:</strong>  {phone}</p>
                        <p><strong>Message:</strong> {message}</p>
                    </div>
                </div>
            </body>
        </html>
    );
}



