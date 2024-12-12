import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCartItems, updateCartQuantity, removeFromCart, clearCartItems } from '../../utils/api';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const loadCartItems = async () => {
    const items = await fetchCartItems();
    setCartItems(items || []);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartItems]);

  const handleQuantityChange = async (id, quantity) => {
    if (quantity < 1) return;
    await updateCartQuantity({ id, quantity });
    loadCartItems();
  };

  const handleRemoveItem = async (id) => {
    await removeFromCart(id);
    loadCartItems();
  };

  const handlePurchase = () => {
    alert('Дякуємо за покупку! Ваше замовлення обробляється.');
    clearCartItems();
    setCartItems([]);
  };

  return (
    <div className="cart-page">
      <h2>Кошик</h2>
      {cartItems && cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={`http://127.0.0.1:5007${item.image}`} alt={item.model} />
              <div>
                <h3>{item.brand} {item.model}</h3>
                <p className="price">Ціна: {item.price} грн</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, item.count - 1)}>-</button>
                <input type="number" value={item.count} readOnly />
                <button onClick={() => handleQuantityChange(item.id, item.count + 1)}>+</button>
              </div>
              <button
                className="delete-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                Видалити
              </button>
            </div>
          ))}
          <div className="total-container">Загальна сума: {totalPrice} грн</div>
          <div className="cart-buttons-container">
            <button className="purchase-button" onClick={handlePurchase}>
              Купити
            </button>
            <button
              className="back-to-menu-button"
              onClick={() => navigate('/catalog')}
            >
              Назад до меню
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart">Кошик порожній</div>
      )}
    </div>
  );
};

export default Cart;
