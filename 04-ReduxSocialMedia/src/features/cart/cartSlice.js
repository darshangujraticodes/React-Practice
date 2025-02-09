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
    getCartTotal: (state, action) => {
      const cartTotalQuantity = state.cart.reduce(
        (acc, a) => acc + a.quantity,
        0
      );

      const cartCalculatedPrice = state.cart.reduce((acc, a) => {
        // console.log(
        //   "priceCal = Item Quantity ",
        //   a.quantity,
        //   a.price,
        //   a.quantity * a.price
        // );
        acc = acc + a.quantity * a.price;

        return acc;
      }, 0);

      //   console.log("total price  = " + cartCalculatedPrice);

      state.totalQuantity = cartTotalQuantity;
      state.totalPrice = cartCalculatedPrice;
    },
    increaseQuantityByOne: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload);

      if (state.cart[find].quantity < 10) {
        state.cart[find].quantity += 1;
      }
    },
    decreaseQuantityByOne: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload);

      if (state.cart[find].quantity > 1) {
        state.cart[find].quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  displayCartItems,
  getCartTotal,
  increaseQuantityByOne,
  decreaseQuantityByOne,
} = cartSlice.actions;

export default cartSlice.reducer;
