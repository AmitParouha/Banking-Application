import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log(loginData);

    // try {
    //   const response = await fetch("YOUR_BACKEND_URL/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(loginData),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log("Login successful:", data);
    //     // Handle successful login (e.g., redirect to another page, store token, etc.)
    //   } else {
    //     console.error("Login failed");
    //     // Handle failed login (e.g., show error message)
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   // Handle network or other errors
    // }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="welcome">Welcome back</h1>
        <p className="subtitle poppins-medium">Please enter your details.</p>
        <form className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="jane@acme.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-forgot">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/forgot-password">Forgot password</a>
          </div>
          <button type="submit" onClick={handleSubmit} className="sign-in">
            Sign in
          </button>
        </form>
        <p className="request-trial">
          Don't have an account?{" "}
          <a href="/request-trial">Request a free trial</a>
        </p>
      </div>
      <div className="info-container">
        <ul>
          <li>
            <a href="/support">Visit our Support Center</a>
          </li>
          <li>
            <a href="/roadmap">View our Product Roadmap</a>
          </li>
          <li>
            <a href="/releases">Check out the latest releases</a>
          </li>
          <li>
            <a href="/slack">Join our Slack Community</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SignIn;
