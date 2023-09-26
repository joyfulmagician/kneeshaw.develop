import type { NextPage } from "next";
import FAQAccordion from "./f-a-q-accordion";
import styles from "./f-a-q-container.module.css";

const FAQContainer: NextPage = () => {
  return (
    <div className={styles.faq}>
      <b className={styles.frequentlyAskedQuestions}>
        Frequently Asked Questions
      </b>
      <FAQAccordion />
      <FAQAccordion propTop="242px" propLeft="4px" />
      <div className={styles.q3}>
        <img className={styles.q3Child} alt="" src="/rectangle-451.svg" />
        <div className={styles.whatIsGame}>What is game development?</div>
        <img
          className={styles.vuesaxlineararrowUpIcon}
          alt=""
          src="/vuesaxlineararrowup3.svg"
        />
        <img className={styles.designIcon} alt="" src="/design.svg" />
        <div className={styles.gameDevelopmentIs}>
          Game development is the process of creating video games. It involves
          designing the game concept, creating the graphics and sound effects,
          programming the game mechanics, and testing the game to ensure it is
          fun and playable.
        </div>
        <img className={styles.q3Item} alt="" src="/line-4.svg" />
      </div>
      <FAQAccordion propTop="500px" propLeft="0px" />
      <FAQAccordion propTop="592px" propLeft="0px" />
      <FAQAccordion propTop="684px" propLeft="0px" />
    </div>
  );
};

export default FAQContainer;
