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
    // Add One Item
    addItem(state, action) {
      const newItem = action.payload;
      const id = action.payload.id;
      const extraIngredients = action.payload.extraIngredients;
      const existingItem = state.cart_Items.find((item) => item.id === id);

      if (!existingItem) {
        state.cart_Items.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          extraIngredients: newItem.extraIngredients,
        });
        state.total_Quantity++;
      } else if (
        existingItem &&
        JSON.stringify(existingItem.extraIngredients) ===
          JSON.stringify(extraIngredients)
      ) {
        state.total_Quantity++;
        existingItem.quantity++;
      } else {
        const value = JSON.parse(localStorage.getItem("cart_Items"));
        let index = value.findIndex((s) => s.id === existingItem.id);
        const newValue = {
          id: existingItem.id,
          productName: existingItem.productName,
          imgUrl: existingItem.imgUrl,
          price: existingItem.price,
          quantity: 1,
          totalPrice: existingItem.price,
        };
        state.cart_Items.splice(index, 1, newValue);
        state.total_Quantity = state.cart_Items.reduce(
          (total, item) => total + Number(item.quantity),
          0
        );
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

    // Delete All Item
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

    // Remove One Item
    removeOne(state, action) {
      const id = action.payload;
      const existingItem = state.cart_Items.find((item) => item.id === id);
      state.total_Quantity--;

      if (existingItem.quantity === 1) {
        state.cart_Items = state.cart_Items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
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
