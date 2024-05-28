import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

const ProfileSection = ({ label, value }) => (
  <section className="flex w-full items-center py-1 pl-12 min-h-[80px]">
    <div className="w-[250px] text-[#BDBDBD] text-[13px] leading-[17.71px]">
      {label}
    </div>
    <div className="text-[18px] leading-[24.52px] text-[#333333]">
      <p>{value}</p>
    </div>
  </section>
);

const Profile = () => {
  const { profile } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!profile) {
    return <div>Please log in</div>;
  }

  const rawData = profile.data;

  const sections = [
    {
      label: "PHOTO",
      value: (
        <img
          src={`http://localhost:5000/${rawData.photo}`}
          className="w-20 h-20 rounded-xl bg-cover"
          alt="profile picture"
        />
      ),
    },
    { label: "NAME", value: rawData.name },
    { label: "BIO", value: rawData.bio },
    { label: "PHONE", value: rawData.phone },
    { label: "EMAIL", value: rawData.email },
    { label: "PASSWORD", value: "************" },
  ];

  return (
    <div className="flex font-NotoSans flex-col py-[27px] px-[72px] w-screen min-h-screen">
      <Header />
      {rawData && (
        <main className="w-full flex flex-col justify-center content-center items-center">
          <h2 className="pt-2 pb-1 text-[36px] leading-[49.03px] text-center">
            Personal info
          </h2>
          <h3 className="pt-1 pb-6 text-[18px] leading-[24.52px] text-center">
            Basic info, like your name and photo
          </h3>
          <article className="w-[845.91px] min-h-[580.54px] border-[#E0E0E0] border-[1px] rounded-xl">
            <section className="flex justify-between py-6 px-10 items-center">
              <div className="gap-2">
                <h4 className="text-[24px] font-semibold">Profile</h4>
                <p className="text-[13px] leading-[17.71px] text-[#828282]">
                  Some info may be visible to other people
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate("/update")}
                  className="border-[#828282] w-[95.34px] h-[38px] border-[1px] rounded-xl text-[#828282] text-[16px]"
                >
                  Edit
                </button>
              </div>
            </section>
            <div className="w-full border-[#E0E0E0] border-[1px]"></div>
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                <ProfileSection label={section.label} value={section.value} />
                {index < sections.length - 1 && (
                  <div className="w-full border-[#E0E0E0] border-[1px]"></div>
                )}
              </React.Fragment>
            ))}
          </article>
          <footer className="pt-2 px-1 pb-12 flex justify-between w-[845.91px] text-[14px] leading-[19.07px] text-[#828282]">
            <p className="font-normal">
              created by{" "}
              <span className="underline font-semibold">Jean Inofuente</span>
            </p>
            <p className="font-normal">devChallenges.io</p>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Profile;
