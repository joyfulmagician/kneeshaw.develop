import type { NextPage } from "next";
import styles from "./shopping-card5.module.css";

const ShoppingCard5: NextPage = () => {
  return (
    <div className={styles.shoppingCard}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <div className={styles.games}>Games</div>
          <div className={styles.games}>Blog</div>
          <div className={styles.games}>Services</div>
          <div className={styles.games}>About Us</div>
        </div>
        <img className={styles.logoWhite1} alt="" src="/logo-white-1@2x.png" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.shoppingBagParent}>
          <img
            className={styles.shoppingBagIcon}
            alt=""
            src="/shopping-bag.svg"
          />
          <div className={styles.badge}>
            <div className={styles.div}>0</div>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <div className={styles.bg} />
            <div className={styles.es}>ES</div>
          </div>
          <div className={styles.emeryStanton}>Emery Stanton</div>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.opacity} />
      <div className={styles.panel}>
        <div className={styles.top}>
          <b className={styles.div}>Your Cart</b>
          <div className={styles.div1}>(0)</div>
        </div>
        <div className={styles.list}>
          <div className={styles.icon1}>
            <img className={styles.bagIcon} alt="" src="/bag.svg" />
          </div>
          <div className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.text}>Show Product</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard5;
