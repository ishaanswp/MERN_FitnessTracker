import React, { useEffect } from 'react';
import plank from './styles/images/plank.jpg';
import './styles/Challenges.css'; // Import the CSS file
import running from './styles/images/running.jpg'
import yoga from './styles/images/yoga.jpg'

const Challenges = () => {
  useEffect(() => {
    // Apply fade-in animation to challenge elements
    const challenges = document.querySelectorAll('.challenge');
    challenges.forEach((challenge) => {
      challenge.classList.add('fade-in');
    });

    // Handle click events on "Learn More" buttons
    const challengeContents = document.querySelectorAll('.challenge-content');
    challengeContents.forEach((content) => {
      content.addEventListener('click', () => {
        content.style.fontWeight = 'bold';
        content.animate({ marginTop: '-20px' }, 'slow');

        // Example of text manipulation
        const originalText = content.querySelector('h2').textContent;
        const newText = originalText + ' - Completed!';
        content.querySelector('h2').textContent = newText;
      });
    });
  }, []);

  return (
    <section className="challenges">
      <h1>Challenges</h1>

      <div className="challenge">
        <div className="challenge-content">
          <h2>30-Day Plank Challenge</h2>
          <p>Are you ready to strengthen your core? Join our 30-Day Plank Challenge and see amazing results!</p>
          <img src={plank} alt="Plank Challenge" />
          <a href="https://www.shape.com/fitness/workouts/ab-workouts/30-day-plank-challenge" className="btn">Learn More</a>
        </div>
      </div>

      <div className="challenge">
        <div className="challenge-content">
          <h2>10K Running Challenge</h2>
          <p>Take your running to the next level with our 10K Running Challenge. Train and complete a 10K race like a pro!</p>
          <img src={running} alt="Running Challenge" />
          <a href="https://marathonhandbook.com/30-day-running-challenge-for-beginners/" className="btn">Learn More</a>
        </div>
      </div>

      <div className="challenge">
        <div className="challenge-content">
          <h2>Yoga Challenge</h2>
          <p>Improve your flexibility and find inner peace with our Yoga Challenge. Discover different yoga poses and their benefits!</p>
          <img src={yoga} alt="Yoga Challenge" />
          <a href="https://yogainternational.com/article/view/21-day-yoga-challenge/" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
