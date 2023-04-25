import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./Features/assessments/assessmentSlice";
import questionsReducer from "./Features/questions/questionsSlice";
import codechallengesReducer from "./Features/codechallenges/codechallengesSlice";
import answersReducer from "./Features/answers/answersSlice";
const store = configureStore({
    reducer:{
        assessments: assessmentReducer,
        questions: questionsReducer,
        codes: codechallengesReducer,
        answers: answersReducer
    },
})
export default store