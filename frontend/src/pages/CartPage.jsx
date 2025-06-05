import React from "react";

const CartPage = ({ cartItems, removeFromCart, updateQty, toggleCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: "60px",
        right: "0",
        width: "320px",
        height: "calc(100% - 60px)",
        backgroundColor: "#222",
        color: "white",
        padding: "20px",
        boxShadow: "0 0 10px rgba(255, 165, 0, 0.7)",
        overflowY: "auto",
        zIndex: 1500,
      }}
    >
      <button onClick={toggleCart} style={{ marginBottom: "15px" }}>
        Close Cart
      </button>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map(({ id, title, price, qty }) => (
              <li
                key={id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                  borderBottom: "1px solid #444",
                  paddingBottom: "10px",
                }}
              >
                <div>
                  <strong>{title}</strong>
                  <p>
                    ₹{price} × {qty} = ₹{price * qty}
                  </p>
                  <div>
                    <button onClick={() => updateQty(id, 1)}>+</button>
                    <button onClick={() => updateQty(id, -1)} disabled={qty === 1}>
                      -
                    </button>
                    <button onClick={() => removeFromCart(id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>
          <button
            style={{
              backgroundColor: "#f05a22",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              width: "100%",
              fontWeight: "bold",
            }}
            onClick={() => alert("Checkout functionality not implemented")}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
