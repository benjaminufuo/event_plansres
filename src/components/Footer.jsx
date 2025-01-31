import React from "react";
import "../components/css/footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <main className="footercontainer">
        <section className="footeritems">
          <div className="footeritem1">
            <div className="socials">
              <FaFacebookSquare />
              <FaXTwitter />
              <FaInstagram />
              <FaWhatsapp />
            </div>
            <p className="copyrights">
              Copyrights © 2025 EVENTS BY PERPPY <br />
              All rights reserved
            </p>
          </div>
          <div className="footeritem2">
            <p className="newsletter">Join a Newsletter</p>
            <label className="label">
              Your Email
              <input
                type="Email"
                placeholder="Enter Your Email"
                className="footerinput"
              />
            </label>
            <button className="subscribe">Subscribe</button>
          </div>
          <div className="footeritem3">
            <p className="getintouch">Get in Touch</p>
            <div className="location">
              <FaLocationDot />
              <p>162 Muyibi Street Olodi Apapa Lagos</p>
            </div>
            <div className="email">
              <MdEmail />
              <p>Eventsbyperpy@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Footer;
