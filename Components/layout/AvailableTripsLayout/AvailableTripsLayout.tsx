//styles
import Image from "next/image";
import styles from "./AvailableTripsLayout.module.scss";
//img
import insta from "../../../assets/images/instagram.svg";
import briefCase from "../../../assets/images/availableTrip.svg";
import AllTrips from "@/Components/modules/AllTrips/AllTrips";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Api_search } from "@/Context/Services/Functions/Api";
import { MainContext, mainContextType } from "@/Context/Services/Procider/Provider";
import { url } from "inspector";
const AvailableTripsLayout = () => {
  const { setAvailableTripsRequest , AvailableTripsRequest}=useContext<mainContextType>(MainContext)
  // const [AvailableTrips,setAvailabeTrips]=useState()
  useEffect(() => {
    Api_search(`search/trip/`).then((res) => {
        console.log(res);
        setAvailableTripsRequest(res.data);
       
    });
}, []);
    console.log(AvailableTripsRequest)

  return (
    <div className={`${styles.wrapper} relative`}>
    <div className={`${styles.AvailableTripsContainer} `}>
      <div className={`${styles.banner} flex justify-content-between` }>
        <h2>Available trips for Now!</h2>
        <h2><Link href={"./"}>Travelo</Link></h2>
        
        
      </div>
    </div>
      <div className={`grid-nogutter${styles.AlltripsSection}`}>
        <AllTrips alltrips={AvailableTripsRequest}/>
      </div>
    </div>
  );
};

export default AvailableTripsLayout;
