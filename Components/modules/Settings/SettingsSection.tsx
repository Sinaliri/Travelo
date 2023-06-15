import Image from "next/image";
import styles from "./SettingsSection.module.scss";

import Notif from "../Notif/Notif";
import Input from "../Input/Input";

const SettingsSection = () => {
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
          <Input label="First name" />
          <Input label="Last name" />
          <Input label="Email address" />
          <Input label="Number" />
          <Input label="Career" />
          <Input label="Education" />
          <Input label="Living in" />
          <Input label="Personality Type" />
          {/* <div className=""> */}

          <div className="grid-nogutter flex-column w- col-12 xl:col-6">
          <Input label="Living in" width="12"/>
          <Input label="Personality Type" width="12"/>
          </div>
          <Input label="Decription" width="6" height="140px" />
          {/* </div> */}
          <div className={`${styles.buttonContainer} flex justify-content-end align-items-center w-full`}>
            {/* button */}
            <button className={`${styles.submit}`} type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsSection;
