import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import group from "../assets/groupchat.svg";
import logoutsvg from "../assets/logout-svgrepo-com.svg";
import Myprofile from "../assets/myprofile.svg";

export const Options = ({ isActive }) => {
  const { profile, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!profile) {
    return <div>Please log in</div>;
  }
  return (
    <div
      className={`${
        !isActive ? "hidden" : ""
      } bg-white p-6 absolute w-[188px] h-[174px] border-[1px] border-[#E0E0E0] top-10 right-0 rounded-xl`}
    >
      <div className="flex flex-col gap-2">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 p-2 hover:bg-[#F2F2F2] w-full rounded-md"
        >
          <img src={Myprofile} alt="logo" className="w-5 h-5" />

          <h3>My Profile</h3>
        </button>
        <button className="flex items-center gap-2 p-2">
          <img src={group} alt="logo" className="w-5 h-5" />
          <h3>Group Chat</h3>
        </button>
      </div>
      <div className="w-full border-[#E0E0E0] border-[1px] my-2"></div>
      <button
        onClick={logout}
        className="flex items-center gap-2 p-2 text-[#EB5757]"
      >
        <img src={logoutsvg} alt="logo" className="w-4 h-4" />
        <h3>Logout</h3>
      </button>
    </div>
  );
};
