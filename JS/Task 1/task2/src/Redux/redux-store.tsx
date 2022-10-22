import { configureStore } from "@reduxjs/toolkit";
import selectReducer from "./Reducers/selectReducer";
const store = configureStore({
  reducer: { selectReducer },
});
export default store;
