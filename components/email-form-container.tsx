import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./email-form-container.module.css";

type EmailFormContainerType = {
  inputLabel?: string;
  inputValue?: string;

  /** Style props */
  propTextTransform?: CSSProperties["textTransform"];
};

const EmailFormContainer: NextPage<EmailFormContainerType> = ({
  inputLabel,
  inputValue,
  propTextTransform,
}) => {
  const emerystantongmailcomStyle: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className={styles.emailAddressParent}>
      <div className={styles.emailAddress}>{inputLabel}</div>
      <div className={styles.input}>
        <div
          className={styles.emerystantongmailcom}
          style={emerystantongmailcomStyle}
        >
          {inputValue}
        </div>
      </div>
    </div>
  );
};

export default EmailFormContainer;
