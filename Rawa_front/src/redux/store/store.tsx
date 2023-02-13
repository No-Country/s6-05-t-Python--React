import { configureStore } from "@reduxjs/toolkit";
import groupsSlice from "../slices/groupsSlice";


export const store = configureStore({
    reducer: {
        groups: groupsSlice
    }
})