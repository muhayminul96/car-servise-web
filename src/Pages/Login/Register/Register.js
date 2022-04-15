import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    alert(password);
  };
  return (
    <div>
      <h2 className="text-primary font-bold">Please Register</h2>
      <form className="register-form" onSubmit={handleRegisterSubmit}>
        <input type="text" placeholder="Your Name" name="name" id="" />
        <input type="email" placeholder="Your Email" name="email" id="" />
        <input type="password" placeholder="Password" name="password" id="" />
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
      <p>
        Already registered ?{" "}
        <Link to="/login" className="text-danger text-decoration-none pe-auto">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
