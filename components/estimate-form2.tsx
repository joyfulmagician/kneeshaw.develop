import type { NextPage } from "next";
import styles from "./estimate-form2.module.css";

const EstimateForm2: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameInner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.ellipseDiv} />
        </div>
        <div className={styles.scopeOfWorkParent}>
          <div className={styles.scopeOfWork}>Scope of work</div>
          <b className={styles.estimateTheScope}>
            Estimate the scope of your work
          </b>
        </div>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <img
            className={styles.typcnthSmallOutlineIcon}
            alt=""
            src="/typcnthsmalloutline5.svg"
          />
          <div className={styles.small}>Small</div>
          <div className={styles.quickTasks}>Quick Tasks</div>
        </div>
        <div className={styles.input}>
          <img
            className={styles.typcnthSmallOutlineIcon}
            alt=""
            src="/typcnthsmalloutline1.svg"
          />
          <div className={styles.small}>Medium</div>
          <div className={styles.quickTasks}>Well defined projects</div>
        </div>
        <div className={styles.input}>
          <img
            className={styles.typcnthSmallOutlineIcon}
            alt=""
            src="/typcnthsmalloutline2.svg"
          />
          <div className={styles.small}>Large</div>
          <div className={styles.longTermComplex}>Long term, complex tasks</div>
        </div>
      </div>
      <div className={styles.modalActions}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <div className={styles.text}>Back</div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonBase1}>
            <div className={styles.text}>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateForm2;
