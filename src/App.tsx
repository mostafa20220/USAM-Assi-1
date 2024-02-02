import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPageApplicant";
import EmployerPage from "./pages/SingUpCompanyPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/company/DashboardPage";
import UsersPage from "./pages/company/UsersPage";
import ExplorePage from "./pages/applicants/ExplorePage";
import CVPage from "./pages/applicants/CVPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/Explore/" element={<ExplorePage />} />
      <Route path="/dashboard/" element={<DashboardPage />} />
      <Route path="/users/" element={<UsersPage />} />
      <Route path="/sign-in/" element={<SignInPage />} />
      <Route path="/sign-up/" element={<SignUpPage />} />
      <Route path="/employer/" element={<EmployerPage />} />
      <Route path="/cv/" element={<CVPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
