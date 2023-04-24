import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./Features/assessments/assessmentSlice";
import questionsReducer from "./Features/questions/questionsSlice";
import codechallengesReducer from "./Features/codechallenges/codechallengesSlice";
const store = configureStore({
    reducer:{
        assessments: assessmentReducer,
        questions: questionsReducer,
        codes: codechallengesReducer
    },
})
export default store