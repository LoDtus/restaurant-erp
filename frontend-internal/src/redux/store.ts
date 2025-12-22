import { configureStore } from "@reduxjs/toolkit";
import propertiesSlice from "./slices/propertiesSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        properties: propertiesSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;