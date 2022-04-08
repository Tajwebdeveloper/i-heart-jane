import { useEffect, useRef } from "react";
import Heading from "../Heading";
import styles from "./Favourite.module.css"
import {playRowAnim } from "../../animations"
const Favourite = () => {
  const productRow = useRef(null)
  const productRow2 = useRef(null)
  useEffect(()=>{
    playRowAnim(productRow.current)
    playRowAnim(productRow2.current, true)
  },[productRow])

  return <section className={styles.section}>
    <div className={styles.productRowContainer}>
      <div ref={productRow} className={styles.productRow}>
        <img src="/images/product-card-1.png" alt="" />
        <img src="/images/product-card-2.png" alt="" />
        <img src="/images/product-card-3.png" alt="" />
        <img src="/images/product-card-4.png" alt="" />
        <img src="/images/product-card-5.png" alt="" />
        <img src="/images/product-card-6.png" alt="" />
        <img src="/images/product-card-7.png" alt="" />
        <img src="/images/product-card-8.png" alt="" />
      </div>
      <div ref={productRow2} className={styles.productRow}>
        <img src="/images/product-card-1.png" alt="" />
        <img src="/images/product-card-2.png" alt="" />
        <img src="/images/product-card-3.png" alt="" />
        <img src="/images/product-card-4.png" alt="" />
        <img src="/images/product-card-5.png" alt="" />
        <img src="/images/product-card-6.png" alt="" />
        <img src="/images/product-card-7.png" alt="" />
        <img src="/images/product-card-8.png" alt="" />
      </div>
    </div>
    <Heading text={<>Your favorite Jane</>} type="primary" />
    <div className={styles.subheading}>Save your favorite dispensaries, brands, products, and collections to breeze through checkout and get recommendations you’ll love.</div>
    <div className={styles.circle}></div>
    
  </section>
}
export default Favourite