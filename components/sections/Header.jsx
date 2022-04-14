import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Link from "next/link";
import Button from "../Button";
import styles from "./Header.module.css";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const headerButton = useRef(null);
  const innerHeaderButton = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 991px)" : () =>{
        gsap
        .to(headerButton.current, {
          scrollTrigger: {
            trigger: headerButton.current,
            start: 150,
            lazy: false,
            onEnter: () => {
              header.current?.classList.add("has__shadow");
              gsap.to(headerButton.current, {
                opacity: 1
              });
            },
            onEnterBack: () => {
              header.current?.classList.remove("has__shadow");
              gsap.to(headerButton.current, {
                opacity: 0
              });
            }
          }
        })
        .duration(0);
      }
    })

    ScrollTrigger.matchMedia({
      "(min-width: 992px)" : () =>{
        
        gsap
        .from(headerButton.current, {
          scrollTrigger: {
            trigger: headerButton.current,
            lazy: false,
            start: "100px 100px",
            end: "100px 100px",
            onEnter: () => {
              header.current?.classList.add("has__shadow");
            },
            onEnterBack: () => {
              header.current?.classList.remove("has__shadow");
            }
          }
        })
        .duration(0);
      }
    })
  }, []);
  return (
    <header ref={header} className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__left}>
          <Link href="/">
            <a  className={styles.logo}>
              <img src="/icons/logo.svg" alt="I heart Jane" />
              <span className={styles.logoText}>Jane</span>
            </a>
          </Link>
        </div>
        <div ref={headerButton} className={styles.nav__right}>
          <div ref={innerHeaderButton}>
          <Button  text="Get the app" link="/" />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
