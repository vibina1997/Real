
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
      const userData = {
        name: savedUser.email.split("@")[0],
        email: savedUser.email,
        avatar: "https://i.pravatar.cc/40"
      };

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(userData));
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.bgWrapper} style={{ backgroundImage: `url(${sigh})` }}>
      <div className={styles.overlay}></div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className={styles.glassCard}>
          <h3 className="text-center mb-3 fw-bold">Sign In</h3>
          <Form autoComplete="off">
            <Form.Group className="mb-3">
              <Form.Control
                className={styles.input}
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                 autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className={`${styles.signBtn} w-100 mb-3`} onClick={handleSignin}>
              Sign In
            </Button>
          </Form>
          <p className="text-center text-muted mb-2">or continue with</p>
          <Button variant="light" className={styles.socialBtn}>
            <img src={googlee} alt="Google" /> Google
          </Button>
          <Button variant="light" className={styles.socialBtn}>
            <img src={appy} alt="Apple" /> Apple
          </Button>
          <div className="text-center mt-3">
            Don’t have an account? <Link to="/signup" className={styles.link}>Sign Up</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
