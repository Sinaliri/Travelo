//styles
import Image from "next/image";
import styles from "./AvailableTripsLayout.module.scss";
//img
import insta from "../../../assets/images/instagram.svg";
import briefCase from "../../../assets/images/availableTrip.svg";
import AllTrips from "@/Components/modules/AllTrips/AllTrips";
import Link from "next/link";
const AvailableTripsLayout = () => {
  return (
    <div className={`${styles.wrapper} relative`}>
    <div className={`${styles.AvailableTripsContainer} `}>
      <div className={`${styles.banner} flex justify-content-between` }>
        <h2>Available trips for Now!</h2>
        <h2><Link href={"./"}>Travelo</Link></h2>
        
        
      </div>
    </div>
      <div className={`grid-nogutter${styles.AlltripsSection}`}>
        <AllTrips/>
      </div>
    </div>
  );
};

export default AvailableTripsLayout;
