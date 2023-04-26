import React from 'react';
import './AppInterviewee.css';
import styled from 'styled-components';
import Sidebar from './Components/Interviewee/everything/Sidebar'


// import MainContent from './Components/Interviewee/everything/MainContent';
// import Dashboard from './Components/Interviewees/IntervieweesTest/dashboard';
// import AssessmentReviewedNotification from './Components/Interviewees/IntervieweesTest/AssessmentReview';
import AppRoutes from './Components/Interviewee/everything/AppRoutes';




function AppInterviewee() {
  return (
    <div>
    <Container>
      <Sidebar />
<<<<<<< HEAD
     <AppRoutes />
=======
     
>>>>>>> 68efb9e4db95e40cb6d91b87e54fc9ae90dd3537
      {/* <MainContent /> */}
    </Container>
    </div>
  )
}

const Container = styled.div`
display: flex;
height: 97vh;
width: 100%;
background: linear-gradient(to bottom right, white  0%, #e6e4ff 70%);
border-radius: 2rem;
@media screen and (min-width: 320px) and (max-width: 1080px) {
  flex-direction: column;
`;

export default AppInterviewee;