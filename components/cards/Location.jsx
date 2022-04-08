import styles from "./Location.module.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Location = ({image, icon, title, content, rating, align="left"}) => {
  const cardRef = useRef(null)
  const containerRef = useRef(null)
  const iconRef = useRef(null)
  useEffect(() => {
    gsap
      .to(iconRef.current, {
        scale:1,
        opacity:1,
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: iconRef.current,
          lazy: false,
          start: "start 90%",
          end: "end 80%",
          toggleActions: "play reverse play reverse"
        }
      });

      gsap
      .to(cardRef.current, {
        scale:1,
        opacity:1,
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: iconRef.current,
          lazy: false,
          start: "end 80%",
          end: "end 65%",
          toggleActions: "play none play reverse"
        }
      });
 }, [iconRef]);
  return (
    <div className={`${styles.container} ${styles[align]}`} ref={containerRef}>
      <div>
        <div ref={cardRef} className={`${styles.card}`}>
          <img className={styles.image} src={`/images/${image}`} alt="" />
          <div className={styles.card_content}>
            <div>{title}</div>
            <div>{rating}</div>
            <div>{content}</div>
          </div>
        </div>
        <div ref={iconRef} className={styles.icon}><img src={`/icons/${icon}.svg`} alt="" /></div>
      </div>
      <div className={styles.location}><img src="/icons/pin.svg" alt="" /></div>
    </div>
  )
};
export default Location;
