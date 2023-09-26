import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./profile-container.module.css";

type ProfileContainerType = {
  dimensionCode?: string;
  dimensionCodeImageUrl?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const ProfileContainer: NextPage<ProfileContainerType> = ({
  dimensionCode,
  dimensionCodeImageUrl,
  propColor,
  propColor1,
}) => {
  const myProfileStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const settingsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.settingsInner}>
      <div className={styles.frameParent}>
        <div className={styles.vuesaxlinearhomeParent}>
          <img
            className={styles.vuesaxlinearhomeIcon}
            alt=""
            src={dimensionCode}
          />
          <div className={styles.myProfile} style={myProfileStyle}>
            My Profile
          </div>
        </div>
        <div className={styles.vuesaxlinearhomeParent}>
          <div className={styles.shoppingBagWrapper}>
            <img
              className={styles.vuesaxlinearhomeIcon}
              alt=""
              src="/shopping-bag1.svg"
            />
          </div>
          <div className={styles.myProfile}>Shopping Card</div>
          <div className={styles.badge}>
            <div className={styles.div}>0</div>
          </div>
        </div>
        <div className={styles.vuesaxlinearhomeParent}>
          <img
            className={styles.vuesaxlinearhomeIcon}
            alt=""
            src="/vuesaxlineardocumenttext1.svg"
          />
          <div className={styles.myProfile}>Request Quote</div>
        </div>
        <div className={styles.vuesaxoutlinesetting2Parent}>
          <img
            className={styles.vuesaxlinearhomeIcon}
            alt=""
            src={dimensionCodeImageUrl}
          />
          <div className={styles.myProfile} style={settingsStyle}>
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
