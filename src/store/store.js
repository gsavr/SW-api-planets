import { configureStore } from "@reduxjs/toolkit";
// import answersSlice from "./answersSlice";
import { apiSlice } from "./planetsApiSlice";

//store sends reducers to index.js
export const store = configureStore({
  reducer: {
    // answers: answersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
