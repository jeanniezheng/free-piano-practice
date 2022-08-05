import SplitPane from "react-split-pane"
import "../stylesheet/editor1.css"
import Home from "../Pages/Home"
import MusicGenerate from "../musicGenerate"
export const Editor1 = () => {
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
                <Home />

            </div>
            <div>
                <MusicGenerate /></div>
        </SplitPane>
        // </SplitPane>
    )
}