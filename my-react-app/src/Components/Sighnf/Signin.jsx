
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

import styles from "../../assets/siin.module.css";
import sigh from "../../assets/Imges/loup.jpg";
import googlee from "../../assets/Imges/pngoogle.jpg";
import appy from "../../assets/Imges/applylogo.png";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }
    if (email === savedUser.email && password === savedUser.password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", email);
      navigate("/home"); // redirect to Home
    } else {
      alert("Invalid email or password");
    }
  };

  const handleGoogleSignin = () => {
    alert("Google sign in clicked (demo only)");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", "google_user@example.com");
    navigate("/"); // Home
  };

  const handleAppleSignin = () => {
    alert("Apple sign in clicked (demo only)");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", "apple_user@example.com");
    navigate("/"); // Home
  };

  return (
    <div className={styles.bgWrapper} style={{ backgroundImage: `url(${sigh})` }}>
      <div className={styles.overlay}></div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className={`${styles.glassCard} p-4`}>
          <h3 className="mb-2 fw-bold text-center">Sign In</h3>

          <Button
            variant="light"
            className={`${styles.socialBtn} w-100 mb-2`}
            onClick={handleGoogleSignin}
          >
            <img src={googlee} width="18" className="me-2" alt="Google" />
            Sign in with Google
          </Button>

          <Button
            variant="light"
            className={`${styles.socialBtn} w-100 mb-3`}
            onClick={handleAppleSignin}
          >
            <img src={appy} width="18" className="me-2" alt="Apple" />
            Sign in with Apple
          </Button>

          <p className="text-center text-muted">or</p>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className={`${styles.signBtn} w-100 mb-3`}
              onClick={handleSignin}
            >
              Sign In
            </Button>
          </Form>

          <div className="text-center mt-2 text-white">
            Don’t have an account? <Link to="/signup" className={styles.link}>Sign Up</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signin;






