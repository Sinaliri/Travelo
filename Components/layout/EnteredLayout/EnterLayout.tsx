import Image from "next/image";
import styles from "./EnterLayout.module.scss";
import { ReactNode } from "react";

interface EnterLayoutProps {
  imgsrc: string;
  children: ReactNode;
}

const EnterLayout = ({ imgsrc, children }: EnterLayoutProps) => {
  return (
    <div className={`grid ${styles.container}`}>
      <div className={`${styles.left} col-12 lg:col-6 flex justify-content-center align-items-center`}>
        <Image className={`${styles.imagepart}`} src={imgsrc} alt="" />
      </div>
      <div className={`${styles.right} col-12 lg:col-6 flex justify-content-center align-items-center`}>
        {children}
      </div>
    </div>
  );
};

export default EnterLayout;
