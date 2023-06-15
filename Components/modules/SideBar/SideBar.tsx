import styles from "./SideBar.module.scss";
import DashBoard from "../../../assets/icons/DashBoard.svg";
import Message from "../../../assets/icons/Message.svg";
import favorite from "../../../assets/icons/favorite.svg";
import settings from "../../../assets/icons/Setting.svg";
import SidebarButton from "../SidebarButton/SidebarButton";
import logout from "../../../assets/images/logout.svg";
import Image from "next/image";
// import Settings from "@/pages/profile/Settings";

const SideBar = () => {
  const sidebarbuttons = [
    {
      id: 1,
      icon: DashBoard,
      text: "Dashboard",
    },
    {
      id: 2,
      icon: Message,
      text: "Message",
    },
    {
      id: 3,
      icon: favorite,
      text: "Favorite",
    },
    {
      id: 4,
      icon: settings,
      text: "Settings",
    },
  ];
  return (
    <aside className={`${styles.sidebar}  flex flex-column align-items-center`}>
      <h2>Travello</h2>
      <div
        className={`${styles.menuContainer}  flex flex-column justify-content-between align-items-center h-full`}
      >
        <div className={`${styles.up}`}>
          {sidebarbuttons.map((item) => {
            return (
              <SidebarButton icon={item.icon} key={item.id} text={item.text} />
            );
          })}
        </div>
        <div
          className={`${styles.down} flex justify-content-center align-items-center`}
        >
          <Image src={logout} alt="logout" />
          <span className="ml-2">Log out</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
