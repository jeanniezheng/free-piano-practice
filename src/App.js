import 'bootstrap/dist/css/bootstrap.min.css';
import MusicGenerate from "./musicGenerate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./components/LessonDisplay";
import LessonDisplay from "./components/LessonDisplay";
import NavDisplay from "./components/Nav";
import Setup from './Pages/Setup';
// import GenerateQuote from "./components/GenerateQuote";
import "./App.css";
import Profile from './Pages/Profile';
import { Lesson1 } from './Pages/Lesson1';
import LessonQuiz1 from './Pages/SubPages/LessonQuiz1';
import { Lesson2 } from './Pages/Lesson2';


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



        </Routes>

      </Router>
    </>

  );
}

export default App;