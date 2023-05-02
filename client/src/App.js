import React from "react";
import Footer from "./Components/footer";
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
import { fetchAssess } from "./Features/assessments/assessmentSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "./Components/Interviewee/everything/Sidebar";
import { fetchCode } from "./Features/codechallenges/codechallengesSlice";
import { fetchQuestions } from "./Features/questions/questionsSlice";
import CodeChallenge from "./Features/codechallenges/oneCode";
import RecruiterNavbar from "./Recruits/Navbar";
import RecSidebar from "./Recruits/recSidebar";
function App() {
  const [errors,setErrors]= useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAssess()).then((result) => {
      if (fetchAssess.rejected.match(result)) {
        setErrors([result.payload]);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCode());
  }, [dispatch]);

  const location = useLocation();
  
  
  const renderComponentWithSidebar = (Component) => {
    return (
      <>
        <div className="cont">
        <RecruiterNavbar/>
          <div className="row1">
            <div className="col1">
             <RecSidebar/>
            </div>
            <div className="col2">
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
      {/* <AppInterviewee /> */}
      {location.pathname.includes('/AppInterviewee') && <AppInterviewee />}
      
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Recruiterdb' element={renderComponentWithSidebar(Recruiterdb)}></Route>
        <Route path='/answers/:interviewee_id/:assessment_id' element={renderComponentWithSidebar(IntervieweeResponses)}></Route>
        <Route path='/intervieweescorelist/:id' element={renderComponentWithSidebar(IntervieweeAssessments)}></Route>
        <Route exact path='/intervieweescorelist' element={renderComponentWithSidebar(IntervieweeScoreList)}></Route>
        <Route path='/intervieweeList' element={renderComponentWithSidebar(IntervieweeList)}></Route>
        <Route exact path='/assessments' element={<Invites/>}></Route>
        <Route path='/assessments/:id' element={<OneAssessmentInterviewee/>}></Route>
        <Route path='/assessment/:assessment_id/code/:id' element={<CodeChallenge/>}></Route>
        <Route path='/invites' element={<InvitesList/>}></Route>
        <Route exact path='/RecruiterAssessList' element={renderComponentWithSidebar(AssessmentsList)}></Route>
        <Route path='/RecruiterAssessList/:id' element={renderComponentWithSidebar(OneAssessment)}></Route>
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
