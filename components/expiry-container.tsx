import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./expiry-container.module.css";

type ExpiryContainerType = {
  paymentCardInfo?: string;
  cardExpirationDate?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ExpiryContainer: NextPage<ExpiryContainerType> = ({
  paymentCardInfo,
  cardExpirationDate,
  propAlignSelf,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.expiryDateParent}>
      <div className={styles.expiryDate}>{paymentCardInfo}</div>
      <div className={styles.input} style={inputStyle}>
        <div className={styles.mmyyyy}>{cardExpirationDate}</div>
      </div>
    </div>
  );
};

export default ExpiryContainer;
