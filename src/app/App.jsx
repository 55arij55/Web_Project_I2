import Login from "../../components/ui/auth/login";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SignupPage from "../../modules/auth/signup";
import "../styles.css";
import 'react-phone-input-2/lib/style.css';
import Homepage from "../../modules/client/home_page";
import GuideRegisterPage from "../../modules/guide/guideregister";
import ReservePlanningPage from "../../modules/client/ReservePlanning";
import ContactPage from "../../modules/client/contact"; // <-- Add this line
import PlanningPage from "../../modules/client/plannings";
import ShoppingCart from "../../modules/client/cart";
import PaymentFormPage from "../../modules/client/payment";
import GuideDashboardPage from "../../modules/guide/guideDashboard";
import AddPlanningPage from "../../modules/guide/addPlanning";
import AdminDashboardPage from "../../modules/admin/AdminDashboard";

function MainContent() {
  const navigate = useNavigate();
  return (
    <main className="main">
      <Login onSignIn={() => navigate("/home_page")} />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home_page" element={<Homepage />} />
          <Route path="/guide_register" element={<GuideRegisterPage />} />
          <Route path="/reserve_planning" element={<ReservePlanningPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* <-- Add this line */}
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/plannings" element={<PlanningPage />} />
          <Route path="/paymentForm" element={<PaymentFormPage />} />
          <Route path="/guide_dashboard" element={<GuideDashboardPage />} />
          <Route path="/add_planning" element={<AddPlanningPage />} />
          <Route path="/admin_dashboard" element={<AdminDashboardPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}