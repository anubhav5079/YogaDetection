import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="description">A Yoga AI Trainer</h1>
      <div className="home-main">
        <div className="btn-section">
          <Link to="/start">
            <button className="btn start-btn">Let's Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
