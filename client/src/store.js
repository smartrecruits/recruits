import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./Features/assessments/assessmentSlice";
// import questionsReducer from "./Features/questions/questionsSlice";
const store = configureStore({
    reducer:{
        assessments: assessmentReducer,
        // questions: questionsReducer
    },
})
export default store