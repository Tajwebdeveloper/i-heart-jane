import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Icon.module.css";
gsap.registerPlugin(ScrollTrigger);

const Icon = ({ icon, text, color }) => {
  const card = useRef(null);
  useEffect(() => {
    
  gsap.from(card.current, {
      scale: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: card.current
      },
      lazy: false
    }).duration(0.5);

  },[]);


  return (
    <div ref={card} className={styles.card}>
      <div className={styles.icon}>
        <img src={`/icons/${icon}.svg`} alt="" />
      </div>
      <div className={styles.text} style={{color: color}}>{text}</div>
    </div>
  );
};
export default Icon;
