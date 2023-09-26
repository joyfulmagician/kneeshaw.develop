import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card-name-form.module.css";

type CardNameFormType = {
  paymentCardName?: string;
  cardHolderName?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const CardNameForm: NextPage<CardNameFormType> = ({
  paymentCardName,
  cardHolderName,
  propFlex,
  propWidth,
  propHeight,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      height: propHeight,
    };
  }, [propFlex, propWidth, propHeight]);

  return (
    <div className={styles.inputField} style={inputFieldStyle}>
      <div className={styles.inputFieldBase}>
        <div className={styles.inputFieldBase}>
          <div className={styles.label}>{paymentCardName}</div>
          <div className={styles.input}>
            <div className={styles.content}>
              <img className={styles.mailIcon} alt="" src="/mail.svg" />
              <div className={styles.text}>{cardHolderName}</div>
            </div>
            <img className={styles.helpIcon} alt="" src="/help-icon.svg" />
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
      </div>
    </div>
  );
};

export default CardNameForm;
