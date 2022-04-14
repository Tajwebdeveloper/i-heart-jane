import styles from "./Products.module.css"
import { useEffect, useRef } from "react";
import {playRowAnim } from "../../animations"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "../Heading"
import Button from "../Button"
gsap.registerPlugin(ScrollTrigger);
const Products = () => {
  const productRow = useRef(null)
  const productRow2 = useRef(null)
  const productRow3 = useRef(null)
  const productRow4 = useRef(null)
  const productRow5 = useRef(null)
  const productRow6 = useRef(null)
  const productRow7 = useRef(null)
  const contentRef = useRef(null)
  useEffect(()=>{
    playRowAnim(productRow.current)
    playRowAnim(productRow2.current, true)
    playRowAnim(productRow3.current)
    playRowAnim(productRow4.current, true)
    playRowAnim(productRow5.current)
    playRowAnim(productRow6.current, true)
    playRowAnim(productRow7.current)
  },[productRow, productRow2, productRow3, productRow4, productRow5, productRow6, productRow7])
  const imagesArray = ["710-gummies.png","3bros-flower.png","3bros-smalls.png", "710-flower.png", "alienlabs-flower.png", "almora-flower.png","Artet.jpeg.webp", "avitas-pax.png", "biscotti-joint.png", "Bloom.png.webp", "Breez.jpeg.webp", "Care.jpeg.webp", "brotherdavid-joint.png", "camino-gummies.png", "Cannabisquencher.jpeg.webp", "Canndescent.jpg.webp", "ceres-tincture.png", "ea-cream.png", "ecc-caps.png", "Emerald.jpeg.webp", "Flower-1.jpeg.webp", "Flower-2.jpeg.webp", "Flower-3.jpeg.webp", "Flower-4.jpeg.webp", "Flower-5.jpeg.webp", "Flower-6.jpeg.webp", "Flower-7.jpeg.webp", "Flower-8.jpeg.webp",  "Flower-9.jpeg.webp", "fluent-gummies.png", "Garden.jpeg.webp", "Good.jpeg.webp", "GR-tincture.png", "Heavyhitters.jpeg.webp", "Highgrade.jpg.webp", "Houseplace.jpeg.webp", "Houseplant-2.jpeg.webp"]
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": () => {
        gsap.from(contentRef.current, {
          scale: 0.1,
          scrollTrigger: {
            trigger: contentRef.current
          },
          lazy: false
        });
      }
    })
  }, []);
  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  return <section className={styles.section}>
    <div className={styles.product__scroll}>
      <div ref={productRow} className={styles.product__row}>
         { [...Array(12)].map(() => <img src={`/images/${getRandom(imagesArray)}`} alt="" />) }
      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow2} className={styles.product__row}>
      { [...Array(12)].map(() => <img src={`/images/${getRandom(imagesArray)}`} alt="" />) }
      </div>
  </div>
  <div className={styles.heading} ref={contentRef}>
    <Heading text={<>Discover over <span>1&nbsp;million</span> products</>} type="secondary"></Heading>
    <div className={styles.cta}>
      <Button link="/" text="Get the app" type="white" />
    </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow3} className={styles.product__row}>
      { [...Array(12)].map(() => <img src={`/images/${getRandom(imagesArray)}`} alt="" />) }

      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow4} className={styles.product__row}>
      { [...Array(12)].map(() => <img src={`/images/${getRandom(imagesArray)}`} alt="" />) }

      </div>
  </div>

  <div className={styles.hideOnMobile}>
  <div className={styles.product__scroll}>
      <div ref={productRow5} className={styles.product__row}>
      { [...Array(12)].map(() => <img src={`/images/${getRandom(imagesArray)}`} alt="" />) }

      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow6} className={styles.product__row}>
      { [...Array(12)].map(() => <img src={`/images/${getRandom(imagesArray)}`} alt="" />) }

      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow7} className={styles.product__row}>
      { [...Array(12)].map(() => <img src={`/images/${getRandom(imagesArray)}`} alt="" />) }

      </div>
  </div>
  </div>
  </section>
};
export default Products;
