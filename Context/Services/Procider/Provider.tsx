import React, { Dispatch, createContext, useReducer, useState } from "react";
import { mainreducer } from "./Reduser";
import { City } from "@/Context/ContextProvider";
import { IPrice } from "@/Components/modules/SelectDropDown/Price/Price";

export type stateType = {
  locationData: {
    location: { lat: number; lon: number };
    regionAndCity: string;
  };
  contactId: string;
};

export type mainContextType = {
  state: stateType;
  dispatch;
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  contactId: string,
  AvailableTripsRequest:any[],
  setAvailableTripsRequest:React.Dispatch<React.SetStateAction<any>>;
  setContactId: React.Dispatch<React.SetStateAction<string>>;
  selectedCity : City,
  setSelectedCity:React.Dispatch<React.SetStateAction<City>>
  selectedDestination : City,
  setSelectedDestination:React.Dispatch<React.SetStateAction<City>>
   selectedMaxPrice:IPrice;
   setSelectedMaxPrice:React.Dispatch<React.SetStateAction<IPrice>>;
   date:string | Date | Date[] | null;
   setDate:React.Dispatch<React.SetStateAction<string | Date | Date[] | null>>
  };

export const MainContext = createContext({} as mainContextType);

const MainProvider = (props) => {
  const [businessName, setBusinessName] = useState('');
  const [AvailableTripsRequest, setAvailableTripsRequest] = useState([]);
  const [contactId, setContactId] = useState('asdsa');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<City | null>(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<IPrice | null>(null);
  const [date, setDate] = useState<string | Date | Date[] | null>(null);


  const initialState = {
    locationData: {
      location: { lat: 0, lon: 0 },
      regionAndCity: "",
    },
    contactId: "",
  };

  const [state, dispatch] = useReducer(mainreducer, initialState);

  return (
    <MainContext.Provider value={{
      state,
      dispatch,
      businessName,
      setBusinessName,
      contactId,
      setContactId,
      selectedCity,
       setSelectedCity,
       selectedMaxPrice,
       setSelectedMaxPrice,
       selectedDestination,
       setSelectedDestination,
       date,
       setDate,
       AvailableTripsRequest,
       setAvailableTripsRequest
    }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
