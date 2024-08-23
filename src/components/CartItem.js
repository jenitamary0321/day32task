import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
    </div>
  );
};

export default CartItem;
