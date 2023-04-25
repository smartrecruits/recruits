import { Route, Routes } from "react-router-dom"
// import Dashboard from "../../Pages/Dashboard"

// import CodeChallenge from "../../Pages/CodeChallenge"
// import Grades from "../../Pages/Grades"
// import Feedback from "../../Pages/Feedback"
// import FAQ from "../../Pages/FAQ"
import MainContent from "../MainContent"
import OneAssessment from "../Features/assessments/oneAssess"
import QuizApp from "../../QuizApp/QuizApp"


function AppRoutes() {
    return (
        
            <Routes>
                <Route path="/QuizApp" element={<QuizApp  />}></Route> 
                <Route path="/assessments" element={<OneAssessment  />}></Route>  
                <Route path="/MainContent" element={<MainContent/>}></Route>
            </Routes>
        
    )
}

export default AppRoutes