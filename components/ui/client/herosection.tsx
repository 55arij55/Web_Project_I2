import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <section
      className="position-relative"
      style={{
        height: '400px',
        background: 'linear-gradient(135deg, #1565c0 0%, #43e97b 100%)'
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(21,101,192,0.7) 0%, rgba(67,233,123,0.7) 100%)',
          zIndex: 1
        }}
      ></div>
      <div className="position-absolute w-100 h-100 hero-overlay" style={{ zIndex: 2 }}></div>
      <div className="position-relative container h-100 d-flex align-items-center" style={{ zIndex: 3 }}>
        <div className="text-white" style={{ maxWidth: '600px' }}>
          <h1 className="display-4 fw-bold mb-4 hero-title">
            Discover the World with Expert Local Guides
          </h1>
          <p className="fs-5 mb-4 hero-subtitle" style={{ color: '#e3f2fd' }}>
            Connect with passionate local guides for authentic, personalized travel experiences
          </p>
          {/* Search Bar */}
          <div className="row g-3" style={{ maxWidth: '500px' }}>
            <div className="col-md-8">
              <div
                className="position-relative"
                style={{
                  background: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  padding: '8px 16px'
                }}
              >
                <Search className="position-absolute top-50 translate-middle-y text-muted ms-3" size={20} />
                <input
                  type="text"
                  className="form-control form-control-lg ps-5"
                  placeholder="Where do you want to explore?"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#1565c0',
                    fontWeight: 500,
                    boxShadow: 'none'
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <button
                onClick={() => onNavigate('plannings')}
                className="btn btn-tourism-secondary btn-lg w-100"
                style={{
                  background: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '16px',
                  color: '#1565c0',
                  fontWeight: 600,
                  border: 'none',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
                }}
              >
                Search Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}