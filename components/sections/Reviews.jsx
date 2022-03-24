import Heading from "../Heading";
import Testimonial from "../cards/Testimonial";
import styles from "./Reviews.module.css"
const Reviews = () => {
  return (
    <section className={styles.section}>
      <Heading text={<><span>Community</span> verified reviews</>} type="primary" />
      <p className={styles.subheading}>Reviews from Jane customers help you feel good to fill your bag.</p>
      <Testimonial 
        text="Completely out of my frame.  Great jurnts, will get again!"
        image="review-1.png"
        rating="5.0"
        icon="energize"
        feeling="Energetic"
        align="left"
      />
      <Testimonial 
        text="Completely out of my frame.  Great jurnts, will get again!"
        image="review-1.png"
        rating="5.0"
        icon="energize"
        feeling="Energetic"
        align="right"
      />
      <Testimonial 
        text="Completely out of my frame.  Great jurnts, will get again!"
        image="review-1.png"
        rating="5.0"
        icon="energize"
        feeling="Energetic"
        align="left"
      />

    </section>
  )
};
export default Reviews;
