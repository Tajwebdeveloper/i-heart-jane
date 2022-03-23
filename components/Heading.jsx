import styles from "./Heading.module.css"
const Heading = ({text, type}) => {
 return <h2 className={`${styles.heading} ${styles[type]}`}>{text}</h2>
}
export default Heading