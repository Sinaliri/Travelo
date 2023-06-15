import SideBar from "@/Components/modules/SideBar/SideBar";
import Image from "next/image";
import style from "./ProfileLayout.module.scss";
import Profile from "../../../assets/images/Profile.png";
import ProfileSection from "@/Components/modules/ProfileSection/ProfileSection";

const ProfileLayout = ({ children }: any) => {
  return (
    <div className={`${style.ProfileLayout} grid m-0 relative`}>
      <div className={`col-2  p-0 relative`}>
        <SideBar />
      </div>
      <div className={`${style.pimagecontainer} col-8 p-0 relative`}>
        <Image className={`${style.pimage} w-full`} src={Profile} alt="profile.png" />
        <div className={`${style.pageWrapper} col-10 col-offset-1 absolute`}>{children}</div>
      </div>
      <div className={`col-2 p-0 `}>
        <ProfileSection />
      </div>
    </div>
  );
};

export default ProfileLayout;
