import type { NextPage } from "next";
import styles from "./budget-form-container.module.css";

const BudgetFormContainer: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.ellipseDiv} />
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.moreDetailsParent}>
          <div className={styles.moreDetails}>More Details</div>
          <b className={styles.tellUsAbout}>{`Tell us about your budget `}</b>
        </div>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <img
            className={styles.phclockDuotoneIcon}
            alt=""
            src="/phclockduotone.svg"
          />
          <div className={styles.hourlyRate}>Hourly Rate</div>
          <div className={styles.quickTasks}>Quick Tasks</div>
        </div>
        <div className={styles.input1}>
          <img
            className={styles.phclockDuotoneIcon}
            alt=""
            src="/fontistomoneysymbol.svg"
          />
          <div className={styles.hourlyRate}>Project Budget</div>
          <div className={styles.quickTasks}>Well defined projects</div>
        </div>
      </div>
      <div className={styles.range}>
        <div className={styles.statedefaultSize40}>
          <div className={styles.size40}>
            <div className={styles.autoLayoutHorizontal}>
              <div className={styles.from}>From</div>
            </div>
            <div className={styles.autoLayoutHorizontalParent}>
              <div className={styles.autoLayoutHorizontal1}>
                <div className={styles.from}>$15</div>
              </div>
              <div className={styles.hour}>/hour</div>
            </div>
            <div className={styles.autoLayoutHorizontal2}>
              <div className={styles.helperText}>Helper Text</div>
              <div className={styles.div1}>0 / 10</div>
            </div>
          </div>
        </div>
        <div className={styles.statedefaultSize40}>
          <div className={styles.size40}>
            <div className={styles.autoLayoutHorizontal}>
              <div className={styles.from}>To</div>
            </div>
            <div className={styles.autoLayoutHorizontalParent}>
              <div className={styles.autoLayoutHorizontal1}>
                <div className={styles.from}>$32</div>
              </div>
              <div className={styles.hour}>/hour</div>
            </div>
            <div className={styles.autoLayoutHorizontal2}>
              <div className={styles.helperText}>Helper Text</div>
              <div className={styles.div1}>0 / 10</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modalActionsWrapper}>
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
    </div>
  );
};

export default BudgetFormContainer;
