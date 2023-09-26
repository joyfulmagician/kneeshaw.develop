import type { NextPage } from "next";
import styles from "./job1.module.css";

const Job1: NextPage = () => {
  return (
    <div className={styles.job1}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.frameInner} />
              <div className={styles.frameInner} />
              <div className={styles.frameInner} />
            </div>
            <div className={styles.unleashingYourFreelancingPoParent}>
              <div className={styles.unleashingYourFreelancing}>
                Unleashing Your Freelancing Potential
              </div>
              <b className={styles.letsStartWith}>Let’s start with a title</b>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.writeATitleForYourJobPosParent}>
                <div className={styles.writeATitle}>
                  Write a title for your job post
                </div>
                <div className={styles.input}>
                  <div className={styles.title}>Title</div>
                </div>
              </div>
              <div className={styles.hereAreSomeExamplesOfWorkParent}>
                <div className={styles.hereAreSomeContainer}>
                  <p className={styles.hereAreSome}>
                    Here are some examples of work titles that freelancers
                    commonly use on freelance websites:
                  </p>
                  <ul className={styles.webDeveloperGraphicDesigner}>
                    <li className={styles.webDeveloper}> Web Developer</li>
                    <li className={styles.webDeveloper}>Graphic Designer</li>
                    <li className={styles.webDeveloper}>Content Writer</li>
                    <li className={styles.webDeveloper}>
                      Social Media Manager
                    </li>
                    <li>{`SEO Specialist `}</li>
                  </ul>
                </div>
                <div className={styles.rememberTheseAre}>
                  Remember, these are just examples, and you can customize them
                  based on your specific skills and expertise. It's important to
                  choose a title that accurately represents your capabilities
                  and attracts potential clients in your desired field.
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Next</div>
              </div>
            </div>
          </div>
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
          <div className={styles.frameParent1}>
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

export default Job1;
