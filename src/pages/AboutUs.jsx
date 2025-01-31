import React from "react";
import "../components/css/aboutus.css";
import image from "../assets/team1.jpg";
import image1 from "../assets/team2.jpg";
import image2 from "../assets/team3.jpg";

const Aboutus = () => {
  return (
    <main>
      <section className="aboutUsdiv">
        <h1>About Us</h1>
        <h5>CONNECTING THE DOTS OF YOUR EVENTS.</h5>
        <p>
          Events by Perppy's Events plans, designs and produces events tailored
          to your vision! We pride ourselves on creating and managing
          small/intimate events to large scaled events effectively. No matter
          what your budget is, our diverse team and group of vendors are ready
          to make your dream event come true! We are physically located in
          Lagos, Nigeria but we are not only limited to planning within its
          vicinity. We plan events both nationally within Nigeria and
          internationally with a proven track record of successful events across
          the globe. At Events by Perppy, we pour our boundless creativity and
          spark into thinking up fresh, stylish ideas that transform occasions
          into once in a lifetime events. Exquisite weddings, spectacular
          parties, corporate meetings and mind blowing concerts; simply put
          every event we plan is distinctive, extraordinary and completely
          bespoke. Celebrate milestone events in your life with a big or small
          party! From birthday celebrations to anniversaries, Events by Perppy
          highly talented team can design the perfect party for you!
        </p>

        <div className="teamMeetUp">
          <h1>Meet The Team</h1>
          <div className="teamImage">
            <img className="images" src={image} />
            <img className="images" src={image2} />
            <img className="images" src={image1} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
