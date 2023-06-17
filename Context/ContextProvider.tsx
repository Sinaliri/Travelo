import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export interface IUser {
  FName: string;
  LName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAccepted: boolean;
}

export interface Itouch {
  LName?: boolean;
  FName?: boolean;
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
  isAccepted?: boolean;
}

export interface Ierror {
  LName?: string;
  FName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  isAccepted?: string;
}
export interface IUserSetting{
  FirstName: string,
  LastName: string,
  Email: string,
  Number:string,
  Career: string,
  Education: string,
  LivingIn: string,
  PersonalityType: string,
  SocialMedia: string,
  Workout: string,
  Descripition: string,
}


interface IDataContext {
  UserData: IUser,
  setUserData: Dispatch<SetStateAction<IUser>>,
  UserSetting: IUserSetting,
  setUserSetting: Dispatch<SetStateAction<IUserSetting>>,
  sidebarVisible:boolean,
  setSidebarVisible:Dispatch<SetStateAction<boolean>>

}

export const DataContext = createContext({} as IDataContext);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [UserSetting,setUserSetting]=useState<IUserSetting>({
    FirstName:"",
    LastName:"",
    Email:"",
    Number:"",
    Career:"",
    Education:"",
    LivingIn:"",
    PersonalityType:"",
    SocialMedia:"",
    Workout:"",
    Descripition:"",
  })
 
  const [UserData, setUserData] = useState<IUser>({
    FName: "",
    LName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  return (
    <DataContext.Provider value={{ UserData, setUserData ,sidebarVisible, setSidebarVisible , UserSetting ,setUserSetting}}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
