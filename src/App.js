import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from './redux/cartSlice';
import Cart from './components/Cart';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetching the local JSON data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // Dispatch the action to set cart items
        dispatch(setCartItems(data));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [dispatch]);

  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
