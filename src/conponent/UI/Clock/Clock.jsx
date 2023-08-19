import React, { useEffect, useState } from "react";
import "./Clock.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import products from "../../../assets/data/products";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const selected_Time = new Date("Sep 9 , 2023");
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = selected_Time - now;

      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (selected_Time < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  const product_discount = products.find((item) => item.id === "16");
  const {
    id,
    imgUrl,
    productName,
    // category,
    price,
    // shortDesc,
    // description,
    // reviews,
    // avgRating,
  } = product_discount;

  return (
    <div className="clock">
      <div className="clock_content">
        <p className="limited">Up to 50% Off</p>
        <div className="quality">
          {productName}
          <div className="quality">
            <div class="price_wrapper">
              <div class="price_slash"></div>
              <div class="old_price">${parseInt(price * 2)}</div>
            </div>
            <div className="new_price">${price}</div>
          </div>
        </div>
        <div className="clock_counter">
          <div className="counter_item">
            <div className="counter">
              <div className="num">{days}</div>
              <div className="name">days</div>
            </div>
            <div className="separator"> : </div>
          </div>

          <div className="counter_item">
            <div className="counter">
              <div className="num">{hours}</div>
              <div className="name">hours</div>
            </div>
            <div className="separator"> : </div>
          </div>

          <div className="counter_item">
            <div className="counter">
              <div className="num">{minutes}</div>
              <div className="name">minutes</div>
            </div>
            <div className="separator"> : </div>
          </div>

          <div className="counter_item">
            <div className="counter">
              <div className="num">{seconds}</div>
              <div className="name">seconds</div>
            </div>
          </div>
        </div>
        <motion.button whileTap={{ scale: 1.2 }} className="visit">
          <NavLink to={`/shop/${id}`}>visit Store</NavLink>
        </motion.button>
      </div>

      <div className="clock_img">
        <img src={imgUrl} alt={productName} />
      </div>
    </div>
  );
};

export default Clock;
