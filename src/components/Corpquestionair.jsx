import React, { useReducer, useState, useEffect } from "react";
import "../components/css/questionair.css";
import img from "../assets/Logo.jpg";

const initialState = {
  typeOfEvent: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  typeOfServiceNeeded: "",
  goalForThisProject: "",
  dateOfEvent: "",
  expectedBudget: "",
  anyOtherInfomation: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Corpquestionair = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [details, setDetails] = useState();

  const handleChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const handlePost = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    const data = await response.json();
    console.log(data);
  };

  const url = "https://event-management-o5bs.onrender.com/otherevents";
  const fetchdata = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setDetails(response.data[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <main className="wedquestionaircontainer">
      <section className="wedquestionairlogo">
        <img src={img} className="questionairlogo1" alt="Logo" />
      </section>
      <section className="wedquestionairtext">
        <h1>Event Planning Questionnaire</h1>
        <p>
          Thank you for reaching out to us. We will be thrilled to represent you
          as your event planning and design management company for your BIG day.
        </p>
        <p>
          Please complete this preliminary questionnaire to the best of your
          ability. Once you complete the questions and hit the submit button, we
          will review the responses and you can expect a follow up email before
          we set up an hour virtual consultation meeting with you to discuss the
          packages/fees in detail. We will discuss the different services we
          provide in which case you are able to make an informed decision at
          which capacity you will need us to assist with your event plans.
        </p>
        <p>
          We do not feel packages are ideal for everyone, as what one person
          might want in one's event, might be different for someone else.
          Therefore, we customize our packages to each client's needs.
        </p>
        <p>
          Please feel free to contact us if you have any questions and or
          concerns at any time. Do let us know if you require any help with
          completing the questionnaire.
        </p>
        <p>
          We are looking forward to working with you and making your wedding
          dreams come true!
        </p>
      </section>
      <div className="formtext">
        <h1>Fill The Form Below</h1>
      </div>
      <section className="wedquestionairform">
        <form className="form">
          {Object.keys(initialState).map((key) => (
            <div key={key} className="inputtext">
              <p className="textp">{key}</p>
              <input
                className="inputvalue"
                type="text"
                placeholder={`Enter ${key}`}
                value={formState[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
        </form>
      </section>
      <div className="submitbtn">
        <button className="formsubmit" onClick={handlePost}>
          SUBMIT
        </button>
      </div>
    </main>
  );
};

export default Corpquestionair;
