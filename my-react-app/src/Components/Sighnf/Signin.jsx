import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

import styles from "../../assets/siin.module.css";
import bgImage from "../../assets/Imges/loup.jpg";
import googleImg from "../../assets/Imges/pngoogle.jpg";
import appleImg from "../../assets/Imges/applylogo.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();

    /* ================= ADMIN LOGIN ================= */
    if (email === "admin@gmail.com" && password === "admin123") {
      const adminUser = {
        name: "Admin",
        email,
        role: "admin",
      };

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(adminUser));

      navigate("/admin/dashboard"); // ✅ Admin dashboard
      return;
    }

    /* ================= CUSTOMER LOGIN ================= */
    const savedUser = JSON.parse(localStorage.getItem("user")); // Make sure signup stores "user"

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      const customerUser = {
        name: savedUser.name,
        email,
        role: "customer",
      };

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(customerUser));

      navigate("/"); // ✅ Website home
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      className={styles.bgWrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className={styles.glassCard}>
          <h3 className="text-center mb-3 fw-bold">Sign In</h3>

          <Form onSubmit={handleSignin} autoComplete="off">
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </Form.Group>

            <Button type="submit" className={`${styles.signBtn} w-100 mb-3`}>
              Sign In
            </Button>
          </Form>

          <p className="text-center text-muted mb-2">or continue with</p>

          <Button variant="light" className={styles.socialBtn}>
            <img src={googleImg} alt="Google" /> Google
          </Button>

          <Button variant="light" className={styles.socialBtn}>
            <img src={appleImg} alt="Apple" /> Apple
          </Button>

          <div className="text-center mt-3">
            Don’t have an account?{" "}
            <Link to="/signup" className={styles.link}>
              Sign Up
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signin;


