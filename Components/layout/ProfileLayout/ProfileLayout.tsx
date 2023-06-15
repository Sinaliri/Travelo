import SideBar from "@/Components/modules/SideBar/SideBar";
import Image from "next/image";
import style from "./ProfileLayout.module.scss";
import Profile from "../../../assets/images/Profile.png";
import ProfileSection from "@/Components/modules/ProfileSection/ProfileSection";
import { useContext } from "react";
import { DataContext } from "@/Context/ContextProvider";
import menu from "../../../assets/icons/menu.svg"

const ProfileLayout = ({ children }: any) => {
  const context= useContext(DataContext)
  const sidebarVisible=context?.sidebarVisible;
  const setSidebarVisible=context?.setSidebarVisible;
  const handleButtonClick = () => {
    if(setSidebarVisible != undefined){
    setSidebarVisible(!sidebarVisible);
    console.log(sidebarVisible);
  }
  };
  // const setSidebarVisible=context?.setSidebarVisible;
  return (
    <div className={`${style.ProfileLayout} grid m-0 relative`}>
      <div className={`${style.sidebarcontainer} col-2  p-0 relative`}
       style={
        sidebarVisible
          ? { position: "absolute", zIndex: "199", display: "block" }
          : {}
      }
      >
        <SideBar />
      </div>
      <div className={`${style.pimagecontainer} col-9 md:col-8 p-0 relative`}>
        <div className="absolute" onClick={handleButtonClick}>
          <Image  src={menu} alt="menu" />
        </div>
        <Image className={`${style.pimage} w-full`} src={Profile} alt="profile.png" />
        <div className={`${style.pageWrapper} col-10 col-offset-1 absolute`}>{children}</div>
      </div>
      <div className={`col-3 md:col-4 lg:col-2 p-0 `}>
        <ProfileSection />
      </div>
    </div>
  );
};

export default ProfileLayout;
