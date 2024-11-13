import React from 'react';
import './MainContentGrid.css'; // For styling

const MainContentGrid = ({ items }) => {
  return (
    <div className="main-content-grid">
      {items.map((item, index) => (
        <div key={index} className="content-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MainContentGrid;