import type { NextPage } from "next";
import styles from "./conversation-container.module.css";

const ConversationContainer: NextPage = () => {
  return (
    <div className={styles.message}>
      <div className={styles.message1}>
        <div className={styles.avatar}>
          <div className={styles.avatarOnlineIndicator} />
        </div>
        <div className={styles.content}>
          <div className={styles.sendTime}>
            <span className={styles.yesterday}>Yesterday</span>
            <span> 9:41</span>
          </div>
          <div className={styles.input}>
            <div className={styles.content1}>
              <img
                className={styles.fileUploadIcon}
                alt=""
                src="/-file-upload-icon.svg"
              />
              <div className={styles.content2}>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text}>
                    Latest design screenshot.jpg
                  </div>
                  <div className={styles.supportingText}>1.2 MB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.messagebubbleWrapper}>
        <div className={styles.messagebubble}>
          <div className={styles.messageSendTime}>
            <div className={styles.sendTime}>
              <span className={styles.yesterday}>Yesterday</span>
              <span> 9:41</span>
            </div>
            <div className={styles.message2}>
              <div className={styles.avatar1}>
                <div className={styles.avatarOnlineIndicator} />
              </div>
              <div className={styles.content3}>
                <div className={styles.input1}>
                  <div className={styles.content4}>
                    <div className={styles.content2}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.text1}>
                          That sounds great! I’m in. What time works for you?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.message3}>
        <div className={styles.avatar}>
          <div className={styles.avatarOnlineIndicator} />
        </div>
        <div className={styles.content6}>
          <div className={styles.sendTime}>
            <span className={styles.yesterday}>Yesterday</span>
            <span> 9:41</span>
          </div>
          <div className={styles.input2}>
            <div className={styles.content7}>
              <div className={styles.content2}>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text1}>
                    That sounds great! I’m in. What time works for you?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.message4}>
        <div className={styles.avatar}>
          <div className={styles.avatarOnlineIndicator} />
        </div>
        <div className={styles.content9}>
          <div className={styles.input3}>
            <div className={styles.loadingDotFrame}>
              <div className={styles.loadingDot} />
            </div>
            <div className={styles.loadingDotFrame1}>
              <div className={styles.loadingDot1} />
            </div>
            <div className={styles.loadingDotFrame2}>
              <div className={styles.loadingDot} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dScrollbar}>
        <div className={styles.slider} />
      </div>
    </div>
  );
};

export default ConversationContainer;
