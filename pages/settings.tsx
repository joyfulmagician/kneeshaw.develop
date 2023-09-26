import type { NextPage } from "next";
import ProfileSettingsContainer from "../components/profile-settings-container";
import ProfileContainer from "../components/profile-container";
import styles from "./settings.module.css";

const Settings: NextPage = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.settingsParent}>
            <div className={styles.settings1}>Settings</div>
            <div className={styles.thisInformationWill}>
              This information will be changed on your profile.
            </div>
          </div>
        </div>
        <ProfileSettingsContainer />
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
          <div className={styles.frameGroup}>
            <div className={styles.shoppingBagParent}>
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shopping-bag.svg"
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
        </div>
      </div>
      <ProfileContainer
        dimensionCode="/vuesaxlinearhome1.svg"
        dimensionCodeImageUrl="/vuesaxoutlinesetting21.svg"
      />
    </div>
  );
};

export default Settings;
