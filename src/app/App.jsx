import Login from "../../components/ui/auth/login";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SignupPage from "../../modules/auth/signup";
import "../styles.css";
import 'react-phone-input-2/lib/style.css';
import Homepage from "../../modules/client/home_page";
import GuideRegisterPage from "../../modules/guide/guideregister";
import ReservePlanningPage from "../../modules/client/ReservePlanning";
import ContactPage from "../../modules/client/contact"; // <-- Add this line

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
        </Routes>
      </div>
    </Router>
  );
}