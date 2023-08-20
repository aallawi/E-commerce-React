import React, { useEffect } from "react";
import "./ProductItem.css";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductItem = ({ item }) => {
  const { productId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product Add Successfully");
  };

  return (
    <div className="product_item">
      <div className="product_img" onClick={() => navigate(`/shop/${item.id}`)}>
        <img src={item.imgUrl} alt="" />
      </div>
      <div className="product_content">
        <div
          className="product_name"
          onClick={() => navigate(`/shop/${item.id}`)}
        >
          <p>{item.productName}</p>
        </div>
        <div className="product_category">{item.category}</div>
        <div className="product_price">
          <span>${item.price}</span>
          <motion.span
            className="icon_plus"
            whileTap={{ scale: 2 }}
            onClick={addToCart}
          >
            <i className="ri-shopping-cart-line"></i>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
