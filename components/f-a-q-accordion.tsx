import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./f-a-q-accordion.module.css";

type FAQAccordionType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const FAQAccordion: NextPage<FAQAccordionType> = ({ propTop, propLeft }) => {
  const q1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.q1} style={q1Style}>
      <img className={styles.q1Child} alt="" src="/rectangle-45.svg" />
      <div className={styles.whatIsGame}>What is game development?</div>
      <img
        className={styles.vuesaxlineararrowUpIcon}
        alt=""
        src="/vuesaxlineararrowup2.svg"
      />
      <img className={styles.designIcon} alt="" src="/design.svg" />
    </div>
  );
};

export default FAQAccordion;
