import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const samplePlanningData = {
    title: "Sunset City Tour",
    price: 50,
    date: "2025-10-10T10:00:00",
    time: "10:00 AM",
    duration: "3 hours",
    location: "City Center",
    image: "/images/tour.jpg",
    rating: 4.8,
    reviews: 120,
    category: "Sightseeing",
    availableSpots: 5,
    guide: { name: "John Doe" },
  };

  const handleBookTour = () => {
    navigate("/reserve_planning", {
      state: { planningData: samplePlanningData },
    });
  };

  const handleShoppingCart = () => {
    navigate("/cart", {});
  };

  const handleSignOutClick = () => {
    setShowConfirmPopup(true);
  };

  const handleConfirmSignOut = () => {
    // Add your logout logic here (clear auth tokens, session, etc.)
    console.log("Signing out...");
    setShowConfirmPopup(false);
    navigate("/"); // Redirect to home or login page
  };

  const handleCancelSignOut = () => {
    setShowConfirmPopup(false);
  };

  return (
    <>
      <header
        className="header"
        style={{
          padding: "30px 20px",
          fontSize: "1.2rem",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #dee2e6"
        }}
      >
        <div
          className="header-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div className="logo-icon" style={{ width: "50px", height: "50px", color: "#0d6efd" }}>
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ width: "100%", height: "100%" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
              TourGuide
            </span>
          </div>

          <nav className="nav" style={{ fontSize: "1.1rem" }}>
            <a
              href="#"
              style={{ margin: "0 15px", textDecoration: "none", color: "#343a40" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/home_page");
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{ margin: "0 15px", textDecoration: "none", color: "#343a40" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/plannings");
              }}
            >
              Plannings
            </a>
            <a href="#" style={{ margin: "0 15px", textDecoration: "none", color: "#343a40" }}>
              Guides
            </a>
            <a
              href="#"
              style={{ margin: "0 15px", textDecoration: "none", color: "#343a40" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
              }}
            >
              Contact
            </a>
          </nav>

          <div className="actions" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <a
              href="#"
              style={{ fontSize: "1.1rem", textDecoration: "none", color: "#007bff" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/guide_register");
              }}
            >
              Become a Guide
            </a>
            <button
              className="button"
              style={{
                padding: "12px 25px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/plannings");
              }}
            >
              Book a Tour
            </button>

            <button
              className="btn basket-btn position-relative d-flex align-items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #28a745, #20c997)",
                border: "none",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "16px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #20c997, #198754)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #28a745, #20c997)";
              }}
              onClick={handleShoppingCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ transition: "transform 0.3s ease" }}
              >
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
              </svg>
              Basket
            </button>

            {/* Sign Out Button */}
            <button
              className="btn btn-outline-danger"
              style={{
                padding: "12px 25px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                border: "1px solid #dc3545",
                backgroundColor: "white",
                color: "#dc3545",
                cursor: "pointer",
              }}
              onClick={handleSignOutClick}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Confirmation Popup */}
      {showConfirmPopup && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="popup-content"
            style={{
              backgroundColor: "white",
              padding: "30px 40px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              width: "auto",
              maxWidth: "400px",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "15px", fontSize: "1.5rem" }}>Confirm Sign Out</h3>
            <p style={{ marginBottom: "30px", color: "#6c757d", fontSize: "1.1rem" }}>
              Are you sure you want to sign out?
            </p>
            <div
              className="popup-buttons"
              style={{ display: "flex", justifyContent: "center", gap: "15px" }}
            >
              <button
                onClick={handleCancelSignOut}
                style={{
                  padding: "10px 25px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #6c757d",
                  backgroundColor: "white",
                  color: "#6c757d",
                  cursor: "pointer",
                }}
              >
                No, Cancel
              </button>
              <button
                onClick={handleConfirmSignOut}
                style={{
                  padding: "10px 25px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#dc3545",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Yes, Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Dummy App component for rendering. In a real app this would be part of your routing setup.
export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>Welcome to TourGuide</h1>
        <p>This is the main content of your application.</p>
      </main>
    </div>
  );
}

