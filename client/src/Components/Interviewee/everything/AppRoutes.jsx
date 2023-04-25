import React from 'react';
import BlankPage from './BlankPage';

function AppRoutes() {
  const navigateToBlankPage = () => {
    // logic to navigate to the BlankPage component
    // for example, you can use the window.location.href property
    window.location.href = '/blank-page';
  }

  return (
    <div>
      {/* your sidebar component */}
      <button onClick={navigateToBlankPage}>Go to Blank Page</button>
      {/* your main content */}
      <BlankPage />
    </div>
  )
}

export default AppRoutes;






























// // import React from 'react';
// // import { BrowserRouter as Router, Route } from 'react-router-dom';
// // import {Switch } from 'antd';
// // import BlankPage from './BlankPage';

// // function AppRoutes() {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route path="/blank-page" component={BlankPage} />
// //       </Switch>
// //     </Router>
// //   )
// // }

// // export default AppRoutes;

// import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import {Switch } from 'antd';
// // import Dashboard from './Pages/Dashboard';
// // import Assessments from './Pages/Assessments';
// // import CodeChallenge from './Pages/CodeChallenge';
// // import Reports from './Pages/Reports';
// import MainContent from './MainContent';
// // import BlankPage from './Pages/BlankPage';

// import BlankPage from './BlankPage'; 

// function AppRoutes() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/Main-content" component={MainContent} />
//         <Route path="/blank-page" component={BlankPage} />
//       </Switch>
//     </Router>
//   )
// }

// export default AppRoutes;
