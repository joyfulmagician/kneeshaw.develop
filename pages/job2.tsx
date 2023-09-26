import type { NextPage } from "next";
import SkillFormContainer1 from "../components/skill-form-container1";
import styles from "./job2.module.css";

const Job2: NextPage = () => {
  return (
    <div className={styles.job2}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.ellipseDiv} />
              <div className={styles.ellipseDiv} />
              <div className={styles.ellipseDiv} />
            </div>
            <div className={styles.showUsYourSkillsParent}>
              <div className={styles.showUsYour}>Show us your skills</div>
              <b className={styles.whatAreThe}>
                What are the main skills required for your work?
              </b>
            </div>
          </div>
          <SkillFormContainer1 />
        </div>
        <img className={styles.psworkCaseIcon} alt="" src="/psworkcase.svg" />
        <img
          className={styles.octiconpeople24}
          alt=""
          src="/octiconpeople243.svg"
        />
        <img
          className={styles.galafileDocumentIcon}
          alt=""
          src="/galafiledocument1.svg"
        />
        <img
          className={styles.clarityclockLineIcon}
          alt=""
          src="/clarityclockline1.svg"
        />
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
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
          </div>
          <div className={styles.headerChild} />
        </div>
      </div>
    </div>
  );
};

export default Job2;
