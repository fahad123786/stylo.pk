import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store

const CartIcon = () => {
  const cartItems = useSelector((state) => state.counter.cartItems); // Access cartItems from the Redux state

  return (
    <div className="cart-icon">
      <FaShoppingCart />
      {cartItems > 0 && <span className="cart-count">{cartItems}</span>} {/* Display cart count */}
    </div>
  );
};

export default CartIcon;
