import { useNavigate } from 'react-router-dom';

export function ReadyToStartSection() {
  const navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <section className="section-padding bg-gradient-tourism">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="display-6 fw-bold text-white mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="fs-5 text-white mb-4" style={{ opacity: 0.9 }}>
              Join thousands of travelers who have discovered amazing experiences with our local guides
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button
                onClick={() => onNavigate('plannings')}
                className="btn btn-light btn-lg px-4"
                style={{ color: 'var(--tourism-green)' }}
              >
                Reserve a Planning
              </button>
              <button
                onClick={() => onNavigate('guide-register')}
                className="btn btn-outline-light btn-lg px-4"
              >
                Become a Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}