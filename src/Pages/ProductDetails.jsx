import React, { useState, useRef } from "react";
import "../Style/ProductDetails.css";
import { useParams } from "react-router-dom";
import Helmet from "../conponent/Helmet/Helmet";
import CommomSection from "../conponent/UI/CommomSection/CommomSection";
import products from "../assets/data/products";
import ProductList from "../conponent/UI/ProductList/ProductList";
import ReactStars from "react-rating-star-with-type";
import user from "../assets/images/user-obinion.png";
import { cartActions } from "../Redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export const ProductDetails = () => {
  const { productId } = useParams();
  const product_Display = products.find((item) => item.id === productId);
  const {
    id,
    imgUrl,
    productName,
    category,
    price,
    shortDesc,
    description,
    reviews,
    avgRating,
  } = product_Display;

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        productName: productName,
        price: price,
        imgUrl: imgUrl,
      })
    );

    toast.success("Product Add Successfully");
  };

  const [tap, setTap] = useState("desc");

  const [star, setStar] = useState(0);
  const handleStar = (nextValue) => {
    setStar(nextValue);
  };

  const nameRef = useRef("");
  const messageRef = useRef("");

  const [NameOpinion, setnameOpinion] = useState("");
  const [MessageOpinion, setmessageOpinion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewName = nameRef.current.value;
    const reviewMessage = messageRef.current.value;

    const reviewObject = {
      name: reviewName,
      rating: star,
      opinion: reviewMessage,
    };
    console.log(reviewObject);
    toast.success("Review Submitted");
  };

  const related_Products = products.filter(
    (item) => item.category === category
  );

  return (
    <>
      <Helmet title={"ProductDetails"} />
      <CommomSection title={productName} />
      <div className="product_details">
        <div className="product_photo_name">
          <div className="Product_photo">
            <div>
              <img src={imgUrl} alt={productName} />
            </div>
          </div>
          <div className="product_name">
            <h2>{productName}</h2>
            <div className="rating">
              <ReactStars
                value={avgRating}
                size={18}
                activeColors={[
                  "#ff4545",
                  "#ffa534",
                  "#ffe234",
                  "#b7dd29",
                  "#57e32c",
                ]}
              />
              <div className="avg_rating">
                <span className="num">
                  ({avgRating} <span className="text">Rating</span>)
                </span>
              </div>
            </div>
            <div className="product_price_category">
              <span className="price">${price}</span>
              <span className="category">Category : {category}</span>
            </div>
            <div className="product_des">{shortDesc}</div>
            <motion.button
              className="btn_addToCart"
              whileTap={{ scale: 1.2 }}
              onClick={addToCart}
            >
              Add To Cart <i className="ri-shopping-cart-line"></i>
            </motion.button>
          </div>
        </div>
        <div className="product_description_reviews">
          <div className="head_h6">
            <motion.h6
              whileTap={{ scale: 1.2 }}
              className={`${tap === "desc" ? "active_tab" : "not_active"}`}
              onClick={() => setTap("desc")}
            >
              Description
            </motion.h6>
            <motion.h6
              whileTap={{ scale: 1.2 }}
              className={`${tap === "rev" ? "active_tab" : "not_active"}`}
              onClick={() => setTap("rev")}
            >
              Reviews ({reviews.length})
            </motion.h6>
          </div>
          {tap === "desc" ? (
            <div className="h6_description">{description}</div>
          ) : (
            <div className="reviews">
              <div className="h6_reviews">
                {reviews?.map((item, index) => (
                  <div className="review">
                    <div className="name">
                      <span>
                        <img src={user} alt={item.name} />
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <div className="star">
                      <ReactStars
                        value={item.rating}
                        size={18}
                        activeColors={[
                          "#ff4545",
                          "#ffa534",
                          "#ffe234",
                          "#b7dd29",
                          "#57e32c",
                        ]}
                      />
                      ({item.rating} Rating )
                    </div>
                    <div className="obinion">{item.opinion}</div>
                  </div>
                ))}
              </div>
              <div className="form_opinion">
                <h4>Leave your experience</h4>
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={NameOpinion}
                        ref={nameRef}
                        required
                        onChange={(e) => setnameOpinion(e.target.value)}
                      />
                    </div>
                    <div className="assessment">
                      <span>Your assessment :</span>
                      <span>
                        <ReactStars
                          onChange={handleStar}
                          isEdit={true}
                          value={star}
                          size={20}
                          activeColors={[
                            "#ff4545",
                            "#ffa534",
                            "#ffe234",
                            "#b7dd29",
                            "#57e32c",
                          ]}
                        />
                      </span>
                    </div>
                    <div>
                      <textarea
                        type="text"
                        placeholder="Review Message"
                        required
                        value={MessageOpinion}
                        ref={messageRef}
                        onChange={(e) => setmessageOpinion(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="buy_btn">
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="also_like">
          <h6>Similar Products :</h6>
          <ProductList data={related_Products} />
        </div>
      </div>
    </>
  );
};
