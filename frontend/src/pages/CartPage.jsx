

// import React, { useState } from "react";
// import './CartPage.css';

// const CartPage = ({ cartItems, removeFromCart, updateQty, toggleCart }) => {
//   const [showPayment, setShowPayment] = useState(false);
//   const [selectedPayment, setSelectedPayment] = useState("upi");
//   const [upiId, setUpiId] = useState("");
//   const [cardNumber, setCardNumber] = useState("");

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

//   const handlePayment = () => {
//     if (selectedPayment === "upi" && !upiId.trim()) {
//       alert("Please enter a valid UPI ID");
//       return;
//     }
//     if (selectedPayment === "card" && !cardNumber.trim()) {
//       alert("Please enter your card number");
//       return;
//     }

//     alert(`Payment of ₹${total} successful using ${selectedPayment.toUpperCase()}!`);
//     setShowPayment(false);
//     toggleCart();
//   };

//   return (
//     <>
//       <div className="cart-overlay" onClick={toggleCart}></div>

//       <div className="cart-sidebar">
//         <button onClick={toggleCart} className="close-cart-btn">Close Cart</button>

//         {!showPayment ? (
//           <>
//             <h3>Your Cart</h3>
//             {cartItems.length === 0 ? (
//               <p style={{ padding: "0 20px" }}>Your cart is empty</p>
//             ) : (
//               <>
//                 <div className="cart-items-container">
//                   <ul className="cart-items-list">
//                     {cartItems.map(({ id, title, price, qty, thumbnail }) => (
//                       <li key={id} className="cart-item">
//                         <img src={thumbnail} alt={title} className="cart-item-image" />
//                         <div className="cart-item-details">
//                           <strong>{title}</strong>
//                           <p>₹{price} × {qty} = ₹{price * qty}</p>
//                           <div className="qty-controls">
//                             <button onClick={() => updateQty(id, 1)}>+</button>
//                             <button onClick={() => updateQty(id, -1)} disabled={qty === 1}>-</button>
//                             <button onClick={() => removeFromCart(id)}>Remove</button>
//                           </div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="cart-footer">
//                   <h4>Total: ₹{total}</h4>
//                   <button className="buy-now-btn" onClick={() => setShowPayment(true)}>
//                     Buy Now
//                   </button>
//                 </div>
//               </>
//             )}
//           </>
//         ) : (
//           <>
//             <div className="payment-section">
//               <button className="back-to-cart-btn" onClick={() => setShowPayment(false)}>← Back to Cart</button>
//               <h3>Choose Payment Method</h3>

//               <div className="payment-options">
//                 <label>
//                   <input
//                     type="radio"
//                     value="upi"
//                     checked={selectedPayment === "upi"}
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   UPI / QR / PayTM / GPay
//                 </label>
//                 {selectedPayment === "upi" && (
//                   <input
//                     type="text"
//                     placeholder="Enter UPI ID"
//                     className="payment-input"
//                     value={upiId}
//                     onChange={(e) => setUpiId(e.target.value)}
//                   />
//                 )}

//                 <label>
//                   <input
//                     type="radio"
//                     value="card"
//                     checked={selectedPayment === "card"}
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   Debit / Credit Card
//                 </label>
//                 {selectedPayment === "card" && (
//                   <input
//                     type="text"
//                     placeholder="Enter Card Number"
//                     className="payment-input"
//                     value={cardNumber}
//                     onChange={(e) => setCardNumber(e.target.value)}
//                   />
//                 )}

//                 <label>
//                   <input
//                     type="radio"
//                     value="netbanking"
//                     checked={selectedPayment === "netbanking"}
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   Net Banking
//                 </label>

//                 <label>
//                   <input
//                     type="radio"
//                     value="cod"
//                     checked={selectedPayment === "cod"}
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   Cash on Delivery
//                 </label>

//                 <button className="buy-now-btn" onClick={handlePayment}>
//                   Pay ₹{total}
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;


import React, { useState } from "react";
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart, updateQty, toggleCart }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

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
                    {cartItems.map(({ id, title, price, qty, thumbnail }) => (
                      <li key={id} className="cart-item">
                        <img src={thumbnail} alt={title} className="cart-item-image" />
                        <div className="cart-item-details">
                          <strong>{title}</strong>
                          <p>₹{price} × {qty} = ₹{price * qty}</p>
                          <div className="qty-controls">
                            <button onClick={() => updateQty(id, 1)}>+</button>
                            <button onClick={() => updateQty(id, -1)} disabled={qty === 1}>-</button>
                            <button onClick={() => removeFromCart(id)}>Remove</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cart-footer">
                  <h4>Total: ₹{total}</h4>
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
                    <p>Total: ₹{price * qty}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <p><strong>Payment Method:</strong> {selectedPayment.toUpperCase()}</p>
              <h4>Total Paid: ₹{total}</h4>
              <p style={{ color: 'green', marginTop: '10px' }}>🎉 Your order was placed successfully!</p>
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
                Pay ₹{total}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
