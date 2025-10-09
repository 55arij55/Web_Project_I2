import React from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

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
    guide: { name: "John Doe" }
  };

  const handleBookTour = () => {
    navigate("/reserve_planning", { state: { planningData: samplePlanningData } });
  };

  const handleShoppingCart = () => {
    navigate("/cart", { });
  };

  return (
    <header
      className="header"
      style={{
        padding: "30px 20px", // augmente la taille verticale
        fontSize: "1.2rem", // texte plus grand
        backgroundColor: "#f8f9fa" // couleur de fond douce
      }}
    >
      <div
        className="header-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
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

        <nav className="nav" style={{ fontSize: "1.1rem" }}>
          <a
            href="#"
            style={{ margin: "0 15px" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/home_page");
            }}
          >
            Home
          </a>
          <a href="#" style={{ margin: "0 15px" }}
          
            onClick={(e) => {
              e.preventDefault();
              navigate("/plannings");
            }}
          >
            Plannings
          </a>
          <a href="#" style={{ margin: "0 15px" }}>
            Guides
          </a>
          <a href="#" style={{ margin: "0 15px" }}>
            About
          </a>
          <a
            href="#"
            style={{ margin: "0 15px" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}
          >
            Contact
          </a>
        </nav>

        <div className="actions" style={{ display: "flex", gap: "15px" }}>
          <a
            href="#"
            style={{ fontSize: "1.1rem" }}
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
              cursor: "pointer"
            }}
            onClick={handleBookTour}
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
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.background = "linear-gradient(135deg, #20c997, #198754)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "linear-gradient(135deg, #28a745, #20c997)";
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
        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
      </svg>
      Basket
    </button>

        </div>
      </div>
    </header>
  );
}
