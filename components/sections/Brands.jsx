import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from "../Heading"
import styles from "./Brands.module.css"
import MovingText from "../MovingText";
gsap.registerPlugin(ScrollTrigger);

const Brands = () => {

  
  return <section className={styles.section}>
         <div className={styles.moveTextTop}>
            <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} reverse={true} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} reverse={true} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} reverse={true} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} reverse={true} />
              <MovingText list={[
                {text: "Kiva", color: "#FF5500"},
                {text: "Level", color: "#CE349A"},
                {text: "Papa & Barkley", color: "#FF5500"},
                {text: "Old Pal", color: "#CE349A"},
                {text: "Wunder", color: "#FF9900"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#CE349A"},
                {text: "Besito", color: "#FF9900"},
                {text: "Besito", color: "#8E00E5"},
                {text: "Besito", color: "#8E00E6"},
                {text: "Besito", color: "#FF5500"},
                {text: "Besito", color: "#8E00E6"},
                {text: "1906", color: "#CE349A"}
              ]} />
         </div>
          <div className={styles.grid}>
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide >
                <img src="/images/brand-slide.png" alt="" />
              </SwiperSlide>
              <SwiperSlide >
              <img src="/images/brand-slide.png" alt="" />
              </SwiperSlide>
              <SwiperSlide >
              <img src="/images/brand-slide.png" alt="" />
              </SwiperSlide>
            </Swiper>
            <div><Heading text="Shop brands" type="white"  desktopAlign="left" />
            <div className={styles.subheading}>Brand-first shopping. Favorite the brands you love most to personalize your shopping and be the first to know about the latest drops and exclusive offers.</div></div>
          </div>
          <div className={styles.bottomText}>
            <MovingText list={[
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"}
            ]} reverse={true} />
            <MovingText list={[
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"}
            ]} />
            <MovingText list={[
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"}
            ]} reverse={true} />

            <MovingText list={[
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"}
            ]}  />
            <MovingText list={[
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"}
            ]} reverse={true} />
            <MovingText list={[
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"}
            ]}/>
            <MovingText list={[
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"},
              {text: "Besito", color: "#8E00E6"}
            ]}  reverse={true} />
            <MovingText list={[
              {text: "Kiva", color: "#FF5500"},
              {text: "Level", color: "#CE349A"},
              {text: "Papa & Barkley", color: "#FF5500"},
              {text: "Old Pal", color: "#CE349A"},
              {text: "Wunder", color: "#FF9900"},
              {text: "1906", color: "#8E00E5"}
            ]} />
          </div>
  </section>
};
export default Brands;
