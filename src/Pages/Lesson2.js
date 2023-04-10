import SplitPane from "react-split-pane";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LessonReading2 from "./SubPages/LessonReading2";
import LessonInteractive2 from "./SubPages/LessonInteractive2";

import "../stylesheet/editor1.css";

export const Lesson2 = () => {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <SplitPane
            split="vertical"
            minSize={50}
            defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
            onChange={(size) => localStorage.setItem('splitPos', size)}
        >
            <div>
                <LessonReading2 />
            </div>
            <div>
                <LessonInteractive2 />
            </div>
        </SplitPane>
    );
};
