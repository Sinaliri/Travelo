import Image from "next/image";
import styles from "./ProfileSection.module.scss";
import { Rating, RatingChangeEvent } from "primereact/rating";
import plus from "../../../assets/icons/plus.svg";
import { useState } from "react";
import FavoriteCard from "../FavoriteSection/FavoriteCard/FavoriteCard";
import TripCard from "../TripCard/TripCard";

const ProfileSection = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <aside
      style={{ fontFamily: 'Inter' }}
      className={`${styles.ProfileSectionContainer} flex flex-column  align-items-center`}
    >
      <h2>Profile</h2>
      <div
        className={`${styles.ProfileDetail} flex flex-column align-items-center`}
      >
        <div className={`${styles.profilepic} `}>
          <img className={`${styles.userpic}`} src={'https://xsgames.co/randomusers/avatar.php?g=male'} alt='profilepic' />
          <Image className={`${styles.profileImagechange}`} src={plus} alt="" />
        </div>
        <span className={`${styles.profileName} `}>alireaza kiani</span>
        {/* rate */}
        <Rating className='justify-content-end'
          value={value} onChange={(e: RatingChangeEvent) => setValue(e.value)} cancel={false} />
      </div>
      <div className={`${styles.YourTrips} w-full flex flex-column`}>
        <h2>Your trips!</h2>
        <div className={`${styles.altripcontainer} overflow-auto`}>
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </aside>
  );
};

export default ProfileSection;
