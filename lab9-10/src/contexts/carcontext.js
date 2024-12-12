import React, { createContext, useState, useEffect } from 'react';
import { fetchCars } from '../utils/api';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    setIsLoading(true);
    try {
      const data = await fetchCars();
      setCarList(data);
    } catch (error) {
      console.error('Помилка завантаження автомобілів:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CarContext.Provider value={{ carList, isLoading }}>
      {children}
    </CarContext.Provider>
  );
};
