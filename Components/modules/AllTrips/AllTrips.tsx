import style from "./AllTrips.module.scss";
import TripsRequetCard from "../TripsRequetCard/TripsRequetCard";
import SearchOptions from "../SearchOptions/SearchOptions";
const AllTrips = (props:{alltrips:any}) => {
  const {alltrips}=props;
  console.log(alltrips)
  return (
    <div className={`${style.TripsContainer} col-10 col-offset-1`}>
      <SearchOptions />
      <div className={`${style.tripsRequestContainer}`}>
       {alltrips?.map((item)=>{
        return <TripsRequetCard key={item.id} item={item}/>
       })}
      </div>
    </div>
  );
};

export default AllTrips;
