import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TradeQuestEndlessBreadCrumbs from "../components/tradeQuestEndlessBreadCrumbs";
import "../page-css/tradeQuestEndless.css";

function TradeQuestEndless() {
  return (
    <div id="tradeQuestEndless">
      <div className="page-title">
        <h1>TradeQuest: Endless</h1>
      </div>
      <TradeQuestEndlessBreadCrumbs></TradeQuestEndlessBreadCrumbs>
      <div id="tradeQuestEndlessImg">
        <img
          src="../../Resources/tradequest 2.png"
          className="endlessImg"
        ></img>
        <img src="../../Resources/decision.png" className="endlessImg2"></img>
        <NavLink href="https://play.unity.com/mg/other/tradequest-web">
        <btn>PLAY</btn>
        </NavLink>
      </div>
      <img src="../../Resources/statistic.png" className="endlessImg3"></img>
      <div id="tradeQuestEndlessLine">
        <p>
          "Rest assured, your virtual game financial records remain separate
          from your real-life ones."
        </p>
      </div>
    </div>
  );
}

export default TradeQuestEndless;
