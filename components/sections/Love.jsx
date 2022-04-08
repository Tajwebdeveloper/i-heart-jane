import LoveCard from "../cards/Love";
import Heading from "../Heading";
import styles from "./Love.module.css"
const Love = () => {
  return <section className={styles.section}>
    <div className={styles.circle}></div>
    <Heading text={<>Spread the <span>Love</span></>} type="primary" />
    <div className={styles.cardRow}>
    <LoveCard 
      image="love-image-1.png" 
      imageDesktop="love-image-1-desktop.png" 
      text={<>Order cannabis on the app and save lives with <span>Last Prisoner Project</span></>}
      link="/"
      linkText="Order now" />
    <LoveCard 
      image="love-image-2.png" 
      imageDesktop="love-image-2-desktop.png" 
      text={<>Get a <span>free bag</span> when you refer a friend</>}
      link="/"
      linkText="Refer a friend" />
    </div>
  </section>
};
export default Love;
