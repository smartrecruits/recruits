import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./Features/assessments/assessmentSlice";

const store = configureStore({
    reducer:{
        assessments: assessmentReducer,
    },
})
export default store