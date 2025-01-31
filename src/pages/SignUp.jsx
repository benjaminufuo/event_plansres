import React from "react";
import "../components/css/signup.css";

const SignUp = () => {
  return (
    <main className="signup-section">
      <section className="signup-container">
        <h1 className="signupheader">Sign-up Details</h1>
        <form className="signup-form">
          <div className="name-box">
            <input
              type="First Name"
              placeholder="First Name"
              className="input-boxname"
            />
            <input
              type="lastname"
              placeholder="Last Name"
              className="input-boxname"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="input-box"
          />
          <input type="password" placeholder="Password" className="input-box" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-box"
          />
          <label
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              gap: "10px",
            }}
          >
            <input type="checkbox" />I agree to the terms and conditions
          </label>
          <button type="submit" className="signup-button">
            Sign up
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "10%",
              gap: "10px",
            }}
          >
            <h1 style={{ color: "white", fontSize: "20px" }}>
              already have an account?
            </h1>
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              sign in
            </a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
