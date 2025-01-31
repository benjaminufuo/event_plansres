import React from "react";
import "../components/css/album.css";
import gallery from "./Myalbum";
const Album = () => {
  return (
    <>
      <main className="albumain">
        <span className="albtext1">ALBUM</span>
        <div
          style={{
            width: "100%",
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input className="albuinput" type="text" placeholder="Search" />
        </div>

        {gallery.map((item, index) => (
          <section className="albsection" key={index}>
            <div className="textholder">
              <img className="albimage" src={item.img} />
              <p className="albtext2">{item.title}</p>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Album;
