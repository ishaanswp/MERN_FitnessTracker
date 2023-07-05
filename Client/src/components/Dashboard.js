import React, { useState } from 'react';
import './styles/Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [showAnimatedBox, setShowAnimatedBox] = useState(false);

  const handleFitnessStatsClick = () => {
    setShowAnimatedBox(true);
  };

  return (
    <div className="dashboard-with-background">
      <div className="dashboard">
        <h1>Welcome to Your Dashboard</h1>

        <div className="fitness-stats" onClick={handleFitnessStatsClick}>
          <h2>Fitness Statistics</h2>
          <ul>
            <li>Steps: <span>7826</span></li>
            <li>Calories Burned: <span>2463</span></li>
            <li>Distance: <span>5.7 km</span></li>
            <li>Heart Rate: <span>120 bpm</span></li>
          </ul>
        </div>

        <div className="goals">
          <h2>Fitness Goals</h2>
          <ul>
            <li>Steps Goal: <span>12,000</span></li>
            <li>Calories Goal: <span>4000</span></li>
            <li>Distance Goal: <span>8 km</span></li>
            <li>Heart Rate Goal: <span>110 bpm</span></li>
          </ul>
        </div>

        {showAnimatedBox && (
          <div className="frame">
            <div className="center">
              <div className="headline">
                <div className="small">your daily</div>progress
              </div>
              <div className="circle-big">
                <div className="text">
                  2463 <div className="small">kcal</div>
                </div>
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52" />
                  <circle className="progress" cx="57" cy="57" r="52" />
                </svg>
              </div>
              <div className="circles-small">
                <div className="circle-small">
                  <div className="text">
                    7826<div className="small">steps</div>
                  </div>
                  <svg>
                    <circle className="bg" cx="40" cy="40" r="37" />
                    <circle className="progress one" cx="40" cy="40" r="37" />
                  </svg>
                </div>
                <div className="circle-small">
                  <div className="text">
                    5.7<div className="small">km</div>
                  </div>
                  <svg>
                    <circle className="bg" cx="40" cy="40" r="37" />
                    <circle className="progress two" cx="40" cy="40" r="37" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
