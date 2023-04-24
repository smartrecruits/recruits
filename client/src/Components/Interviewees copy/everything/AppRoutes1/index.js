import { Route, Routes } from "react-router-dom"
import Dashboard from "../../Pages/Dashboard"
import Assessments from "../../Pages/Assessments"
import CodeChallenge from "../../Pages/CodeChallenge"
import Grades from "../../Pages/Grades"
import Feedback from "../../Pages/Feedback"
import FAQ from "../../Pages/FAQ"


function AppRoutes() {
    return (
        
            <Routes>
                {/* <Route path="/clientdb" element={<Dashboard />}></Route> */}
                <Route path="/assessments" element={<Assessments />}></Route>
                <Route path="/code-challenge" element={<CodeChallenge />}></Route>
                <Route path="/grades" element={<Grades />}></Route>
                <Route path="/feedback" element={<Feedback />}></Route>
                <Route path="/FAQ" element={<FAQ />}></Route>
            </Routes>
        
    )
}

export default AppRoutes