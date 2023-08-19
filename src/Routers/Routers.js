import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Shop } from "../Pages/Shop";
import { ProductDetails } from "../Pages/ProductDetails";
import { Cart } from "../Pages/Cart";
import { LogIn } from "../Pages/LogIn";
import { SignUp } from "../Pages/SignUp";
import { CheckOut } from "../Pages/CheckOut";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to="home" />} />

      <Route path="shop" element={<Shop />} />
      <Route path="shop/:productId" element={<ProductDetails />} />

      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default Routers;
