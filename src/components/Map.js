import React from 'react';
import './Map.css'; 
import CarteImage from '../images/profile.jpg'; 

const Map = ({ title, subtitle, content, variant }) => {
  const isPrimaryVariant = variant === 'primary';

  return (
    <div className={`map-card ${isPrimaryVariant ? 'primary' : 'secondary'}`}>
      <div className="map-header">
        <div className="map-image-container">
          <div className="image-wrapper">
            <img src={CarteImage} alt="Map" className="map-image" />
          </div>
        </div>
        <div className="header-text">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </div>
      <div className="map-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Map;
