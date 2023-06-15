import Image from "next/image";
import styles from "./ProfileSection.module.scss";
//plus
import plus from "../../../assets/icons/plus.svg";

const ProfileSection = () => {
  return (
    <aside
      className={`${styles.ProfileSectionContainer} flex flex-column  align-items-center`}
    >
      <h2>Profile</h2>
      <div
        className={`${styles.ProfileDetail} flex flex-column align-items-center`}
      >
        <div className={`${styles.profilepic} `}>
          {/* <Image src={} alt='profilepic'/> */}
          <Image className={`${styles.profileImagechange}`} src={plus} alt="" />
        </div>
        <span className={`${styles.profileName} `}>alireaza kiani</span>
        {/* rate */}
        rate
      </div>
      <div className={`${styles.YourTrips} w-full flex flex-column`}>
        <h2>Your trips!</h2>
        <div className={`${styles.alltripsContainer}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSection;
