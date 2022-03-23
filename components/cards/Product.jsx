import styles from "./Product.module.css"
const Product = ({productName, category, rating, image}) => {
  return (
    <div className={styles.card}>
      <img src={`/images/${image}.png`} alt="" />
      <div className={styles.content}>
        <div className={styles.name}>{productName}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.rating}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41847 1.48537C7.90755 0.494377 9.32068 0.494379 9.80976 1.48537L11.4387 4.78605C11.633 5.17957 12.0084 5.45233 12.4427 5.51543L16.0852 6.04472C17.1788 6.20363 17.6155 7.5476 16.8241 8.31898L14.1884 10.8882C13.8741 11.1945 13.7307 11.6358 13.8049 12.0684L14.4271 15.6962C14.6139 16.7854 13.4707 17.616 12.4925 17.1017L9.23457 15.3889C8.84613 15.1847 8.38209 15.1847 7.99366 15.3889L4.7357 17.1017C3.75753 17.616 2.61429 16.7854 2.8011 15.6962L3.42332 12.0684C3.4975 11.6358 3.3541 11.1945 3.03985 10.8882L0.404108 8.31898C-0.387248 7.5476 0.0494332 6.20363 1.14306 6.04472L4.78557 5.51543C5.21985 5.45233 5.59527 5.17957 5.78949 4.78605L7.41847 1.48537Z" fill="#FFC220"/>
          </svg>{rating}</div>
      </div>
    </div>
  )
};
export default Product;
