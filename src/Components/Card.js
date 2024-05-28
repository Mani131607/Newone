import React from 'react';
import './card.css'; 

function Card() {
  return (
    <div>
      <div><h1 className='heading'>  Wiculty Highlights : </h1></div>
    <div className="card-container">
      
      
      <div className="card">
        <img src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4ca.svg" alt="Learning Space" className="card-image" />
        <h2>Your Personal Learning Space</h2>
        <p>Experience a tailored dashboard designed just for you. Monitor your progress, upcoming tasks, and receive recommendations based on your learning journey.</p>
      </div>
      
      
      <div className="card">
        <img src="https://s.w.org/images/core/emoji/15.0.3/svg/1f9e0.svg" alt="Practice Quizzes" className="card-image" />
        <h2>Practice Quizzes</h2>
        <p>Challenge yourself with interactive practice quizzes covering a range of topics. Receive instant feedback to enhance your knowledge.</p>
      </div>
      
      
      <div className="card">
        <img  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f3ae.svg" alt="Gamified Learning" className="card-image" />
        <h2>Gamified Learning</h2>
        <p>Immerse yourself in educational games that transform studying into an engaging adventure, making complex concepts easier to grasp.</p>
      </div>
      
     
      <div className="card">
        <img src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4dd.svg" alt="Regular Assignments" className="card-image" />
        <h2>Regular Assignments</h2>
        <p>Embrace continuous learning with regular assignments that push your boundaries and reinforce your knowledge.</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
