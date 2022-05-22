import React, { useState } from "react";
import "./Form.scss";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img35.jpg" alt="spaceship" />
          <h3>Choose a date range</h3>
          <p>
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
          </p>
        </div>
        {false ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
