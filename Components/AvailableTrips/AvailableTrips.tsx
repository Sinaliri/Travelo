import React, { useEffect, useState } from "react";
import AvailableTripsCard from "./AvailableTripsCard/AvailableTripsCard";
import CommonButtonWithRadius from "../CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius";
import { MainPageTrip } from "@/Context/Services/Functions/Api";
import { ITrip } from "@/Context/Services/Functions/interfaces";

const AvailableTrips = (props: { Trips: any }) => {
  const { Trips } = props;
  const [more, setMore] = useState(true);
  // const tripCards = Array.from({ length: 3 }, (_, index) => (
  //
  // ));
  console.log(Trips)

  return (
    <div className="px-4 my-5 align-items-center">
      <h2 className="text-3xl font-normal"> Available trips for Now! </h2>
      <div className="flex align-items-center overflow-x-auto" style={{ gap: "230px" }}>
        <div className={`my-3 flex `} style={{ gap: "30px" }}>
          {Trips &&
            more &&
            Trips?.slice(0, 3).map((item: any) => {
              return (
                <AvailableTripsCard
                  key={item.index}
                  from={item.from_city}
                  to={item.to_city}
                  price={item.price}
                  ownername={item.trip_owner_fullname}
                  image={item.trip_owner_image}
                  id={item.pk}
                />
              );
            })}

          {Trips &&
            !more &&
            Trips?.map((item: any) => {
              return (
                <AvailableTripsCard
                  key={item.index}
                  from={item.from_city}
                  to={item.to_city}
                  price={item.price}
                  ownername={item.trip_owner_fullname}
                  image={item.trip_owner_image}
                  id={item.pk}

                />
              );
            })}
          {/* {tripCards} */}
        </div>
        <CommonButtonWithRadius
          text="More"
          bgColor="#D9D9D9"
          handler={() => {
            setMore(!more);
          }}
        />
      </div>
    </div>
  );
};

export default AvailableTrips;
