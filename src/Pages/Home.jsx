import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Home.css";
import HomeVideo1 from "../assets/images/HomeVideo1.mp4";
import Services from "../conponent/UI/Services/Services";
import Clock from "../conponent/UI/Clock/Clock";
import products from "../assets/data/products";
import ProductList from "../conponent/UI/ProductList/ProductList";

export const Home = () => {
  const [trend_Product, setTrend_Product] = useState([]);
  const [best_Product, setBest_Product] = useState([]);
  const [new_Arrivals, setNew_Arrivals] = useState([]);
  const [watch_Product, setWatch_Product] = useState([]);

  useEffect(() => {
    const filter_trend_Product = products.filter(
      (item) => item.category === "chair"
    );
    setTrend_Product(filter_trend_Product);

    const filter_Best_Product = products.filter(
      (item) => item.category === "sofa"
    );
    setBest_Product(filter_Best_Product);

    const filter_New_Arrivals = products.filter(
      (item) => item.category === "sofa"
    );
    setNew_Arrivals(filter_New_Arrivals);

    const filter_Watch_Product = products.filter(
      (item) => item.category === "watch"
    );
    setWatch_Product(filter_Watch_Product);
  }, []);

  return (
    <section id="home">
      <div className="home">
        <div className="home_overlay">
          <video autoPlay loop muted>
            <source src={HomeVideo1} type="video/mp4" />
          </video>

          <div className="home_content">
            <div className="home_content_text">
              <h1>
                We offer modern home furnishings & decor <br />
                featuring inspiring designs and colors.
              </h1>
              <p>
                <span className="name_company">Modern Furniture</span> sets
                provide a quick, easy way to make sure you get everything you
                really need in a nice, coordinated way. You spend less time
                choosing and more time enjoying your new furniture. Here you’ll
                find value for money options for many areas of your home, from
                bedrooms to gardens.
              </p>
              <button className="buy_btn">
                <NavLink to="/shop">Shop Now</NavLink>
              </button>
            </div>
          </div>
        </div>
        <Services />
        <ProductList
          data={trend_Product}
          type={"Trending Products"}
          id={"chair"}
        />
        <ProductList data={best_Product} type={"Best Sales"} id={"sofa"} />
        <Clock />
        <ProductList
          data={new_Arrivals}
          type={"All New Arrivals"}
          id={"chair"}
        />
        <ProductList data={watch_Product} type={"Watches"} id={"watches"} />
      </div>
    </section>
  );
};
