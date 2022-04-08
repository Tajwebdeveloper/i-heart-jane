import styles from "./Heading.module.css"
const Heading = ({text, type, desktopAlign=""}) => {
 return <h2 className={`${styles.heading} ${styles[type]} ${styles[desktopAlign]}`}>{text}</h2>
}
export default Heading