import { useContext, useState } from "react";
//style
import style from "./SearchOptions.module.scss";
//components
import Calender from "../SelectDropDown/Calender/Calender";
import Location from "../SelectDropDown/Location/Location";
import Price from "../SelectDropDown/Price/Price";
import { Button } from "primereact/button";
import Destination from "../SelectDropDown/Destination/Destination";
import {
  MainContext,
  mainContextType,
} from "@/Context/Services/Procider/Provider";
import { Api_search, Api_search2 } from "@/Context/Services/Functions/Api";
const SearchOptions = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    selectedCity,
    selectedMaxPrice,
    selectedDestination,
    date,
    AvailableTripsRequest,
    setAvailableTripsRequest,
  } = useContext<mainContextType>(MainContext);
  const load = () => {
    setLoading(true);
    // console.log(selectedCity)
    // console.log(selectedDestination.name)
    const year=(date.toLocaleString().split("/").join("-").split(",")[0].split("-")[2]);
    const month=(date.toLocaleString().split("/").join("-").split(",")[0].split("-")[0]);
    const day=(date.toLocaleString().split("/").join("-").split(",")[0].split("-")[1]);
    const truedate=(`${year}-${+month>9 ? month: `0${month}`}-${day}`);

    //api search
    Api_search2(
      selectedCity,
      selectedDestination,
      truedate,
      selectedMaxPrice?.name
    ).then((res)=>{
      setAvailableTripsRequest(res.data)
      console.log(res.data)
    })
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  };
  return (
    <div className={`${style.searchOptions} grid align-items-center`}>
      <div className={`col-12 lg:col-10 grid`}>
        <div className="col-12 lg:col-6 xl:col-3 flex  align-items-center">
          <span style={{width:"100px"}}>From</span>
          <Location />
        </div>
        <div className="col-12 lg:col-6 xl:col-3 flex  align-items-center">
          <span style={{width:"100px"}}>To</span>
          <Destination />
        </div>
        <div className="col-12 lg:col-6 xl:col-3 flex  align-items-center">
          <span style={{width:"100px"}}>Time</span>
          <Calender />
        </div>
        <div className="col-12 lg:col-6 xl:col-3 flex align-items-center">
          <span style={{width:"100px"}}>Price</span>
          <Price />
        </div>
      </div>
      {/* <div className="lg:col-1"></div> */}
      <div
        className={`${style.buttonContainer} col-12 lg:col-2 flex justify-content-center align-items-center p-0`}
      >
        <Button
          className={`${style.resultButton} px-3`}
          icon="pi pi-check"
          loading={loading}
          onClick={load}
        >
          Show results
        </Button>
      </div>
    </div>
  );
};

export default SearchOptions;
