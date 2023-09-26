import type { NextPage } from "next";
import styles from "./cart-list.module.css";

const CartList: NextPage = () => {
  return (
    <div className={styles.list}>
      <div className={styles.row}>
        <div className={styles.image}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
        <div className={styles.box}>
          <div className={styles.row1}>
            <div className={styles.name}>
              <div className={styles.titanSagaChains}>
                Titan Saga: Chains of Kronos
              </div>
            </div>
            <div className={styles.right}>
              <img className={styles.closeIcon} alt="" src="/close.svg" />
              <div className={styles.div}>$123.00</div>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.tax}>Tax</div>
            <div className={styles.div1}>$1.00</div>
          </div>
        </div>
      </div>
      <div className={styles.row3}>
        <div className={styles.total}>TOTAL</div>
        <div className={styles.div2}>$123.00</div>
      </div>
    </div>
  );
};

export default CartList;
