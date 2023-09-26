import type { NextPage } from "next";
import styles from "./job9.module.css";

const Job9: NextPage = () => {
  return (
    <div className={styles.job9}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.psworkCaseIcon} alt="" src="/psworkcase.svg" />
        <img
          className={styles.octiconpeople24}
          alt=""
          src="/octiconpeople24.svg"
        />
        <img
          className={styles.galafileDocumentIcon}
          alt=""
          src="/galafiledocument.svg"
        />
        <img
          className={styles.clarityclockLineIcon}
          alt=""
          src="/clarityclockline.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
              <div className={styles.frameChild2} />
            </div>
            <div className={styles.moreDetailsParent}>
              <div className={styles.moreDetails}>More Details</div>
              <b className={styles.selectYourPreferred}>
                Select your preferred location
              </b>
            </div>
          </div>
          <div className={styles.inputParent}>
            <div className={styles.input}>
              <img
                className={styles.phglobeDuotoneIcon}
                alt=""
                src="/phglobeduotone.svg"
              />
              <div className={styles.worldwide}>Worldwide</div>
              <div className={styles.quickTasks}>Quick Tasks</div>
            </div>
            <div className={styles.input1}>
              <img
                className={styles.phglobeDuotoneIcon}
                alt=""
                src="/materialsymbolssouthamerica.svg"
              />
              <div className={styles.worldwide}>U.S. only</div>
              <div className={styles.quickTasks}>Well defined projects</div>
            </div>
          </div>
          <div className={styles.selectRegionOrCountryPrefeParent}>
            <div className={styles.selectRegionOr}>
              Select region or country preferences (Optional)
            </div>
            <div className={styles.input2}>
              <div className={styles.select}>Select</div>
              <img
                className={styles.phglobeDuotoneIcon}
                alt=""
                src="/mingcutedownline.svg"
              />
            </div>
            <div className={styles.theseLocationPreferences}>
              These location preferences will be displayed to all candidates,
              but anyone can submit proposals.
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
      </div>
      <div className={styles.header}>
        <div className={styles.header1}>
          <img
            className={styles.logoWhite1}
            alt=""
            src="/logo-white-1@2x.png"
          />
          <div className={styles.menu}>
            <div className={styles.games}>Games</div>
            <div className={styles.games}>Blog</div>
            <div className={styles.games}>Services</div>
            <div className={styles.games}>Job</div>
            <div className={styles.games}>About Us</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.shoppingBagParent}>
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shopping-bag3.svg"
              />
              <div className={styles.badge}>
                <div className={styles.div}>0</div>
              </div>
            </div>
            <div className={styles.signIn}>
              <div className={styles.signIn1}>Sign in</div>
              <div className={styles.signInChild} />
              <div className={styles.signUp}>Sign up</div>
            </div>
            <div className={styles.profile}>
              <div className={styles.avatar}>
                <div className={styles.bg} />
                <div className={styles.es}>ES</div>
              </div>
              <div className={styles.emeryStanton}>Emery Stanton</div>
              <img
                className={styles.phglobeDuotoneIcon}
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className={styles.headerChild} />
        </div>
      </div>
    </div>
  );
};

export default Job9;
