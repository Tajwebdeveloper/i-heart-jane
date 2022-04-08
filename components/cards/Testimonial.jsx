import styles from "./Testimonial.module.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Testimonial = ({text, image, rating, icon, feeling, align, desktopImage, desktopSize=""}) => {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  useEffect(()=>{
    gsap.from(cardRef.current, {
      scale: 0,
      transformOrigin: align === "right" ? "top right" : "top left",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "start 90%"
      },
      lazy: false
    }).duration(0.8);
  },[cardRef])

  return (
    <div ref={cardRef} className={`${styles.card} ${styles[align]} ${styles[desktopSize]}`}>
      <div className={styles.content}>
      <picture>
        <source srcSet={`/images/${image}`} media="(max-width: 991px)" />
        <source srcSet={`/images/${desktopImage}`} />
        <img ref={imageRef} className={styles.image} src={`/images/${image}`} alt="" />
      </picture>
        <div className={styles.rating}>
          <img src="/icons/star.svg" width={16} alt="" />
          <img src="/icons/star.svg" width={16} alt="" />
          <img src="/icons/star.svg" width={16} alt="" />
          <img src="/icons/star.svg" width={16} alt="" />
          <img src="/icons/star.svg" width={16} alt="" />
          <span>{rating}</span>
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.feeling}><img src={`/icons/${icon}.svg`} alt="" /> {feeling}</div>
      </div>
   </div>
  )
};
export default Testimonial;
