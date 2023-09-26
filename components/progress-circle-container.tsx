import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./progress-circle-container.module.css";

type ProgressCircleContainerType = {
  imageDescription?: string;
  componentDetails?: string;
  percentageValue?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
};

const ProgressCircleContainer: NextPage<ProgressCircleContainerType> = ({
  imageDescription,
  componentDetails,
  percentageValue,
  propLeft,
  propLeft1,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.progressCircle}>
      <img className={styles.ringIcon} alt="" src={imageDescription} />
      <div className={styles.label} style={labelStyle}>
        {componentDetails}
      </div>
      <div className={styles.number} style={numberStyle}>
        {percentageValue}
      </div>
    </div>
  );
};

export default ProgressCircleContainer;
