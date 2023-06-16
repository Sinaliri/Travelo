import React, { createContext, useReducer, useState } from "react";
import { mainreducer } from "./Reduser";

export type stateType = {
  locationData: {
    location: { lat: number; lon: number };
    regionAndCity: string;
  };
};

type mainContextType = {
  state: stateType;
  dispatch;
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  currentLocation: string;
  setCurrentLocation: React.Dispatch<React.SetStateAction<string>>;
  messageBoxCurrentContact: number;
  SetMessageBoxCurrentContact: React.Dispatch<React.SetStateAction<number>>;
  myTicketCurrentContact: number;
  SetMyTicketCurrentContact: React.Dispatch<React.SetStateAction<number>>;
  isMessageSent: boolean;
  setIsMessageSent: React.Dispatch<React.SetStateAction<boolean>>;
  contactName: string;
  setContactName: React.Dispatch<React.SetStateAction<string>>;
  contactJob: string;
  setContactJob: React.Dispatch<React.SetStateAction<string>>;
  notificationRequest: boolean;
  setNotificationRequest: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setuserName: React.Dispatch<React.SetStateAction<string>>;
  requestTitle: string;
  setRequestTitle: React.Dispatch<React.SetStateAction<string>>;
  petAge: number;
  setPetAge: React.Dispatch<React.SetStateAction<number>>;
  petBreed: string;
  setPetBreed: React.Dispatch<React.SetStateAction<string>>;
  timeForDoctor: boolean;
  setTimeForDoctor: React.Dispatch<React.SetStateAction<boolean>>;
  sendAmbulance: boolean;
  setSendAmbulance: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: Array<[]>;
  setSelectedTags: React.Dispatch<React.SetStateAction<Array<[]>>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  messageId: number;
  setMessageId: React.Dispatch<React.SetStateAction<number>>;
  repliedMessage: string;
  setRepliedMessage: React.Dispatch<React.SetStateAction<string>>;
  jobOfferId: number;
  setJobOfferId: React.Dispatch<React.SetStateAction<number>>;
};

export const MainContext = createContext({} as mainContextType);

const MainProvider = (props) => {
  const [businessName, setBusinessName] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentLocation, setCurrentLocation] = useState("در حال دریافت مکان شما");
  const [messageBoxCurrentContact, SetMessageBoxCurrentContact] = useState(0)
  const [myTicketCurrentContact, SetMyTicketCurrentContact] = useState(0)
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactJob, setContactJob] = useState('')
  const [notificationRequest, setNotificationRequest] = useState(false)
  const [username, setuserName] = useState('')
  const [requestTitle, setRequestTitle] = useState('')
  const [petBreed, setPetBreed] = useState('')
  const [userId, setUserId] = useState(0)
  const [petAge, setPetAge] = useState(1)
  const [messageId, setMessageId] = useState(0)
  const [repliedMessage, setRepliedMessage] = useState('')
  const [timeForDoctor, setTimeForDoctor] = useState(false)
  const [sendAmbulance, setSendAmbulance] = useState(false)
  const [selectedTags, setSelectedTags] = useState(Array<[]>)
  const [jobOfferId, setJobOfferId] = useState(0)
  const initialState = {
    locationData: {
      location: { lat: 0, lon: 0 },
      regionAndCity: "",
    },
  };
  const [state, dispatch] = useReducer(mainreducer, initialState);

  return (
    <MainContext.Provider value={{
      state, dispatch, businessName, setBusinessName, searchQuery, setSearchQuery, currentLocation, setCurrentLocation, messageBoxCurrentContact, SetMessageBoxCurrentContact, myTicketCurrentContact, SetMyTicketCurrentContact, isMessageSent, setIsMessageSent, contactName, setContactName, contactJob, setContactJob, notificationRequest, setNotificationRequest, username, setuserName, requestTitle, setRequestTitle,
      petAge, setPetAge, petBreed, setPetBreed, timeForDoctor, setTimeForDoctor,
      sendAmbulance, setSendAmbulance, selectedTags, setSelectedTags, userId, setUserId, messageId, setMessageId, repliedMessage, setRepliedMessage,
      jobOfferId, setJobOfferId
    }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
