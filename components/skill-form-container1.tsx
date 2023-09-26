import type { NextPage } from "next";
import styles from "./skill-form-container1.module.css";

const SkillFormContainer1: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.searchOrAddUpTo10SkillsParent}>
          <div className={styles.searchOrAdd}>
            Search or add up to 10 skills
          </div>
          <div className={styles.input}>
            <img
              className={styles.basilsearchOutlineIcon}
              alt=""
              src="/basilsearchoutline1.svg"
            />
            <div className={styles.search}>Search</div>
          </div>
          <div className={styles.searchOrAdd}>
            For the best results, add 3-5 skills
          </div>
        </div>
        <div className={styles.popularSkillsParent}>
          <div className={styles.popularSkills}>Popular Skills</div>
          <div className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.text}>Unity</div>
              <img
                className={styles.basilsearchOutlineIcon}
                alt=""
                src="/iconoirplus.svg"
              />
            </div>
            <div className={styles.buttonBase}>
              <div className={styles.text}>SEO</div>
              <img
                className={styles.basilsearchOutlineIcon}
                alt=""
                src="/iconoirplus.svg"
              />
            </div>
            <div className={styles.buttonBase2}>
              <div className={styles.text}>Web Developments</div>
              <img
                className={styles.basilsearchOutlineIcon}
                alt=""
                src="/iconoirplus.svg"
              />
            </div>
            <div className={styles.buttonBase2}>
              <div className={styles.text}>Google Analytics</div>
              <img
                className={styles.basilsearchOutlineIcon}
                alt=""
                src="/iconoirplus.svg"
              />
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.buttonBase2}>
              <div className={styles.text}>Business with 1-9 Employees</div>
              <img
                className={styles.basilsearchOutlineIcon}
                alt=""
                src="/iconoirplus.svg"
              />
            </div>
            <div className={styles.buttonBase5}>
              <div className={styles.text}>SEO</div>
              <img
                className={styles.basilsearchOutlineIcon}
                alt=""
                src="/iconoirplus1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.input1}>
        <div className={styles.search}>Full Stack Development Skills</div>
        <img
          className={styles.basilsearchOutlineIcon}
          alt=""
          src="/mingcutedownline3.svg"
        />
      </div>
      <div className={styles.input1}>
        <div className={styles.search}>Databases</div>
        <img
          className={styles.basilsearchOutlineIcon}
          alt=""
          src="/mingcutedownline3.svg"
        />
      </div>
      <div className={styles.button2}>
        <div className={styles.buttonBase6}>
          <div className={styles.text6}>Next</div>
        </div>
      </div>
    </div>
  );
};

export default SkillFormContainer1;
