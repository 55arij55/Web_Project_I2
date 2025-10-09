import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Tour {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  highlights: string[];
}

export default function PlanningsComponent() {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const navigate = useNavigate();

  const tours: Tour[] = [
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Experience the breathtaking views of our mountain ranges with expert guides.",
      duration: "3 Days",
      price: "$299",
      image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT",
      difficulty: "Moderate",
      highlights: ["Mountain peaks", "Wildlife spotting", "Camping under stars", "Professional photography"]
    },
    {
      id: 2,
      title: "Coastal Explorer",
      description: "Discover hidden beaches and coastal wonders on this guided tour.",
      duration: "2 Days",
      price: "$199",
      image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT",
      difficulty: "Easy",
      highlights: ["Beach access", "Snorkeling", "Sunset views", "Local cuisine"]
    },
    {
      id: 3,
      title: "Forest Trekking",
      description: "Immerse yourself in ancient forests and discover hidden waterfalls.",
      duration: "4 Days",
      price: "$399",
      image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT",
      difficulty: "Challenging",
      highlights: ["Waterfall visits", "Bird watching", "Forest camping", "Nature photography"]
    },
    {
      id: 4,
      title: "City Cultural Tour",
      description: "Explore historical landmarks and cultural sites with local experts.",
      duration: "1 Day",
      price: "$99",
      image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT",
      difficulty: "Easy",
      highlights: ["Historical sites", "Local markets", "Museum visits", "Cultural experiences"]
    },
    {
      id: 5,
      title: "Desert Expedition",
      description: "Journey through stunning desert landscapes and experience nomadic culture.",
      duration: "5 Days",
      price: "$499",
      image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT",
      difficulty: "Moderate",
      highlights: ["Desert camping", "Stargazing", "Camel rides", "Traditional meals"]
    },
    {
      id: 6,
      title: "Island Hopping",
      description: "Visit multiple islands and enjoy pristine beaches and marine life.",
      duration: "3 Days",
      price: "$349",
      image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT",
      difficulty: "Easy",
      highlights: ["Boat transfers", "Snorkeling gear", "Island lunches", "Marine life viewing"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-success";
      case "Moderate":
        return "bg-warning";
      case "Challenging":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark mb-3">Available Tours</h1>
        <p className="lead text-muted">
          Discover amazing adventures tailored for every type of traveler
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 rounded-4 mb-4 text-white"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              }}
            >
              <h3 className="mb-3">Find Your Perfect Adventure</h3>
              <p className="mb-0">
                Browse through our carefully curated tours and book your next unforgettable experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {tours.map((tour) => (
          <div key={tour.id} className="col-lg-4 col-md-6">
            <div
              className={`card tour-card shadow-sm border-0 rounded-4 h-100 ${
                selectedTour === tour.id ? "selected" : ""
              }`}
              onMouseEnter={() => setSelectedTour(tour.id)}
              onMouseLeave={() => setSelectedTour(null)}
              style={{
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                transform: selectedTour === tour.id ? "translateY(-8px)" : "translateY(0)",
                boxShadow: selectedTour === tour.id
                  ? "0 12px 30px rgba(0,0,0,0.15)"
                  : "0 4px 6px rgba(0,0,0,0.1)"
              }}
            >
              <div className="position-relative overflow-hidden rounded-top-4">
                <img
                  src={tour.image}
                  className="card-img-top"
                  alt={tour.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                    transform: selectedTour === tour.id ? "scale(1.05)" : "scale(1)"
                  }}
                />
                <div
                  className="position-absolute top-0 end-0 m-3"
                  style={{ transition: "all 0.3s ease-in-out" }}
                >
                  <span
                    className={`badge ${getDifficultyColor(tour.difficulty)} text-white px-3 py-2 rounded-pill shadow-sm`}
                    style={{
                      transform: selectedTour === tour.id ? "scale(1.1)" : "scale(1)"
                    }}
                  >
                    {tour.difficulty}
                  </span>
                </div>
                <div
                  className="position-absolute bottom-0 start-0 end-0 text-white p-3"
                  style={{
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    transition: "all 0.3s ease-in-out",
                    opacity: selectedTour === tour.id ? 0.9 : 0.7
                  }}
                >
                  <h5 className="card-title mb-1 fw-bold">{tour.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="small">{tour.duration}</span>
                    <span className="h5 mb-0 fw-bold text-warning">{tour.price}</span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text text-muted">{tour.description}</p>
               
                <div className="mb-3">
                  <h6 className="fw-bold text-dark mb-2">Tour Highlights:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="badge bg-light text-dark border px-3 py-2 rounded-pill"
                        style={{
                          transition: "all 0.2s ease-in-out",
                          transform: selectedTour === tour.id ? "translateY(-2px)" : "translateY(0)"
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-footer bg-transparent border-0 pb-3">
                <div className="d-grid">
                  <button
                    className="btn btn-primary rounded-pill py-2 fw-semibold"
                    style={{
                      transition: "all 0.3s ease-in-out",
                      transform: selectedTour === tour.id ? "scale(1.02)" : "scale(1)",
                      background: selectedTour === tour.id
                        ? "linear-gradient(135deg, #28a745, #007bff)"
                        : "linear-gradient(135deg, #007bff, #28a745)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = selectedTour === tour.id ? "scale(1.02)" : "scale(1)";
                    }}

                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/cart");
                    }}
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <div className="p-4 rounded-4" style={{ backgroundColor: "#f8f9fa" }}>
          <h4 className="mb-3">Can't Find What You're Looking For?</h4>
          <p className="text-muted mb-3">
            Contact us for custom tour packages tailored to your preferences
          </p>
          <button className="btn btn-outline-primary rounded-pill px-4">
            Request Custom Tour
          </button>
        </div>
      </div>
    </div>
  );
}
