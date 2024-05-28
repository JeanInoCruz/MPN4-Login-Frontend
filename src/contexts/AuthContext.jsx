import { createContext, useContext } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile as updateProfileApi } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const { data: profile } = useQuery("profile", getProfile);

  const profileMutation = useMutation(updateProfileApi, {
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

export const useAuth = () => useContext(AuthContext);
