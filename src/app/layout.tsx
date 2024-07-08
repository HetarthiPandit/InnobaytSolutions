"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "wow.js/css/libs/animate.css";
import "./globals.css";
import "../../public/assets/css/common.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

// add font awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const WOW = require("wow.js");
    const wow = new WOW({
      // Customize options if needed
      boxClass: "wow", // Default class name for animation (change if needed)
      animateClass: "animated", // Default class for animated elements (change if needed)
      offset: 0, // Distance to trigger the animation (default is 0)
      mobile: true, // Enable animations on mobile devices (default is true)
      live: true, // Live mode for page additions (default is true)
    });
    wow.init();
  }, []);

  return (
    <html lang="en" key="general">
      <GoogleAnalytics GA_MEASUREMENT_ID={"G-362401972"}></GoogleAnalytics>
      <body className={inter.className}>
        <ToastContainer position="top-center" />
        {children}
      </body>
    </html>
  );
}
