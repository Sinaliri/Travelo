import styles from "./FavoriteSection.module.scss";
import Notif from "../Notif/Notif";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import { useEffect, useState } from "react";
import { FavoriteTrip } from "@/Context/Services/Functions/Api";

const FavoriteSection = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    FavoriteTrip().then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <div
        className={`${styles.FavoriteSectionHeader} flex justify-content-between align-items-center`}
      >
        <h2>Favorite</h2>
        <Notif />
      </div>
      <div className={`${styles.favoriteTrips} grid`}>
        {Data &&
          Data.map((item) => {
            return (
              <FavoriteCard
                key={item.index}
                price={item.price}
                name={item.trip_owner_fullname}
                from={item.from_city}
                to={item.to_city}
                img={item.trip_owner_image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FavoriteSection;
