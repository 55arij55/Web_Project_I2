import { useState } from "react";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  UserX, 
  Eye, 
  CheckCircle, 
  XCircle,
  AlertTriangle,
  BarChart3,
  Star,
  MapPin,
  Clock,
  Search,
  Filter,
  Download,
  Settings,
  Shield,
  Mail,
  Ban,
  Trash2,
  Edit,
  FileText,
  Activity,
  TrendingDown,
  MessageSquare
} from "lucide-react";

interface AdminDashboardProps {
  onNavigate: (view: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for admin dashboard
  const stats = {
    totalGuides: 156,
    totalClients: 2847,
    totalBookings: 1234,
    totalRevenue: 98450,
    monthlyGrowth: 12.5,
    averageRating: 4.7,
    activeGuides: 89,
    pendingApplications: 23,
    pendingPlannings: 15,
    activePlannings: 342,
    reportedIssues: 7,
    platformFee: 8456
  };

  const [pendingGuides, setPendingGuides] = useState([
    {
      id: 1,
      name: "Alexander Smith",
      email: "alex.smith@email.com",
      location: "Paris, France",
      languages: ["English", "French", "German"],
      expertise: ["Historical Tours", "Art & Museums"],
      appliedDate: "2024-09-15",
      experience: "5 years as a licensed tour guide in Paris",
      certifications: "Licensed Tour Guide, First Aid Certified",
      status: "pending"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      email: "maria.r@email.com",
      location: "Madrid, Spain",
      languages: ["Spanish", "English", "Portuguese"],
      expertise: ["Food Tours", "Cultural Tours"],
      appliedDate: "2024-09-14",
      experience: "3 years freelance guide, certified sommelier",
      certifications: "Sommelier Certificate, Tourism License",
      status: "pending"
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      email: "yuki.tanaka@email.com",
      location: "Tokyo, Japan",
      languages: ["Japanese", "English", "Korean"],
      expertise: ["Cultural Tours", "Modern Architecture"],
      appliedDate: "2024-09-13",
      experience: "Former museum curator, 4 years guiding experience",
      certifications: "Museum Studies MA, Tour Guide License",
      status: "pending"
    }
  ]);

  const [pendingPlannings, setPendingPlannings] = useState([
    {
      id: 1,
      title: "Secret Street Food Tour",
      guide: "Maria Rodriguez",
      location: "Madrid, Spain",
      category: "Food Tours",
      price: 55,
      maxParticipants: 8,
      submittedDate: "2024-09-18",
      status: "pending",
      description: "Discover hidden culinary gems in Madrid's neighborhoods",
      date: "2024-10-15",
      duration: "3.5 hours"
    },
    {
      id: 2,
      title: "Contemporary Tokyo Art Walk",
      guide: "Yuki Tanaka",
      location: "Tokyo, Japan",
      category: "Art & Museums",
      price: 75,
      maxParticipants: 10,
      submittedDate: "2024-09-17",
      status: "pending",
      description: "Explore Tokyo's modern art scene and galleries",
      date: "2024-10-20",
      duration: "4 hours"
    },
    {
      id: 3,
      title: "Midnight Ghost Tour",
      guide: "Alexander Smith",
      location: "Paris, France",
      category: "Night Tours",
      price: 40,
      maxParticipants: 15,
      submittedDate: "2024-09-16",
      status: "pending",
      description: "Spooky tales and haunted locations in historic Paris",
      date: "2024-10-31",
      duration: "2 hours"
    }
  ]);

  const topGuides = [
    {
      id: 1,
      name: "Sarah Martinez",
      email: "sarah.m@email.com",
      location: "Barcelona, Spain",
      totalBookings: 127,
      revenue: 5715,
      rating: 4.9,
      reviews: 127,
      joinDate: "2023-01-15",
      status: "active"
    },
    {
      id: 2,
      name: "Marco Thompson", 
      location: "Rome, Italy",
      email: "marco.t@email.com",
      totalBookings: 89,
      revenue: 8010,
      rating: 4.8,
      reviews: 89,
      joinDate: "2023-03-22",
      status: "active"
    },
    {
      id: 3,
      name: "Emma Chen",
      location: "Tokyo, Japan",
      email: "emma.c@email.com",
      totalBookings: 156,
      revenue: 7800,
      rating: 5.0,
      reviews: 156,
      joinDate: "2022-11-08",
      status: "active"
    }
  ];

  const recentBookings = [
    {
      id: 1,
      tourTitle: "Historic Barcelona Walking Tour",
      clientName: "Emma Johnson",
      clientEmail: "emma.j@email.com",
      guideName: "Sarah Martinez",
      date: "2024-09-28",
      participants: 2,
      amount: 90,
      status: "confirmed"
    },
    {
      id: 2,
      tourTitle: "Alpine Adventure Tour",
      clientName: "Mark Wilson",
      clientEmail: "mark.w@email.com",
      guideName: "Marco Thompson",
      date: "2024-09-29",
      participants: 4,
      amount: 480,
      status: "confirmed"
    },
    {
      id: 3,
      tourTitle: "Tapas & Wine Experience",
      clientName: "Lisa Chen",
      clientEmail: "lisa.c@email.com",
      guideName: "Emma Chen",
      date: "2024-09-30",
      participants: 1,
      amount: 65,
      status: "pending"
    }
  ];

  const reportedIssues = [
    {
      id: 1,
      type: "Guide Complaint",
      reportedBy: "John Doe",
      against: "Guide: Mike Johnson",
      date: "2024-09-19",
      status: "investigating",
      priority: "high",
      description: "Tour started 30 minutes late"
    },
    {
      id: 2,
      type: "Cancellation Issue",
      reportedBy: "Sarah Lee",
      against: "Booking #1234",
      date: "2024-09-18",
      status: "resolved",
      priority: "medium",
      description: "Refund not processed"
    }
  ];

  const handleApproveGuide = (guideId: number) => {
    if (window.confirm('Are you sure you want to approve this guide application?')) {
      setPendingGuides(pendingGuides.filter(g => g.id !== guideId));
      alert('Guide approved successfully! Welcome email sent.');
    }
  };

  const handleRejectGuide = (guideId: number) => {
    const reason = window.prompt('Please provide a reason for rejection:');
    if (reason) {
      setPendingGuides(pendingGuides.filter(g => g.id !== guideId));
      alert('Guide application rejected. Notification email sent.');
    }
  };

  const handleApprovePlanning = (planningId: number) => {
    if (window.confirm('Approve this tour planning? It will be visible to all clients.')) {
      setPendingPlannings(pendingPlannings.filter(p => p.id !== planningId));
      alert('Planning approved and published!');
    }
  };

  const handleRejectPlanning = (planningId: number) => {
    const reason = window.prompt('Please provide a reason for rejection:');
    if (reason) {
      setPendingPlannings(pendingPlannings.filter(p => p.id !== planningId));
      alert('Planning rejected. Guide has been notified.');
    }
  };

  const handleSuspendGuide = (guideId: number, guideName: string) => {
    if (window.confirm(`Suspend ${guideName}? They will not be able to create tours or accept bookings.`)) {
      alert(`${guideName} has been suspended.`);
    }
  };

  const exportData = (type: string) => {
    alert(`Exporting ${type} data as CSV...`);
    // In real app, this would trigger a download
  };
  

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container-fluid px-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="mb-1">Admin Dashboard</h1>
                <p className="text-muted mb-0">Manage guides, clients, and oversee platform operations</p>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary btn-sm">
                  <Download size={16} className="me-1" />
                  Export Reports
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  <Settings size={16} className="me-1" />
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <small className="text-muted d-block">Total Guides</small>
                    <h3 className="text-primary mb-0">{stats.totalGuides}</h3>
                    <small className="text-success">+{stats.activeGuides} active</small>
                  </div>
                  <Users className="text-primary" size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <small className="text-muted d-block">Total Clients</small>
                    <h3 className="text-success mb-0">{stats.totalClients}</h3>
                    <small className="text-success">+{stats.monthlyGrowth}% this month</small>
                  </div>
                  <UserCheck className="text-success" size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <small className="text-muted d-block">Total Bookings</small>
                    <h3 className="text-info mb-0">{stats.totalBookings}</h3>
                    <small className="text-muted">This month: 234</small>
                  </div>
                  <Calendar className="text-info" size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <small className="text-muted d-block">Total Revenue</small>
                    <h3 className="text-warning mb-0">${stats.totalRevenue.toLocaleString()}</h3>
                    <small className="text-success">+15.3% vs last month</small>
                  </div>
                  <DollarSign className="text-warning" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alert Cards for Pending Items */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <div className="alert alert-warning mb-0 d-flex align-items-center">
              <AlertTriangle size={20} className="me-2 flex-shrink-0" />
              <div>
                <strong>{stats.pendingApplications}</strong> pending guide applications
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="alert alert-info mb-0 d-flex align-items-center">
              <FileText size={20} className="me-2 flex-shrink-0" />
              <div>
                <strong>{stats.pendingPlannings}</strong> pending tour plannings
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="alert alert-danger mb-0 d-flex align-items-center">
              <MessageSquare size={20} className="me-2 flex-shrink-0" />
              <div>
                <strong>{stats.reportedIssues}</strong> reported issues
              </div>
            </div>
          </div>
        </div>

        {/* Main Tabs */}
        <ul className="nav nav-tabs mb-4" role="tablist">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Activity size={16} className="me-1" style={{ display: 'inline' }} />
              Overview
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'guides' ? 'active' : ''}`}
              onClick={() => setActiveTab('guides')}
            >
              <Users size={16} className="me-1" style={{ display: 'inline' }} />
              Guides
              {pendingGuides.length > 0 && (
                <span className="badge bg-warning ms-2">{pendingGuides.length}</span>
              )}
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'plannings' ? 'active' : ''}`}
              onClick={() => setActiveTab('plannings')}
            >
              <Calendar size={16} className="me-1" style={{ display: 'inline' }} />
              Plannings
              {pendingPlannings.length > 0 && (
                <span className="badge bg-info ms-2">{pendingPlannings.length}</span>
              )}
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              <CheckCircle size={16} className="me-1" style={{ display: 'inline' }} />
              Bookings
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'issues' ? 'active' : ''}`}
              onClick={() => setActiveTab('issues')}
            >
              <AlertTriangle size={16} className="me-1" style={{ display: 'inline' }} />
              Issues
              {reportedIssues.filter(i => i.status !== 'resolved').length > 0 && (
                <span className="badge bg-danger ms-2">
                  {reportedIssues.filter(i => i.status !== 'resolved').length}
                </span>
              )}
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <BarChart3 size={16} className="me-1" style={{ display: 'inline' }} />
              Analytics
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="row g-4">
              {/* Recent Bookings */}
              <div className="col-12 col-lg-6">
                <div className="card h-100">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Recent Bookings</h5>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => setActiveTab('bookings')}>
                      View All
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="list-group list-group-flush">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="list-group-item px-0">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                              <h6 className="mb-1">{booking.tourTitle}</h6>
                              <small className="text-muted d-block">
                                Client: {booking.clientName} • Guide: {booking.guideName}
                              </small>
                              <small className="text-muted">
                                {new Date(booking.date).toLocaleDateString()} • {booking.participants} people
                              </small>
                            </div>
                            <div className="text-end ms-3">
                              <div className="fw-bold text-success">${booking.amount}</div>
                              <span className={`badge ${booking.status === 'confirmed' ? 'bg-success' : 'bg-warning'}`}>
                                {booking.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Guides */}
              <div className="col-12 col-lg-6">
                <div className="card h-100">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Top Performing Guides</h5>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => setActiveTab('guides')}>
                      View All
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="list-group list-group-flush">
                      {topGuides.map((guide, index) => (
                        <div key={guide.id} className="list-group-item px-0">
                          <div className="d-flex align-items-center">
                            <div className="badge bg-primary rounded-circle me-3" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              #{index + 1}
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-0">{guide.name}</h6>
                              <small className="text-muted">{guide.location}</small>
                              <div className="d-flex align-items-center mt-1">
                                <Star size={14} className="text-warning me-1" fill="currentColor" />
                                <small>{guide.rating} ({guide.reviews} reviews)</small>
                              </div>
                            </div>
                            <div className="text-end">
                              <div className="fw-bold">{guide.totalBookings} tours</div>
                              <small className="text-success">${guide.revenue}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="col-12">
                <div className="card">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Quick Actions</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btn-outline-primary w-100" onClick={() => setActiveTab('guides')}>
                          <UserCheck size={20} className="d-block mx-auto mb-2" />
                          Review Guides
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btn-outline-info w-100" onClick={() => setActiveTab('plannings')}>
                          <Calendar size={20} className="d-block mx-auto mb-2" />
                          Approve Plannings
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btn-outline-danger w-100" onClick={() => setActiveTab('issues')}>
                          <AlertTriangle size={20} className="d-block mx-auto mb-2" />
                          Handle Issues
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btn-outline-success w-100" onClick={() => exportData('all')}>
                          <Download size={20} className="d-block mx-auto mb-2" />
                          Export Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Guides Tab */}
          {activeTab === 'guides' && (
            <div className="row g-4">
              {/* Pending Guide Applications */}
              <div className="col-12">
                <div className="card">
                  <div className="card-header bg-warning bg-opacity-10 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <AlertTriangle size={20} className="text-warning me-2" />
                      <h5 className="mb-0">Pending Guide Applications ({pendingGuides.length})</h5>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => exportData('pending-guides')}>
                      <Download size={16} className="me-1" />
                      Export
                    </button>
                  </div>
                  <div className="card-body">
                    {pendingGuides.length === 0 ? (
                      <div className="text-center py-4 text-muted">
                        <CheckCircle size={48} className="mb-2 opacity-50" />
                        <p>No pending guide applications</p>
                      </div>
                    ) : (
                      <div className="row g-3">
                        {pendingGuides.map((guide) => (
                          <div key={guide.id} className="col-12">
                            <div className="card border">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-12 col-lg-8">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                      <div>
                                        <h5 className="mb-1">{guide.name}</h5>
                                        <div className="text-muted mb-2">
                                          <Mail size={14} className="me-1" />
                                          {guide.email}
                                        </div>
                                        <div className="text-muted mb-2">
                                          <MapPin size={14} className="me-1" />
                                          {guide.location}
                                        </div>
                                        <div className="text-muted">
                                          <Clock size={14} className="me-1" />
                                          Applied: {new Date(guide.appliedDate).toLocaleDateString()}
                                        </div>
                                      </div>
                                      <span className="badge bg-warning">Pending Review</span>
                                    </div>

                                    <div className="mb-3">
                                      <strong className="d-block mb-1">Languages:</strong>
                                      <div className="d-flex flex-wrap gap-1">
                                        {guide.languages.map((lang) => (
                                          <span key={lang} className="badge bg-secondary">{lang}</span>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="mb-3">
                                      <strong className="d-block mb-1">Expertise:</strong>
                                      <div className="d-flex flex-wrap gap-1">
                                        {guide.expertise.map((exp) => (
                                          <span key={exp} className="badge bg-info">{exp}</span>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="mb-3">
                                      <strong className="d-block mb-1">Experience:</strong>
                                      <p className="mb-0 bg-light p-2 rounded">{guide.experience}</p>
                                    </div>

                                    <div>
                                      <strong className="d-block mb-1">Certifications:</strong>
                                      <p className="mb-0 bg-light p-2 rounded">{guide.certifications}</p>
                                    </div>
                                  </div>

                                  <div className="col-12 col-lg-4">
                                    <div className="d-grid gap-2">
                                      <button 
                                        className="btn btn-success"
                                        onClick={() => handleApproveGuide(guide.id)}
                                      >
                                        <CheckCircle size={16} className="me-1" />
                                        Approve Guide
                                      </button>
                                      <button 
                                        className="btn btn-danger"
                                        onClick={() => handleRejectGuide(guide.id)}
                                      >
                                        <XCircle size={16} className="me-1" />
                                        Reject Application
                                      </button>
                                      <button className="btn btn-outline-primary">
                                        <Eye size={16} className="me-1" />
                                        View Full Profile
                                      </button>
                                      <button className="btn btn-outline-secondary">
                                        <Mail size={16} className="me-1" />
                                        Contact Applicant
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Active Guides Management */}
              <div className="col-12">
                <div className="card">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Active Guides Management</h5>
                    <div className="d-flex gap-2">
                      <div className="input-group input-group-sm" style={{ width: '250px' }}>
                        <span className="input-group-text">
                          <Search size={16} />
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Search guides..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <button className="btn btn-sm btn-outline-secondary">
                        <Filter size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Guide</th>
                            <th>Location</th>
                            <th>Tours</th>
                            <th>Revenue</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topGuides.map((guide) => (
                            <tr key={guide.id}>
                              <td>
                                <div>
                                  <div className="fw-bold">{guide.name}</div>
                                  <small className="text-muted">{guide.email}</small>
                                </div>
                              </td>
                              <td>{guide.location}</td>
                              <td>{guide.totalBookings}</td>
                              <td className="text-success">${guide.revenue}</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Star size={14} className="text-warning me-1" fill="currentColor" />
                                  {guide.rating}
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-success">{guide.status}</span>
                              </td>
                              <td>
                                <div className="btn-group btn-group-sm">
                                  <button className="btn btn-outline-primary" title="View">
                                    <Eye size={14} />
                                  </button>
                                  <button className="btn btn-outline-warning" title="Suspend" onClick={() => handleSuspendGuide(guide.id, guide.name)}>
                                    <Ban size={14} />
                                  </button>
                                  <button className="btn btn-outline-secondary" title="Message">
                                    <Mail size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Plannings Tab */}
          {activeTab === 'plannings' && (
            <div className="row g-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-header bg-info bg-opacity-10 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <FileText size={20} className="text-info me-2" />
                      <h5 className="mb-0">Pending Tour Plannings ({pendingPlannings.length})</h5>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => exportData('pending-plannings')}>
                      <Download size={16} className="me-1" />
                      Export
                    </button>
                  </div>
                  <div className="card-body">
                    {pendingPlannings.length === 0 ? (
                      <div className="text-center py-4 text-muted">
                        <CheckCircle size={48} className="mb-2 opacity-50" />
                        <p>No pending tour plannings</p>
                      </div>
                    ) : (
                      <div className="row g-3">
                        {pendingPlannings.map((planning) => (
                          <div key={planning.id} className="col-12 col-xl-6">
                            <div className="card border h-100">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                  <div className="flex-grow-1">
                                    <h5 className="mb-1">{planning.title}</h5>
                                    <div className="d-flex gap-2 mb-2">
                                      <span className="badge bg-secondary">{planning.category}</span>
                                      <span className="badge bg-warning">Pending Review</span>
                                    </div>
                                  </div>
                                  <h4 className="text-success mb-0">${planning.price}</h4>
                                </div>

                                <p className="text-muted mb-3">{planning.description}</p>

                                <div className="row g-2 mb-3 small">
                                  <div className="col-6">
                                    <div className="text-muted">
                                      <Users size={14} className="me-1" />
                                      Guide: <strong>{planning.guide}</strong>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="text-muted">
                                      <MapPin size={14} className="me-1" />
                                      {planning.location}
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="text-muted">
                                      <Calendar size={14} className="me-1" />
                                      {new Date(planning.date).toLocaleDateString()}
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="text-muted">
                                      <Clock size={14} className="me-1" />
                                      {planning.duration}
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="text-muted">
                                      <Users size={14} className="me-1" />
                                      Max: {planning.maxParticipants} people
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="text-muted">
                                      <FileText size={14} className="me-1" />
                                      Submitted: {new Date(planning.submittedDate).toLocaleDateString()}
                                    </div>
                                  </div>
                                </div>

                                <div className="d-grid gap-2">
                                  <div className="btn-group">
                                    <button 
                                      className="btn btn-success"
                                      onClick={() => handleApprovePlanning(planning.id)}
                                    >
                                      <CheckCircle size={16} className="me-1" />
                                      Approve & Publish
                                    </button>
                                    <button 
                                      className="btn btn-danger"
                                      onClick={() => handleRejectPlanning(planning.id)}
                                    >
                                      <XCircle size={16} className="me-1" />
                                      Reject
                                    </button>
                                  </div>
                                  <button className="btn btn-outline-primary btn-sm">
                                    <Eye size={16} className="me-1" />
                                    View Full Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Active Plannings Stats */}
              <div className="col-12">
                <div className="card">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Active Plannings Overview</h5>
                  </div>
                  <div className="card-body">
                    <div className="row text-center">
                      <div className="col-6 col-md-3">
                        <h3 className="text-primary">{stats.activePlannings}</h3>
                        <small className="text-muted">Total Active</small>
                      </div>
                      <div className="col-6 col-md-3">
                        <h3 className="text-success">89</h3>
                        <small className="text-muted">This Month</small>
                      </div>
                      <div className="col-6 col-md-3">
                        <h3 className="text-info">234</h3>
                        <small className="text-muted">Total Bookings</small>
                      </div>
                      <div className="col-6 col-md-3">
                        <h3 className="text-warning">4.8</h3>
                        <small className="text-muted">Avg Rating</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <div className="row g-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">All Bookings</h5>
                    <div className="d-flex gap-2">
                      <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                        <option>All Status</option>
                        <option>Confirmed</option>
                        <option>Pending</option>
                        <option>Cancelled</option>
                      </select>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => exportData('bookings')}>
                        <Download size={16} className="me-1" />
                        Export
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Tour</th>
                            <th>Client</th>
                            <th>Guide</th>
                            <th>Date</th>
                            <th>Participants</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentBookings.map((booking) => (
                            <tr key={booking.id}>
                              <td>#{booking.id}</td>
                              <td>{booking.tourTitle}</td>
                              <td>
                                <div>
                                  <div>{booking.clientName}</div>
                                  <small className="text-muted">{booking.clientEmail}</small>
                                </div>
                              </td>
                              <td>{booking.guideName}</td>
                              <td>{new Date(booking.date).toLocaleDateString()}</td>
                              <td>{booking.participants}</td>
                              <td className="text-success fw-bold">${booking.amount}</td>
                              <td>
                                <span className={`badge ${booking.status === 'confirmed' ? 'bg-success' : 'bg-warning'}`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td>
                                <div className="btn-group btn-group-sm">
                                  <button className="btn btn-outline-primary" title="View">
                                    <Eye size={14} />
                                  </button>
                                  <button className="btn btn-outline-secondary" title="Contact">
                                    <Mail size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Issues Tab */}
          {activeTab === 'issues' && (
            <div className="row g-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-header bg-danger bg-opacity-10 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <AlertTriangle size={20} className="text-danger me-2" />
                      <h5 className="mb-0">Reported Issues & Complaints</h5>
                    </div>
                    <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                      <option>All Issues</option>
                      <option>Investigating</option>
                      <option>Resolved</option>
                      <option>High Priority</option>
                    </select>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      {reportedIssues.map((issue) => (
                        <div key={issue.id} className="col-12">
                          <div className="card border-start border-3 border-danger">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                  <h6 className="mb-1">{issue.type}</h6>
                                  <div className="d-flex gap-2 mb-2">
                                    <span className={`badge ${issue.status === 'resolved' ? 'bg-success' : 'bg-warning'}`}>
                                      {issue.status}
                                    </span>
                                    <span className={`badge ${
                                      issue.priority === 'high' ? 'bg-danger' : 
                                      issue.priority === 'medium' ? 'bg-warning' : 'bg-secondary'
                                    }`}>
                                      {issue.priority} priority
                                    </span>
                                  </div>
                                </div>
                                <small className="text-muted">{new Date(issue.date).toLocaleDateString()}</small>
                              </div>
                              <p className="mb-2"><strong>Reported by:</strong> {issue.reportedBy}</p>
                              <p className="mb-2"><strong>Against:</strong> {issue.against}</p>
                              <p className="mb-3 bg-light p-2 rounded">{issue.description}</p>
                              <div className="d-flex gap-2">
                                <button className="btn btn-sm btn-success">
                                  <CheckCircle size={14} className="me-1" />
                                  Mark Resolved
                                </button>
                                <button className="btn btn-sm btn-outline-primary">
                                  <Eye size={14} className="me-1" />
                                  Investigate
                                </button>
                                <button className="btn btn-sm btn-outline-secondary">
                                  <Mail size={14} className="me-1" />
                                  Contact Parties
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="row g-4">
              {/* Key Metrics */}
              <div className="col-12">
                <div className="row g-3">
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <BarChart3 className="text-primary mx-auto mb-2" size={32} />
                        <h3 className="text-primary">{stats.averageRating}</h3>
                        <small className="text-muted">Average Rating</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <TrendingUp className="text-success mx-auto mb-2" size={32} />
                        <h3 className="text-success">+{stats.monthlyGrowth}%</h3>
                        <small className="text-muted">Monthly Growth</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <Users className="text-info mx-auto mb-2" size={32} />
                        <h3 className="text-info">{stats.activeGuides}</h3>
                        <small className="text-muted">Active Guides</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <DollarSign className="text-warning mx-auto mb-2" size={32} />
                        <h3 className="text-warning">${stats.platformFee}</h3>
                        <small className="text-muted">Platform Fees</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="col-12 col-lg-6">
                <div className="card h-100">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Most Popular Destinations</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Barcelona, Spain</span>
                        <span className="text-muted">89 tours</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Rome, Italy</span>
                        <span className="text-muted">67 tours</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Tokyo, Japan</span>
                        <span className="text-muted">54 tours</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '58%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Paris, France</span>
                        <span className="text-muted">48 tours</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '51%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="card h-100">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Popular Tour Categories</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Historical Tours</span>
                        <span className="text-muted">234 bookings</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-success" style={{ width: '76%' }}></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Food Tours</span>
                        <span className="text-muted">189 bookings</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-success" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Adventure Tours</span>
                        <span className="text-muted">123 bookings</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-success" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Art & Museums</span>
                        <span className="text-muted">98 bookings</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div className="progress-bar bg-success" style={{ width: '34%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default AdminDashboard;
