import Heading from "../Heading"
import styles from "./Collection.module.css"
import Product from "../cards/Product";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../Button"

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const content1 = useRef(null)
  const content2 = useRef(null)
  const content3 = useRef(null)
  const [activeTab, setActiveTab] = useState(content1.current)
  const setTab = (tabNumber, color) => {
    if(activeTab === tabNumber){
      return;
    }
    gsap.to(content1.current, {
      autoAlpha: 0, display:'none', position: 'absolute'
    });
    gsap.to(content3.current, {
      autoAlpha: 0, display:'none', position: 'absolute'
    });
    gsap.to(content2.current, {
      autoAlpha: 0, display:'none', position: 'absolute'
    });
    gsap.to(tabNumber, {
      autoAlpha: 1, 
      display:'flex',
      position: "static"
    });
    setActiveTab(tabNumber)
  }
  useEffect(()=>{
    setTab(content1.current, "yellow")
  },[])

  return (
    <section className={styles.collection}>
    <Heading text={<>Shop <span>collections</span></>} type="primary" />

    <div>
      <button onClick={() => setTab(content1.current, "yellow")}>Get relief</button>
      <button onClick={() => setTab(content2.current, "red")}>Pills</button>
      <button onClick={() => setTab(content3.current, "green")}>Get active</button>
      <button onClick={() => setTab(content3.current, "green")}>Sleep</button>
      <button onClick={() => setTab(content3.current, "green")}>Stimulate my mind</button>
      <button onClick={() => setTab(content3.current, "green")}>Ease my mind</button>
      <button onClick={() => setTab(content3.current, "green")}>Favs</button>
    </div>
    <div>
      <div ref={content1} className={styles.product__slide}>
        <Swiper
           slidesPerView={"auto"}
           centeredSlides={true}
           spaceBetween={16}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide className={styles.product__item}><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide className={styles.product__item}><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide className={styles.product__item}><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide className={styles.product__item}><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
        </Swiper>
      </div>
      <div ref={content2} className={styles.product__slide}>
      <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product-2" /></SwiperSlide>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
        </Swiper>
      </div>
      <div ref={content3} className={styles.product__slide}>
      <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
          <SwiperSlide><Product productName="Midnight" category="1906" rating="4.2 (710)" image="slide-product" /></SwiperSlide>
        </Swiper>
      </div>
      <Button link="/" text="Shop collection" />
    </div>

  </section>
  )
};
export default Collection;
