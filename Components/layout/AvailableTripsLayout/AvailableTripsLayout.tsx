//styles
import Image from "next/image";
import styles from "./AvailableTripsLayout.module.scss";
//img
import insta from "../../../assets/images/instagram.svg";
import briefCase from "../../../assets/images/availableTrip.svg";
import AllTrips from "@/Components/modules/AllTrips/AllTrips";
const AvailableTripsLayout = () => {
  return (
    <div className={`${styles.AvailableTripsContainer} relative`}>
      <div className={`${styles.banner} relative`}>
        <h2>Available trips for Now!</h2>
        <div className={`${styles.Contact}`}>
          <h3>Contact with us!</h3>
          <div className={`${styles.contactuspic}`}>
            <Image className="" src={insta} alt="insta" />
          </div>
        </div>
        <Image
          className={`${styles.bannerImg} absolute`}
          src={briefCase}
          alt="bannerr"
        />
      </div>
      <div className={`grid-nogutter`}>
        <AllTrips/>
      </div>
    </div>
  );
};

export default AvailableTripsLayout;
