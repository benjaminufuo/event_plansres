import React from "react";
import "../components/css/login.css";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const Login = () => {
  return (
    <main className="loginmain">
      <section className="loginsubmain">
        <h1 className="loginheader">log in</h1>
        <form className="login-form">
          <div
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />
            <FaUser className="usericon" />
          </div>
          <div
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <IoIosLock className="lockicon" />
          </div>
          <label className="checkbox">
            <input type="checkbox" className="checkboxtik" />
            Remember me
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              Forgot password
            </a>
          </label>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
