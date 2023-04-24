import React from "react";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import Signing from "./Components/Signing";
import Home from "./Components/Home";
import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css'
import UserTypeSelection from "./Components/GetStarted";
import Client from "./Components/Client";
import { ClientPasswordreset } from "./Components/ClientReset";
import { RecruiterPasswordreset } from "./Components/RecruiterReset";
import AppInterviewee from "./AppInterviewee";
function App() {
  return (
    <div className="App">
      <>
      <AppInterviewee />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/RecruiterAssessList' element={<AssessmentsList/>}></Route>
        <Route path='/RecruiterAssessList/:id' element={<OneAssessment/>}></Route>
        <Route path='/RecruiterQuestionList' element={<QuestionList/>}></Route>
        <Route path='/signing' element={<Signing/>}></Route>
        <Route path='/Client' element={<Client/>}></Route>
        <Route path='/AppInterviewee' element={<AppInterviewee />}></Route>
        <Route path='/ClientReset' element={<ClientPasswordreset/>}></Route>
        <Route path='/RecruiterReset' element={<RecruiterPasswordreset/>}></Route>
        <Route path='/getStarted' element={<UserTypeSelection/>}></Route>
        <Route path='/clientdb' element={<AppInterviewee/>}></Route>

      </Routes>
     
      <Footer />
      </>
    </div>
  );
}

export default App;
