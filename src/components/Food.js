import React, { useState } from "react";
import "./styles/Food.css";
import { FaShoppingCart } from "react-icons/fa";
import vadapav from "./assets/vadapav.webp";
import batatabhaji from "./assets/Batata Bhaji.jpg";
import chinesepakoda from "./assets/chinesepakoda.jpg";
import chinesebhel from "./assets/chinesebhel.webp";
import breadpakoda from "./assets/breadPakoda.jpg";
import mirchibhaji from "./assets/mirchibhaji.jpg";
import Cart from "./Cart";

const foodItems = [
  { name: "Vada Pav", price: 20, image: vadapav },
  { name: "Batata Bhaji", price: 30, image: batatabhaji },
  { name: "Chinese Bhaji", price: 20, image: chinesepakoda },
  { name: "Chinese Bhel", price: 20, image: chinesebhel },
  { name: "Bread Pakoda", price: 20, image: breadpakoda },
  { name: "Mirchi Bhaji", price: 15, image: mirchibhaji },
];

function Food() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Track quantities per food item
  const [quantities, setQuantities] = useState(
    foodItems.reduce((acc, _, idx) => {
      acc[idx] = 1;
      return acc;
    }, {})
  );

  // Handle quantity input change per food item
  const handleQuantityChange = (index, value) => {
    const qty = Math.max(1, Number(value));
    setQuantities((prev) => ({ ...prev, [index]: qty }));
  };

  // Add selected item and quantity to cart, or update if exists
  const handleAddToCart = (index) => {
    const item = foodItems[index];
    const qty = quantities[index];

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (existingIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity = qty; // update quantity instead of adding
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: qty }];
      }
    });

    // Reset input to 1 after adding
    setQuantities((prev) => ({ ...prev, [index]: 1 }));
  };

  // Remove one item from cart by name
  const handleRemoveItem = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <>
      <h1 className="food-head">Food Items</h1>

      <div
        className="icon"
        onClick={() => setShowCart(true)}
        style={{ position: "relative", cursor: "pointer" }}
        title="View Cart"
      >
        <FaShoppingCart className="cart-icon" />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>

      <div className="food-grid">
        {foodItems.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <input
              type="number"
              min="1"
              value={quantities[index]}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
              className="qty-input"
            />
            <button
              className="cart-btn"
              onClick={() => handleAddToCart(index)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {showCart && (
        <Cart
          cartItems={cart}
          onClose={() => setShowCart(false)}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      )}
    </>
  );
}

export default Food;