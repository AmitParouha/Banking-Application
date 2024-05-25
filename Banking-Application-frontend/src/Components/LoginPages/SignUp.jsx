import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    //confirmPassword: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(formData);

    try {
      const response = await fetch("https://192.168.1.23/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // credentials: "include",
          // 'Custom-Cookie': '', // Include cookies in the request
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        // Handle successful signup (e.g., redirect to another page, show success message, etc.)
        navigate("/signin");
      } else {
        console.error("Signup failed");
        // Handle failed signup (e.g., show error message)
        {
          {
            <h1>Error</h1>;
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network or other errors
    }

    setFormData({
      name: "",
      username: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="welcome">Create an account</h1>
        <p className="subtitle">Please fill in the details below.</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Your Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="sign-up">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
