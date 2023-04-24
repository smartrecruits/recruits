import { Typography } from "antd"
import React, { useState} from "react"
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { QuizContext } from "../../Helpers/Contexts";



function CodeChallenge() {
    const[codeState, setCodeState] = useState("menu");
    const [userName, setUserName] = useState("");
    const { score, setScore } = useState(0);


    return ( 
        <div>
        <Typography.Title level={4}>CodeChallenge</Typography.Title>
        <QuizContext.Provider value={{codeState, setCodeState, score, setScore, userName,
            setUserName}}>
        {codeState === "menu" && <MainMenu />}
        {codeState === "menu" && <Quiz />}
        {codeState === "menu" && <EndScreen />}
        </QuizContext.Provider>
    </div>
    );
}

export default CodeChallenge