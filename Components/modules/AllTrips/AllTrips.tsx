import style from "./AllTrips.module.scss";
import TripsRequetCard from "../TripsRequetCard/TripsRequetCard";
import SearchOptions from "../SearchOptions/SearchOptions";
const AllTrips = () => {
  return (
    <div className={`${style.TripsContainer} col-10 col-offset-1`}>
      <SearchOptions />
      <div className={`${style.tripsRequestContainer}`}>
        <TripsRequetCard />
      </div>
    </div>
  );
};

export default AllTrips;
