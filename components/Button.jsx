import Link from "next/link";
import styles from "./Button.module.css";
const Button = ({ link, text }) => {
  return (
    <Link href={link}>
      <a className={styles.button}>{text}</a>
    </Link>
  );
};

export default Button;
