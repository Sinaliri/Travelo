import Image from "next/image";
import styles from "./Notif.module.scss";
//images
import notif from "../../../assets/icons/notif.svg";
import redSpot from "../../../assets/icons/redspot.svg";

const Notif = () => {
  return (
    <div
      className={`${styles.notif} flex justify-content-center align-items-center relative`}
    >
      <Image src={notif} alt="notif" />
      <Image
        className={`${styles.redspot} absolute`}
        src={redSpot}
        alt="redspot"
      />
    </div>
  );
};

export default Notif;
