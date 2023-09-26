import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./feature-container.module.css";

type FeatureContainerType = {
  gameFeatures?: string;
  description?: string;
  storylineDescription?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
};

const FeatureContainer: NextPage<FeatureContainerType> = ({
  gameFeatures,
  description,
  storylineDescription,
  propBorderRadius,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.mdigamepadCircleLeftParent}>
        <img
          className={styles.mdigamepadCircleLeftIcon}
          alt=""
          src={gameFeatures}
        />
        <div className={styles.singlePlayerCampaign}>{description}</div>
      </div>
      <div className={styles.immerseYourselfOn}>{storylineDescription}</div>
    </div>
  );
};

export default FeatureContainer;
