import React, { useState } from "react";

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

interface PaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ isOpen, onClose, totalAmount }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ').substr(0, 19) || cleaned;
    return formatted;
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value.replace(/[^0-9]/gi, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const cleanedCardNumber = cardNumber.replace(/\s+/g, '');
    if (cleanedCardNumber.length < 16) {
      alert('Please enter a valid card number');
      return;
    }
    
    if (cardName.trim() === '') {
      alert('Please enter the name on your card');
      return;
    }
    
    if (expiryDate.length !== 5 || !expiryDate.includes('/')) {
      alert('Please enter a valid expiry date (MM/YY)');
      return;
    }
    
    if (cvv.length < 3) {
      alert('Please enter a valid CVV');
      return;
    }
    
    // Process payment here
    alert('Payment processed successfully!');
    onClose();
    // Reset form
    setCardNumber("");
    setCardName("");
    setExpiryDate("");
    setCvv("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="payment-form" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h3 className="form-title">Payment Information</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              className="form-input"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength={19}
            />
            <div className="card-icons">
              <div className="card-icon visa">VISA</div>
              <div className="card-icon mastercard">MC</div>
              <div className="card-icon amex">AMEX</div>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              className="form-input"
              id="cardName"
              placeholder="John Doe"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                className="form-input"
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength={5}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-input"
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={handleCvvChange}
                maxLength={4}
              />
            </div>
          </div>
          
          <button type="submit" className="submit-btn">
            Pay ${totalAmount.toFixed(2)}
          </button>
        </form>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
        }
        
        .modal-overlay {
          opacity: 1;
          visibility: visible;
        }
        
        .payment-form {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          width: 90%;
          max-width: 450px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.4s, opacity 0.4s;
        }
        
        .modal-overlay .payment-form {
          transform: translateY(0);
          opacity: 1;
        }
        
        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        
        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #6b7280;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .close-btn:hover {
          color: #374151;
        }
        
        .form-group {
          margin-bottom: 1.25rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
        }
        
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }
        
        .form-row {
          display: flex;
          gap: 1rem;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          padding: 0.875rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          margin-top: 0.5rem;
        }
        
        .submit-btn:hover {
          background: linear-gradient(135deg, #059669, #047857);
          transform: translateY(-2px);
        }
        
        .card-icons {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        
        .card-icon {
          width: 40px;
          height: 25px;
          background-color: #f3f4f6;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 600;
        }
        
        .card-icon.visa {
          background-color: #1a1f71;
          color: white;
        }
        
        .card-icon.mastercard {
          background-color: #eb001b;
          color: white;
        }
        
        .card-icon.amex {
          background-color: #2e77bc;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default function ShoppingCart() {
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

  const [showPaymentForm, setShowPaymentForm] = useState(false);

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
    return subtotal - discount;
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    setShowPaymentForm(true);
  };

  const handleClosePayment = () => {
    setShowPaymentForm(false);
  };

  return (
    <div className="cart-wrapper">
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
                >
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                    </div>
                    <div className="col-md-4">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="text-muted mb-0">{item.color} | {item.description}</p>
                      {item.discount && (
                        <span className="discount-badge mt-2">
                          {item.discount}% OFF
                        </span>
                      )}
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={item.quantity}
                          min="1"
                          readOnly
                        />
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, 1)}
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
                        onClick={() => removeItem(item.id)}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="summary-card p-4 shadow-sm">
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
                onClick={handleCheckout}
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

      {/* Payment Form Modal */}
      <PaymentForm 
        isOpen={showPaymentForm}
        onClose={handleClosePayment}
        totalAmount={calculateTotal()}
      />

      <style>{`
        .cart-wrapper {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding: 40px 0;
        }
        
        .product-card {
          background: white;
          border-radius: 12px;
          transition: transform 0.2s;
        }
        
        .product-card:hover {
          transform: translateY(-2px);
        }
        
        .product-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
        }
        
        .discount-badge {
          background: #dcfce7;
          color: #166534;
          font-size: 0.875rem;
          padding: 4px 8px;
          border-radius: 6px;
          display: inline-block;
        }
        
        .quantity-btn {
          width: 28px;
          height: 28px;
          padding: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #f3f4f6;
          border: none;
          transition: all 0.2s;
        }
        
        .quantity-btn:hover {
          background: #e5e7eb;
        }
        
        .quantity-input {
          width: 60px;
          text-align: center;
          border: 1px solid #dee2e6;
          border-radius: 6px;
        }
        
        .remove-btn {
          color: #dc2626;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .remove-btn:hover {
          color: #991b1b;
        }
        
        .summary-card {
          background: white;
          border-radius: 12px;
          position: sticky;
          top: 20px;
        }
        
        .checkout-btn {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          border: none;
          transition: transform 0.2s;
          color: white;
        }
        
        .checkout-btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, #4f46e5, #4338ca);
        }
      `}</style>
    </div>
  );
}