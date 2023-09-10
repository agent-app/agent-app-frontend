import React from "react";
import "./auth.css";

const SignUpForm = () => {
  return (
    <div className="auth-main">
      <div className="form-container">
        <div className="form-heading my-5">
          <h1 className="text-left text-4xl bold my-2">Sign Up</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <form className="form">
          <input
            className="w-full form-input px-4 py-4 border rounded my-3"
            placeholder="Name"
          />
          <input
            className="w-full form-input px-4 py-4 border rounded my-3"
            placeholder="Phone"
          />
          <input
            className="w-full form-input px-4 py-4 border rounded my-3"
            placeholder="Email Address"
          />
          <input
            className="w-full form-input[type='email'] px-4 py-4 border rounded my-3"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full  btn-primary-custom border my-2 p-3"
          >
            Sign up
          </button>
        </form>
        <button type="button" className="w-full  btn-gray border my-2 p-3">
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
