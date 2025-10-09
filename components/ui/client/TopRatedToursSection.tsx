import { Star, MapPin, Clock, Users } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy data for demonstration
const topTours = [
  {
    id: 1,
    image: 'https://c8.alamy.com/compfr/ba0g73/singe-avec-ordinateur-portable-ba0g73.jpg',
    title: 'Paris City Highlights',
    rating: 4.8,
    location: 'Paris, France',
    duration: '3 hours',
    guide: 'Marie',
    price: 49,
    availability: 'Available',
  },
  {
    id: 2,
    image: 'https://c8.alamy.com/compfr/ba0g73/singe-avec-ordinateur-portable-ba0g73.jpg',
    title: 'Rome Ancient Wonders',
    rating: 4.9,
    location: 'Rome, Italy',
    duration: '4 hours',
    guide: 'Luca',
    price: 59,
    availability: 'Few spots',
  },
  {
    id: 3,
    image: 'https://c8.alamy.com/compfr/ba0g73/singe-avec-ordinateur-portable-ba0g73.jpg',
    title: 'Tokyo Food Adventure',
    rating: 4.7,
    location: 'Tokyo, Japan',
    duration: '2 hours',
    guide: 'Yuki',
    price: 39,
    availability: 'Available',
  },
];

// Dummy ImageWithFallback component
function ImageWithFallback({ src, alt, ...props }) {
  return <img src={src} alt={alt} {...props} />;
}

export function TopRatedToursSection() {
  const navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">Top-Rated Tours</h2>
          <p className="text-muted fs-5">Discover our most popular and highly-rated experiences</p>
        </div>
        <div className="row g-4">
          {topTours.map((tour) => (
            <div key={tour.id} className="col-lg-4">
              <div className="card h-100 card-hover border-0 shadow-sm overflow-hidden">
                <div className="tour-image-container position-relative">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge badge-rating d-flex align-items-center">
                      <Star size={14} className="star-rating me-1" />
                      {tour.rating}
                    </span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">{tour.title}</h5>
                  <div className="mb-3">
                    <div className="d-flex align-items-center text-muted mb-2">
                      <MapPin size={16} className="me-2" />
                      <small>{tour.location}</small>
                    </div>
                    <div className="d-flex align-items-center text-muted mb-2">
                      <Clock size={16} className="me-2" />
                      <small>{tour.duration}</small>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <Users size={16} className="me-2" />
                      <small>Guide: {tour.guide}</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span className="h4 text-success mb-0">${tour.price}</span>
                      <small className="text-muted"> per person</small>
                    </div>
                    <span className="badge bg-success bg-opacity-10 text-success border border-success">
                      {tour.availability}
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('plannings')}
                    className="btn btn-tourism-secondary w-100"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}