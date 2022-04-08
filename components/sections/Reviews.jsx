import Heading from "../Heading";
import Testimonial from "../cards/Testimonial";
import styles from "./Reviews.module.css"

const Reviews = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <Heading text={<><span>Community</span> verified reviews</>} type="primary" />
      <p className={styles.subheading}>Reviews from Jane customers help you feel good to fill your bag.</p>
      <Testimonial 
        text="Completely out of my frame.  Great jurnts, will get again!"
        image="review-1.png"
        desktopImage="review-1-desktop.png"
        rating="5.0"
        icon="energy"
        feeling="Energetic"
        align="left"
        desktopSize="small"
      />
      <Testimonial 
        text="Completely out of my frame.  Great jurnts, will get again!"
        image="review-2.png"
        desktopImage="review-2-desktop.png"
        rating="5.0"
        icon="pizza_slice"
        feeling="Hungry"
        align="right"
      />
      <Testimonial 
        text="Completely out of my frame.  Great jurnts, will get again!"
        image="review-3.png"
        desktopImage="review-3-desktop.png"
        rating="5.0"
        icon="pizza_slice"
        feeling="Hungry"
        align="left"
      />
      <div className={styles.image}>
        <img src="/images/review-phone.png" alt="" />
      </div>
      </div>

    </section>
  )
};
export default Reviews;
