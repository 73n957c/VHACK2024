import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// Right now this page is using App.css
import "./App.css";
import NavBar from "./components/navBar";
import PageHeader from "./components/pageHeader"
import TradeQuestBasic from "./components/tradeQuestBasic"
import TradeQuestPremium from "./components/tradeQuestPremium";
// import DailyVocab from "./components/dailyVocab";
import EnrollNewCourse from "./components/enrollNewCourse";
// import SearchBar from "./components/searchBar";
import TradeQuestEndlessBreadCrumbs from "./components/tradeQuestEndlessBreadCrumbs";
import TradeQuestEndless from "./components/tradeQuestEndless";
import CommunityTrending from "./components/communityTrending";
import CommunityArchived from "./components/communityArchived";
import CommunitySuggestion from "./components/communitySuggestion";
import Community from "./components/community";

function App() {
  return (
    <>
      <Community></Community>
    </>
  );
}

export default App;
