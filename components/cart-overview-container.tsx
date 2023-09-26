import type { NextPage } from "next";
import CartList from "./cart-list";
import SecurePaymentsContainer from "./secure-payments-container";
import styles from "./cart-overview-container.module.css";

const CartOverviewContainer: NextPage = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.top}>
        <b className={styles.yourCart}>Your Cart</b>
        <div className={styles.div}>(2)</div>
      </div>
      <CartList />
      <CartList />
      <SecurePaymentsContainer />
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default CartOverviewContainer;
