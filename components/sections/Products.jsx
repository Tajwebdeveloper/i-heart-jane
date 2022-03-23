import styles from "./Products.module.css"
import { useEffect, useRef } from "react";
import {playRowAnim } from "../../animations"
import Heading from "../Heading"
const Products = () => {
  const productRow = useRef(null)
  const productRow2 = useRef(null)
  const productRow3 = useRef(null)
  const productRow4 = useRef(null)
  
  useEffect(()=>{
    playRowAnim(productRow.current)
    playRowAnim(productRow2.current, true)
    playRowAnim(productRow3.current)
    playRowAnim(productRow4.current, true)
  },[productRow, productRow2, productRow3, productRow3])

  return <section>
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
  <div className={styles.heading}>
    <Heading text={<>Discover over <span>1&nbsp;million</span> products</>} type="secondary"></Heading>
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
  </section>
};
export default Products;
