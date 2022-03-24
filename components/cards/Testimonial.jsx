import styles from "./Testimonial.module.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Testimonial = ({text, image, rating, icon, feeling, align}) => {
  useEffect(()=>{
    
  },[])
  return (
    <div className={`${styles.card} ${styles[align]}`}>
      <div className={styles.content}>
      <img className={styles.image} src={`/images/${image}`} alt="" />
        <div className={styles.rating}>{rating}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.feeling}>{icon} {feeling}</div>
      </div>
   </div>
  )
};
export default Testimonial;
