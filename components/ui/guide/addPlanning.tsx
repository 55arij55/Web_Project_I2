import { useState } from "react";
import { 
  Plus, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  DollarSign,
  FileText,
  Tag,
  AlertCircle
} from "lucide-react";

interface AddPlanningProps {
  onSubmit?: (planning: any) => void;
  onCancel?: () => void;
  initialData?: {
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    duration: string;
    price: string;
    maxParticipants: string;
    category: string;
    highlights: string;
    included: string;
    notIncluded: string;
    meetingPoint: string;
    difficultyLevel: string;
    language: string;
  };
}

export function AddPlanning({ onSubmit, onCancel, initialData }: AddPlanningProps) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    duration: '',
    price: '',
    maxParticipants: '',
    category: '',
    highlights: '',
    included: '',
    notIncluded: '',
    meetingPoint: '',
    difficultyLevel: 'Easy',
    language: 'English'
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Historical Tours','Food Tours','Architecture','Adventure Tours',
    'Cultural Experiences','Nature Tours','City Tours','Wine Tasting',
    'Art & Museums','Photography Tours','Shopping Tours','Night Tours'
  ];

  const difficultyLevels = ['Easy', 'Moderate', 'Challenging', 'Difficult'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Chinese', 'Japanese'];

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.title.trim()) newErrors.title = 'Tour title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    else if (formData.description.length < 50) newErrors.description = 'Minimum 50 characters';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.maxParticipants) newErrors.maxParticipants = 'Max participants required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.meetingPoint.trim()) newErrors.meetingPoint = 'Meeting point is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const planning = { ...formData, price: parseFloat(formData.price), maxParticipants: parseInt(formData.maxParticipants), currentBookings: 0, status: 'active', createdAt: new Date().toISOString() };
      if (onSubmit) onSubmit(planning);
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev: any) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="container py-5" style={{ background: "#f9f9f9", minHeight: "100vh" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="card shadow-sm border-0">
            <div className="card-header py-3" style={{ background: "linear-gradient(90deg, #6fb1fc, #4364f7)", color: "#fff" }}>
              <div className="d-flex align-items-center">
                <Plus size={24} className="me-2" />
                <h3 className="mb-0">Create New Tour Planning</h3>
              </div>
              <p className="mb-0 mt-2 opacity-75">Fill in the details below to create a new tour experience for your clients</p>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <div className="mb-4 p-3 rounded" style={{ background: "#fff" }}>
                  <h5 className="border-bottom pb-2 mb-3">
                    <FileText size={20} className="me-2" /> Basic Information
                  </h5>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Tour Title *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      placeholder="Historic Barcelona Walking Tour"
                      style={{ borderColor: "#4364f7" }}
                    />
                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description *</label>
                    <textarea
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      placeholder="Detailed tour description..."
                      style={{ borderColor: "#4364f7" }}
                    />
                    <small className="text-muted">{formData.description.length} characters (minimum 50)</small>
                    {errors.description && <div className="invalid-feedback d-block">{errors.description}</div>}
                  </div>
                </div>

                {/* Location & Schedule */}
                <div className="mb-4 p-3 rounded" style={{ background: "#f0f8ff" }}>
                  <h5 className="border-bottom pb-2 mb-3">
                    <MapPin size={20} className="me-2" /> Location & Schedule
                  </h5>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="location" className="form-label">Location/City *</label>
                      <input type="text" className={`form-control ${errors.location ? 'is-invalid' : ''}`} id="location" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} placeholder="Barcelona, Spain" style={{ borderColor: "#6fb1fc" }} />
                      {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="meetingPoint" className="form-label">Meeting Point *</label>
                      <input type="text" className={`form-control ${errors.meetingPoint ? 'is-invalid' : ''}`} id="meetingPoint" value={formData.meetingPoint} onChange={(e) => handleChange('meetingPoint', e.target.value)} placeholder="Exact meeting location" style={{ borderColor: "#6fb1fc" }} />
                      {errors.meetingPoint && <div className="invalid-feedback">{errors.meetingPoint}</div>}
                    </div>
                  </div>
                </div>

                {/* Pricing & Capacity */}
                <div className="mb-4 p-3 rounded" style={{ background: "#fff" }}>
                  <h5 className="border-bottom pb-2 mb-3">
                    <DollarSign size={20} className="me-2" /> Pricing & Capacity
                  </h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="price" className="form-label">Price per Person ($) *</label>
                      <input type="number" min="0" className={`form-control ${errors.price ? 'is-invalid' : ''}`} id="price" value={formData.price} onChange={(e) => handleChange('price', e.target.value)} placeholder="45.00" style={{ borderColor: "#6fb1fc" }} />
                      {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="maxParticipants" className="form-label">Max Participants *</label>
                      <input type="number" min="1" className={`form-control ${errors.maxParticipants ? 'is-invalid' : ''}`} id="maxParticipants" value={formData.maxParticipants} onChange={(e) => handleChange('maxParticipants', e.target.value)} placeholder="12" style={{ borderColor: "#6fb1fc" }} />
                      {errors.maxParticipants && <div className="invalid-feedback">{errors.maxParticipants}</div>}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex gap-3 justify-content-end">
                  {onCancel && <button type="button" className="btn btn-outline-secondary" onClick={onCancel} disabled={isSubmitting}>Cancel</button>}
                  <button type="submit" className="btn px-4" disabled={isSubmitting} style={{ backgroundColor: "#4364f7", color: "#fff" }}>
                    {isSubmitting ? 'Creating...' : <>
                      <Plus size={18} className="me-2" /> Create Tour Planning
                    </>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPlanning;
