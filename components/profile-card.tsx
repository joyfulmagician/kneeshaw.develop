import type { NextPage } from "next";
import styles from "./profile-card.module.css";

const ProfileCard: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.myProfileParent}>
          <div className={styles.myProfile}>My Profile</div>
          <div className={styles.thisInformationWill}>
            This information will be displayed on your public profile.
          </div>
        </div>
        <div className={styles.profilePictureParent}>
          <div className={styles.profilePicture}>Profile Picture</div>
          <div className={styles.avatarParent}>
            <div className={styles.avatar}>
              <div className={styles.bg} />
              <div className={styles.es}>ES</div>
            </div>
            <div className={styles.maxFileSize5MbParent}>
              <div className={styles.profilePicture}>Max file size: 5 MB</div>
              <div className={styles.buttonprimary}>
                <div className={styles.changePhoto}>Change Photo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.firstNameParent}>
            <div className={styles.profilePicture}>First Name</div>
            <div className={styles.input}>
              <div className={styles.emery}>Emery</div>
            </div>
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.profilePicture}>Last Name</div>
            <div className={styles.input}>
              <div className={styles.emery}>Stanton</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Save Changes</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
