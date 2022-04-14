import styles from "./Location.module.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Location = ({image, icon, title, content, rating, align="left", position}) => {
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
          lazy: false
        }
      });

      gsap
      .to(cardRef.current, {
        scale:1,
        opacity:1,
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: iconRef.current,
          lazy: false
        }
      });
 }, [iconRef]);
  return (
    <div className={`${styles.container} ${styles[align]} ${styles[position]}`} ref={containerRef}>
      <div>
        {image ? <div ref={cardRef} className={`${styles.card}`}>
          <img className={styles.image} src={`/images/${image}`} alt="" />
          <div className={styles.card_content}>
            <div className={styles.card_title}>{title}</div>
            <div className={styles.card_rating}><img src="/icons/star.svg" alt="" /><img src="/icons/star.svg" alt="" /><img src="/icons/star.svg" alt="" /><img src="/icons/star.svg" alt="" /><img src="/icons/star.svg" alt="" />{rating}</div>
            <div className={styles.card_text}>{content}</div>
          </div>
        </div> :  <div ref={iconRef} className={styles.icon}><img src={`/icons/${icon}.svg`} alt="" /></div>}
        
      </div>
      <div className={styles.location}><img src="/icons/pin.svg" alt="" /></div>
    </div>
  )
};
export default Location;
