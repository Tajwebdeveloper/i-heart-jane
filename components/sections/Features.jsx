import IconCard from "../cards/Icon";
import styles from "./Features.module.css";
const Features = () => {
  return (
    <section className={styles.features}>
      <IconCard text="Cannabis made easy &amp; personal" icon="bag" />
      <IconCard text="Pickup &amp; delivery near you" icon="location" />
      <IconCard text="Save money" icon="money" />
    </section>
  );
};
export default Features;
