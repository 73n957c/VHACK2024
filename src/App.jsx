import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// Right now this page is using App.css
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHeader from "./components/pageHeader";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ChallengePage from "./pages/ChallengePage";
import CommunityPage from "./pages/CommunityPage";
import GoalPage from "./pages/GoalPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    // If want add component just use <component function name></component function name>
    <Router>
      {/* Replace this nav with the NavBar component */}
      <nav>This is the navbar</nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
