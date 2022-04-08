import Heading from "../Heading"
import EffectCard from "../cards/Effect"
import styles from "./Effects.module.css"
import Button from "../Button"
const Effects = () => {
  return (
    <section className={styles.section}>
      <div  className={styles.row}>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
      <div className={`${styles.circle} ${styles.circle4}`}></div>
      <div className={`${styles.circle} ${styles.circle5}`}></div>
      <EffectCard 
      align="right"
      icons={[
        {name: 'smilie', position: ["28px", "-16px", "auto", "auto"]},
        {name: 'pizza', position: ["auto", "auto", "56px", "-16px"]},
        {name: 'sleep', position: ["auto", "24px", "-18px", "auto"]}
      ]} 
      image="collection-1.png" desktopImage="collection-1-desktop.png"  />
      <div>
      <Heading text={<>Shop by <span>effects</span></>} type="primary" />
      <div className={styles.content}>
        <div className={styles.subheading}>Effects-based shopping is here - shop by how you want to feel to find just the right products.</div>
        <Button link="/" text="Get the app" type="primary" />
      </div>
      </div>
      <EffectCard 
       align="left"
      icons={[
        {name: 'get_active', position: ["24px", "auto", "auto", "-16px"]},
        {name: 'bulb', position: ["auto", "-16px", "40px", "auto"]},
      ]} 
      image="effects-1.png" desktopImage="effects-1-desktop.png"  />
       <EffectCard 
        align="right"
        icons={[
          {name: 'smilies', position: ["auto", "-16px", "46px", "auto"]},
          {name: 'blue_smilie', position: ["auto", "88px", "-16px", "auto"]}
        ]} 
        image="effects-2.png"
        desktopImage="effects-2-desktop.png" />
      </div>
    </section>
  )
};
export default Effects;
