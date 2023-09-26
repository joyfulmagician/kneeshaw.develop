import type { NextPage } from "next";
import styles from "./cart-container.module.css";

const CartContainer: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.list}>
        <div className={styles.top}>
          <b className={styles.yourCart}>Your Cart</b>
          <div className={styles.div}>(1)</div>
        </div>
        <div className={styles.list1}>
          <div className={styles.row}>
            <div className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.box}>
              <div className={styles.row1}>
                <div className={styles.titanSagaChains}>
                  Titan Saga: Chains of Kronos
                </div>
                <div className={styles.row2}>
                  <div className={styles.label}>
                    <img className={styles.minusIcon} alt="" src="/minus.svg" />
                  </div>
                  <div className={styles.label1}>
                    <div className={styles.div1}>1</div>
                  </div>
                  <div className={styles.label}>
                    <img className={styles.minusIcon} alt="" src="/plus.svg" />
                  </div>
                </div>
                <div className={styles.div2}>$123.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.list2}>
        <div className={styles.list3}>
          <div className={styles.row1}>
            <div className={styles.yourCart}>Subtotal</div>
            <div className={styles.yourCart}>$123.00</div>
          </div>
          <div className={styles.row1}>
            <div className={styles.yourCart}>Discount</div>
            <div className={styles.yourCart}>$0.0</div>
          </div>
          <div className={styles.row1}>
            <div className={styles.yourCart}>Shipping Costs</div>
            <div className={styles.yourCart}>$0.00</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.checkout}>Checkout</div>
          <div className={styles.buttonChild} />
          <div className={styles.checkout}>$123.00</div>
        </div>
        <div className={styles.line} />
        <div className={styles.quantity}>
          <div className={styles.securePaymentsProvided}>
            SECURE PAYMENTS PROVIDED BY
          </div>
          <div className={styles.row6}>
            <div className={styles.row7}>
              <div className={styles.mastercard}>
                <img
                  className={styles.mastercardChild}
                  alt=""
                  src="/group-16.svg"
                />
              </div>
              <div className={styles.mastercard}>
                <img className={styles.visaIcon} alt="" src="/visa.svg" />
              </div>
              <div className={styles.mastercard}>
                <img
                  className={styles.logosamexIcon}
                  alt=""
                  src="/logosamex.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
