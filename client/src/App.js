import React from "react";
import Footer from "./Components/footer";
import Signing from "./Components/Signing";
import Home from "./Components/Home";
import { Route, Routes, useLocation} from 'react-router-dom';
import './index.css'
import UserTypeSelection from "./Components/GetStarted";
import Client from "./Components/Client";
import { ClientPasswordreset } from "./Components/ClientReset";
import { RecruiterPasswordreset } from "./Components/RecruiterReset";
import AppInterviewee from "./AppInterviewee";
import QuestionList from "./Features/questions/questionlist";
import OneAssessment from './Features/assessments/oneAssess'
import AssessmentsList from "./Features/assessments/listAssessments";
import Invites from "./Components/Interviewee/everything/intervieweeAssesmentList";
import InvitesList from "./Components/Interviewee/everything/invitesList";
import IntervieweeScoreList from "./Recruits/sort_by_score";
import IntervieweeList from "./Recruits/send invitations";
import OneAssessmentInterviewee from "./Components/Interviewee/everything/OneAssessment";
import IntervieweeAssessments from "./Recruits/intervieweeDoneAssess";
import IntervieweeResponses from "./Recruits/view interviewee answers";

function App() {


  const location = useLocation();
  
  
  return (
    <div className="App">
      <>
      <AppInterviewee />
      {location.pathname.includes('/AppInterviewee') && <AppInterviewee />}
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/answers/:interviewee_id/:assessment_id' element={<IntervieweeResponses/>}></Route>
        <Route path='/intervieweescorelist/:id' element={<IntervieweeAssessments/>}></Route>
        <Route exact path='/intervieweescorelist' element={<IntervieweeScoreList/>}></Route>
        <Route path='/intervieweeList' element={<IntervieweeList/>}></Route>
        <Route path='/assessments' element={<Invites/>}></Route>
        <Route path='/assessments/:id' element={<OneAssessmentInterviewee/>}></Route>
        <Route path='/invites' element={<InvitesList/>}></Route>
        <Route exact path='/RecruiterAssessList' element={<AssessmentsList/>}></Route>
        <Route path='/RecruiterAssessList/:id' element={<OneAssessment />}></Route>
        <Route path='/RecruiterQuestionList' element={<QuestionList/>}></Route>
        <Route path='/signing' element={<Signing/>}></Route>
        <Route path='/Client' element={<Client/>}></Route>
        <Route path='/AppInterviewee' element={<AppInterviewee />}></Route>
        
        <Route path='/ClientReset' element={<ClientPasswordreset/>}></Route>
        <Route path='/RecruiterReset' element={<RecruiterPasswordreset/>}></Route>
        <Route path='/getStarted' element={<UserTypeSelection/>}></Route>
        {/* <Route path='/clientdb' element={<AppInterviewee/>}></Route> */}

      </Routes>
     
    
      <Footer />
      </>
    </div>
  );
}

export default App;
