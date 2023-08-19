import React from "react";
import "../Style/CheckOut.css";
import Helmet from "../conponent/Helmet/Helmet";
import CommomSection from "../conponent/UI/CommomSection/CommomSection";
import { Container, Row, Col, FormGroup } from "reactstrap";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export const CheckOut = () => {
  const totalQty = useSelector((state) => state.cart.total_Quantity);
  const totalAmount = useSelector((state) => state.cart.total_Amount);
  return (
    <section>
      <Helmet title={"CheckOut"} />
      <CommomSection title={"CheckOut"} />
      <div className="checkout">
        <Container>
          <Row>
            <Col lg="8">
              <h2>Billing Address</h2>
              <form>
                <FormGroup className="form_grop">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input type="text" placeholder="Street number" />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup className="form_grop">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </form>
            </Col>
            <Col lg="4">
              <div className="checkout_total">
                <h6>
                  Total Qty :<span>{totalQty}</span>
                </h6>
                <h6>
                  Subtotal :<span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping :<br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost :<span>${totalAmount}</span>
                </h4>
                <div className="button">
                  <motion.button
                    className="act_btn center"
                    whileTap={{ scale: 1.2 }}
                  >
                    Place an Order
                  </motion.button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
