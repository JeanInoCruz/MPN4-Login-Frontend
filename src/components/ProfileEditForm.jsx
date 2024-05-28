import { useContext, useState, useEffect } from "react";
import { AuthContext, useAuth } from "../contexts/AuthContext";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import camera from "../assets/camera.svg";

const ProfileEditForm = () => {
  const { profile, profileMutation } = useAuth();
  const { profile: profileData } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
    photo: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        bio: profile.bio || "",
        phone: profile.phone || "",
        email: profile.email || "",
        password: "",
        photo: profile.photo || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await profileMutation.mutateAsync(formData);
      alert("Profile updated successfully");
      console.log(formData);
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  if (!profileData?.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex font-NotoSans flex-col py-[27px] px-[72px] w-screen min-h-screen">
      <Header />
      <main className="w-full flex flex-col justify-center content-center items-center">
        <div className="w-[845.91px]">
          <button
            onClick={() => navigate("/profile")}
            className="flex text-[#2D9CDB] font-normal text-[18px] leading-[24.52px] items-center gap-2 py-7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </button>
        </div>
        <section className="w-[845.91px] min-h-[580.54px] border-[#E0E0E0] border-[1px] rounded-xl px-11 py-2">
          <div className="flex flex-col gap-1 py-8">
            <h2 className="font-semibold text-[24px] leading-[32.69px]">Change Info</h2>
            <p className="text-[#828282] font-medium text-md ">Changes will be reflected to every service</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 pb-8">
            <label htmlFor="photo" className="flex items-center gap-4 cursor-pointer">
              <div className="relative">
                <img
                  src={`http://localhost:5000/${profileData.data.photo}`}
                  className="w-20 h-20 rounded-xl"
                  alt=""
                />
                <img src={camera} alt="logo" className="absolute top-4 left-4 z-10 h-12" />
              </div>
              <h3 className="text-[#828282] font-medium text-md ">CHANGE PHOTO</h3>
              <input
                id="photo"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-red-400 hover:file:bg-red-100 cursor-pointer file:cursor-pointer"
                type="file"
                title="Change Photo"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                style={{ display: 'none' }} // Hide the input as the label will be the visible element
              />
            </label>
            <label htmlFor="name" className="flex flex-col gap-2">
              <h4 className="text-md text-[#4F4F4F]">Name</h4>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="text-[12px] gap-0 text-[#4F4F4F] placeholder:text-md w-[416.93px] border-[1px] border-[#828282] rounded-lg h-14 p-4"
              />
            </label>
            <label htmlFor="bio" className="flex flex-col gap-0">
              <h4 className="text-md text-[#4F4F4F]">Bio</h4>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                id="bio"
                type="text"
                placeholder="Enter your bio..."
                className="text-[12px] gap-0 text-[#4F4F4F] h-[91.58px] placeholder:text-md w-[416.93px] border-[1px] border-[#828282] rounded-lg p-4"
              ></textarea>
            </label>
            <label htmlFor="phone" className="flex flex-col gap-2">
              <h4 className="text-md text-[#4F4F4F]">Phone</h4>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                title="Enter a phone number with at least 9 digits"
                pattern="[0-9]{9,}"
                placeholder="Enter your phone..."
                className="text-[12px] gap-0 text-[#4F4F4F] placeholder:text-md w-[416.93px] border-[1px] border-[#828282] rounded-lg h-14 p-4"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-2">
              <h4 className="text-md text-[#4F4F4F]">Email</h4>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                title="Enter a valid email address (@)"
                placeholder="Enter your email..."
                className="text-[12px] gap-0 text-[#4F4F4F] placeholder:text-md w-[416.93px] border-[1px] border-[#828282] rounded-lg h-14 p-4"
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-2">
              <h4 className="text-md text-[#4F4F4F]">Password</h4>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                title="Password must be at least 8 characters long."
                placeholder="Enter your password..."
                className="text-[12px] gap-0 text-[#4F4F4F] placeholder:text-md w-[416.93px] border-[1px] border-[#828282] rounded-lg h-14 p-4"
              />
            </label>
            <button
              type="submit"
              className="w-[82px] h-[38px] bg-[#2F80ED] text-[16px] leading-[21.79px] text-white rounded-lg hover:bg-[#1161c9]"
            >
              Save
            </button>
          </form>
        </section>
        <footer className="pt-2 px-1 pb-12 flex justify-between w-[845.91px] text-[14px] leading-[19.07px] text-[#828282]">
          <p className="font-normal">
            created by <span className="underline font-semibold">Jean Inofuente</span>
          </p>
          <p className="font-normal">devChallenges.io</p>
        </footer>
      </main>
    </div>
  );
};

export default ProfileEditForm;
