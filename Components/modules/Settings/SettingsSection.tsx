import Image from "next/image";
import styles from "./SettingsSection.module.scss";

import Notif from "../Notif/Notif";
import Input from "../Input/Input";
import { ChangeEvent, FormEvent, ServerContextJSONValue, useContext, useState } from "react";
import { DataContext, IUserSetting } from "@/Context/ContextProvider";
import { ChangeProfile } from "@/Context/Services/Functions/Api";
interface IUserSetting {
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
    setUserSetting({ ...UserSetting, [name]: value });
    console.log(UserSetting)
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const changedData = {};
    Object.keys(UserSetting).forEach(key => {
      if (UserSetting[key]?.length > 0) {
        changedData[key] = UserSetting[key];
      }
    });
    console.log(changedData)
    ChangeProfile(changedData);
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
          <Input label="First name" type="text" name="first_name" value={UserSetting.first_name} onChange={handler} />
          <Input label="Last name" type="text" name="last_name" value={UserSetting.last_name} onChange={handler} />
          <Input label="Email address" type="text" name="email" value={UserSetting.email} onChange={handler} />
          <Input label="Number" type="text" name="phone_number" value={UserSetting.phone_number} onChange={handler} />
          <Input label="Career" type="text" name="career" value={UserSetting.career} onChange={handler} />
          <Input label="Education" type="text" name="education" value={UserSetting.education} onChange={handler} />
          <Input label="Living in" type="text" name="living_in" value={UserSetting.living_in} onChange={handler} />
          <Input label="Personality Type" type="text" name="personality_type" value={UserSetting.personality_type} onChange={handler} />
          

          <div className="grid-nogutter flex-column w- col-12 xl:col-6">
          <Input label="Social Media" width="12" type="text" name="telegram" value={UserSetting.telegram} onChange={handler} />
          <Input label="Workout" width="12" type="text" name="workout" value={UserSetting.workout} onChange={handler} />
          </div>
          <Input label="Descripition" width="6" height="140px" type="text" name="description" value={UserSetting.description} onChange={handler} />
          <div className={`${styles.buttonContainer} flex justify-content-end align-items-center w-full`}>
            <button className={`${styles.submit}`} type="submit" onClick={submitHandler}>Update</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default SettingsSection;
