import { Route, Routes } from "react-router-dom"
import MainContent from "../MainContent"
import QuizApp from "../../QuizApp/QuizApp"
// import Dashboard from "../../Pages/Dashboard"

// import CodeChallenge from "../../Pages/CodeChallenge"
// import Grades from "../../Pages/Grades"
// import Feedback from "../../Pages/Feedback"
// import FAQ from "../../Pages/FAQ"

// import OneAssessment from "../Features/assessments/oneAssess"
// import QuizApp from "../../QuizApp/QuizApp"


function AppRoutes() {
    return (
        
            <Routes>              
                <Route path="/MainContent" element={<MainContent />}></Route>
                <Route path="/QuizApp" element={<QuizApp />}></Route>
            </Routes>
        
    )
}

export default AppRoutes
