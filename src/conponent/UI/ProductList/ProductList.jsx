import React from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ data, type, id }) => {
  return (
    <section id={id}>
      <div className="products">
        {type ? <h1 className="products_title">{type}</h1> : ""}
        <div className="all_products">
          {data.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
