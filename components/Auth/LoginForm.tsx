import Link from "next/link";
import React from "react";
import "./auth.css";

const LoginForm = () => {
  return (
    <div className="auth-main">
      <div className="form-container">
        <div className="form-heading my-5">
          <h1 className="text-left text-4xl bold my-2">Login</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <form className="form">
          <input
            className="w-full form-input px-4 py-4 border rounded my-3"
            placeholder="Email Address"
          />
          <input
            className="w-full form-input[type='email'] px-4 py-4 border rounded my-3"
            placeholder="Password"
          />
          <div className="flex justify-between">
            <div>
              <input type="checkbox" value="Remember Me" /> Remember Me
            </div>
            <Link href="/" className="text-primary">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full  btn-primary-custom border my-2 p-3"
          >
            Log in
          </button>
        </form>
        <button type="button" className="w-full  btn-gray border my-2 p-3">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
