import React from "react";
import styles from "./MYCOMPONENT.module.scss";

interface MYCOMPONENTProps TYPEDPROPS


const MYCOMPONENT: React.FC<MYCOMPONENTProps> = (PROPS: MYCOMPONENTProps) => {
  return <div className={styles.MYCOMPONENT}>MYCOMPONENT works!</div>;
};

export default MYCOMPONENT;
