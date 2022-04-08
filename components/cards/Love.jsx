import { useEffect, useRef } from "react";
import Button from "../Button";
import styles from "./Love.module.css"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Love = ({image, text, link, linkText, imageDesktop}) => {
  const cardRef = useRef(null)
  useEffect(()=> {
    gsap.from(cardRef.current, {
      scale: 0.1,
      scrollTrigger: {
        trigger: cardRef.current
      },
      lazy: false
    });
  },[])
  return <div className={styles.card} ref={cardRef}>
      <picture>
        <source srcSet={`/images/${image}`} media="(max-width: 991px)" />
        <source srcSet={`/images/${imageDesktop}`} />
        <img className={styles.image} src={`/images/${image}`} alt="" />
      </picture>
      
     <div className={styles.content}>
     <div className={styles.text}>{text}</div>
      <div  className={styles.cta}>
      <Button link={link} text={linkText} type="secondary" />
      </div>
     </div>
      
  </div>
};
export default Love;
