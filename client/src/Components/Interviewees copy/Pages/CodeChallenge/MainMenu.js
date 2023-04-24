import React, {useContext} from 'react'
import { QuizContext } from '../../Helpers/Contexts'
import './Code.css'

function MainMenu() {
    const {codeState, setCodeState} = useContext(QuizContext);

  return (
    <div className='Menu'>
    
    <button onClick={() => {
        setCodeState("quiz")
    }}> Start Quiz </button>
    
    </div>

    
  )
}

export default MainMenu

// import './Code.css'
// import { useContext } from "react";
// // import { GameStateContext } from "../helpers/Contexts";
// import { codeStateContext } from "../helpers/Contexts";
// import 
// function Menu() {
//   const { codeState, setCodeState, userName, setUserName } = useContext(
//     codeStateContext
//   );
//   return (
//     <div className="Menu">
//       <label>Enter Your Name:</label>
//       <input
//         type="text"
//         placeholder="Ex. John Smith"
//         onChange={(event) => {
//           setUserName(event.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setCodeState("playing");
//         }}
//       >
//         Start Quiz
//       </button>
//     </div>
//   );
// }

// export default Menu;