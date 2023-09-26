import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./post-container.module.css";

type PostContainerType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const PostContainer: NextPage<PostContainerType> = ({ propTop }) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.topic1}>
      <div className={styles.topic1Child} />
      <div className={styles.patchNotes}>Patch notes</div>
      <b className={styles.contentUpdate042}>Content update 0.4.2</b>
      <div className={styles.forgottenShoreAnd}>
        Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on
        Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games:
        Titan Saga: Chains of Kronos (ACT 1)...
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <b className={styles.readMore}>Read more</b>
      </div>
      <div className={styles.topic1Item} />
      <img className={styles.icon} alt="" src="/2-2@2x.png" style={iconStyle} />
      <img
        className={styles.ssFad1864787e486f5fc10dc2555aIcon}
        alt=""
        src="/ss-fad1864787e486f5fc10dc2555a901505a948a14-1@2x.png"
      />
    </div>
  );
};

export default PostContainer;
