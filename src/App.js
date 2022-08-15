import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Setup from './Pages/Setup';
import MusicGenerate from "./musicGenerate";
import Home from "./Pages/Home"
import About from "./components/LessonDisplay";
import LessonDisplay from "./components/LessonDisplay";
import NavDisplay from "./components/Nav";
// import GenerateQuote from "./components/GenerateQuote";
import Profile from './Pages/Profile';
import LessonQuiz1 from './Pages/SubPages/LessonQuiz1';
import { Lesson1 } from './Pages/Lesson1';
import { Lesson2 } from './Pages/Lesson2';
import { Lesson3 } from './Pages/Lesson3';
import SheetMusic from './Pages/SheetMusic';
import FurElise from './SheetMusic/FurElise';
import FlyMeToTheMoon from './SheetMusic/FlyMeToTheMoon';


// TODO: support different amount of notes than 4

function App() {

  return (
    <>
      <Router>
        <NavDisplay />
        {/* <div>


          <a className="home-page-button" href="/"> Go to Home Page</a>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lessonDisplay" element={<LessonDisplay />} />
          <Route path="/lessonquiz1" element={<LessonQuiz1 />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />

          <Route path="/sheetmusic" element={< SheetMusic />} />
          <Route path="/sheetmusic/furelise" element={<FurElise />} />
          <Route path="/sheetmusic/flymetothemoon" element={<FlyMeToTheMoon />} />



        </Routes>

      </Router>
    </>

  );
}

export default App;