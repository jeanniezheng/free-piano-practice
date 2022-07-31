import MusicGenerate from "./musicGenerate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import NavDisplay from "./Nav";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



// TODO: support different amount of notes than 4

function App() {

  return (
    <>
      <Router>
        <NavDisplay />

        <a href="/"> Go to Home Page</a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>

      </Router>
    </>

  );
}

export default App;