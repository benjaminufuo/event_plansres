import React from "react";
import { NavLink } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/css/home.css";
import bg from "../assets/decorserving-wedding-table.jpg";
import bg1 from "../assets/weddings.jpg";
import bg2 from "../assets/social-event.jpg";
import bg3 from "../assets/destination-event.jpg";
import bg4 from "../assets/group-multiethnic-creative-business-people-working-project-having-brainstorming-meeting-team-work-brainstorming-concept.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <section
        className="home-section"
        style={{
          background: `url("https://www.fnpweddings.com/wp-content/uploads/2023/01/banner1-1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <article className="leftsection">
          <h1 className="albumtext">
            Let us help you handle all your Events worries
          </h1>
          <span className="albumtext2">
            Celebrations comes once in while, <br />
            every celebration is beautiful, but yours should be unique
          </span>
          <div className="btn">
            <button className="btnmain">View Album</button>
          </div>
        </article>
        <div className="rightsection"></div>
      </section>
      <section className="secondsectionhome">
        <h1 className="secondsectiontexthome">
          LUXURY WEDDING PLANNING & DESIGN
        </h1>
        <div className="secondsectionimagehome">
          <div className="image1">
            <img
              src={
                "https://www.fnpweddings.com/wp-content/uploads/2023/01/banner1-1.jpg"
              }
              className="imgholder"
            />
            <p className="categories" style={{ color: "white" }}>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/home/services"
              >
                WEDDINGS
              </NavLink>
            </p>
          </div>
          <div className="image2">
            <img
              src={
                "https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/sites/2/2023/11/12195251/Types-of-social-events-Disco.jpg"
              }
              className="imgholder"
            />
            <p className="categories" style={{ backgroundColor: "white" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/home/services"
              >
                SOCIAL EVENT
              </NavLink>
            </p>
          </div>
          <div className="image3">
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              className="imgholder"
            />
            <p className="categories" style={{ color: "white" }}>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/home/services"
              >
                DESTINATION EVENT
              </NavLink>
            </p>
          </div>
          <div className="image4">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhC8fQJ7Nwl6Qf3QXBo0LDnQAn4UX57fVbdQ&s"
              }
              className="imgholder"
            />
            <p className="categories" style={{ backgroundColor: "white" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/home/services"
              >
                CORPORATE EVENT
              </NavLink>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
