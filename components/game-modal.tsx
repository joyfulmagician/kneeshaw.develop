import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./game-modal.module.css";

type GameModalType = {
  imageDimensions?: string;
  gameCoverImageUrl?: string;
  thumbnailImageUrl?: string;
  purchaseStatus?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
};

const GameModal: NextPage<GameModalType> = ({
  imageDimensions,
  gameCoverImageUrl,
  thumbnailImageUrl,
  purchaseStatus,
  propLeft,
  propWidth,
  propBorderRadius,
  propAlignSelf,
  propColor,
}) => {
  const modalStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const image13IconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const supportingTextStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.modal} style={modalStyle}>
      <div className={styles.content}>
        <img
          className={styles.image13Icon}
          alt=""
          src={imageDimensions}
          style={image13IconStyle}
        />
        <div className={styles.textParent} style={frameDiv2Style}>
          <b className={styles.text}>{gameCoverImageUrl}</b>
          <div className={styles.textAndSupportingText}>
            <img
              className={styles.fluentcheckmark12RegularIcon}
              alt=""
              src={thumbnailImageUrl}
            />
            <div className={styles.supportingText} style={supportingTextStyle}>
              {purchaseStatus}
            </div>
          </div>
        </div>
        <div className={styles.modalActions}>
          <div className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.text1}>View details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
