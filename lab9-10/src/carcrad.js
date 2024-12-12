import React from 'react';
import { useNavigate } from 'react-router-dom';
import './carcrad.css';

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <div className="car-details">
        <h3>{car.brand} {car.model}</h3>
        <p>Потужність: {car.power} hp</p>
        <p>Розмір: {car.maxSpeed} км/год</p>
        <button className="details-button" onClick={() => navigate(`/item/${car.id}`)}>
          Деталі
        </button>
      </div>
    </div>
  );
};

export default CarCard;
