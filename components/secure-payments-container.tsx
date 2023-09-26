import type { NextPage } from "next";
import styles from "./secure-payments-container.module.css";

const SecurePaymentsContainer: NextPage = () => {
  return (
    <div className={styles.quantity}>
      <div className={styles.securePaymentsProvided}>
        SECURE PAYMENTS PROVIDED BY
      </div>
      <div className={styles.row}>
        <div className={styles.row}>
          <div className={styles.row2}>
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
  );
};

export default SecurePaymentsContainer;
