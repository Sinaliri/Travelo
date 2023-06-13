import { useState } from "react";
//style
import style from "./SearchOptions.module.scss";
//components
import Calender from "../SelectDropDown/Calender/Calender";
import Location from "../SelectDropDown/Location/Location";
import Price from "../SelectDropDown/Price/Price";
import { Button } from "primereact/button";
const SearchOptions = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const load = () => {
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  return (
    <div className={`${style.searchOptions} grid align-items-center`}>
      <div className={`col-12 lg:col-10 grid`}>
      <div className="col-12 md:col-6 xl:col-3 flex  align-items-center">
      <span>From</span>
      <Location />
    </div>
      <div className="col-12 md:col-6 xl:col-3 flex  align-items-center">
      <span>To</span>
      <Location />
    </div>
    <div className="col-12 md:col-6 xl:col-3 flex  align-items-center">
      <span>Time</span>
      <Calender />
    </div>
    <div className="col-12 md:col-6 xl:col-3 flex align-items-center">
      <span>Price</span>
      <Price />
    </div>
      </div>
    {/* <div className="lg:col-1"></div> */}
    <div
      className={`${style.buttonContainer} col-12 lg:col-2 flex justify-content-center align-items-center`}
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
  )
}

export default SearchOptions