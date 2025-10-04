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
          <a href="#" style={{ margin: "0 15px" }}>
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
        </div>
      </div>
    </header>
  );
}
