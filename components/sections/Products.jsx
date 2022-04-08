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
  return <section className={styles.section}>
    <div className={styles.product__scroll}>
      <div ref={productRow} className={styles.product__row}>
        <img src="/images/product-1.png" alt="" />
        <img src="/images/product-2.png" alt="" />
        <img src="/images/product-3.png" alt="" />
        <img src="/images/product-4.png" alt="" />
        <img src="/images/product-5.png" alt="" />
        <img src="/images/product-6.png" alt="" />
        <img src="/images/product-7.png" alt="" />
        <img src="/images/product-8.png" alt="" />
        <img src="/images/product-9.png" alt="" />
        <img src="/images/product-10.png" alt="" />
        <img src="/images/product-11.png" alt="" />
        <img src="/images/product-12.png" alt="" />
        <img src="/images/product-13.png" alt="" />
      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow2} className={styles.product__row}>
      <img src="/images/product-1.png" alt="" />
        <img src="/images/product-2.png" alt="" />
        <img src="/images/product-3.png" alt="" />
        <img src="/images/product-4.png" alt="" />
        <img src="/images/product-5.png" alt="" />
        <img src="/images/product-6.png" alt="" />
        <img src="/images/product-7.png" alt="" />
        <img src="/images/product-8.png" alt="" />
        <img src="/images/product-9.png" alt="" />
        <img src="/images/product-10.png" alt="" />
        <img src="/images/product-11.png" alt="" />
        <img src="/images/product-12.png" alt="" />
        <img src="/images/product-13.png" alt="" />
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
      <img src="/images/product-1.png" alt="" />
        <img src="/images/product-2.png" alt="" />
        <img src="/images/product-3.png" alt="" />
        <img src="/images/product-4.png" alt="" />
        <img src="/images/product-5.png" alt="" />
        <img src="/images/product-6.png" alt="" />
        <img src="/images/product-7.png" alt="" />
        <img src="/images/product-8.png" alt="" />
        <img src="/images/product-9.png" alt="" />
        <img src="/images/product-10.png" alt="" />
        <img src="/images/product-11.png" alt="" />
        <img src="/images/product-12.png" alt="" />
        <img src="/images/product-13.png" alt="" />
      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow4} className={styles.product__row}>
      <img src="/images/product-1.png" alt="" />
        <img src="/images/product-2.png" alt="" />
        <img src="/images/product-3.png" alt="" />
        <img src="/images/product-4.png" alt="" />
        <img src="/images/product-5.png" alt="" />
        <img src="/images/product-6.png" alt="" />
        <img src="/images/product-7.png" alt="" />
        <img src="/images/product-8.png" alt="" />
        <img src="/images/product-9.png" alt="" />
        <img src="/images/product-10.png" alt="" />
        <img src="/images/product-11.png" alt="" />
        <img src="/images/product-12.png" alt="" />
        <img src="/images/product-13.png" alt="" />
      </div>
  </div>

  <div className={styles.hideOnMobile}>
  <div className={styles.product__scroll}>
      <div ref={productRow5} className={styles.product__row}>
      <img src="/images/product-1.png" alt="" />
        <img src="/images/product-2.png" alt="" />
        <img src="/images/product-3.png" alt="" />
        <img src="/images/product-4.png" alt="" />
        <img src="/images/product-5.png" alt="" />
        <img src="/images/product-6.png" alt="" />
        <img src="/images/product-7.png" alt="" />
        <img src="/images/product-8.png" alt="" />
        <img src="/images/product-9.png" alt="" />
        <img src="/images/product-10.png" alt="" />
        <img src="/images/product-11.png" alt="" />
        <img src="/images/product-12.png" alt="" />
        <img src="/images/product-13.png" alt="" />
      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow6} className={styles.product__row}>
      <img src="/images/product-1.png" alt="" />
        <img src="/images/product-2.png" alt="" />
        <img src="/images/product-3.png" alt="" />
        <img src="/images/product-4.png" alt="" />
        <img src="/images/product-5.png" alt="" />
        <img src="/images/product-6.png" alt="" />
        <img src="/images/product-7.png" alt="" />
        <img src="/images/product-8.png" alt="" />
        <img src="/images/product-9.png" alt="" />
        <img src="/images/product-10.png" alt="" />
        <img src="/images/product-11.png" alt="" />
        <img src="/images/product-12.png" alt="" />
        <img src="/images/product-13.png" alt="" />
      </div>
  </div>
  <div className={styles.product__scroll}>
      <div ref={productRow7} className={styles.product__row}>
      <img src="/images/product-1.png" alt="" />
        <img src="/images/product-2.png" alt="" />
        <img src="/images/product-3.png" alt="" />
        <img src="/images/product-4.png" alt="" />
        <img src="/images/product-5.png" alt="" />
        <img src="/images/product-6.png" alt="" />
        <img src="/images/product-7.png" alt="" />
        <img src="/images/product-8.png" alt="" />
        <img src="/images/product-9.png" alt="" />
        <img src="/images/product-10.png" alt="" />
        <img src="/images/product-11.png" alt="" />
        <img src="/images/product-12.png" alt="" />
        <img src="/images/product-13.png" alt="" />
      </div>
  </div>
  </div>
  </section>
};
export default Products;
