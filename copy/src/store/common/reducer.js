import { createSlice } from "@reduxjs/toolkit";

/** 초기 값 */
const initialState = {
  isLoading: false,
};

/** 슬라이스 인스턴스 */
const slice = createSlice({
  // store에 저장할 slice 이름
  name: "common",
  // 기본값
  initialState: initialState,
  // store에 데이터 전달
  // reducer에 값이 전달되면 값이 전달된 것을 인지하여 store에 전달한다.
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
  },
});

/** actions */
// reducer에 값을 할당하기 위한 action
// action은 값을 전달받으면 reducer에 전달한다.
export const { setIsLoading } = slice.actions;

// export const selectCommon = (state) => state.common;
/** reducer */
export default slice.reducer;
