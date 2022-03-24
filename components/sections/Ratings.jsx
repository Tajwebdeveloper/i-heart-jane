import Heading from "../Heading";
import styles from "./Ratings.module.css"
import Location from "../cards/Location"
import Button from "../Button"
const Ratings = () => {
  return (
    <section className={styles.section}>
      <Heading text={<>Shop live menus, <span>your way</span></>} type="primary" />
      <p className={styles.subheading}>Compare nearby prices, ratings, &amp; availability</p>
      <div>
        <Location icon="heart" image="rating-1.png" title="Harborside" content="No fees, 1 hour delivery" rating={4.9} />
        <Location icon="tag" image="rating-1.png" title="Harborside" content="No fees, 1 hour delivery" rating={4.9} />
        <Location icon="marijuana" image="rating-1.png" title="Harborside" content="No fees, 1 hour delivery" rating={4.9} />
        <Location icon="star" image="rating-1.png" title="Harborside" content="No fees, 1 hour delivery" rating={4.9} />
        
      </div>
      <div className={styles.cta}><Button text="Browse menus nearby" link="/" type="secondary"/></div>
    </section>
  )
}
export default Ratings;
