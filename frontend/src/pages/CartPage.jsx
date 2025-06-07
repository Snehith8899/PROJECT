import React, { useState } from "react";
import './CartPage.css';

// Utility to format INR with commas and two decimal places
const formatINR = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);

const CartPage = ({ cartItems, removeFromCart, updateQty, toggleCart }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const conversionRate = 83; // USD to INR conversion

  // Calculate total in INR
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty * conversionRate,
    0
  );

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  const handleBack = () => {
    if (paymentSuccess) {
      setPaymentSuccess(false);
      setShowPayment(false);
    } else {
      setShowPayment(false);
    }
  };

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>

      <div className="cart-sidebar">
        <button onClick={toggleCart} className="close-cart-btn">Close Cart</button>

        {!showPayment ? (
          <>
            <h3>Your Cart</h3>
            {cartItems.length === 0 ? (
              <p style={{ padding: "0 20px" }}>Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items-container">
                  <ul className="cart-items-list">
                    {cartItems.map(({ id, title, price, qty, thumbnail }) => {
                      const itemTotal = price * qty * conversionRate;
                      return (
                        <li key={id} className="cart-item">
                          <img src={thumbnail} alt={title} className="cart-item-image" />
                          <div className="cart-item-details">
                            <strong>{title}</strong>
                            <p>
                              {formatINR(price * conversionRate)} × {qty} = {formatINR(itemTotal)}
                            </p>
                            <div className="qty-controls">
                              <button onClick={() => updateQty(id, 1)}>+</button>
                              <button onClick={() => updateQty(id, -1)} disabled={qty === 1}>-</button>
                              <button onClick={() => removeFromCart(id)}>Remove</button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="cart-footer">
                  <h4>Total: {formatINR(total)}</h4>
                  <button className="buy-now-btn" onClick={() => setShowPayment(true)}>
                    Buy Now
                  </button>
                </div>
              </>
            )}
          </>
        ) : paymentSuccess ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={handleBack} style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}>←</button>
              <h3>Order Summary</h3>
            </div>

            <ul className="cart-items-list">
              {cartItems.map(({ id, title, price, qty, thumbnail }) => (
                <li key={id} className="cart-item">
                  <img src={thumbnail} alt={title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <strong>{title}</strong>
                    <p>Qty: {qty}</p>
                    <p>Total: {formatINR(price * qty * conversionRate)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <p><strong>Payment Method:</strong> {selectedPayment.toUpperCase()}</p>
              <h4>Total Paid: {formatINR(total)}</h4>
              <p style={{ color: 'green', marginTop: '10px' }}>🎉 You have paid successfully!</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={handleBack} style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}>←</button>
              <h3>Choose Payment Method</h3>
            </div>

            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  value="upi"
                  checked={selectedPayment === "upi"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                UPI / QR / PayTM / GPay
              </label>
              <input className="payment-input" placeholder="Enter UPI ID" />

              <label>
                <input
                  type="radio"
                  value="card"
                  checked={selectedPayment === "card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Debit / Credit Card
              </label>
              <input className="payment-input" placeholder="Card Number" />

              <label>
                <input
                  type="radio"
                  value="netbanking"
                  checked={selectedPayment === "netbanking"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Net Banking
              </label>

              <label>
                <input
                  type="radio"
                  value="cod"
                  checked={selectedPayment === "cod"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Cash on Delivery
              </label>

              <button className="buy-now-btn" onClick={handlePayment}>
                Pay {formatINR(total)}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
