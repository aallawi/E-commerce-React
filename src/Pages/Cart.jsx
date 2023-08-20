import React from "react";
import "../Style/Cart.css";
import Helmet from "../conponent/Helmet/Helmet";
import CommomSection from "../conponent/UI/CommomSection/CommomSection";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cartActions } from "../Redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const cart_Items = useSelector((state) => state.cart.cart_Items);
  const total_Amount = useSelector((state) => state.cart.total_Amount);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section>
      <Helmet title={"Cart"} />
      <CommomSection title={"Shopping Cart"} />
      <div className="cart">
        {cart_Items.length === 0 ? (
          <div className="no-item">
            <h6>No Item added to the cart</h6>
            <button className="buy_btn" onClick={() => navigate("/shop")}>
              Shop Now
            </button>
          </div>
        ) : (
          <div className="cart_table">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Imge</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Del.</th>
                  </tr>
                </thead>

                {cart_Items.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td className="no">{index + 1}</td>
                      <td>
                        <img src={item.imgUrl} alt={item.productName} />
                      </td>
                      <td className="name">
                        <NavLink to={`/shop/${item.id}`}>
                          {item.productName}
                        </NavLink>
                      </td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td className="delete">
                        <motion.i
                          whileTap={{ scale: 4 }}
                          onClick={() =>
                            dispatch(cartActions.deleteItem(item.id))
                          }
                          className="ri-delete-bin-6-line"
                        ></motion.i>
                      </td>
                    </tr>
                  </tbody>
                ))}
                <tbody className="total">
                  <tr>
                    <td className="no"></td>
                    <td></td>
                    <td>Total Price</td>
                    <td>${total_Amount}</td>
                    <td></td>
                    <td className="delete"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="button">
              <button
                className="buy_btn all-width"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
              <button
                className="buy_btn all-width"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
