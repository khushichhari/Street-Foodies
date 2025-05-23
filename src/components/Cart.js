import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./styles/Cart.css";

function Cart({ cartItems, onClose, onRemoveItem, onClearCart }) {
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    // Validate personal details
    if (!fullName.trim() || !contactNo.trim() || !address.trim()) {
      alert("Please fill all personal details.");
      return;
    }

    // Prepare SMS message
    let message = `Order Details:\nName: ${fullName}\nContact: ${contactNo}\nAddress: ${address}\n\nItems:\n`;
    cartItems.forEach((item) => {
      message += `- ${item.name} x${item.quantity}\n`;
    });
    message += `\nTotal: ₹${totalPrice}`;

    // Save order history to localStorage
    const existingOrders =
      JSON.parse(localStorage.getItem("orderHistory")) || [];
    const newOrder = {
      fullName,
      contactNo,
      address,
      items: cartItems,
      total: totalPrice,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(
      "orderHistory",
      JSON.stringify([newOrder, ...existingOrders])
    );

    // Open SMS app (user needs to send manually)
    const smsNumber = "9503208766";
    const encodedMessage = encodeURIComponent(message);
    window.open(`sms:${smsNumber}?body=${encodedMessage}`);

    // Show confirmation and clear cart
    setOrderPlaced(true);
    onClearCart();
  };

  if (orderPlaced) {
    return (
      <div className="cart-overlay">
        <div className="cart-popup">
          <FaTimes className="close-icon" onClick={onClose} title="Close Cart" />
          <h2>Thank you, {fullName}! 🎉</h2>
          <p>Your order has been placed successfully.</p>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-overlay">
      <div className="cart-popup">
        <FaTimes className="close-icon" onClick={onClose} title="Close Cart" />

        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Quantity</th>
                  <th>Price (₹)</th>
                  <th>Subtotal (₹)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => onRemoveItem(item.name)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="total-price">Total: ₹{totalPrice}</h3>

            <div className="personal-details-form">
              <h3>Enter Your Details</h3>
              <label>
                Full Name:
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                />
              </label>
              <label>
                Contact No:
                <input
                  type="tel"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  placeholder="xxxxxxxxxx"
                />
              </label>
              <label>
                Delivery Address:
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="abc, bldg"
                />
              </label>
            </div>

            <button className="clear-cart-btn" onClick={onClearCart}>
              Clear Cart
            </button>
            <button className="confirm-order-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;