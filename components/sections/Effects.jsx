import Heading from "../Heading"
import EffectCard from "../cards/Effect"
import styles from "./Effects.module.css"
const Effects = () => {
  return (
    <section className={styles.section}>
      <EffectCard 
      align="right"
      icons={[
        {name: 'smilie', position: ["28px", "-16px", "auto", "auto"]},
        {name: 'pizza', position: ["auto", "auto", "56px", "-16px"]},
        {name: 'sleep', position: ["auto", "24px", "-18px", "auto"]}
      ]} 
      image="collection-1.png" />
      <Heading text={<>Shop by <span>effects</span></>} type="primary" />
      <EffectCard 
       align="left"
      icons={[
        {name: 'get_active', position: ["24px", "auto", "auto", "-16px"]},
        {name: 'bulb', position: ["auto", "-16px", "40px", "auto"]},
      ]} 
      image="effects-1.png" />
       <EffectCard 
        align="right"
      icons={[
        {name: 'smilies', position: ["auto", "-16px", "46px", "auto"]},
        {name: 'blue_smilie', position: ["auto", "88px", "-16px", "auto"]}
      ]} 
      image="effects-2.png" />
    </section>
  )
};
export default Effects;
