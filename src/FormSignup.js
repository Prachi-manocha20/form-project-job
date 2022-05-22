import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.scss";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <div className="form-inputs">
          <label htmlFor="email " className="form-label"></label>
          <h5> Your email address</h5>
          <input
            type="email"
            name="email"
            className="form-input"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label"></label>
          <h5> Your password</h5>

          <input
            type="password"
            name="password"
            className="form-input"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label"></label>
          <h5>Confirm your password</h5>
          <input
            type="password"
            name="password2"
            className="form-input"
            onChange={handleChange}
            value={values.password2}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="name1" className="form-label"></label>
          <h5>Your full name</h5>
          <input
            type="text"
            name="name1"
            className="form-input"
            onChange={handleChange}
            value={values.name1}
          />
          {errors.name1 && <p>{errors.name1}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="phoneno" className="form-label"></label>
          <h5>Your phone number</h5>
          <input
            type="number"
            name="phoneno"
            className="form-input"
            onChange={handleChange}
            value={values.phoneno}
          />
          {errors.phoneno && <p>{errors.phoneno}</p>}
        </div>
        <div className="check-box">
          <input type="checkbox" /> I read and agree Terms and Conditions
        </div>
        <div>
          <button className="form-input-btn" type="submit">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
