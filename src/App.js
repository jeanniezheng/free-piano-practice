import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavDisplay from "./components/Nav";
import LessonDisplay from "./components/LessonDisplay";
import About from "./components/LessonDisplay";
import MusicGenerate from "./musicGenerate";
import Profile from './Pages/Profile';
import Setup from './Pages/Setup';
import SheetMusic from './Pages/SheetMusic';
import LessonQuiz1 from './Pages/SubPages/LessonQuiz1';
import Home from "./Pages/Home";
import { Lesson1 } from './Pages/Lesson1';
import { Lesson2 } from './Pages/Lesson2';
import { Lesson3 } from './Pages/Lesson3';
import FurElise from './SheetMusic/FurElise';
import FlyMeToTheMoon from './SheetMusic/FlyMeToTheMoon';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavDisplay />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lessonDisplay" element={<LessonDisplay />} />
          <Route path="/lessonquiz1" element={<LessonQuiz1 />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />

          <Route path="/sheetmusic" element={<SheetMusic />} />
          <Route path="/sheetmusic/furelise" element={<FurElise />} />
          <Route path="/sheetmusic/flymetothemoon" element={<FlyMeToTheMoon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
