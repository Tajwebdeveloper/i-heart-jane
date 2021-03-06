import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../Button";
import styles from "./Banner.module.css";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerImage = useRef(null);
  const circleRed = useRef(null);
  const circlePurple = useRef(null);
  const circleMaroon = useRef(null);
  const banner = useRef(null);
  const heartIcon = useRef(null);
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 991px)": () => {
        gsap.from(bannerImage.current, {
          scale: 0.5,
          scrollTrigger: {
            trigger: banner.current,
            scrub: true,
            start: "20% center",
            end: "30% 30%"
          },
          lazy: false
        });
    
        gsap.from(circlePurple.current, {
          translateY: 300,
          scrollTrigger: {
            trigger: banner.current,
            start: 50,
            scrub: true
          },
          lazy: false
        });
        gsap.from(circleMaroon.current, {
          translateY: 100,
          scrollTrigger: {
            trigger: banner.current,
            start: 300,
            scrub: true
          },
          lazy: false
        });
        gsap.from(circleRed.current, {
          translateY: 350,
          scrollTrigger: {
            trigger: banner.current,
            start: 150,
            scrub: true
          },
          lazy: false
        });
    
        gsap.from(heartIcon.current, {
          scale: 0,
          delay: 0.5,
          scrollTrigger: {
            trigger: heartIcon.current
          },
          lazy: false
        });
      },
      "(min-width: 992px)": () => {
        gsap.to(bannerImage.current, {
          x: -300,
          scrollTrigger: {
            trigger: bannerImage.current,
            scrub: true,
            start: "top 100px",
            pin: true
          },
          lazy: false
        });
        gsap.to(circlePurple.current, {
          y: 300,
          scrollTrigger: {
            trigger: bannerImage.current,
            scrub: true,
            start: "top 100px",
            pin: true
          },
          lazy: false
        });
        gsap.to(circleRed.current, {
          y: -500,
          scrollTrigger: {
            trigger: bannerImage.current,
            scrub: true,
            start: "top 100px",
            pin: true
          },
          lazy: false
        });
        gsap.to(circleMaroon.current, {
          scrollTrigger: {
            trigger: bannerImage.current,
            scrub: true,
            start: "top 100px",
            pin: true
          },
          lazy: false
        });
      }
    })
  }, []);

  return (
    <section ref={banner} className={styles.banner}>
      <div  className={styles.row}>
        <div className={styles.banner__content}>
          <div className={styles.heart__icon}>
            <img ref={heartIcon} src="/icons/big-logo.svg" alt="I heart Jane" />
          </div>
          <h1>
            Jane for iOS <strong>Shop &amp; discover cannabis</strong>
          </h1>
          <Button text="Get the app" link="/" desktop="desktop_secondary" />
        </div>
        <div className={styles.banner__image}>
        <video loop="true" autoplay="autoplay"  ref={bannerImage}  muted width="100%" height="100%" >
          <source src="https://cdn-cf-east.streamable.com/video/mp4/f5fqd3.mp4?Expires=1650708000&Signature=hZBBf4gm2HCft7rUj4UVRMzauQSjXPOK2QPRt4bniJMztlTs3agPyhTDzHaHOq36Dr7mqHkFbSKfDMwz8~73CwXr~lU0SxeWrLTxewTkXStCuu9k9xsxgibyModGfZkvx~fZFcJ7bg2RPFRglhRDdugRDCJmfhHxAXgkkzK7THP6wPynARBJjT0VG7og7mjstjxeODnxsdqyQaRzCmd821b8FmlnWIewbbD5TXnaqZVCoTNTiXf5uCejp0Q7ibQjKwoaTxqnhIR6eudz0Y0UWRzyydbWhCIlPj578rehx5GUG40GorS96BEshWndQ~cP~A3rt0VEyxZa-lzBIBqMNg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" type="video/mp4" /> 
        </video>
          {/* <video ref={bannerImage} loop="true" autoplay="autoplay"  muted poster="/images/iphone.png">
            <source src="/videos/banner.mp4" type="video/mp4" /> 
          </video> */}
        </div>
      </div>
      <div
        ref={circlePurple}
        className={`${styles.circle} ${styles.circle__purple}`}
      ></div>
      <div
        ref={circleMaroon}
        className={`${styles.circle} ${styles.circle__maroon}`}
      ></div>
      <div
        ref={circleRed}
        className={`${styles.circle} ${styles.circle__red}`}
      ></div>
    </section>
  );
};
export default Banner;
