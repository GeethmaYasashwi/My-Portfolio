import React from 'react';

// Single Skill Progress Bar Component
export default function SkillBar({ name, percent, startAnimate }) {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{percent}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: startAnimate ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  );
}