import type { NextPage } from "next";
import styles from "./chat-box-container.module.css";

const ChatBoxContainer: NextPage = () => {
  return (
    <div className={styles.formboxwrapper}>
      <div className={styles.formbox}>
        <div className={styles.text}>Write a message ....</div>
        <div className={styles.footer}>
          <div className={styles.add}>
            <div className={styles.dIconButton}>
              <img
                className={styles.iIconmicrophoneSwap}
                alt=""
                src="/iiconmicrophone--swap1.svg"
              />
            </div>
            <div className={styles.dIconButton1}>
              <img
                className={styles.iIconmicrophoneSwap}
                alt=""
                src="/iiconpaperclip--swap1.svg"
              />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.text1}>Send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxContainer;
