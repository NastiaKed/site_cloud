import axios from 'axios';

const API_URL = 'http://127.0.0.1:5007'; 


export const fetchCars = async () => {
  try {
    const response = await axios.get(`${API_URL}/cars`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні автомобілів:', error);
    return [];
  }
};


export const fetchCarDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних автомобіля:', error);
    return null;
  }
};


export const addToCart = async ({ id, configuration, count }) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, { id, configuration, count });
    return response.data;
  } catch (error) {
    console.error('Помилка при додаванні до кошика:', error);
    return null;
  }
};


export const fetchCartItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні товарів кошика:', error);
    return [];
  }
};


export const updateCartQuantity = async ({ id, quantity }) => {
  try {
    const response = await axios.put(`${API_URL}/cart/${id}`, { quantity });
    return response.data;
  } catch (error) {
    console.error('Помилка при оновленні кількості товарів у кошику:', error);
    return null;
  }
};


export const removeFromCart = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при видаленні товару з кошика:', error);
    return null;
  }
};


export const clearCartItems = async () => {
  try {
    const response = await axios.delete(`${API_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error('Помилка при очищенні кошика:', error);
    return null;
  }
};


export const completePurchase = async () => {
  try {
    const response = await axios.post(`${API_URL}/cart/checkout`);
    return response.data;
  } catch (error) {
    console.error('Помилка при завершенні покупки:', error);
    return null;
  }
};
