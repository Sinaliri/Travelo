import Image from "next/image";
import styles from "./ProfileSection.module.scss";
import { Rating, RatingChangeEvent } from "primereact/rating";
import plus from "../../../assets/icons/plus.svg";
import { useEffect, useState } from "react";
import FavoriteCard from "../FavoriteSection/FavoriteCard/FavoriteCard";
import TripCard from "../TripCard/TripCard";
import { MyTrip, UserProfile } from "@/Context/Services/Functions/Api";

const ProfileSection = () => {
  const [value, setValue] = useState<number>(0);
  const [userData, setuserData] = useState();
  useEffect(() => {
    MyTrip().then((res) => {
      console.log(res);
    });
    UserProfile().then((res) => {
      setuserData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <aside
      style={{ fontFamily: "Inter" }}
      className={`${styles.ProfileSectionContainer} flex flex-column  align-items-center`}
    >
      <h2>Profile</h2>
      <div
        className={`${styles.ProfileDetail} flex flex-column align-items-center`}
      >
        <div className={`${styles.profilepic} `}>
          <img
            className={`${styles.userpic}`}
            src={`http://localhost:8000/${userData?.image}`}
            alt="profilepic"
          />
          {/* <Image className={`${styles.profileImagechange}`} src={plus} alt="" /> */}
        </div>
        <span
          className={`${styles.profileName} `}
        >{`${userData?.first_name} ${userData?.last_name}`}</span>
        <Rating
          className="justify-content-end"
          value={Math.ceil(Math.random() * 5 + 1)}
          readOnly
          onChange={(e: RatingChangeEvent) => setValue(e.value)}
          cancel={false}
        />
      </div>
      <div className={`${styles.YourTrips} w-full flex flex-column`}>
        <h2>Your trips!</h2>
        <div
          className={`${styles.altripcontainer} flex flex-column align-items-center overflow-auto`}
        >
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
