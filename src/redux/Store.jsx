import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    //list all slices here--> we have created only one slice

    //key:value--> key=name of slice
    cart: CartSlice.reducer,
  },
});
export default store;
