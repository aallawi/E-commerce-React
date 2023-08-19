import React, { useState } from "react";
import "../Style/register.css";
import Helmet from "../conponent/Helmet/Helmet";
// import CommomSection from "../conponent/UI/CommomSection/CommomSection";
import { Container, Row, Col, FormGroup } from "reactstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const LogIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="register">
      <Helmet title={"Login"} />
      {/* <CommomSection title={"Login"} /> */}
      <h2>Login</h2>
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
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>
                <div className="button">
                  <motion.button
                    type="submit"
                    className="reg_btn center"
                    whileTap={{ scale: 1.2 }}
                  >
                    Login
                  </motion.button>
                </div>
                <p>
                  Don’t have an account?{" "}
                  <NavLink to="/signup">Create an account</NavLink>
                </p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
