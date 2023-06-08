import { useState } from "react";
import Calender from "../SelectDropDown/Calender/Calender";
import Location from "../SelectDropDown/Location/Location";
import Price from "../SelectDropDown/Price/Price";
import style from "./AllTrips.module.scss";
import { Button } from "primereact/button";
const AllTrips = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={`${style.TripsContainer} col-10 col-offset-1`}>
      <div className={`${style.searchOptions} grid align-items-center`}>
        <div className="col-3 flex justify-content-around align-items-center">
          <span>Location</span>
          <Location />
        </div>
        <div className="col-3 flex justify-content-around align-items-center">
          <span>Time</span>
          <Calender />
        </div>
        <div className="col-3 flex justify-content-around align-items-center">
          <span>Price</span>
          <Price />
        </div>
        <div className="col-1"></div>
        <div
          className={`${style.buttonContainer} col-2 flex justify-content-around align-items-center`}
        >
          <Button
            className={`${style.resultButton}`}
            icon="pi pi-check"
            loading={loading}
            onClick={load}
          >
            Show results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllTrips;
