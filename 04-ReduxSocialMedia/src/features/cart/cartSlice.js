import { createSlice } from "@reduxjs/toolkit";
import productData from "../../productData";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInfo = action.payload;

      const productInfoId = productInfo.id;

      //   console.log(productInfoId);

      // state.cart.find((item) => item.id === productInfoId);
      let find = state.cart.findIndex((item) => item.id === productInfoId);

      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(productInfo);
      }

      //   console.log("CartSlice addtoCartItem : ", productInfo);
      //   console.log("CartSlice cart List : ", productInfo, state.cart.length);
    },
    removeFromCart: (state, action) => {
      const fetchProductId = action.payload;

      const newCartList = state.cart.filter(
        (item) => item.id !== fetchProductId
      );

      state.cart = newCartList;
    },
    displayCartItems: (state, action) => {},
    getCartTotalPrice: (state, action) => {
      const cartList = state.cart;

      let cartCalculatePrice = cartList.reduce((acc, a) => acc + a.price, 0);

      return cartCalculatePrice;
    },
  },
});

export const { addToCart, removeFromCart, displayCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
