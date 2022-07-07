// reducer를 하나가 아닌 여러개를 만드는 경우
// reducer 여러개를 병합한다.
import { combineReducers } from "@reduxjs/toolkit";
import common from "./common/reducer";
import menu from "./menu/reducer";

const reducer = combineReducers({
  common,
  menu,
});

export default reducer;
