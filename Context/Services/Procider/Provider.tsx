import React, { createContext, useReducer, useState } from "react";
import { mainreducer } from "./Reduser";

export type stateType = {
  locationData: {
    location: { lat: number; lon: number };
    regionAndCity: string;
  };
  contactId: string;
};

type mainContextType = {
  state: stateType;
  dispatch;
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  contactId: string;
  setContactId: React.Dispatch<React.SetStateAction<string>>;
};

export const MainContext = createContext({} as mainContextType);

const MainProvider = (props) => {
  const [businessName, setBusinessName] = useState('');
  const [contactId, setContactId] = useState('asdsa');

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
    }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
