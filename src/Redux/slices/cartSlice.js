import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cart_Items") !== null
    ? JSON.parse(localStorage.getItem("cart_Items"))
    : [];
const total_Amount =
  localStorage.getItem("total_Amount") !== null
    ? JSON.parse(localStorage.getItem("total_Amount"))
    : 0;
const total_Quantity =
  localStorage.getItem("total_Quantity") !== null
    ? JSON.parse(localStorage.getItem("total_Quantity"))
    : 0;

const initialState = {
  cart_Items: items,
  total_Amount: total_Amount,
  total_Quantity: total_Quantity,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const new_Item = action.payload;
      const existing_Item = state.cart_Items.find(
        (item) => item.id === new_Item.id
      );

      state.total_Quantity++;

      if (!existing_Item) {
        state.cart_Items.push({
          id: new_Item.id,
          productName: new_Item.productName,
          imgUrl: new_Item.imgUrl,
          price: new_Item.price,
          quantity: 1,
          totalPrice: new_Item.price,
        });
      } else {
        existing_Item.total_Quantity++;
        existing_Item.totalPrice =
          Number(existing_Item.totalPrice) + Number(new_Item.price);
      }

      state.total_Amount = state.cart_Items.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem(
        "cart_Items",
        JSON.stringify(state.cart_Items.map((item) => item))
      );
      localStorage.setItem("total_Amount", JSON.stringify(state.total_Amount));
      localStorage.setItem(
        "total_Quantity",
        JSON.stringify(state.total_Quantity)
      );

      // console.log("-------------------------");
      // console.log(state.total_Amount);
      // console.log(state.total_Quantity);
      // console.log(new_Item);
      // console.log("-------------------------");
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existing_Item = state.cart_Items.find((item) => item.id === id);
      if (existing_Item) {
        state.cart_Items = state.cart_Items.filter((item) => item.id !== id);
        state.total_Quantity = state.total_Quantity - existing_Item.quantity;
      }
      state.total_Amount = state.cart_Items.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem(
        "cart_Items",
        JSON.stringify(state.cart_Items.map((item) => item))
      );
      localStorage.setItem("total_Amount", JSON.stringify(state.total_Amount));
      localStorage.setItem(
        "total_Quantity",
        JSON.stringify(state.total_Quantity)
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
