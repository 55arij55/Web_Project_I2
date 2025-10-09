import { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  CreditCard,
  Shield,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  User
} from "lucide-react";
import React from "react";

export function ReservePlanning({ planningData, onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    participants: 1,
    specialRequests: '',
    paymentMethod: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!planningData) {
    return (
      <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px #eee", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>No tour selected</h2>
          <button onClick={() => onNavigate('plannings')} style={{ padding: "0.5rem 1.5rem", borderRadius: "4px", background: "#1565c0", color: "#fff", border: "none" }}>
            Browse Available Tours
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = planningData.price * formData.participants;
  const serviceFee = Math.round(totalPrice * 0.1);
  const finalTotal = totalPrice + serviceFee;

  const handleSubmitReservation = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #e3f2fd, #e8f5e9)", padding: "3rem 0" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px #eee", padding: "2rem", textAlign: "center" }}>
          <div style={{ width: "64px", height: "64px", background: "#e8f5e9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <CheckCircle style={{ width: "32px", height: "32px", color: "#43e97b" }} />
          </div>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Booking Confirmed!</h2>
          <p style={{ color: "#666", marginBottom: "1.5rem" }}>
            Your reservation for <strong>{planningData.title}</strong> has been confirmed.
          </p>
          <div style={{ background: "#f9fafb", padding: "1rem", borderRadius: "6px", marginBottom: "1.5rem", textAlign: "left" }}>
            <h3 style={{ marginBottom: "0.75rem" }}>Booking Details:</h3>
            <div style={{ fontSize: "0.95rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Booking Reference:</span>
                <span style={{ fontFamily: "monospace" }}>TG-{Date.now().toString().slice(-6)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Tour Date:</span>
                <span>{new Date(planningData.date).toLocaleDateString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Time:</span>
                <span>{planningData.time}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Participants:</span>
                <span>{formData.participants}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total Paid:</span>
                <span style={{ color: "#43e97b" }}>${finalTotal}</span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "0.95rem", color: "#666", marginBottom: "2rem", textAlign: "left" }}>
            <p><strong>What's next?</strong></p>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>• You'll receive a confirmation email shortly</li>
              <li>• Your guide will contact you 24 hours before the tour</li>
              <li>• Meeting point details will be included in your email</li>
              <li>• Free cancellation up to 24 hours before</li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <button 
              onClick={() => onNavigate('client-profile')}
              style={{ padding: "0.75rem", borderRadius: "4px", background: "#1565c0", color: "#fff", border: "none", fontWeight: "bold" }}
            >
              View My Bookings
            </button>
            <button 
              onClick={() => onNavigate('plannings')}
              style={{ padding: "0.75rem", borderRadius: "4px", background: "#fff", color: "#1565c0", border: "1px solid #1565c0", fontWeight: "bold" }}
            >
              Book Another Tour
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "2rem 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <button
            onClick={() => onNavigate('plannings')}
            style={{ background: "none", border: "none", color: "#1565c0", marginBottom: "1rem", fontWeight: "bold", display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <ArrowLeft style={{ width: "18px", height: "18px", marginRight: "6px" }} />
            Back to Tours
          </button>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Reserve Your Tour</h1>
          <p style={{ color: "#666" }}>Complete your booking for an amazing experience</p>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {/* Booking Form */}
          <form onSubmit={handleSubmitReservation} style={{ flex: "2", minWidth: "320px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px #eee", padding: "2rem", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Booking Information</h2>
            {/* Personal Information */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="firstName" style={{ display: "block", marginBottom: "0.5rem" }}>First Name *</label>
              <input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                required
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
              />
              <label htmlFor="lastName" style={{ display: "block", marginBottom: "0.5rem" }}>Last Name *</label>
              <input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                required
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
              />
              <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>Email Address *</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                required
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
              />
              <label htmlFor="phone" style={{ display: "block", marginBottom: "0.5rem" }}>Phone Number *</label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                required
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
              />
            </div>
            {/* Booking Details */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="participants" style={{ display: "block", marginBottom: "0.5rem" }}>Number of Participants *</label>
              <select
                id="participants"
                value={formData.participants}
                onChange={(e) => setFormData(prev => ({...prev, participants: parseInt(e.target.value)}))}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
              >
                {Array.from({length: Math.min(planningData.availableSpots, 8)}, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                ))}
              </select>
              <label htmlFor="specialRequests" style={{ display: "block", marginBottom: "0.5rem" }}>Special Requests or Dietary Requirements</label>
              <textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => setFormData(prev => ({...prev, specialRequests: e.target.value}))}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
                placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
              />
            </div>
            {/* Emergency Contact */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="emergencyContact" style={{ display: "block", marginBottom: "0.5rem" }}>Emergency Contact Name</label>
              <input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => setFormData(prev => ({...prev, emergencyContact: e.target.value}))}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
                placeholder="Full name"
              />
              <label htmlFor="emergencyPhone" style={{ display: "block", marginBottom: "0.5rem" }}>Emergency Contact Phone</label>
              <input
                id="emergencyPhone"
                type="tel"
                value={formData.emergencyPhone}
                onChange={(e) => setFormData(prev => ({...prev, emergencyPhone: e.target.value}))}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
                placeholder="Phone number"
              />
            </div>
            {/* Payment Method */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="paymentMethod" style={{ display: "block", marginBottom: "0.5rem" }}>Payment Method *</label>
              <select
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={(e) => setFormData(prev => ({...prev, paymentMethod: e.target.value}))}
                required
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "1rem" }}
              >
                <option value="">Select payment method</option>
                <option value="credit-card">Credit/Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="pay-on-site">Pay on Site</option>
              </select>
              <div style={{ background: "#e3f2fd", padding: "0.75rem", borderRadius: "6px", color: "#1565c0", fontSize: "0.95rem" }}>
                <Shield style={{ width: "18px", height: "18px", marginRight: "6px", verticalAlign: "middle" }} />
                Your payment information is secure and encrypted. Full refund available up to 24 hours before the tour.
              </div>
            </div>
            <button
              type="submit"
              style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", background: "#43e97b", color: "#fff", border: "none", fontWeight: "bold", fontSize: "1rem" }}
              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.paymentMethod}
            >
              Complete Booking
            </button>
            <div style={{ fontSize: "0.85rem", color: "#888", textAlign: "center", marginTop: "1rem" }}>
              By booking, you agree to our Terms of Service and Privacy Policy.<br />
              Free cancellation up to 24 hours before the tour.
            </div>
          </form>
          {/* Tour Summary */}
          <div style={{ flex: "1", minWidth: "280px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px #eee", padding: "2rem", height: "fit-content" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Tour Summary</h2>
            <div style={{ height: "160px", borderRadius: "8px", overflow: "hidden", marginBottom: "1rem", background: "#eee" }}>
              {/* Replace with <img> if you don't have ImageWithFallback */}
              <img
                src={planningData.image}
                alt={planningData.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>{planningData.title}</h3>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <Star style={{ width: "16px", height: "16px", color: "#FFD700", marginRight: "4px" }} />
                <span style={{ fontSize: "0.95rem" }}>{planningData.rating} ({planningData.reviews} reviews)</span>
              </div>
              <span style={{ display: "inline-block", border: "1px solid #43e97b", color: "#43e97b", borderRadius: "12px", padding: "2px 10px", fontSize: "0.85rem", marginBottom: "1rem" }}>
                {planningData.category}
              </span>
            </div>
            <hr style={{ margin: "1rem 0" }} />
            <div style={{ fontSize: "0.95rem", color: "#666", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <Calendar style={{ width: "16px", height: "16px", marginRight: "6px" }} />
                <span>{new Date(planningData.date).toLocaleDateString()}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <Clock style={{ width: "16px", height: "16px", marginRight: "6px" }} />
                <span>{planningData.time} ({planningData.duration})</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <MapPin style={{ width: "16px", height: "16px", marginRight: "6px" }} />
                <span>{planningData.location}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <Users style={{ width: "16px", height: "16px", marginRight: "6px" }} />
                <span>With {planningData.guide.name}</span>
              </div>
            </div>
            <hr style={{ margin: "1rem 0" }} />
            <div style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Price per person</span>
                <span>${planningData.price}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Participants</span>
                <span>{formData.participants}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "#888" }}>
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>
              <hr style={{ margin: "0.75rem 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "#43e97b" }}>
                <span>Total</span>
                <span>${finalTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}