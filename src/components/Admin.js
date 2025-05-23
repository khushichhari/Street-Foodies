import React, { useEffect, useState } from "react";
import "./styles/Admin.css";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(storedOrders);
  }, []);

  const handleRemoveOrder = (indexToRemove) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
    setOrders(updatedOrders);
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));
  };

  return (
    <div className="admin-container">
      <h2>Order History (Admin View)</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Food Items</th>
              <th>Total (₹)</th>
              <th>Ordered At</th>
              <th>Action</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.fullName}</td>
                <td>{order.contactNo}</td>
                <td>{order.address}</td>
                <td>
                  <ul>
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.name} x{item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>₹{order.total}</td>
                <td>{new Date(order.timestamp).toLocaleString()}</td>
                <td>
                  <button
                    className="remove-order-btn"
                    onClick={() => handleRemoveOrder(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;