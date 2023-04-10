import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplitPane from "react-split-pane";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Home from "./Home";
import MusicGenerate from "../musicGenerate";
import LessonReading1 from "./SubPages/LessonReading1";
import LessonInteractive1 from "./SubPages/LessonInteractive1";
import LessonQuiz1 from "./SubPages/LessonQuiz1";
import "../stylesheet/lesson-reading.css";
import "../stylesheet/editor1.css";

const Lesson1 = () => {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);

    const handleClick = (event) => {
        setIsShown((current) => !current);
    };

    return (
        <SplitPane
            className="scroll"
            split="vertical"
            minSize={50}
            defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
            onChange={(size) => localStorage.setItem("splitPos", size)}
        >
            <div>
                <LessonReading1 />
            </div>
            <div>
                <LessonInteractive1 />
            </div>
        </SplitPane>
    );
};

export default Lesson1;
