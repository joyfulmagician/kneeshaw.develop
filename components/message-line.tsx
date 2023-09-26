import type { NextPage } from "next";
import styles from "./message-line.module.css";

const MessageLine: NextPage = () => {
  return (
    <div className={styles.dAvatarParent}>
      <div className={styles.dAvatar}>
        <div className={styles.un}>UN</div>
        <div className={styles.dStatusDot}>
          <div className={styles.badge} />
          <div className={styles.status}>Status</div>
        </div>
      </div>
      <div className={styles.timeMessageBubble}>
        <div className={styles.caesar}>Caesar</div>
        <div className={styles.message}>
          <div className={styles.caesar}>Lorem Ipsum</div>
        </div>
        <div className={styles.am}>4:38 AM</div>
      </div>
    </div>
  );
};

export default MessageLine;
