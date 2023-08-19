import React, { useState } from "react";
import "../Style/register.css";
import Helmet from "../conponent/Helmet/Helmet";
// import CommomSection from "../conponent/UI/CommomSection/CommomSection";
import { Container, Row, Col, FormGroup } from "reactstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="register">
      <Helmet title={"SignUp"} />
      {/* <CommomSection title={"SignUp"} /> */}
      <h2>SignUp</h2>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="box">
              <form>
                <FormGroup className="form_grop">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>
                <div className="button">
                  <motion.button
                    className="reg_btn center"
                    whileTap={{ scale: 1.2 }}
                  >
                    Submit
                  </motion.button>
                </div>
                <p>
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
