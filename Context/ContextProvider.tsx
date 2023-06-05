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
  UserData: IUser;
  setUserData: Dispatch<SetStateAction<IUser>>;
}

export const DataContext = createContext<IDataContext | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [UserData, setUserData] = useState<IUser>({
    FName: "",
    LName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  return (
    <DataContext.Provider value={{ UserData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
