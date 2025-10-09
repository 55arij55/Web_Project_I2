import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


interface CartItem {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
  discount?: number;
}

export default function ShoppingCart() {

  const navigate = useNavigate();
  
  const handlePayment = () => {
    navigate("/paymentForm", { });
  };
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium Series",
      color: "Black",
      price: 129.99,
      quantity: 1,
      image: "https://c8.alamy.com/compfr/ba0g73/singe-avec-ordinateur-portable-ba0g73.jpg",
      discount: 20
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Series 7",
      color: "Silver",
      price: 299.99,
      quantity: 1,
      image: "https://c8.alamy.com/compfr/ba0g73/singe-avec-ordinateur-portable-ba0g73.jpg"
    },
    {
      id: 3,
      name: "Wireless Charger",
      description: "15W Fast Charge",
      color: "White",
      price: 49.99,
      quantity: 1,
      image: "https://c8.alamy.com/compfr/ba0g73/singe-avec-ordinateur-portable-ba0g73.jpg"
    }
  ]);


  const updateQuantity = (productId: number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    return cartItems.reduce((total, item) => {
      if (item.discount) {
        return total + (item.price * item.quantity * item.discount / 100);
      }
      return total;
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    return subtotal - discount ;
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="cart-wrapper" style={{
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "40px 0"
    }}>
      <div className="container">
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Shopping Cart</h4>
              <span className="text-muted">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</span>
            </div>

            {/* Product Cards */}
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="product-card p-3 shadow-sm"
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    transition: "transform 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "8px"
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="text-muted mb-0">{item.color} | {item.description}</p>
                      {item.discount && (
                        <span
                          className="discount-badge mt-2"
                          style={{
                            background: "#dcfce7",
                            color: "#166534",
                            fontSize: "0.875rem",
                            padding: "4px 8px",
                            borderRadius: "6px",
                            display: "inline-block"
                          }}
                        >
                          {item.discount}% OFF
                        </span>
                      )}
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="quantity-btn"
                          style={{
                            width: "28px",
                            height: "28px",
                            padding: "0",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "6px",
                            background: "#f3f4f6",
                            border: "none",
                            transition: "all 0.2s"
                          }}
                          onClick={() => updateQuantity(item.id, -1)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#e5e7eb";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f3f4f6";
                          }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          style={{
                            width: "60px",
                            textAlign: "center",
                            border: "1px solid #dee2e6",
                            borderRadius: "6px"
                          }}
                          value={item.quantity}
                          min="1"
                          readOnly
                        />
                        <button
                          className="quantity-btn"
                          style={{
                            width: "28px",
                            height: "28px",
                            padding: "0",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "6px",
                            background: "#f3f4f6",
                            border: "none",
                            transition: "all 0.2s"
                          }}
                          onClick={() => updateQuantity(item.id, 1)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#e5e7eb";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f3f4f6";
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="col-md-1">
                      <i
                        className="bi bi-trash remove-btn"
                        style={{
                          color: "#dc2626",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                        onClick={() => removeItem(item.id)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#991b1b";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#dc2626";
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div
              className="summary-card p-4 shadow-sm"
              style={{
                background: "white",
                borderRadius: "12px",
                position: "sticky",
                top: "20px"
              }}
            >
              <h5 className="mb-4">Order Summary</h5>
              
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Discount</span>
                <span className="text-success">-${calculateDiscount().toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">${calculateTotal().toFixed(2)}</span>
              </div>

              {/* Promo Code */}
              <div className="mb-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    Apply
                  </button>
                </div>
              </div>

              <button
                className="btn checkout-btn w-100 mb-3"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  border: "none",
                  transition: "transform 0.2s",
                  color: "white"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #4f46e5, #4338ca)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #6366f1, #4f46e5)";
                }}

                onClick={(e) => {
                  e.preventDefault();
                  navigate("/paymentForm");
                }}
              >
                Proceed to Checkout
              </button>
              
              <div className="d-flex justify-content-center gap-2">
                <i className="bi bi-shield-check text-success"></i>
                <small className="text-muted">Secure checkout</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}