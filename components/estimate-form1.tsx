import type { NextPage } from "next";
import styles from "./estimate-form1.module.css";

const EstimateForm1: NextPage = () => {
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
        <div className={styles.moreDetailsParent}>
          <div className={styles.moreDetails}>More Details</div>
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
            src="/typcnthsmalloutline.svg"
          />
          <div className={styles.small}>Small</div>
          <div className={styles.quickTasks}>Quick Tasks</div>
        </div>
        <div className={styles.input1}>
          <img
            className={styles.typcnthSmallOutlineIcon}
            alt=""
            src="/typcnthsmalloutline3.svg"
          />
          <div className={styles.small}>Medium</div>
          <div className={styles.quickTasks}>Well defined projects</div>
        </div>
        <div className={styles.input1}>
          <img
            className={styles.typcnthSmallOutlineIcon}
            alt=""
            src="/typcnthsmalloutline4.svg"
          />
          <div className={styles.small}>Large</div>
          <div className={styles.longTermComplex}>Long term, complex tasks</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.howLongItWillTakeParent}>
          <div className={styles.howLongIt}>How long it will take?</div>
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox}>
              <div className={styles.input3}>
                <div className={styles.checkbox1}>
                  <div className={styles.checkboxBase} />
                </div>
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>3 to 6 months</div>
                <div className={styles.supportingText}>
                  Save my login details for next time.
                </div>
              </div>
            </div>
            <div className={styles.checkbox2}>
              <div className={styles.input4}>
                <div className={styles.checkbox1}>
                  <div className={styles.checkboxBase} />
                </div>
              </div>
              <div className={styles.input3}>
                <div className={styles.checkbox1}>
                  <img
                    className={styles.checkboxBaseIcon}
                    alt=""
                    src="/-checkbox-base.svg"
                  />
                </div>
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>1 to 3 months</div>
                <div className={styles.supportingText}>
                  Save my login details for next time.
                </div>
              </div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.input3}>
                <div className={styles.checkbox1}>
                  <div className={styles.checkboxBase} />
                </div>
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Less than 1 month</div>
                <div className={styles.supportingText}>
                  Save my login details for next time.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.to3MonthsParent}>
            <div className={styles.to3Months}>1 to 3 months</div>
            <div className={styles.howLongIt}>
              What level of experience will it need?
            </div>
            <div className={styles.checkboxParent}>
              <div className={styles.checkbox}>
                <div className={styles.input3}>
                  <div className={styles.checkbox1}>
                    <div className={styles.checkboxBase} />
                  </div>
                </div>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text}>Entry</div>
                  <div className={styles.supportingText3}>
                    Looking for someone relatively new to this field
                  </div>
                </div>
              </div>
              <div className={styles.checkbox}>
                <div className={styles.input3}>
                  <div className={styles.checkbox1}>
                    <div className={styles.checkboxBase} />
                  </div>
                </div>
                <div className={styles.input4}>
                  <div className={styles.checkbox1}>
                    <img
                      className={styles.checkboxBaseIcon}
                      alt=""
                      src="/-checkbox-base.svg"
                    />
                  </div>
                </div>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text}>Intermediate</div>
                  <div className={styles.supportingText4}>
                    Looking for substantial experience in this field
                  </div>
                </div>
              </div>
              <div className={styles.checkbox}>
                <div className={styles.input3}>
                  <div className={styles.checkbox1}>
                    <div className={styles.checkboxBase} />
                  </div>
                </div>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text}>Expert</div>
                  <div className={styles.supportingText3}>
                    Looking for comprehensive and deep expertise in this field
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modalActions}>
          <div className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.text6}>Back</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.buttonBase1}>
              <div className={styles.text6}>Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateForm1;
