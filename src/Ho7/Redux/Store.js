import Reducer from "../Redux/Reducer/StudentReducer"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: Reducer });

export default store;