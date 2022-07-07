// 합친 reducer를 메모리에 올려준다.
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./index";

const store = configureStore({
  reducer,
});

export default store;
