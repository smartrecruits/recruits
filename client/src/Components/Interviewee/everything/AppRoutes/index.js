import { Route, Routes } from "react-router-dom"
// import Dashboard from "../../Pages/Dashboard"

// import CodeChallenge from "../../Pages/CodeChallenge"
// import Grades from "../../Pages/Grades"
// import Feedback from "../../Pages/Feedback"
// import FAQ from "../../Pages/FAQ"
import MainContent from "../MainContent"
// import Assessments from "../Pages/Assessments"
import OneAssessment from "../Features/assessments/oneAssess"



function AppRoutes() {
    return (
        
            <Routes>
                {/* <Route path="/" element={<Dashboard />}></Route> */}

                <Route path="/assessments" element={<OneAssessment  />}></Route>                
                <Route path="/MainContent" element={<MainContent/>}></Route>
            </Routes>
        
    )
}

export default AppRoutes