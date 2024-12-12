import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCars, addToCart } from '../../utils/api';
import './catalog.css';

const Catalog = () => {
  const [cars, setCars] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredCars, setFilteredCars] = useState([]); 
  const [showDropdown, setShowDropdown] = useState(false); 
  const [sortOrder, setSortOrder] = useState(''); 
  const navigate = useNavigate();

 
  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
        setFilteredCars(data);
      } catch (error) {
        console.error('Помилка при завантаженні автомобілів:', error);
      }
    };

    loadCars();
  }, []);

 
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowDropdown(term.length > 0); 

    if (term) {
      const filtered = cars.filter((car) =>
        car.brand.toLowerCase().includes(term.toLowerCase()) ||
        car.model.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  };

  
  const handleSelectCar = (carId) => {
    navigate(`/item/${carId}`);
    setShowDropdown(false); 
  };


  const handleSortOrder = (order) => {
    setSortOrder(order);
    const sortedCars = [...filteredCars].sort((a, b) => {
      if (order === 'asc') return a.maxSpeed - b.maxSpeed;
      return b.maxSpeed - a.maxSpeed;
    });
    setFilteredCars(sortedCars);
  };

 
  const handleAddToCart = async (car) => {
    const configuration = 'Стандарт'; 
    const count = 1; 
    try {
      await addToCart({ id: car.id, configuration, count });
      alert(`${car.brand} ${car.model} додано до кошика`);
    } catch (error) {
      console.error('Помилка при додаванні до кошика:', error);
    }
  };

  return (
    <div className="container">
      <h2>Каталог іграшок</h2>

      {/* Пошук */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Пошук..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {showDropdown && (
          <ul className="dropdown">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <li key={car.id} onClick={() => handleSelectCar(car.id)}>
                  {car.brand} {car.model}
                </li>
              ))
            ) : (
              <li>Нічого не знайдено</li>
            )}
          </ul>
        )}
      </div>

      {/* Сортування */}


      {/* Список автомобілів */}
      <div className="catalog-grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <h3>{car.brand} {car.model}</h3>
            <p>Ціна: {car.price} грн</p>
            <p>Розмір: {car.maxSpeed} см у висоту</p>
            <img
              src={`http://127.0.0.1:5007${car.image}`}
              alt={car.model}
              onClick={() => navigate(`/item/${car.id}`)}
            />
            <button onClick={() => handleAddToCart(car)}>Додати до кошика</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
