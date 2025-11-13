import { useEffect, useState } from "react";
import styles from "../styles/Player.module.css";

function Player(props) {
  return (
    <div className={styles.player}>
      <div className={styles.name}>{props.name}</div>
      <div>
        <img src={props.image} alt="player" className={styles.image} />
      </div>
      <div className={styles.life}>Life : {props.life}</div>
      <div className={styles.damage}>Damage : {props.damage}</div>
      <button
        className={styles.btn}
        onClick={() => {
          props.attackVsBoss(props.damage);
        }}
      >
        Attack
      </button>
    </div>
  );
}

export default Player;
