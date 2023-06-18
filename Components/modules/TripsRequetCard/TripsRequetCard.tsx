import { Button } from "primereact/button";
import styles from "./TripsRequetCard.module.scss";
import Image from "next/image";
//images
import like from "../../../assets/images/like.svg";
import dislike from "../../../assets/images/dislike.svg";
import { Rating } from "primereact/rating";
const TripsRequetCard = (props:{item:any}) => {
  const{item}=props
  // console.log(item)
  return (
    <div className={`${styles.RequestCard} grid`}>
      <div className={`${styles.RequestDetail} col-12 lg:col-5 grid`}>
        <div
          className={`${styles.left}  col-5 flex flex-column justify-content-between  align-items-center`}
        >
          <div className={`${styles.ownerImage}`}>
            {/* <Image src={} alt=""/> */}
            <img
            
            src={`http://localhost:8000/${item.trip_owner_image}`}
            alt=""
            />
          </div>
          <span className={`${styles.ownerPrice}`}>{item.price} T</span>
          <div
            className={`${styles.rate} flex justify-content-between align-items-center w-full flex-nowrap`}
          >
            <div className={`${styles.like} flex mr-2`}>
              <Image src={like} alt="like.svg" />
              <span className={`${styles.like} ml-2`}>{item.like_count}</span>
            </div>
            <div className={`${styles.dislike} flex`}>
              <Image src={dislike} alt="dislike.svg" />
              <span className={`${styles.dislike} ml-2`}>{item.dislike_count}</span>
            </div>
          </div>
        </div>
        <div className={`${styles.right} col-7 flex flex-column `}>
          <h4
            className={`${styles.Destination} w-full flex justify-content-start`}
          >
            <span className="w-full">{`${item.from_city} > ${item.to_city}`}</span>
          </h4>
          <span className={`${styles.TripsOwner}`}>{item.fullname}</span>
          <span>
          <Rating className='justify-content-start'
                value={Math.ceil(item.rate)} readOnly cancel={false}/>

          </span>
        </div>
      </div>
      <div className={`${styles.RequestDescription} col-12 lg:col-5 `}>
        <h4 className={`${styles.Description}`}>Description</h4>
        {/* text should be here */}
        <p>
          {item.description}
        </p>
      </div>
      <div
        className={`${styles.RequestButton} col-12 lg:col-2  flex justify-content-center align-items-end`}
      >
        <Button id={item.id} className={`${styles.sendButton}`}>Send request</Button>
      </div>
    </div>
  );
};

export default TripsRequetCard;
