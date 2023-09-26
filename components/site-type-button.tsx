import type { NextPage } from "next";
import styles from "./site-type-button.module.css";

const SiteTypeButton: NextPage = () => {
  return (
    <div className={styles.types}>
      <div className={styles.typesChild} />
      <button className={styles.typesItem} />
      <b className={styles.createWithUs}>Create with Us</b>
      <div className={styles.playWithUs}>Play with Us</div>
    </div>
  );
};

export default SiteTypeButton;
