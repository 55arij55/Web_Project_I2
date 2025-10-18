import { useState, useRef } from "react";
import { 
  Plus, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Edit, 
  Trash2, 
  DollarSign,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Mail
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GuideDashboardProps {
  onNavigate: (view: string) => void;
}

export function GuideDashboard({ onNavigate }: GuideDashboardProps) {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"plannings" | "contact">("plannings");
  const [expandedPlannings, setExpandedPlannings] = useState<Set<number>>(new Set());

  const [newPlanning, setNewPlanning] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    duration: '',
    price: '',
    maxParticipants: '',
    category: ''
  });

  const [plannings, setPlannings] = useState([
    {
      id: 1,
      title: "Historic Barcelona Walking Tour",
      description: "Discover the fascinating history of Barcelona's Gothic Quarter",
      location: "Gothic Quarter, Barcelona",
      date: "2024-09-20",
      time: "10:00",
      duration: "3 hours",
      price: 45,
      maxParticipants: 12,
      currentBookings: 8,
      status: "active",
      category: "Historical Tours"
    },
    {
      id: 2,
      title: "Tapas & Wine Experience",
      description: "Authentic Spanish tapas tour with local wine pairings",
      location: "El Born District, Barcelona", 
      date: "2024-09-22",
      time: "18:00",
      duration: "2.5 hours",
      price: 65,
      maxParticipants: 8,
      currentBookings: 6,
      status: "active",
      category: "Food Tours"
    }
  ]);

  const [reservations] = useState([
    {
      id: 1,
      planningId: 1,
      planningTitle: "Historic Barcelona Walking Tour",
      clientName: "Emma Johnson",
      clientEmail: "emma.j@email.com",
      participants: 2,
      bookingDate: "2024-09-15",
      status: "confirmed",
      totalAmount: 90
    }
  ]);

  const [messages] = useState([
    {
      id: 1,
      name: "Michael Scott",
      email: "michael.s@email.com",
      subject: "Private Tour Inquiry",
      message: "Hello, I’d like to organize a private walking tour for my company team next week.",
      date: "2024-09-23"
    },
    {
      id: 2,
      name: "Anna Lopez",
      email: "anna.l@email.com",
      subject: "Availability Question",
      message: "Are there any available slots for the Tapas & Wine Experience this Saturday?",
      date: "2024-09-24"
    }
  ]);

  const stats = {
    totalEarnings: 2450,
    thisMonthBookings: 23
  };

  const addPlanningModalRef = useRef<HTMLDivElement>(null);

  const handleAddPlanning = () => {
    if (!newPlanning.title || !newPlanning.description || !newPlanning.location || 
        !newPlanning.date || !newPlanning.time || !newPlanning.price || 
        !newPlanning.maxParticipants || !newPlanning.category) {
      alert('Please fill in all required fields');
      return;
    }

    const planning = {
      id: plannings.length + 1,
      ...newPlanning,
      price: parseInt(newPlanning.price),
      maxParticipants: parseInt(newPlanning.maxParticipants),
      currentBookings: 0,
      status: "active" as const
    };
    
    setPlannings([...plannings, planning]);
    setNewPlanning({
      title: '',
      description: '',
      location: '',
      date: '',
      time: '',
      duration: '',
      price: '',
      maxParticipants: '',
      category: ''
    });

    if (addPlanningModalRef.current) {
      const bsModal = (window as any).bootstrap.Modal.getInstance(addPlanningModalRef.current);
      if (bsModal) bsModal.hide();
    }
  };

  const deletePlanning = (id: number) => {
    if (window.confirm('Are you sure you want to delete this planning?')) {
      setPlannings(plannings.filter(p => p.id !== id));
    }
  };

  const toggleExpandPlanning = (id: number) => {
    setExpandedPlannings(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const getClientsForPlanning = (planningId: number) => {
    return reservations.filter(r => r.planningId === planningId);
  };

  // Contact form
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: "#fef7f7" }}>
      <div className="container">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="mb-2" style={{ color: "#ff6f91" }}>Guide Dashboard</h1>
          <p className="text-muted">Welcome back, Manage your tours and messages.</p>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-xl-3">
            <div className="card shadow border-0" style={{ background: "linear-gradient(135deg, #ffe0b2, #ffccbc)" }}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1">Total Earnings</p>
                  <h3>${stats.totalEarnings}</h3>
                </div>
                <DollarSign size={36} color="#ff7043" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card shadow border-0" style={{ background: "linear-gradient(135deg, #bbdefb, #90caf9)" }}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1">This Month</p>
                  <h3>{stats.thisMonthBookings} bookings</h3>
                </div>
                <TrendingUp size={36} color="#1976d2" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === "plannings" ? "active" : ""}`}
              onClick={() => setActiveTab("plannings")}
            >
              My Plannings
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Tab Contents */}
        <div className="tab-content">

          {/* === My Plannings === */}
          {activeTab === "plannings" && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>My Tours & Plannings</h2>
                <button 
                  className="btn btn-tourism-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/add_planning");
                  }}
                >
                  <Plus size={18} className="me-2" />
                  Add New Planning
                </button>
              </div>

              <div className="row g-4">
                {plannings.map((planning) => {
                  const clients = getClientsForPlanning(planning.id);
                  const isExpanded = expandedPlannings.has(planning.id);
                  
                  return (
                    <div key={planning.id} className="col-12">
                      <div className="card shadow-sm">
                        <div className="card-body">
                          <div className="d-flex flex-column flex-lg-row justify-content-between">
                            <div className="flex-grow-1 mb-3 mb-lg-0">
                              <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                                <h4 className="mb-0">{planning.title}</h4>
                                <span className="badge bg-secondary">{planning.category}</span>
                                <span className={`badge ${planning.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
                                  {planning.status}
                                </span>
                              </div>
                              <p className="text-muted mb-3">{planning.description}</p>
                              <div className="row g-3">
                                <div className="col-md-3"><MapPin size={16} className="me-2" />{planning.location}</div>
                                <div className="col-md-3"><Calendar size={16} className="me-2" />{new Date(planning.date).toLocaleDateString()}</div>
                                <div className="col-md-3"><Clock size={16} className="me-2" />{planning.time} ({planning.duration})</div>
                                <div className="col-md-3"><Users size={16} className="me-2" />{planning.currentBookings}/{planning.maxParticipants}</div>
                              </div>
                            </div>
                            <div className="text-lg-end">
                              <h3 className="text-success mb-2">${planning.price}</h3>
                              <div className="d-flex gap-2 justify-content-lg-end">
                                <button className="btn btn-outline-primary btn-sm"><Edit size={16} /></button>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => deletePlanning(planning.id)}><Trash2 size={16} /></button>
                              </div>
                            </div>
                          </div>

                          {clients.length > 0 && (
                            <>
                              <hr />
                              <button
                                className="btn btn-link text-decoration-none p-0"
                                onClick={() => toggleExpandPlanning(planning.id)}
                              >
                                <div className="d-flex align-items-center">
                                  {isExpanded ? <ChevronUp size={18} className="me-2" /> : <ChevronDown size={18} className="me-2" />}
                                  <span>{isExpanded ? "Hide" : "View"} clients</span>
                                </div>
                              </button>
                              {isExpanded && (
                                <div className="mt-3">
                                  <div className="table-responsive">
                                    <table className="table table-sm">
                                      <thead>
                                        <tr>
                                          <th>Client</th>
                                          <th>Email</th>
                                          <th>Participants</th>
                                          <th>Date</th>
                                          <th>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {clients.map(c => (
                                          <tr key={c.id}>
                                            <td>{c.clientName}</td>
                                            <td><a href={`mailto:${c.clientEmail}`}><Mail size={14} className="me-1" />{c.clientEmail}</a></td>
                                            <td>{c.participants}</td>
                                            <td>{new Date(c.bookingDate).toLocaleDateString()}</td>
                                            <td>{c.status}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* === Contact Tab === */}
          {activeTab === "contact" && (
            <div>
              <h2 className="mb-4">Contact Messages</h2>

              {/* Contact Form */}
              <div className="container mb-5">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="card shadow-lg border-0 rounded-4">
                      <div
                        className="card-header text-white text-center rounded-top-4"
                        style={{ background: "linear-gradient(90deg, #28a745, #007bff)" }}
                      >
                        <h2 className="mb-0">Contact Us</h2>
                        <small className="text-light">We’d love to hear from you!</small>
                      </div>

                      <div className="card-body p-4">
                        {submitted ? (
                          <div className="alert alert-success text-center">
                            <h5 className="mb-2">Thank You!</h5>
                            <p>We’ve received your message and will be in touch soon.</p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">Full Name</label>
                              <input
                                type="text"
                                className="form-control form-control-lg shadow-sm"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email Address</label>
                              <input
                                type="email"
                                className="form-control form-control-lg shadow-sm"
                                id="email"
                                name="email"
                                placeholder="example@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="message" className="form-label">Your Message</label>
                              <textarea
                                className="form-control form-control-lg shadow-sm"
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Write your message here..."
                                value={form.message}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="d-grid">
                              <button type="submit" className="btn btn-lg btn-primary rounded-pill shadow">
                                Send Message
                              </button>
                            </div>
                          </form>
                        )}
                      </div>

                      <div className="card-footer bg-light text-center rounded-bottom-4">
                        <small className="text-muted">
                          You can also reach us at <a href="mailto:contact@tourguide.com">contact@tourguide.com</a>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default GuideDashboard;
