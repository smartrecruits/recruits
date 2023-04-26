import React from "react";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import Signing from "./Components/Signing";
import Home from "./Components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import UserTypeSelection from "./Components/GetStarted";
import Client from "./Components/Client";
import { ClientPasswordreset } from "./Components/ClientReset";
import { RecruiterPasswordreset } from "./Components/RecruiterReset";
import AppInterviewee from "./AppInterviewee";
import QuestionList from "./Features/questions/questionlist";
import OneAssessment from "./Features/assessments/oneAssess";
import AssessmentsList from "./Features/assessments/listAssessments";
import Invites from "./Components/Interviewee/everything/intervieweeAssesmentList";
import InvitesList from "./Components/Interviewee/everything/invitesList";
import IntervieweeScoreList from "./Recruits/sort_by_score";
import IntervieweeList from "./Recruits/send invitations";
import OneAssessmentInterviewee from "./Components/Interviewee/everything/OneAssessment";
import IntervieweeAssessments from "./Recruits/intervieweeDoneAssess";
import CodeChallenges from "./Features/codechallenges/codechallengeslist";
import IntervieweeResponses from "./Recruits/view interviewee answers";
import Recruiterdb from "./Recruits/Recruiterdb";
import Sidebar from "./Components/Interviewee/everything/Sidebar";
function App() {
  const renderComponentWithSidebar = (Component) => {
    return (
      <>
        <div className="cont">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <Component />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="App">
      <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Recruiterdb' element={<Recruiterdb/>}></Route>
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
        <Route path='/clientdb' element={<AppInterviewee/>}></Route>
        <Route path='/RecruiterCodeChallenges' element={<CodeChallenges/>}></Route>

      </Routes>
     
      <Footer />
      </>
    </div>
  );
}

export default App;
