import type { NextPage } from "next";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <header className={styles.header1}>
        <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
        <nav className={styles.menu}>
          <div className={styles.games}>Games</div>
          <div className={styles.games}>Blog</div>
          <div className={styles.games}>Services</div>
          <div className={styles.games}>Job</div>
          <div className={styles.games}>About Us</div>
        </nav>
        <div className={styles.frameParent}>
          <div className={styles.shoppingBagParent}>
            <img
              className={styles.shoppingBagIcon}
              alt=""
              src="/shopping-bag2.svg"
            />
            <div className={styles.badge}>
              <div className={styles.div}>0</div>
            </div>
          </div>
          <div className={styles.signIn}>
            <div className={styles.signIn1}>Sign in</div>
            <div className={styles.signInChild} />
            <div className={styles.signUp}>Sign up</div>
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
      </header>
    </header>
  );
};

export default Header;
