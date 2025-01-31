import React from "react";
import "../components/css/contact.css";
import contactlogo from "../assets/Logo.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <main className="contactDiv">
      <section
        className="contactSection"
        style={{
          backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/1684232643069-LL3CSO5IBNJLXMB40H9G/BFA_37459_5207572%2Bweb.jpg?format=750w")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="contactText">
          <h1>Get in touch</h1>
          <p>
            We are here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>
      </section>
      <section className="contactbottom">
        <div className="contacslogo">
          <img src={contactlogo} className="contactlogo" />
        </div>
        <div className="phone">
          <IoMdCall
            size={40}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "40px",
            }}
          />
          <p style={{ fontWeight: "600" }}>882-254-663</p>
        </div>

        <div className="email">
          <MdEmail
            size={40}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "40px",
            }}
          />
          <p style={{ fontWeight: "600" }}>info@eventsbyperpy.com</p>
        </div>
        <div className="socialmedia">
          <FaInstagram
            size={40}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "40px",
            }}
          />
          <FaFacebookSquare
            size={40}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "40px",
            }}
          />
          <FaXTwitter
            size={40}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "40px",
            }}
          />
          <FaWhatsapp
            size={40}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "40px",
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
