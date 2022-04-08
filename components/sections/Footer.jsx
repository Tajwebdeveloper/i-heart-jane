import { useRef, useEffect } from "react";
import Heading from "../Heading";
import styles from "./Footer.module.css"
import Button from "../Button";
import Lottie from 'react-lottie';
import animationData from '../lotties/footer';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const iconRef = useRef(null)
  const buttonRef = useRef(null)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  useEffect(()=>{
    gsap.from(iconRef.current, {
      scale: 0,
      scrollTrigger: {
        trigger: iconRef.current
      },
      lazy: false
    });
    gsap.from(buttonRef.current, {
      scale: 0,
      y: -50,
      scrollTrigger: {
        trigger: buttonRef.current
      },
      lazy: false
    });
  },[])
  return <footer className={styles.footer}>
    <Heading text="Jane for iOS" />
    <div><img src="/icons/big-logo.svg" ref={iconRef} width={128} alt="I heart Jane" /></div>
    <div ref={buttonRef}><Button text="Download Now" link="/"/></div>
    
    <div className={styles.footerShadow}>
    <Lottie 
	    options={defaultOptions}
        height="100%"
        width="100%"
        className={styles.lottie}
      />

     </div>
  </footer>;
};
export default Footer;
