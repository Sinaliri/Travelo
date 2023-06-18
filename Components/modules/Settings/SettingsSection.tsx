import Image from "next/image";
import styles from "./SettingsSection.module.scss";

import Notif from "../Notif/Notif";
import Input from "../Input/Input";
import { ChangeEvent, FormEvent, ServerContextJSONValue, useContext, useEffect, useState } from "react";
import { DataContext, IUserSetting } from "@/Context/ContextProvider";
import { ChangeProfile, Userprofile_get } from "@/Context/Services/Functions/Api";
export interface IUserSetting {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  personality_type?: string;
  workout?: string;
  career?: string;
  education?: string;
  description?: string;
  living_in:string,
  telegram:string,
}
const SettingsSection = () => {
  const [userDetail,setUserDetail]=useState({})
  useEffect(()=>{
    Userprofile_get().then((res)=>{
      setUserDetail(res.data)
    })
    
    
  },[]);
  console.log(userDetail)

  // const {UserSetting ,setUserSetting}=useContext(DataContext);
  const [UserSetting,setUserSetting]=useState<IUserSetting>({
    first_name:"",
    last_name:"",
    email:"",
    phone_number:"",
    career:"",
    education:"",
    living_in:"",
    personality_type:"",
    telegram:"",
    workout:"",
    description:"",
  })
  const handler = (name: string, value: string) => {
    setUserDetail({ ...userDetail, [name]: value });
    console.log(userDetail)
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ChangeProfile(userDetail);
  }
  // console.log(UserSetting)
  return (
    <div>
      <div
        className={`${styles.SettingSectionHeader} flex justify-content-between align-items-center`}
      >
        <h2>Settings</h2>
        <Notif />
      </div>
      <div className={`${styles.settingInputs} grid`}>

        <form className={`grid`}>
          <Input label="First name" type="text" name="first_name" value={userDetail.first_name} onChange={handler} />
          <Input label="Last name" type="text" name="last_name" value={userDetail.last_name} onChange={handler} />
          <Input label="Email address" type="text" name="email" value={userDetail.email} onChange={handler} />
          <Input label="Number" type="text" name="phone_number" value={userDetail.phone_number} onChange={handler} />
          <Input label="Career" type="text" name="career" value={userDetail.career} onChange={handler} />
          <Input label="Education" type="text" name="education" value={userDetail.education} onChange={handler} />
          <Input label="Living in" type="text" name="living_in" value={userDetail.living_in} onChange={handler} />
          <Input label="Personality Type" type="text" name="personality_type" value={userDetail.personality_type} onChange={handler} />
          

          <div className="grid-nogutter flex-column w- col-12 xl:col-6">
          <Input label="Social Media" width="12" type="text" name="telegram" value={userDetail.telegram} onChange={handler} />
          <Input label="Workout" width="12" type="text" name="workout" value={userDetail.workout} onChange={handler} />
          </div>
          <Input label="Descripition" width="6" height="140px" type="text" name="description" value={userDetail.description} onChange={handler} />
          <div className={`${styles.buttonContainer} flex justify-content-end align-items-center w-full`}>
            <button className={`${styles.submit}`} type="submit" onClick={submitHandler}>Update</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default SettingsSection;
