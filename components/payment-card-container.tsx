import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./payment-card-container.module.css";

type PaymentCardContainerType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const PaymentCardContainer: NextPage<PaymentCardContainerType> = ({
  propWidth,
  propAlignSelf,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={styles.textParent} style={frameDiv3Style}>
      <div className={styles.text}>Payment card</div>
      <div className={styles.mastercardParent}>
        <div className={styles.mastercard}>
          <img className={styles.visaIcon} alt="" src="/visa.svg" />
        </div>
        <div className={styles.text1}>XXXX XXXX XXXX 1234</div>
      </div>
      <div className={styles.textAndSupportingText}>
        <div className={styles.supportingText}>Current Payment Method</div>
      </div>
    </div>
  );
};

export default PaymentCardContainer;
