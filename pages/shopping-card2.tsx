import type { NextPage } from "next";
import OrderProcessContainer from "../components/order-process-container";
import OrderConfirmationForm from "../components/order-confirmation-form";
import styles from "./shopping-card2.module.css";

const ShoppingCard2: NextPage = () => {
  return (
    <div className={styles.shoppingCard}>
      <OrderProcessContainer
        dimensionCode="/vuesaxlinearbag21.svg"
        productCode="/wallet1.svg"
        dimensionText="/ticket1.svg"
        vuesaxlinearbag2IconBackgroundColor="#edf1f3"
        lineColor="#edf1f3"
        walletIconBackgroundColor="#edf1f3"
        lineColor1="#edf1f3"
        ticketIconBackgroundColor="#afd275"
        propColor="#afd275"
      />
      <OrderConfirmationForm />
      <div className={styles.header}>
        <div className={styles.header1}>
          <img
            className={styles.logoWhite1}
            alt=""
            src="/logo-white-1@2x.png"
          />
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
                src="/shopping-bag.svg"
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

export default ShoppingCard2;
