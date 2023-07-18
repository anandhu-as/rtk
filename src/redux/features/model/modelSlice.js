import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: { isOpen: false },
  reducers: {
    openModel: (state) => {
      state.isOpen = true;
    },
    closedModel: (state,) => {
      state.isOpen = false;
    },
  },
});
export default modelSlice.reducer;
export const { openModel, closedModel } = modelSlice.actions;
