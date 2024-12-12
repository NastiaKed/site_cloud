import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './cartSlice';
import './cart.css';

const CartPage = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.brand} {item.model}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
