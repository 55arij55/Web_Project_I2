import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


interface City {
  id: number;
  name: string;
  country: string;
  image: string;
}

interface Language {
  id: number;
  name: string;
  level: string;
}

interface Specialty {
  id: number;
  name: string;
  description: string;
  icon: string;
}

interface Guide {
  id: number;
  name: string;
  avatar: string;
  agency: string;
  cities: City[];
  languages: Language[];
  specialties: Specialty[];
  aboutYou: string;
  experience: string;
  certifications: string[];
  rating: number;
  reviews: number;
  pricePerDay: string;
}

export default function GuidesComponent() {
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null);
  const navigate = useNavigate();

  const guides: Guide[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      agency: "Alpine Adventures",
      cities: [
        { id: 1, name: "Zurich", country: "Switzerland", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" },
        { id: 2, name: "Interlaken", country: "Switzerland", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" }
      ],
      languages: [
        { id: 1, name: "English", level: "Native" },
        { id: 2, name: "German", level: "Fluent" },
        { id: 3, name: "French", level: "Intermediate" }
      ],
      specialties: [
        { id: 1, name: "Hiking", description: "Mountain trekking and alpine routes", icon: "🥾" },
        { id: 2, name: "Photography", description: "Landscape and wildlife photography", icon: "📸" },
        { id: 3, name: "History", description: "Local history and culture", icon: "🏛️" }
      ],
      aboutYou: "Passionate mountain guide with 8 years of experience exploring the Swiss Alps. I love sharing hidden trails and local stories with travelers.",
      experience: "8+ years as certified mountain guide. Former national park ranger. Wilderness first aid certified.",
      certifications: ["IFMGA Mountain Guide", "Wilderness First Responder", "Avalanche Safety Level 3"],
      rating: 4.9,
      reviews: 127,
      pricePerDay: "$150"
    },
    {
      id: 2,
      name: "Marco Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      agency: "Mediterranean Tours",
      cities: [
        { id: 1, name: "Barcelona", country: "Spain", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" },
        { id: 2, name: "Madrid", country: "Spain", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" }
      ],
      languages: [
        { id: 1, name: "Spanish", level: "Native" },
        { id: 2, name: "English", level: "Fluent" },
        { id: 3, name: "Catalan", level: "Native" }
      ],
      specialties: [
        { id: 1, name: "Food Tours", description: "Local cuisine and tapas culture", icon: "🍷" },
        { id: 2, name: "Architecture", description: "Gaudi and modernist architecture", icon: "🏰" },
        { id: 3, name: "Beaches", description: "Coastal exploration and hidden coves", icon: "🏖️" }
      ],
      aboutYou: "Born and raised in Barcelona, I've been sharing the authentic Spanish experience with travelers for over 6 years. From hidden tapas bars to architectural wonders.",
      experience: "6 years guiding experience. Tourism degree from University of Barcelona. Certified food tour guide.",
      certifications: ["Official Tourism Guide", "Food Safety Certified", "Cultural Heritage Specialist"],
      rating: 4.8,
      reviews: 89,
      pricePerDay: "$120"
    },
    {
      id: 3,
      name: "Aisha Tanaka",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      agency: "Tokyo Cultural Guides",
      cities: [
        { id: 1, name: "Tokyo", country: "Japan", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" },
        { id: 2, name: "Kyoto", country: "Japan", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" }
      ],
      languages: [
        { id: 1, name: "Japanese", level: "Native" },
        { id: 2, name: "English", level: "Fluent" },
        { id: 3, name: "Korean", level: "Intermediate" }
      ],
      specialties: [
        { id: 1, name: "Temples", description: "Traditional temples and gardens", icon: "⛩️" },
        { id: 2, name: "Anime Culture", description: "Anime and pop culture spots", icon: "🎌" },
        { id: 3, name: "Tea Ceremony", description: "Traditional tea ceremonies", icon: "🍵" }
      ],
      aboutYou: "Bilingual guide passionate about sharing both traditional and modern Japanese culture. From ancient temples to the latest anime hotspots.",
      experience: "5 years guiding international visitors. Studied cultural anthropology. Traditional tea ceremony practitioner.",
      certifications: ["National Guide License", "Tea Ceremony Instructor", "Cultural Interpreter"],
      rating: 5.0,
      reviews: 156,
      pricePerDay: "$140"
    },
    {
      id: 4,
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      agency: "Urban Explorers",
      cities: [
        { id: 1, name: "New York", country: "USA", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" },
        { id: 2, name: "Boston", country: "USA", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" }
      ],
      languages: [
        { id: 1, name: "English", level: "Native" },
        { id: 2, name: "Mandarin", level: "Fluent" },
        { id: 3, name: "Spanish", level: "Basic" }
      ],
      specialties: [
        { id: 1, name: "Street Art", description: "Graffiti and urban art tours", icon: "🎨" },
        { id: 2, name: "Food Trucks", description: "Local food scene and hidden gems", icon: "🍔" },
        { id: 3, name: "History", description: "Historical landmarks and stories", icon: "📜" }
      ],
      aboutYou: "NYC native with a passion for uncovering the city's hidden stories. From street art in Bushwick to historic landmarks in Manhattan.",
      experience: "7 years as NYC tour guide. Art history background. Food safety certified.",
      certifications: ["NYC Tour Guide License", "Food Handler Certificate", "CPR/First Aid Certified"],
      rating: 4.7,
      reviews: 203,
      pricePerDay: "$110"
    },
    {
      id: 5,
      name: "Isabella Rossi",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      agency: "Roman Heritage Tours",
      cities: [
        { id: 1, name: "Rome", country: "Italy", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" },
        { id: 2, name: "Florence", country: "Italy", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" }
      ],
      languages: [
        { id: 1, name: "Italian", level: "Native" },
        { id: 2, name: "English", level: "Fluent" },
        { id: 3, name: "French", level: "Intermediate" }
      ],
      specialties: [
        { id: 1, name: "Ancient History", description: "Roman Empire and archaeological sites", icon: "🏛️" },
        { id: 2, name: "Art", description: "Renaissance art and museums", icon: "🎨" },
        { id: 3, name: "Wine Tasting", description: "Local vineyards and wine culture", icon: "🍷" }
      ],
      aboutYou: "Art historian and Rome native with a deep love for sharing Italy's rich cultural heritage. Specialized in making ancient history come alive.",
      experience: "10+ years guiding experience. PhD in Art History. Certified sommelier.",
      certifications: ["Official Italian Guide", "Sommelier Certification", "Art History Professor"],
      rating: 4.9,
      reviews: 178,
      pricePerDay: "$160"
    },
    {
      id: 6,
      name: "James O'Connor",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      agency: "Wild Ireland Adventures",
      cities: [
        { id: 1, name: "Dublin", country: "Ireland", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" },
        { id: 2, name: "Galway", country: "Ireland", image: "https://engineering.stanford.edu/sites/default/files/styles/card_1900x950/public/images/news/monkeybrains-1700x800_0.jpg?h=e95b51fc&itok=7hsF7VBT" }
      ],
      languages: [
        { id: 1, name: "English", level: "Native" },
        { id: 2, name: "Irish Gaelic", level: "Conversational" }
      ],
      specialties: [
        { id: 1, name: "Coastal Hikes", description: "Cliffs and coastal trails", icon: "🌊" },
        { id: 2, name: "Pub Culture", description: "Traditional Irish pubs and music", icon: "🍻" },
        { id: 3, name: "Mythology", description: "Celtic myths and legends", icon: "📖" }
      ],
      aboutYou: "Irish storyteller and outdoor enthusiast. I combine breathtaking landscapes with ancient Celtic stories for an unforgettable Irish experience.",
      experience: "6 years guiding. Wilderness first aid certified. Irish folklore researcher.",
      certifications: ["Wilderness First Responder", "Irish Tourism Board Certified", "Storytelling Workshop Leader"],
      rating: 4.8,
      reviews: 94,
      pricePerDay: "$130"
    }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 4.8) return "bg-success";
    if (rating >= 4.5) return "bg-warning";
    return "bg-info";
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark mb-3">Expert Tour Guides</h1>
        <p className="lead text-muted">
          Connect with passionate local guides who will make your journey unforgettable
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 rounded-4 mb-4 text-white"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              }}
            >
              <h3 className="mb-3">Find Your Perfect Guide</h3>
              <p className="mb-0">
                Browse through our verified local experts and choose the guide that matches your travel style
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {guides.map((guide) => (
          <div key={guide.id} className="col-lg-4 col-md-6">
            <div
              className={`card guide-card shadow-sm border-0 rounded-4 h-100 ${
                selectedGuide === guide.id ? "selected" : ""
              }`}
              onMouseEnter={() => setSelectedGuide(guide.id)}
              onMouseLeave={() => setSelectedGuide(null)}
              style={{
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                transform: selectedGuide === guide.id ? "translateY(-8px)" : "translateY(0)",
                boxShadow: selectedGuide === guide.id 
                  ? "0 12px 30px rgba(0,0,0,0.15)" 
                  : "0 4px 6px rgba(0,0,0,0.1)"
              }}
            >
              <div className="position-relative overflow-hidden rounded-top-4">
                <img
                  src={guide.cities[0].image}
                  className="card-img-top"
                  alt={guide.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                    transform: selectedGuide === guide.id ? "scale(1.05)" : "scale(1)"
                  }}
                />
                <div
                  className="position-absolute top-0 start-0 m-3"
                  style={{ transition: "all 0.3s ease-in-out" }}
                >
                  <div className="d-flex align-items-center bg-white rounded-pill px-3 py-1 shadow-sm">
                    <img
                      src={guide.avatar}
                      alt={guide.name}
                      className="rounded-circle me-2"
                      style={{ width: "32px", height: "32px", objectFit: "cover" }}
                    />
                    <span className="fw-semibold text-dark">{guide.name}</span>
                  </div>
                </div>
                <div
                  className="position-absolute top-0 end-0 m-3"
                  style={{ transition: "all 0.3s ease-in-out" }}
                >
                  <span
                    className={`badge ${getRatingColor(guide.rating)} text-white px-3 py-2 rounded-pill shadow-sm`}
                    style={{
                      transform: selectedGuide === guide.id ? "scale(1.1)" : "scale(1)"
                    }}
                  >
                    ⭐ {guide.rating} ({guide.reviews})
                  </span>
                </div>
                <div
                  className="position-absolute bottom-0 start-0 end-0 text-white p-3"
                  style={{
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    transition: "all 0.3s ease-in-out",
                    opacity: selectedGuide === guide.id ? 0.9 : 0.7
                  }}
                >
                  <h5 className="card-title mb-1 fw-bold">{guide.agency}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="small">{guide.cities.map(city => city.name).join(", ")}</span>
                    <span className="h5 mb-0 fw-bold text-warning">{guide.pricePerDay}/day</span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text text-muted mb-3">{guide.aboutYou}</p>
                
                <div className="mb-3">
                  <h6 className="fw-bold text-dark mb-2">Languages:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {guide.languages.map((language) => (
                      <span
                        key={language.id}
                        className="badge bg-primary text-white px-3 py-2 rounded-pill"
                        style={{
                          transition: "all 0.2s ease-in-out",
                          transform: selectedGuide === guide.id ? "translateY(-2px)" : "translateY(0)"
                        }}
                      >
                        {language.name} ({language.level})
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-dark mb-2">Specialties:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {guide.specialties.map((specialty) => (
                      <span
                        key={specialty.id}
                        className="badge bg-light text-dark border px-3 py-2 rounded-pill"
                        style={{
                          transition: "all 0.2s ease-in-out",
                          transform: selectedGuide === guide.id ? "translateY(-2px)" : "translateY(0)"
                        }}
                      >
                        {specialty.icon} {specialty.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-dark mb-2">Certifications:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {guide.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="badge bg-success text-white px-2 py-1 rounded"
                        style={{
                          transition: "all 0.2s ease-in-out",
                          transform: selectedGuide === guide.id ? "translateY(-2px)" : "translateY(0)"
                        }}
                      >
                        {cert}
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
                      transform: selectedGuide === guide.id ? "scale(1.02)" : "scale(1)",
                      background: selectedGuide === guide.id 
                        ? "linear-gradient(135deg, #28a745, #007bff)" 
                        : "linear-gradient(135deg, #007bff, #28a745)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = selectedGuide === guide.id ? "scale(1.02)" : "scale(1)";
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/guide/${guide.id}`);
                    }}
                  >
                    View Profile & Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <div className="p-4 rounded-4" style={{ backgroundColor: "#f8f9fa" }}>
          <h4 className="mb-3">Want to Become a Guide?</h4>
          <p className="text-muted mb-3">
            Join our community of expert guides and share your passion with travelers worldwide
          </p>
          <button className="btn btn-outline-primary rounded-pill px-4">
            Apply as Guide
          </button>
        </div>
      </div>
    </div>
  );
}