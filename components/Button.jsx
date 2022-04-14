import Link from "next/link";
import styles from "./Button.module.css";
const Button = ({ link, text, type="primary", desktop="" }) => {
  return (
    <Link href={link}>
      <a className={`${styles.button} ${styles[type]} ${styles[desktop]}`}>{text}</a>
    </Link>
  );
};

export default Button;
