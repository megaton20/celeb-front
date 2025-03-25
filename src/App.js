import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ForwardRoute from "./components/ForwardRoute";
import Contestants from "./pages/Contestants";
import ContestantDetails from "./pages/ContestantDetails";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friend from "./pages/Friend";
import Rank from "./pages/Rank";
import Fixtures from "./pages/Fixtures";
import CreateContestant from "./pages/ContestantRegister";
import SignUp from "./pages/Signup";
import Signin from "./pages/Signin";
import UpdateUser from "./pages/UpdateUser";

import Contact from "./pages/Contact";
import About from "./pages/About";

import Admin from "./pages/admin/Dashboard";
import Settings from "./pages/admin/Settings";
import ContestantsList from "./pages/admin/Contestants";
import Ranking from "./pages/admin/Ranking";
import AdminUsers from "./pages/admin/Users";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/about" element={<About />} />
          <Route path="/rankings" element={<Rank />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contest/register" element={<CreateContestant />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/contestants" element={<Contestants />} />
          <Route path="/contestant/:id" element={<ContestantDetails />} />

      <Route element={<ForwardRoute/>}>

          <Route path="/auth/login" element={<Signin />} />
          <Route path="/auth/register" element={<SignUp />} />
      </Route>

          {/* ✅ Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<Admin />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin/rankings" element={<Ranking />} />
            <Route path="/admin/contestants" element={<ContestantsList />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
