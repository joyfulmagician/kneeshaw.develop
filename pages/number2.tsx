import type { NextPage } from "next";
import TwoFactorContainer from "../components/two-factor-container";
import styles from "./number2.module.css";

const Number2: NextPage = () => {
  return (
    <div className={styles.number}>
      <TwoFactorContainer
        titleBackgroundColor="#f8fafc"
        forgotPasswordLetterSpacing="unset"
        forgotPasswordColor="#090914"
        formLetterSpacing="0.08em"
        formColor="#52525b"
        frameDivColor="#52525b"
        mdihorizontalLineIconBorder="1px solid var(--color-silver-200)"
        mdihorizontalLineIconBackgroundColor="#fff"
        mdihorizontalLineIconBorder1="1px solid var(--color-silver-200)"
        mdihorizontalLineIconBackgroundColor1="#fff"
        mdihorizontalLineIconBorder2="1px solid var(--color-silver-200)"
        mdihorizontalLineIconBackgroundColor2="#fff"
        mdihorizontalLineIconBorder3="1px solid var(--color-silver-200)"
        mdihorizontalLineIconBackgroundColor3="#fff"
        mdihorizontalLineIconBorder4="1px solid var(--color-silver-200)"
        mdihorizontalLineIconBackgroundColor4="#fff"
        mdihorizontalLineIconBorder5="1px solid var(--color-silver-200)"
        mdihorizontalLineIconBackgroundColor5="#fff"
        mdihorizontalLineIconBorder6="1px solid var(--color-silver-200)"
        mdihorizontalLineIconBackgroundColor6="#fff"
        sendAgainColor="#71717a"
      />
      <div className={styles.header}>
        <div className={styles.header1}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
          <div className={styles.menu}>
            <div className={styles.games}>Games</div>
            <div className={styles.games}>Blog</div>
            <div className={styles.games}>Services</div>
            <div className={styles.games}>Job</div>
            <div className={styles.games}>About Us</div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Number2;
