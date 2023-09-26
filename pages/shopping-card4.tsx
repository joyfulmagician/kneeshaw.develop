import type { NextPage } from "next";
import CartSideContainer from "../components/cart-side-container";
import styles from "./shopping-card4.module.css";

const ShoppingCard4: NextPage = () => {
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
      <CartSideContainer />
    </div>
  );
};

export default ShoppingCard4;
