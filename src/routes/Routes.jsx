import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SolutionsPage from "@/pages/SolutionsPage";
import PricingPage from "@/pages/PricingPage";

import Navbar from "@/components/layout/Navbar";
import LandingPage from "@/pages/LandingPage";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/services/auth/authSlice";
import CreateEventPage from "@/pages/CreateEventPage";
import Page2 from "@/components/Page2";
import Summary from "@/components/Summary";

const RoutesComponent = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* protected routes examples */}
        {/* <Route element={<RequireAuth />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/tasks/create" element={<CreateTaskPage />} />
                  </Route> */}

        {/* public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/summary" element={<Summary />} />

        <Route path="/" element={user ? <HomePage /> : <LandingPage />}>
          <Route path="/landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
