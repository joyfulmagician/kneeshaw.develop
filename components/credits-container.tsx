import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./credits-container.module.css";

type CreditsContainerType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const CreditsContainer: NextPage<CreditsContainerType> = ({ propTop }) => {
  const sectionStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.section} style={sectionStyle}>
      <b className={styles.credits}>Credits</b>
      <div className={styles.weKindlyRequestContainer}>
        <p className={styles.weKindlyRequest}>
          We kindly request that you credit any assets used from the Press Kit
          to Kneeshaw Games and provide a link back to our official website.
        </p>
        <p className={styles.weKindlyRequest}>
          Should you require any additional information or have specific media
          requests, please don't hesitate to reach out to our dedicated press
          contact listed in the Press Kit.
        </p>
        <p className={styles.weKindlyRequest}>
          Thank you for your support, and we look forward to seeing your
          coverage of TitanSaga!
        </p>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Download Press Kit</div>
        </div>
      </div>
    </div>
  );
};

export default CreditsContainer;
