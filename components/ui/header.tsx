import "../../src/styles.css";
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
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          <span className="logo-text">TourGuide</span>
        </div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Plannings</a>
          <a href="#">Guides</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="actions">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/guide_register");
            }}
          >
            Become a Guide
          </a>
          <button className="button" onClick={handleBookTour}>
            Book a Tour
          </button>
        </div>
      </div>
    </header>
  );
}
