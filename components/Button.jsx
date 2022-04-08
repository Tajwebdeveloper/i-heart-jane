import Link from "next/link";
import styles from "./Button.module.css";
const Button = ({ link, text, type="primary" }) => {
  return (
    <Link href={link}>
      <a className={`${styles.button} ${styles[type]}`}>{text}</a>
    </Link>
  );
};

export default Button;
