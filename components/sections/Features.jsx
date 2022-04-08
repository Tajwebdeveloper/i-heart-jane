import IconCard from "../cards/Icon";
import styles from "./Features.module.css";
const Features = () => {
  return (
    <section className={styles.features}>
      <IconCard text="Cannabis made easy &amp; personal" icon="bag" color="#FF5500" />
      <IconCard text="Pickup &amp; delivery near you" icon="location" color="#CE349A" />
      <IconCard text="Save money with exclusive deals" icon="money" color="#8E00E5" />
    </section>
  );
};
export default Features;
