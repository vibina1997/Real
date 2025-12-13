
import React, { useState } from "react";
import { Form, Button, Card, ProgressBar } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import signup from "../../assets/sigup.module.css";

import goole from "../../assets/Imges/google.png";
import appl from "../../assets/Imges/applylogo.png";
import bgoo from "../../assets/Imges/loup.jpg" 







 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const strength = Math.min((password.length / 10) * 100, 100);

  const handleSignup = () => {
    if (!email || !password || !repeatPassword) {
      alert("All fields are required");
      return;
    }
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup successful! Please sign in.");
    navigate("/signin"); // redirect to signin after signup
  };

  return (
    <div className={signup.bgWrapper} style={{ backgroundImage: `url(${bgoo})` }}>
      <div className={signup.overlay}></div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className={`${signup.glassCard} p-4`}>
          <h3 className="mb-2 fw-bold text-center">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className={signup.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={signup.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <ProgressBar striped now={strength} className="mt-2" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control
                className={signup.input}
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Repeat Password"
              />
            </Form.Group>
            <Button
              className={`${signup.signBtn} w-100 mb-3`}
              onClick={handleSignup}
            >
              Continue
            </Button>
          </Form>

          <div className="text-center mt-2 text-white">
            Already have an account? <Link to="/signin" className={signup.link}>Sign In</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;


