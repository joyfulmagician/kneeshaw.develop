import type { NextPage } from "next";
import styles from "./skill-form-container.module.css";

const SkillFormContainer: NextPage = () => {
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
              src="/basilsearchoutline.svg"
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
      <div className={styles.inputParent}>
        <div className={styles.input1}>
          <div className={styles.search}>Godot</div>
          <img
            className={styles.basilsearchOutlineIcon}
            alt=""
            src="/mingcutedownline1.svg"
          />
        </div>
        <div className={styles.input2}>
          <div className={styles.search}>2D</div>
          <img
            className={styles.basilsearchOutlineIcon}
            alt=""
            src="/icroundcheck.svg"
          />
        </div>
        <div className={styles.input3}>
          <img
            className={styles.basilsearchOutlineIcon1}
            alt=""
            src="/basilsearchoutline.svg"
          />
          <div className={styles.search}>3D</div>
        </div>
        <div className={styles.input3}>
          <img
            className={styles.basilsearchOutlineIcon1}
            alt=""
            src="/basilsearchoutline.svg"
          />
          <div className={styles.search}>Shaders</div>
        </div>
        <div className={styles.input3}>
          <img
            className={styles.basilsearchOutlineIcon1}
            alt=""
            src="/basilsearchoutline.svg"
          />
          <div className={styles.search}>Environment</div>
        </div>
        <div className={styles.input3}>
          <img
            className={styles.basilsearchOutlineIcon1}
            alt=""
            src="/basilsearchoutline.svg"
          />
          <div className={styles.search}>Sysem</div>
        </div>
      </div>
      <div className={styles.input7}>
        <div className={styles.search}>Databases</div>
        <img
          className={styles.basilsearchOutlineIcon}
          alt=""
          src="/mingcutedownline2.svg"
        />
      </div>
      <div className={styles.modalActions}>
        <div className={styles.button2}>
          <div className={styles.buttonBase6}>
            <div className={styles.text}>Back</div>
          </div>
        </div>
        <div className={styles.button3}>
          <div className={styles.buttonBase7}>
            <div className={styles.text}>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillFormContainer;
