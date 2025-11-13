import { useEffect, useState } from "react";
import styles from "../styles/Boss.module.css";

function Boss(props) {
  return (
    <div classname={styles.boss}>
      <div className={styles.name}>{props.name}</div>
      <div>
        <img src={props.image} alt="Boss" className={styles.image} />
      </div>
      <div className={styles.life}>Life : {props.life}</div>
      <div className={styles.damage}>Damage : {props.damage}</div>
      <button className={styles.btn}>Attack</button>
    </div>
  );
}

export default Boss;
