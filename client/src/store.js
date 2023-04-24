import { configureStore } from "@reduxjs/toolkit";


// import questionsReducer from "./Features/questions/questionsSlice";
// import codechallengesReducer from "./Features/codechallenges/codechallengesSlice";
const store = configureStore({
    reducer:{
        // assessments: assessmentReducer,
        // questions: questionsReducer
    },
})
export default store