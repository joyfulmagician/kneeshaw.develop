import type { NextPage } from "next";
import ExpiryContainer from "./expiry-container";
import styles from "./card-entry-form.module.css";

const CardEntryForm: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.nameOnTheCardParent}>
        <div className={styles.nameOnThe}>Name on the Card</div>
        <div className={styles.input}>
          <div className={styles.exEmeryStantonContainer}>
            {`ex: `}
            <span className={styles.emeryStanton}>EMERY STANTON</span>
          </div>
        </div>
      </div>
      <ExpiryContainer
        paymentCardInfo="Expiry Date"
        cardExpirationDate="MM/YYYY"
      />
      <ExpiryContainer
        paymentCardInfo="CVV / CSV"
        cardExpirationDate="XXX"
        propAlignSelf="stretch"
      />
    </div>
  );
};

export default CardEntryForm;
