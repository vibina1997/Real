import React, { useState } from "react";
import { Form, Button, Card, ProgressBar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assets/sigup.module.css";
import google from "../../assets/Imges/google.png";
import apple from "../../assets/Imges/applylogo.png";
import bgoo from "../../assets/Imges/loup.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();
  const strength = Math.min((password.length / 10) * 100, 100);

  const handleSignup = () => {
    if (!email || !password || !repeatPassword) return alert("All fields required");
    if (password !== repeatPassword) return alert("Passwords do not match");

    const userData = { email, password, name: email.split("@")[0] };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup successful! Please sign in.");
    navigate("/signin");
  };

  return (
    <div className={signup.bgWrapper} style={{ backgroundImage: `url(${bgoo})` }}>
      <div className={signup.overlay}></div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className={signup.glassCard}>
          <h3 className="mb-3 fw-bold text-center">Sign Up</h3>
          <Form autoComplete="off">
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={signup.input}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={signup.input}
              />
              <ProgressBar striped now={strength} className="mt-2" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className={signup.input}
              />
            </Form.Group>
            <Button className={`${signup.signBtn} w-100 mb-3`} onClick={handleSignup}>Continue</Button>
          </Form>
          <p className="text-center text-muted mb-2">or continue with</p>
          <Button variant="light" className={signup.socialBtn}><img src={google} alt="Google" /> Google</Button>
          <Button variant="light" className={signup.socialBtn}><img src={apple} alt="Apple" /> Apple</Button>
          <div className="text-center mt-3 text-white">
            Already have an account? <Link to="/signin" className={signup.link}>Sign In</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
