import React, { useState } from "react";
import "../Style/Shop.css";
import Helmet from "../conponent/Helmet/Helmet";
import CommomSection from "../conponent/UI/CommomSection/CommomSection";

import products from "../assets/data/products";
import ProductList from "../conponent/UI/ProductList/ProductList";

export const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "sofa") {
      const productsData = products.filter((item) => item.category === "sofa");
      setProductsData(productsData);
    }

    if (filterValue === "mobile") {
      const productsData = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(productsData);
    }

    if (filterValue === "chair") {
      const productsData = products.filter((item) => item.category === "chair");
      setProductsData(productsData);
    }

    if (filterValue === "watch") {
      const productsData = products.filter((item) => item.category === "watch");
      setProductsData(productsData);
    }

    if (filterValue === "wireless") {
      const productsData = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(productsData);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <>
      <Helmet title={"Shop"} />
      <CommomSection title={"Product"} />

      <section>
        <div className="filter">
          <div className="filter_category">
            <select onChange={handleFilter}>
              <option>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>

          <div className="filter_search">
            <div className="filter_price">
              <select>
                <option>Filter By </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
            <div className="filter_input">
              <input
                type="text"
                placeholder="Search ...."
                onChange={handleSearch}
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>
        </div>
        {productsData.length === 0 ? (
          <h1 className="not_found">No Products are found</h1>
        ) : (
          <ProductList data={productsData} />
        )}
      </section>
    </>
  );
};
