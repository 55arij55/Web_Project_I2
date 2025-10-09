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
  Mail,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GuideDashboardProps {
  onNavigate: (view: string) => void;
}

export function GuideDashboard({ onNavigate }: GuideDashboardProps) {
const navigate = useNavigate();
  const [expandedPlanning, setExpandedPlanning] = useState<number | null>(null);
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
    },
    {
      id: 3,
      title: "Sagrada Familia Architecture Tour",
      description: "Deep dive into Gaudí's masterpiece with an architecture expert",
      location: "Sagrada Familia, Barcelona",
      date: "2024-09-25",
      time: "14:00",
      duration: "2 hours",
      price: 55,
      maxParticipants: 15,
      currentBookings: 3,
      status: "active",
      category: "Architecture"
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
    },
    {
      id: 2,
      planningId: 2,
      planningTitle: "Tapas & Wine Experience", 
      clientName: "Marco Schmidt",
      clientEmail: "marco.s@email.com",
      participants: 1,
      bookingDate: "2024-09-16",
      status: "confirmed",
      totalAmount: 65
    },
    {
      id: 3,
      planningId: 1,
      planningTitle: "Historic Barcelona Walking Tour",
      clientName: "Sarah Chen",
      clientEmail: "sarah.chen@email.com",
      participants: 4,
      bookingDate: "2024-09-17",
      status: "pending",
      totalAmount: 180
    },
    {
      id: 4,
      planningId: 1,
      planningTitle: "Historic Barcelona Walking Tour",
      clientName: "James Anderson",
      clientEmail: "j.anderson@email.com",
      participants: 2,
      bookingDate: "2024-09-18",
      status: "confirmed",
      totalAmount: 90
    },
    {
      id: 5,
      planningId: 2,
      planningTitle: "Tapas & Wine Experience",
      clientName: "Isabella Martinez",
      clientEmail: "isabella.m@email.com",
      participants: 2,
      bookingDate: "2024-09-17",
      status: "confirmed",
      totalAmount: 130
    },
    {
      id: 6,
      planningId: 2,
      planningTitle: "Tapas & Wine Experience",
      clientName: "Oliver Brown",
      clientEmail: "oliver.brown@email.com",
      participants: 2,
      bookingDate: "2024-09-18",
      status: "pending",
      totalAmount: 130
    },
    {
      id: 7,
      planningId: 3,
      planningTitle: "Sagrada Familia Architecture Tour",
      clientName: "Sophie Dubois",
      clientEmail: "sophie.d@email.com",
      participants: 3,
      bookingDate: "2024-09-19",
      status: "confirmed",
      totalAmount: 165
    }
  ]);

  const stats = {
    totalEarnings: 2450,
    thisMonthBookings: 23,
    averageRating: 4.8,
    totalReviews: 127
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

    // Close modal programmatically
    if (addPlanningModalRef.current) {
      const bsModal = (window as any).bootstrap.Modal.getInstance(addPlanningModalRef.current);
      if (bsModal) bsModal.hide();
    }
  };

  const deletePlanning = (id: number) => {
    const planningReservations = reservations.filter(r => r.planningId === id);
    if (planningReservations.length > 0) {
      const confirmMessage = `This tour has ${planningReservations.length} reservation(s). Canceling will notify all clients. Are you sure?`;
      if (window.confirm(confirmMessage)) {
        setPlannings(plannings.filter(p => p.id !== id));
        alert('Planning canceled. All clients have been notified.');
      }
    } else {
      if (window.confirm('Are you sure you want to delete this planning?')) {
        setPlannings(plannings.filter(p => p.id !== id));
      }
    }
  };

  const toggleExpandPlanning = (id: number) => {
    setExpandedPlanning(expandedPlanning === id ? null : id);
  };

  const getClientsForPlanning = (planningId: number) => {
    return reservations.filter(r => r.planningId === planningId);
  };

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: "#fef7f7" }}>
      <div className="container">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="mb-2" style={{ color: "#ff6f91" }}>Guide Dashboard</h1>
          <p className="text-muted">Welcome back, Sarah! Manage your tours and bookings.</p>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6 col-xl-3">
            <div
              className="card shadow border-0 dashboard-card"
              style={{
                background: "linear-gradient(135deg, #ffe0b2, #ffccbc, #f8bbd0)", // pastel
                color: "#333"
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 fw-light">Total Earnings</p>
                  <h3>${stats.totalEarnings}</h3>
                </div>
                <DollarSign size={36} color="#ff7043" />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div
              className="card shadow border-0 dashboard-card"
              style={{
                background: "linear-gradient(135deg, #bbdefb, #90caf9)",
                color: "#333"
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-1 fw-light">This Month</p>
                  <h3>{stats.thisMonthBookings} bookings</h3>
                </div>
                <TrendingUp size={36} color="#1976d2" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Tabs */}
        <ul className="nav nav-tabs mb-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link active" 
              id="plannings-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#plannings" 
              type="button" 
              role="tab"
            >
              My Plannings
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="plannings" role="tabpanel">
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
                const isExpanded = expandedPlanning === planning.id;
                
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
                              <div className="col-12 col-sm-6 col-lg-3">
                                <div className="d-flex align-items-center text-muted">
                                  <MapPin size={16} className="me-2" />
                                  <small>{planning.location}</small>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <div className="d-flex align-items-center text-muted">
                                  <Calendar size={16} className="me-2" />
                                  <small>{new Date(planning.date).toLocaleDateString()}</small>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <div className="d-flex align-items-center text-muted">
                                  <Clock size={16} className="me-2" />
                                  <small>{planning.time} ({planning.duration})</small>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <div className="d-flex align-items-center text-muted">
                                  <Users size={16} className="me-2" />
                                  <small>{planning.currentBookings}/{planning.maxParticipants} booked</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-lg-end ms-lg-4">
                            <h3 className="text-success mb-2">${planning.price}</h3>
                            <div className="d-flex gap-2 justify-content-lg-end">
                              <button className="btn btn-outline-primary btn-sm">
                                <Edit size={16} />
                              </button>
                              <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => deletePlanning(planning.id)}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {planning.currentBookings > 0 && (
                          <div className="alert alert-info mt-3 mb-0">
                            <strong>{planning.currentBookings} people</strong> have booked this tour. 
                            <strong> ${planning.currentBookings * planning.price}</strong> potential earnings.
                          </div>
                        )}

                        {clients.length > 0 && (
                          <>
                            <hr />
                            <button
                              className="btn btn-link text-decoration-none p-0"
                              onClick={() => toggleExpandPlanning(planning.id)}
                            >
                              <div className="d-flex align-items-center">
                                {isExpanded ? <ChevronUp size={18} className="me-2" /> : <ChevronDown size={18} className="me-2" />}
                                <span>
                                  {isExpanded ? 'Hide' : 'View'} {clients.length} client{clients.length !== 1 ? 's' : ''} for this tour
                                </span>
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="mt-3">
                                <div className="table-responsive">
                                  <table className="table table-sm">
                                    <thead>
                                      <tr>
                                        <th>Client Name</th>
                                        <th>Email</th>
                                        <th>Participants</th>
                                        <th>Booked Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {clients.map((client) => (
                                        <tr key={client.id}>
                                          <td>{client.clientName}</td>
                                          <td>
                                            <a href={`mailto:${client.clientEmail}`} className="text-decoration-none">
                                              <Mail size={14} className="me-1" />
                                              {client.clientEmail}
                                            </a>
                                          </td>
                                          <td>{client.participants}</td>
                                          <td>{new Date(client.bookingDate).toLocaleDateString()}</td>
                                          <td className="text-success">${client.totalAmount}</td>
                                          <td>
                                            <span className={`badge ${client.status === 'confirmed' ? 'bg-success' : 'bg-warning'}`}>
                                              {client.status}
                                            </span>
                                          </td>
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
        </div>
      </div>

      {/* Add Planning Modal */}
      <div className="modal fade" id="addPlanningModal" ref={addPlanningModalRef} tabIndex={-1} aria-labelledby="addPlanningModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addPlanningModalLabel">Create New Planning</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-muted">Add a new tour or experience for clients to book</p>
              {/* Form Inputs */}
              {/* Title */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Tour Title *</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={newPlanning.title}
                  onChange={(e) => setNewPlanning(prev => ({...prev, title: e.target.value}))}
                  placeholder="e.g., Historic City Walking Tour"
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description *</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={3}
                  value={newPlanning.description}
                  onChange={(e) => setNewPlanning(prev => ({...prev, description: e.target.value}))}
                  placeholder="Describe your tour experience..."
                />
              </div>

              {/* Location & Category */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="location" className="form-label">Location *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={newPlanning.location}
                    onChange={(e) => setNewPlanning(prev => ({...prev, location: e.target.value}))}
                    placeholder="Meeting point"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="category" className="form-label">Category *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={newPlanning.category}
                    onChange={(e) => setNewPlanning(prev => ({...prev, category: e.target.value}))}
                    placeholder="e.g., Historical Tours"
                  />
                </div>
              </div>

              {/* Date, Time, Duration */}
              <div className="row g-3 mb-3">
                <div className="col-md-4">
                  <label htmlFor="date" className="form-label">Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={newPlanning.date}
                    onChange={(e) => setNewPlanning(prev => ({...prev, date: e.target.value}))}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="time" className="form-label">Time *</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    value={newPlanning.time}
                    onChange={(e) => setNewPlanning(prev => ({...prev, time: e.target.value}))}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="duration" className="form-label">Duration *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    value={newPlanning.duration}
                    onChange={(e) => setNewPlanning(prev => ({...prev, duration: e.target.value}))}
                    placeholder="e.g., 3 hours"
                  />
                </div>
              </div>

              {/* Price & Max Participants */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="price" className="form-label">Price per Person ($) *</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={newPlanning.price}
                    onChange={(e) => setNewPlanning(prev => ({...prev, price: e.target.value}))}
                    placeholder="45"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="maxParticipants" className="form-label">Max Participants *</label>
                  <input
                    type="number"
                    className="form-control"
                    id="maxParticipants"
                    value={newPlanning.maxParticipants}
                    onChange={(e) => setNewPlanning(prev => ({...prev, maxParticipants: e.target.value}))}
                    placeholder="12"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button 
                type="button" 
                className="btn btn-tourism-primary"
                onClick={handleAddPlanning}
              >
                Create Planning
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default GuideDashboard;
