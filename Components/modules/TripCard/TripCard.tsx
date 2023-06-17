import React, { useState } from 'react';
import Image from "next/image";
import styles from "../FavoriteSection/FavoriteCard/FavoriteCard.module.scss";
import selectebookmark from "../../../assets/icons/selectedBookmark.svg"
import { Rating, RatingChangeEvent } from "primereact/rating";

const TripCard = (props: {
    name: string, price: number, fromCity: string, toCity: string, rating: number
}) => {
    const name = props.name
    const price = props.price
    const fromCity = props.fromCity
    const toCity = props.toCity
    const rating = props.rating
    const [value, setValue] = useState<number>(rating);

    return (
        <div
            className={`${styles.FavoriteCardContainer} w-auto col-12 lg:col-6 xl:col-4 flex-column mb-4`}
        >
            <div className={`col-10 flex flex-column align-items-center ${styles.inner} relative`}
                style={{ backgroundColor: "#fff", width: 'fit-content' }}>
                <div
                    className={`${styles.favTrip} flex align-items-center justify-content-evenly m-2`}
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
                    <div className='flex flex-column align-items-center'
                        style={{ rowGap: '7px' }}
                    >
                        <Rating className='justify-content-end'
                            value={value} onChange={(e: RatingChangeEvent) => setValue(e.value)} cancel={false} />
                        <span className="mx-3 text-sm">{name}</span>
                        <span className="text-sm">{price} T</span>
                    </div>
                </div>
                <div className={`${styles.location} m-2`}>
                    <span>{fromCity}</span>
                    <span className="mx-2">{`>`}</span>
                    <span>{toCity}</span>
                </div>
            </div>
        </div>
    );
};

export default TripCard;