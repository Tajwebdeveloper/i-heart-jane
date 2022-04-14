import Heading from "../Heading"
import styles from "./Collection.module.css"
import Product from "../cards/Product";
import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../Button"
import {productData, categoryData } from "../../data"
import {useWindowSize} from "../../hooks"
gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const size = useWindowSize()
  const [products, setProducts] = useState(productData["sleep"]);
  const [activeCategory, setActiveCategory] = useState("sleep")
  const [background, setBackground] = useState("#5e2cf0")
  const setTab = (e, category, color) => {
    e?.currentTarget?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    })
    setProducts(productData[category])
    setBackground(color)
    setActiveCategory(category)
   
  }
  useEffect(()=>{
    setTab(null, "sleep", "#5e2cf0") 
  },[])

  return (
    <section className={styles.collection}>
      <Heading text={<>Shop <span>collections</span></>} type="primary" />
      <div style={{ backgroundColor: background}} className={styles.bgContainer}>
        <div className={styles.buttonContainer}>    
          {categoryData.map((category) => {
            return <button 
            key={category.id} 
            style={{backgroundImage: `url(/images/${category.image})`}} 
            className={`${styles.button} ${activeCategory === category.name ? styles.active : ""}`}
            onClick={(e) => setTab(e, category.name, category.color )}>{category.name}</button>
          })}
        </div>
        <div className={styles.desktop__container}>
          { size.width > 992 ? 
          <div className={styles.desktop__slide}> {products.map((pro, i) => <Product productName={pro.name} category={pro.category} rating={pro.rating} image={pro.image} /> )}            
          </div> : <div className={styles.product__slide}>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={16}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              {products.map((pro, i) => <SwiperSlide 
              key={i} 
              className={styles.product__item}>
                <Product productName={pro.name} category={pro.category} rating={pro.rating} image={pro.image} />
              </SwiperSlide>)}
            </Swiper>
          </div>}
          
          <div className={styles.cta}>
            <Button link="/" text="Shop collection" type="secondary" />
          </div>
        </div>
      </div>
    </section>
  )
};
export default Collection;
