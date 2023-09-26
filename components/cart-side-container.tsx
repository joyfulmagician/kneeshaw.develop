import type { NextPage } from "next";
import CartList from "./cart-list";
import SecurePaymentsContainer from "./secure-payments-container";
import styles from "./cart-side-container.module.css";

const CartSideContainer: NextPage = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.top}>
        <b className={styles.yourCart}>Your Cart</b>
        <div className={styles.div}>(1)</div>
      </div>
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

export default CartSideContainer;
