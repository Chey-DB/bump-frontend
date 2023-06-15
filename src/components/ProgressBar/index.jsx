import React from 'react';
import './styles.css';

const ProgressBar = ({ dueDate, currentWeek }) => {
  const calculateProgress = () => {
    const totalWeeks = Math.ceil((dueDate - new Date()) / (1000 * 60 * 60 * 24 * 7));
    const progressPercentage = (currentWeek / totalWeeks) * 100;
    return Math.min(progressPercentage, 100);
  };

  const renderWeeksText = () => {
    const totalWeeks = Math.ceil((dueDate - new Date()) / (1000 * 60 * 60 * 24 * 7));
    const progressWeeks = Math.floor((currentWeek / totalWeeks) * totalWeeks);
    return `Week: ${progressWeeks}`;
  };

  return (
    <div className="progress-bar-container">
      <h3>Progress Bar</h3>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${calculateProgress()}%` }}></div>
      </div>
      <p>{renderWeeksText()}</p>
    </div>
  );
};

export default ProgressBar;