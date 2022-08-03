import 'bootstrap/dist/css/bootstrap.min.css';
import MusicGenerate from "./musicGenerate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/Lesson1";
import Lesson1 from "./Pages/Lesson1";
import NavDisplay from "./components/Nav";
import Setup from './Pages/Setup';
// import GenerateQuote from "./components/GenerateQuote";
import "./App.css";
import Profile from './Pages/Profile';



// TODO: support different amount of notes than 4

function App() {

  return (
    <>
      <Router>
        <NavDisplay />

        <a href="/"> Go to Home Page</a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/setup" element={<Setup />} />

        </Routes>

      </Router>
    </>

  );
}

export default App;