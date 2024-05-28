// LoginForm.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../services/api";
import Google from "../assets/Google.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Github from "../assets/Gihub.svg";
import logo from "../assets/devchallenges.svg";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const { login: authLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      authLogin(data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleOAuthLogin = (provider) => {
    window.location.href = `http://localhost:5000/api/auth/${provider}`;
  };

  return (
    <div className="flex justify-center content-center items-center font-NotoSans flex-col py-[27px] px-[72px] w-screen min-h-screen">
      <div className="w-[473.83px] flex flex-col gap-6  h-[544.37px] rounded-3xl border-[#BDBDBD] border-[1px] p-14 ">
        <header className="flex flex-col gap-4">
          <div className="flex items-center  text-[16px] leading-[24.52px] font-semibold content-center gap-3 text-[#F0402C]">
            <img src={logo} alt="logo" className="mb-4 mt-5 sm:mt-0" />
          </div>
          <h2 className="w-[318.88px] text-[18px] leading-[24.52px] text-[#333333] font-semibold py-2">
            Login
          </h2>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
            </label>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
            </label>
            <button
              type="submit"
              className="w-full bg-[#2F80ED] h-[38px] rounded-lg text-[16px] leading-[21.79px] font-semibold text-white hover:bg-[#1161c9] "
            >
              Login
            </button>
          </form>
          <div className="py-8 flex flex-col gap-5">
            <h4 className="w-full text-center text-[#828282] text-[14px] leading-[19.07px] font-normal">
              or continue with these social profile
            </h4>
            <ul className="flex justify-center gap-7 w-full">
              <li>
                <button
                  className="h-[42px] w-[42px] flex justify-center items-center content-center text-[#828282] rounded-full "
                  onClick={() => handleOAuthLogin("google")}
                >
                  <img
                    src={Google}
                    alt="google"
                    className="hover:cursor-pointer"
                  />{" "}
                </button>
              </li>
              <li>
                <button
                  className="h-[42px] w-[42px] flex justify-center items-center content-center text-[#828282] rounded-full "
                  onClick={() => handleOAuthLogin("facebook")}
                >
                  <img
                    src={Facebook}
                    alt="facebook"
                    className="hover:cursor-pointer"
                  />
                </button>
              </li>
              <li>
                <button
                  className="h-[42px] w-[42px] flex justify-center items-center content-center text-[#828282] rounded-full "
                  onClick={() => handleOAuthLogin("twitter")}
                >
                  <img
                    src={Twitter}
                    alt="twitter"
                    className="hover:cursor-pointer"
                  />
                </button>
              </li>
              <li>
                <button
                  className="h-[42px] w-[42px] flex justify-center items-center content-center text-[#828282] rounded-full "
                  onClick={() => handleOAuthLogin("github")}
                >
                  <img
                    src={Github}
                    alt="github"
                    className="hover:cursor-pointer"
                  />
                </button>
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-center gap-1 text-center items-center  text-[14px] leading-[19.07px] font-normal">
            <h4 className="text-[#828282]">Don’t have an account yet?</h4>
            <NavLink to="/register" className="text-blue-400 underline">
              Register
            </NavLink>
          </div>
        </main>
      </div>
      <footer className="pt-2 px-1 pb-12 flex justify-between w-[473.83px] text-[14px] leading-[19.07px] text-[#828282]">
        <p className="font-normal">
          created by{" "}
          <span className="underline font-semibold">Jean Inofuente</span>
        </p>
        <p className="font-normal">devChallenges.io</p>
      </footer>
    </div>
  );
};

export default LoginForm;
