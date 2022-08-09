import SplitPane from "react-split-pane"
import "../stylesheet/editor1.css"
import Home from "./Home"
import MusicGenerate from "../musicGenerate"
import LessonReading1 from "./SubPages/LessonReading1"
import LessonInteractive1 from "./SubPages/LessonInteractive1"
export const Lesson1 = () => {
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
                <MusicGenerate />

            </div>
            <div>
                <LessonInteractive1 />
            </div>
        </SplitPane>
        // </SplitPane>
    )
}