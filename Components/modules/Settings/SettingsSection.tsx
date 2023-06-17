import Image from "next/image";
import styles from "./SettingsSection.module.scss";

import Notif from "../Notif/Notif";
import Input from "../Input/Input";
import { ChangeEvent, ServerContextJSONValue, useContext, useState } from "react";
import { DataContext, IUserSetting } from "@/Context/ContextProvider";

const SettingsSection = () => {
  // const {UserSetting ,setUserSetting}=useContext(DataContext);
  const [UserSetting,setUserSetting]=useState({
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
  const handler = (name: string, value: string) => {
    setUserSetting({ ...UserSetting, [name]: value });
    console.log(UserSetting)
  };
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
          <Input label="First name" type="text" name="FirstName" value={UserSetting.FirstName} onChange={handler} />
          <Input label="Last name" type="text" name="LastName" value={UserSetting.LastName} onChange={handler} />
          <Input label="Email address" type="text" name="Email" value={UserSetting.Email} onChange={handler} />
          <Input label="Number" type="text" name="Number" value={UserSetting.Number} onChange={handler} />
          <Input label="Career" type="text" name="Career" value={UserSetting.Career} onChange={handler} />
          <Input label="Education" type="text" name="Education" value={UserSetting.Education} onChange={handler} />
          <Input label="Living in" type="text" name="LivingIn" value={UserSetting.LivingIn} onChange={handler} />
          <Input label="Personality Type" type="text" name="PersonalityType" value={UserSetting.PersonalityType} onChange={handler} />
          

          <div className="grid-nogutter flex-column w- col-12 xl:col-6">
          <Input label="Social Media" width="12" type="text" name="SocialMedia" value={UserSetting.SocialMedia} onChange={handler} />
          <Input label="Workout" width="12" type="text" name="Workout" value={UserSetting.Workout} onChange={handler} />
          </div>
          <Input label="Descripition" width="6" height="140px" type="text" name="Descripition" value={UserSetting.Descripition} onChange={handler} />
          <div className={`${styles.buttonContainer} flex justify-content-end align-items-center w-full`}>
            <button className={`${styles.submit}`} type="submit" onClick={(event)=>{event?.preventDefault();console.log(UserSetting)}}>Update</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default SettingsSection;
