import { Users, Compass, Globe } from 'lucide-react';
import React from 'react';

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">Why Choose TourGuide?</h2>
          <p className="text-muted fs-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Experience destinations through the eyes of locals with our curated network of expert guides
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 text-center">
            <div className="feature-icon feature-icon-blue">
              <Users size={32} />
            </div>
            <h3 className="h4 fw-bold mb-3">Expert Local Guides</h3>
            <p className="text-muted">
              Carefully vetted guides with deep local knowledge and passion for their destinations
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <div className="feature-icon feature-icon-green">
              <Compass size={32} />
            </div>
            <h3 className="h4 fw-bold mb-3">Personalized Experiences</h3>
            <p className="text-muted">
              Customized tours tailored to your interests, pace, and preferences
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <div className="feature-icon feature-icon-blue">
              <Globe size={32} />
            </div>
            <h3 className="h4 fw-bold mb-3">Global Network</h3>
            <p className="text-muted">
              Access to guides in hundreds of destinations worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}