import React from "react";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import "./form.css";
import Image from "next/image";
import Thanks from "../../../public/assets/images/thank-you.png";
import Link from "next/link";

function Message() {
  return (
    <>
      <MainNav />
      <div style={{ height: "1000px", background: "#0B0F33" }}>
        <div className="wrapper-2 wow fadeInUp" data-wow-delay=".4s">
          <Image src={Thanks} alt="" />
          <h1 className="text-gradient">Thank you!</h1>
          <p>for contacting us, we will reply promptly</p>
          <p>once your message is received. </p>
          <button className="go-home">
            <Link href="/">home page</Link>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Message;
