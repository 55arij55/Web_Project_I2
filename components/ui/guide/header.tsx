import React, { useState } from "react";
// In a real application, you would use react-router-dom, but for this self-contained example,
// we'll simulate navigation.
// import { useNavigate } from "react-router-dom";

export function Header() {
  // In a real app, uncomment the line below
  // const navigate = useNavigate();

  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const handleSignOutClick = () => {
    setShowConfirmPopup(true);
  };

  const handleConfirmSignOut = () => {
    // Add your actual logout logic here (e.g., clear auth tokens, session, etc.)
    console.log("Signing out...");
    setShowConfirmPopup(false);
    // In a real app, you would use navigate:
    // navigate("/");
    // For this example, we'll simulate a redirect.
    window.location.href = "/";
  };

  const handleCancelSignOut = () => {
    setShowConfirmPopup(false);
  };

  return (
    <>
      <header
        className="header"
        style={{
          width: "100%", // full width
          padding: "20px 50px",
          backgroundColor: "#f8f9fa",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          borderBottom: "1px solid #dee2e6"
        }}
      >
        {/* Logo */}
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
          <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>TourGuide</span>
        </div>

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
            transition: "all 0.2s ease-in-out"
          }}
          onClick={handleSignOutClick}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#dc3545';
            e.currentTarget.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#dc3545';
          }}
        >
          Sign Out
        </button>
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

// You can create a default export for the main App component if needed,
// for example, to render the Header.
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
