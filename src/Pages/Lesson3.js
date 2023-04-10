import React, { useState } from "react";
import SplitPane from "react-split-pane";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Home from "./Home";
import MusicGenerate from "../musicGenerate";
import LessonReading1 from "./SubPages/LessonReading1";
import LessonInteractive2 from "./SubPages/LessonInteractive2";
import LessonQuiz1 from "./SubPages/LessonQuiz1";
import LessonReading3 from "./SubPages/LessonReading3";
import "../stylesheet/editor1.css";

const Lesson3 = () => {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown((current) => !current);
    };

    return (
        <SplitPane
            split="vertical"
            minSize={50}
            defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
            onChange={(size) => localStorage.setItem('splitPos', size)}
        >
            <div>
                <LessonReading3 />
            </div>
            <div>
                <MusicGenerate />
            </div>
        </SplitPane>
    );
};

export default Lesson3;
