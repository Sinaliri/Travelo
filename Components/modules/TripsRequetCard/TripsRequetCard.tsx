import { Button } from "primereact/button";
import styles from "./TripsRequetCard.module.scss";
import Image from "next/image";
//images
import like from "../../../assets/images/like.svg";
import dislike from "../../../assets/images/dislike.svg";
const TripsRequetCard = () => {
  return (
    <div className={`${styles.RequestCard} grid`}>
      <div className={`${styles.RequestDetail} col-12 lg:col-5 grid`}>
        <div
          className={`${styles.left}  col-5 flex flex-column justify-content-between  align-items-center`}
        >
          <div className={`${styles.ownerImage}`}>
            {/* <Image src={} alt=""/> */}
            <img
            
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
          </div>
          <span className={`${styles.ownerPrice}`}>100 T</span>
          <div
            className={`${styles.rate} flex justify-content-between align-items-center w-full flex-nowrap`}
          >
            <div className={`${styles.like} flex mr-2`}>
              <Image src={like} alt="like.svg" />
              <span className={`${styles.like} ml-2`}>30002</span>
            </div>
            <div className={`${styles.dislike} flex`}>
              <Image src={dislike} alt="dislike.svg" />
              <span className={`${styles.dislike} ml-2`}>25</span>
            </div>
          </div>
        </div>
        <div className={`${styles.right} col-7 flex flex-column `}>
          <h4
            className={`${styles.Destination} w-full flex justify-content-start`}
          >
            <span className="w-full">{`semnan > tehran`}</span>
          </h4>
          <span className={`${styles.TripsOwner}`}>Owner</span>
          <span>RAte</span>
        </div>
      </div>
      <div className={`${styles.RequestDescription} col-12 lg:col-5 `}>
        <h4 className={`${styles.Description}`}>Description</h4>
        {/* text should be here */}
        <p>
          Windows talking painted pasture yet its express parties use. Sure last
          upon he same as knew next. Of believed or diverted no rejoiced. End
          friendship sufficient assistance can prosperous met. As game he show
          it park do. Was has unknown few certain ten promise. No finished my an
          likewise cheerful packages we.{" "}
          Windows talking painted pasture yet its express parties use. Sure last
          upon he same as knew next. Of believed or diverted no rejoiced. End
          friendship sufficient assistance can prosperous met. As game he show
          it park do. Was has unknown few certain ten promise. No finished my an
          likewise cheerful packages we.{" "}
          Windows talking painted pasture yet its express parties use. Sure last
          upon he same as knew next. Of believed or diverted no rejoiced. End
          friendship sufficient assistance can prosperous met. As game he show
          it park do. Was has unknown few certain ten promise. No finished my an
          likewise cheerful packages we.{" "}
          Windows talking painted pasture yet its express parties use. Sure last
          upon he same as knew next. Of believed or diverted no rejoiced. End
          friendship sufficient assistance can prosperous met. As game he show
          it park do. Was has unknown few certain ten promise. No finished my an
          likewise cheerful packages we.{" "}
        </p>
      </div>
      <div
        className={`${styles.RequestButton} col-12 lg:col-2  flex justify-content-center align-items-end`}
      >
        <Button className={`${styles.sendButton}`}>Send request</Button>
      </div>
    </div>
  );
};

export default TripsRequetCard;
