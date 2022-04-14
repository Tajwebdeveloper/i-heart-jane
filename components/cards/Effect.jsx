import styles from "./Effect.module.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Effect = ({icons, image, align, desktopImage}) => {
  const iconsRef = useRef([]);
  const imageRef = useRef()
  useEffect(() => {
    gsap.from(iconsRef.current, {
      scale: 0,
      delay: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: iconsRef.current
      },
      lazy: false
    }).duration(0.5);

    gsap.from(imageRef.current, {
      scale: 0, 
      delay: 0.7,
      scrollTrigger: {
        trigger: imageRef.current
      },
      lazy: false
    });
 }, []);

  return <div className={`${styles.card} ${styles[align]}`}>
    <picture>
        <source srcSet={`/images/${image}`} media="(max-width: 991px)" />
        <source srcSet={`/images/${desktopImage}`} />
        <img ref={imageRef} src={`/images/${image}`} alt="" />
      </picture>
    {icons.map((icon, i) => <div className={`${styles.icon} ${styles[icon.dektopIcon]}`} style={{top: icon.position[0], right: icon.position[1], bottom: icon.position[2],left: icon.position[3] }} ref={el => iconsRef.current[i] = el} key={icon.name}><img src={`/icons/${icon.name}.svg`} alt="" /></div>)}
  </div>
};
export default Effect;
