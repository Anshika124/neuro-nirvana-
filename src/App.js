import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/Home.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Chatbot from "./components/Chatbot";
import StoryTime from "./components/StoryTime";
import Meditation from "./components/Meditation";
import Creativity from "./components/Creativity";
import Suggestions from "./components/Suggestions";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chatbot" element={<Chatbot />}></Route>
              <Route path="/storytime" element={<StoryTime />}></Route>
              <Route path="/meditation" element={<Meditation />}></Route>
              <Route path="/creativity" element={<Creativity />}></Route>
              <Route path="/suggestions" element={<Suggestions />}></Route>
            </Routes>
         
      </Router>
    </>
  );
}

export default App;
