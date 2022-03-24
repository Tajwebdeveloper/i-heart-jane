import styles from "./Location.module.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Location = ({image, icon, title, content, rating}) => {
  const cardRef = useRef(null)
  const containerRef = useRef(null)
  const iconRef = useRef(null)
  useEffect(() => {
    gsap
      .from(iconRef.current, {
        scale:0,
        scrollTrigger: {
          trigger: iconRef.current,
          lazy: false,
        }
      });
 }, []);
  return (
    <div className={styles.container} ref={containerRef}>
      <div >
        {/* <div ref={cardRef} className={styles.card} >
          <img className={styles.image} src={`/images/${image}`} alt="" />
          <div className={styles.card_content}>
            <div>{title}</div>
            <div>{rating}</div>
            <div>{content}</div>
          </div>
        </div> */}
        <div ref={iconRef} className={styles.card} ><img src={`/icons/${icon}.svg`} alt="" /></div>
      </div>
      <div className={styles.location}><img src="/icons/pin.svg" alt="" /></div>
    </div>
  )
};
export default Location;
