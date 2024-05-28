import { createContext, useContext } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  
  // Crear una instancia de QueryClient
  const queryClient = new QueryClient();

  const { data: profile } = useQuery(
    "profile",
    getProfile
  );

  const profileMutation = useMutation(updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  const register = (data) => {
    localStorage.setItem("token", data.token);
    navigate("/login");
  };


  const login = (data) => {
    localStorage.setItem("token", data.token);
    navigate("/profile");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ profile, login, logout, profileMutation, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
