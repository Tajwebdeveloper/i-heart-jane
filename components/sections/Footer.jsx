import Heading from "../Heading";
import styles from "./Footer.module.css"
import Button from "../Button";
const Footer = () => {
  return <footer className={styles.footer}>
    <Heading text="Jane for iOS" />
    <div><img src="/icons/big-logo.svg" width={128} alt="I heart Jane" /></div>
    <div><Button text="Download Now" link="/" type="secondary"/></div>
    <div className={styles.footerShadow}>
      <svg width="375" height="348" viewBox="0 0 375 348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="188" cy="300" r="300" fill="#FFC220"/>
        <circle cx="188" cy="300" r="240" fill="#FF9900"/>
        <circle cx="188" cy="300" r="180" fill="#FF5500"/>
        <circle cx="188" cy="300" r="120" fill="#CE349A"/>
        <circle cx="188" cy="300" r="60" fill="#8E00E6"/>
      </svg>
     </div>
  </footer>;
};
export default Footer;
