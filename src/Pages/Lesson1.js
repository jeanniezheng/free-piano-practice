import SplitPane from "react-split-pane"
import "../stylesheet/editor1.css"
import Home from "./Home"
import MusicGenerate from "../musicGenerate"
import LessonReading1 from "./SubPages/LessonReading1"
import LessonInteractive1 from "./SubPages/LessonInteractive1"
import LessonQuiz1 from "./SubPages/LessonQuiz1"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../stylesheet/lesson-reading.css'


export const Lesson1 = () => {
    let navigate = useNavigate()
    const [isShown, setIsShown] = useState(false);


    const handleClick = event => {
        setIsShown(current => !current);
    };



    return (
        <SplitPane
            className="scroll"
            split="vertical"
            minSize={50}
            defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
            onChange={(size) => localStorage.setItem('splitPos', size)}>
            <div>
                <LessonReading1 />

            </div>
            <div>
                <LessonInteractive1 />

            </div>
        </SplitPane>
        // </SplitPane>
    )
}