import React from "react";
import "../styles/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import StoryTime from "./StoryTime";
import Meditation from "./Meditation";
import Creativity from "./Creativity";
import Suggestions from "./Suggestions";
import Navigation from "./Navigation";

function Home() {
  return (
    <>
      <div class="bgImage">
        <div class="header"></div>
        <div class="sectionContainer">
          <section class="leftSection">
            <Navigation />
          </section>
          <Routes>
              <Route path="/storytime" element={<Home />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/creativity" element={<Creativity />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/suggestions" element={<Suggestions />} />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
