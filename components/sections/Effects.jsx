import Heading from "../Heading"
import EffectCard from "../cards/Effect"
import styles from "./Effects.module.css"
import Button from "../Button"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Effects = () => {
  const circle1Ref = useRef(null)
  const circle2Ref = useRef(null)
  const circle3Ref = useRef(null)
  const circle4Ref = useRef(null)
  const circle5Ref = useRef(null)

  useEffect(()=> {
    gsap.to(circle1Ref.current, {
      y: -100,
      x: -50,
      scrollTrigger: {
        trigger: circle1Ref.current,
        scrub: true
      },
      lazy: false
    });
    gsap.to(circle2Ref.current, {
      y: -200,
      scrollTrigger: {
        trigger: circle1Ref.current,
        scrub: true
      },
      lazy: false
    });
    gsap.to(circle3Ref.current, {
      y: -150,
      scrollTrigger: {
        trigger: circle1Ref.current,
        scrub: true
      },
      lazy: false
    });
    gsap.to(circle4Ref.current, {
      y: -220,
      scrollTrigger: {
        trigger: circle1Ref.current,
        scrub: true
      },
      lazy: false
    });
    gsap.to(circle5Ref.current, {
      y: -120,
      scrollTrigger: {
        trigger: circle1Ref.current,
        scrub: true
      },
      lazy: false
    });
  })
  return (
    <section className={styles.section}>
      <div className={styles.row}>
      <div ref={circle1Ref} className={`${styles.circle} ${styles.circle1}`}></div>
      <div ref={circle2Ref} className={`${styles.circle} ${styles.circle2}`}></div>
      <div ref={circle3Ref} className={`${styles.circle} ${styles.circle3}`}></div>
      <div ref={circle4Ref} className={`${styles.circle} ${styles.circle4}`}></div>
      <div ref={circle5Ref} className={`${styles.circle} ${styles.circle5}`}></div>
      <EffectCard 
      align="right"
      icons={[
        {name: 'smilie', position: ["28px", "-16px", "auto", "auto"], dektopIcon: "first"},
        {name: 'pizza', position: ["auto", "auto", "56px", "-16px"], dektopIcon: "second"},
        {name: 'sleep', position: ["auto", "24px", "-18px", "auto"], dektopIcon: "third"}
      ]} 
      image="collection-1.png" desktopImage="collection-1-desktop.png"  />
      <div style={{position: "relative"}}>
      <Heading text={<>Shop by <span>effects</span></>} type="primary" />
      <div className={styles.content}>
        <div className={styles.subheading}>Effects-based shopping is here - shop by how you want to feel to find just the right products.</div>
        <Button link="/" text="Get the app" type="primary" />
      </div>
      </div>
      <EffectCard 
        align="left"
        icons={[
          {name: 'get_active', position: ["24px", "auto", "auto", "-16px"], dektopIcon: "fourth"},
          {name: 'bulb', position: ["auto", "-16px", "40px", "auto"], dektopIcon: "fifth"},
        ]} 
        image="effects-1.png" desktopImage="effects-1-desktop.png"  />
       <EffectCard 
        align="right"
        icons={[
          {name: 'smilies', position: ["auto", "-16px", "46px", "auto"], dektopIcon: "sixth"},
          {name: 'blue_smilie', position: ["auto", "88px", "-16px", "auto"], dektopIcon: "seventh"}
        ]} 
        image="effects-2.png"
        desktopImage="effects-2-desktop.png" />
      </div>
    </section>
  )
};
export default Effects;
