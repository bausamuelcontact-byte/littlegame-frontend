import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Player from "./Player.js";
import Boss from "./Boss.js";

function Home() {
  const [boss, setBoss] = useState([]);
  const [player, setPlayer] = useState([]);

  async function displayPlayer() {
    const listPlayer = [];
    for (let i = 0; i < 3; i++) {
      const response = await fetch("http://localhost:3000/players");
      const data = await response.json();
      listPlayer.push(data);
      console.log(data);
    }
    setPlayer(listPlayer);
  }

  useEffect(() => {
    fetch("https://littlegame-backend.vercel.app")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBoss([...boss, data.all[0]]);
      });
    displayPlayer();
  }, []);
  console.log("boss", boss);

  const bosses = boss.map((data, i) => {
    return (
      <Boss
        key={i}
        name={data.name}
        image={data.image}
        life={data.life}
        damage={data.damage}
      />
    );
  });

  function attackVsBoss(damage) {
    setBoss((prevBoss) =>
      prevBoss.map((b, index) =>
        index === 0 ? { ...b, life: Math.max(b.life - damage, 0) } : b
      )
    );
  }

  const players = player.map((data, i) => {
    return (
      <Player
        key={i}
        name={data.all[i].name}
        image={data.all[i].image}
        life={data.all[i].life}
        damage={data.all[i].damage}
        attackVsBoss={attackVsBoss}
      />
    );
  });

  return (
    <div className={styles.main}>
      <div className={styles.boss}>{bosses}</div>
      <div className={styles.player}>{players}</div>
    </div>
  );
}

export default Home;
