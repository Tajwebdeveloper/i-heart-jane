import styles from "./Effect.module.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Effect = ({icons, image, align}) => {
  const iconsRef = useRef([]);
  const imageRef = useRef()
  useEffect(() => {
    gsap.from(iconsRef.current, {
      scale: 0,
      delay: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: iconsRef.current
      }
    }).duration(0.5);

    gsap.from(imageRef.current, {
      scale: 0,
      opacity: 0, 
      scrollTrigger: {
        trigger: imageRef.current
      }
    });
 }, []);

  return <div className={`${styles.card} ${styles[align]}`}>
    <img ref={imageRef} src={`/images/${image}`} alt="" />
    {icons.map((icon, i) => <div className={styles.icon} style={{top: icon.position[0], right: icon.position[1], bottom: icon.position[2],left: icon.position[3], }} ref={el => iconsRef.current[i] = el} key={icon.name}><img src={`/icons/${icon.name}.svg`} alt="" /></div>)}
  </div>
};
export default Effect;
