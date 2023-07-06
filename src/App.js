import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="fle overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 ">
      <Router>
        <Nav />
        <div
          className="flex-grow"
          style={{ marginLeft: "5vw", overflow: "hidden" }}
        >
          {" "}
          {/* changed to inline style */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
