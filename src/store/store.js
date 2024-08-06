import { configureStore } from "@reduxjs/toolkit";
import SliceName from "./Slices/slice-name";

export const store = configureStore({
  reducer: {
    TestState: SliceName,
  },
});
