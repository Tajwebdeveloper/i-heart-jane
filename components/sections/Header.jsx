import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Link from "next/link";
import Button from "../Button";
import styles from "./Header.module.css";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const headerButton = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    gsap
      .to(headerButton.current, {
        scrollTrigger: {
          trigger: headerButton.current,
          start: 150,

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
  }, []);
  return (
    <header ref={header} className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__left}>
          <Link href="/">
            <a>
              <img src="/icons/logo.svg" alt="I heart Jane" />
            </a>
          </Link>
        </div>
        <div ref={headerButton} className={styles.nav__right}>
          <Button text="Get the app" link="/" />
        </div>
      </nav>
    </header>
  );
};
export default Header;
