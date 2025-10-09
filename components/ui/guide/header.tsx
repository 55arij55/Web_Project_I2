import React from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Add your logout logic here (clear auth tokens, session, etc.)
    navigate("/"); // Redirect to home or login page
  };

  return (
    <header
      className="header"
      style={{
        width: "100%", // full width
        padding: "20px 50px",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box"
      }}
    >
      {/* Logo */}
      <div
        className="logo"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <div className="logo-icon" style={{ width: "50px", height: "50px" }}>
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
          cursor: "pointer"
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </header>
  );
}
