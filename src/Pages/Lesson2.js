import SplitPane from "react-split-pane"
import "../stylesheet/editor1.css"
import Home from "./Home"
import MusicGenerate from "../musicGenerate"
import LessonReading1 from "./SubPages/LessonReading1"
import LessonInteractive2 from "./SubPages/LessonInteractive2"
import LessonQuiz1 from "./SubPages/LessonQuiz1"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import LessonReading2 from "./SubPages/LessonReading2"

export const Lesson2 = () => {
    let navigate = useNavigate()
    const [isShown, setIsShown] = useState(false);


    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };



    return (
        // <SplitPane className="Resizer" split="vertical" minSize={100} defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
        //     onChange={(size) => localStorage.setItem('splitPos', size)}

        // >
        //     <div />

        <SplitPane split="vertical"
            minSize={50}
            defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
            onChange={(size) => localStorage.setItem('splitPos', size)}>
            <div>
                <LessonReading2 />
                {/* <MusicGenerate /> */}

            </div>
            <div>
                <LessonInteractive2 />



                {/* <button onClick={handleClick} className="button" >START QUIZ</button>
                {isShown && (<LessonQuiz1 />)} */}



            </div>
        </SplitPane>
        // </SplitPane>
    )
}