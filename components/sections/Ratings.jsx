import Heading from "../Heading";
import styles from "./Ratings.module.css"
import Location from "../cards/Location"
import Button from "../Button"
const Ratings = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <Heading text={<>Shop live menus, <span>your way</span></>} type="primary" />
      <p className={styles.subheading}>Compare nearby prices, ratings, &amp; availability</p>
      <div className={styles.ctaDesktop}><Button text="Browse menus nearby" link="/" type="primary"/></div>
      <div className={styles.card_container}>
        <Location icon="heart" position="first" />
        <Location icon="tag" align="right" position="second"  />
        <Location icon="marijuana" image="rating-1.png" title="Harborside" content="No fees, 1 hour delivery" rating={4.9} position="third"  />
        <Location icon="star" align="right" position="fourth" />
        <Location icon="star" align="right" position="fifth"/>
        <Location icon="star" align="right" position="sixth"/>
        <Location icon="star" align="right" position="seventh"/>
        <Location icon="star" align="right" position="eighth"/>
        
      </div>
      <div className={styles.cta}><Button text="Browse menus nearby" link="/" type="secondary"/></div>
      </div>
    </section>
  )
}
export default Ratings;
