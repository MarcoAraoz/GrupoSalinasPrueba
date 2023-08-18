import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "../features/redux/taskSlice"

export const store = configureStore({
    tasks: taskReducer
})
