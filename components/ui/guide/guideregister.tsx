import { useState } from "react";
import { 
  UserPlus, 
  Languages, 
  MapPin, 
  Star, 
  Upload,
  CheckCircle
} from "lucide-react";

interface GuideRegisterProps {
  onNavigate: (view: string) => void;
}

export function GuideRegister({ onNavigate }: GuideRegisterProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    experience: '',
    languages: [] as string[],
    expertise: [] as string[],
    certifications: '',
    profileImage: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableLanguages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
    'Mandarin', 'Japanese', 'Korean', 'Arabic', 'Russian', 'Dutch'
  ];

  const expertiseAreas = [
    'Historical Tours', 'Cultural Tours', 'Food Tours', 'Adventure Tours',
    'Art & Museums', 'Architecture', 'Photography', 'Nature & Wildlife',
    'City Walking Tours', 'Bike Tours', 'Night Tours', 'Family-Friendly'
  ];

  const handleLanguageToggle = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const handleExpertiseToggle = (area: string) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(area)
        ? prev.expertise.filter(e => e !== area)
        : [...prev.expertise, area]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-vh-100 bg-gradient-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-5">
                  <div className="feature-icon feature-icon-green mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="h3 fw-bold mb-4">Application Submitted Successfully!</h2>
                  <p className="text-muted mb-4">
                    Thank you for your interest in becoming a guide. We'll review your application and 
                    get back to you within 2-3 business days.
                  </p>
                  <div className="mb-4">
                    <p className="fw-semibold small mb-2">Next steps:</p>
                    <ul className="list-unstyled small text-muted">
                      <li>• We'll verify your credentials and experience</li>
                      <li>• You may be contacted for a brief interview</li>
                      <li>• Once approved, you'll receive access to your guide dashboard</li>
                    </ul>
                  </div>
                  <div className="d-grid gap-3">
                    <button 
                      onClick={() => onNavigate('home')}
                      className="btn btn-tourism-primary"
                    >
                      Return to Homepage
                    </button>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-outline-primary"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-gradient-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <div className="feature-icon feature-icon-blue mb-3">
            <UserPlus size={32} />
          </div>
          <h1 className="display-6 fw-bold mb-3">Become a Tour Guide</h1>
          <p className="text-muted fs-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Share your passion for your city and culture with travelers from around the world. 
            Join our community of expert local guides.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white py-3">
                <h3 className="card-title h5 mb-1">Guide Registration Form</h3>
                <p className="text-muted small mb-0">
                  Please fill out all required information to apply as a guide
                </p>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-5">
                    <h4 className="h6 fw-bold border-bottom pb-2 mb-4">Personal Information</h4>
                    
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">Location (City, Country) *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <MapPin size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          placeholder="e.g., Barcelona, Spain"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-5">
                    <h4 className="h6 fw-bold border-bottom pb-2 mb-3 d-flex align-items-center">
                      <Languages size={20} className="me-2" />
                      Languages Spoken *
                    </h4>
                    <p className="small text-muted mb-3">Select all languages you can guide in</p>
                    
                    <div className="row g-2 mb-3">
                      {availableLanguages.map((language) => (
                        <div key={language} className="col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`lang-${language}`}
                              checked={formData.languages.includes(language)}
                              onChange={() => handleLanguageToggle(language)}
                            />
                            <label className="form-check-label small" htmlFor={`lang-${language}`}>
                              {language}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="d-flex flex-wrap gap-2">
                      {formData.languages.map((language) => (
                        <span key={language} className="badge bg-secondary">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-5">
                    <h4 className="h6 fw-bold border-bottom pb-2 mb-3 d-flex align-items-center">
                      <Star size={20} className="me-2" />
                      Areas of Expertise *
                    </h4>
                    <p className="small text-muted mb-3">Select your tour specialties</p>
                    
                    <div className="row g-2 mb-3">
                      {expertiseAreas.map((area) => (
                        <div key={area} className="col-md-6 col-lg-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`exp-${area}`}
                              checked={formData.expertise.includes(area)}
                              onChange={() => handleExpertiseToggle(area)}
                            />
                            <label className="form-check-label small" htmlFor={`exp-${area}`}>
                              {area}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="d-flex flex-wrap gap-2">
                      {formData.expertise.map((area) => (
                        <span key={area} className="badge bg-outline-primary border">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="mb-5">
                    <h4 className="h6 fw-bold border-bottom pb-2 mb-4">Professional Information</h4>
                    
                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">About You *</label>
                      <textarea
                        className="form-control"
                        id="bio"
                        rows={4}
                        placeholder="Tell us about yourself, your passion for guiding, and what makes you unique..."
                        value={formData.bio}
                        onChange={(e) => setFormData(prev => ({...prev, bio: e.target.value}))}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="experience" className="form-label">Guiding Experience *</label>
                      <textarea
                        className="form-control"
                        id="experience"
                        rows={3}
                        placeholder="Describe your previous guiding experience, years in tourism, relevant background..."
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({...prev, experience: e.target.value}))}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="certifications" className="form-label">Certifications & Qualifications</label>
                      <textarea
                        className="form-control"
                        id="certifications"
                        rows={2}
                        placeholder="List any relevant certifications, licenses, or qualifications (optional)"
                        value={formData.certifications}
                        onChange={(e) => setFormData(prev => ({...prev, certifications: e.target.value}))}
                      />
                    </div>
                  </div>

                  {/* Profile Photo */}
                  <div className="mb-5">
                    <h4 className="h6 fw-bold border-bottom pb-2 mb-4">Profile Photo</h4>
                    <div className="border border-2 border-dashed rounded p-4 text-center">
                      <Upload className="text-muted mb-2" size={32} style={{ margin: '0 auto', display: 'block' }} />
                      <p className="small text-muted mb-2">Upload a professional photo</p>
                      <input
                        type="file"
                        className="form-control mx-auto"
                        accept="image/*"
                        style={{ maxWidth: '300px' }}
                        onChange={(e) => setFormData(prev => ({...prev, profileImage: e.target.files?.[0] || null}))}
                      />
                      <p className="small text-muted mt-2 mb-0">
                        JPG, PNG or GIF. Max file size 5MB.
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-4 border-top">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <button
                          type="button"
                          onClick={() => onNavigate('home')}
                          className="btn btn-outline-secondary w-100"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button
                          type="submit"
                          className="btn btn-tourism-primary w-100"
                          disabled={!formData.firstName || !formData.lastName || !formData.email || 
                                   formData.languages.length === 0 || formData.expertise.length === 0}
                        >
                          Submit Application
                        </button>
                      </div>
                    </div>
                    <p className="small text-muted text-center mt-3 mb-0">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}