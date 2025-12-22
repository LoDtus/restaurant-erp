import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'properties',
    initialState: {
        widthNavBar: 0,
    },
    reducers: {
        setWidth_navBar: (state, action) => {
            state.widthNavBar = action.payload;
        },
    }
});