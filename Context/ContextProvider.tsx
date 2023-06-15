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

interface IDataContext {
  UserData: IUser,
  setUserData: Dispatch<SetStateAction<IUser>>,
  sidebarVisible:boolean,
  setSidebarVisible:Dispatch<SetStateAction<boolean>>

}

export const DataContext = createContext<IDataContext | any >(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const [UserData, setUserData] = useState<IUser>({
    FName: "",
    LName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  return (
    <DataContext.Provider value={{ UserData, setUserData ,sidebarVisible, setSidebarVisible}}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
