import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";
import { AuthProvider } from "./contexts/AuthContext";
import ProfileEditForm from "./components/ProfileEditForm";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update" element={<ProfileEditForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
