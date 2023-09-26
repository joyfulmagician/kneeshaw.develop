import type { NextPage } from "next";
import styles from "./profile-settings-container.module.css";

const ProfileSettingsContainer: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.emailParent}>
          <div className={styles.email}>Email</div>
          <div className={styles.emerystantongmailcom}>
            emery.stanton@gmail.com
          </div>
        </div>
        <div className={styles.changeEmailWrapper}>
          <div className={styles.emerystantongmailcom}>Change email</div>
        </div>
      </div>
      <div className={styles.r}>
        <div className={styles.email}>Password</div>
        <div className={styles.changePassword}>Change password</div>
      </div>
      <div className={styles.r}>
        <div className={styles.email}>Payment</div>
        <div className={styles.changePassword}>Change payment method</div>
        <div className={styles.mastercard}>
          <img className={styles.visaIcon} alt="" src="/visa.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsContainer;
