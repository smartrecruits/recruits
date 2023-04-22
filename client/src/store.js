import { configureStore } from "@reduxjs/toolkit";
import assesmentReducer from "./Features/assessments/assessmentSlice";

const store = configureStore({
    reducer:{
        assessments: assesmentReducer,
    },
})
export default store