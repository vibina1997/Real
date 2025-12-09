
import React, { useState } from "react";
import siing from '../../assets/siin.module.css'


const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signin data:", formData);
    // send data to backend
  };

  return (
    <div className="app">
      <h3>Signin</h3>
      <form className={siing.Adduserform} onSubmit={handleSubmit}>
        <div className={siing.INputegroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={siing.ssbutton}>
          Signin
        </button>
      </form>
    </div>
  );
};

export default Signin;



