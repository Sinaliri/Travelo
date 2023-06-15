import Image from "next/image";
import styles from "./FavoriteCard.module.scss";
import selectebookmark from "../../../../assets/icons/selectedBookmark.svg"

const FavoriteCard = () => {
  return (
    <div
      className={`${styles.FavoriteCardContainer} col-12 lg:col-6 xl:col-4 flex-column mb-4`}
    >
      <div className={`col-10 col-offset-1 ${styles.inner} relative`} style={{backgroundColor:"#fff"}}>
        <div
          className={`${styles.favTrip} flex justify-content-start align-items-center m-2`}
        >
          <div
            className={`${styles.imgContainer} flex justify-content-center align-items-center`}
          >
            <img
              className={`${styles.userimg}`}
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
          </div>
          <span className="mx-3">Alireza Kiani</span>
        </div>
        <div className={`${styles.location} m-2`}>
          <span>Semnan</span>
          <span className="mx-2">{`>`}</span>
          <span>Tehran</span>
        </div>
        <span className="m-2">100 T</span>
        <Image className={`${styles.bookmark} absolute`} src={selectebookmark} alt="bookmark"/>
      </div>
    </div>
  );
};

export default FavoriteCard;
