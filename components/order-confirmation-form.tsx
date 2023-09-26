import type { NextPage } from "next";
import styles from "./order-confirmation-form.module.css";

const OrderConfirmationForm: NextPage = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.top}>
        <div className={styles.yourOrder}>Your Order</div>
        <div className={styles.row}>
          <img
            className={styles.vuesaxboldtickCircleIcon}
            alt=""
            src="/vuesaxboldtickcircle1.svg"
          />
          <div className={styles.yourOrder}>Paid</div>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.row1}>
          <div className={styles.image}>
            <div className={styles.passtern} />
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.box}>
            <div className={styles.row2}>
              <div className={styles.titanSagaChains}>
                Titan Saga: Chains of Kronos
              </div>
              <div className={styles.xParent}>
                <div className={styles.x}>1x</div>
                <div className={styles.yourOrder}>$123.00</div>
              </div>
              <div className={styles.div1}>$123.00</div>
            </div>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.yourOrder}>TOTAL</div>
          <div className={styles.div2}>$123.00</div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Done</div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationForm;
