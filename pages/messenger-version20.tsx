import type { NextPage } from "next";
import MessageLine from "../components/message-line";
import styles from "./messenger-version20.module.css";

const MessengerVersion20: NextPage = () => {
  return (
    <div className={styles.messengerVersion20}>
      <div className={styles.opacity} />
      <div className={styles.header}>
        <div className={styles.header1}>
          <img
            className={styles.logoWhite1}
            alt=""
            src="/logo-white-1@2x.png"
          />
          <div className={styles.menu}>
            <div className={styles.games}>Games</div>
            <div className={styles.games}>Blog</div>
            <div className={styles.games}>Services</div>
            <div className={styles.games}>Job</div>
            <div className={styles.games}>About Us</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.shoppingBagParent}>
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shopping-bag.svg"
              />
              <div className={styles.badge}>
                <div className={styles.div}>0</div>
              </div>
            </div>
            <div className={styles.signIn}>
              <div className={styles.signIn1}>Sign in</div>
              <div className={styles.signInChild} />
              <div className={styles.signUp}>Sign up</div>
            </div>
            <div className={styles.profile}>
              <div className={styles.avatar}>
                <div className={styles.bg} />
                <div className={styles.es}>ES</div>
              </div>
              <div className={styles.emeryStanton}>Emery Stanton</div>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.image}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
        <b className={styles.titanSagaChains}>Titan Saga: Chains of Kronos</b>
      </div>
      <div className={styles.tab}>
        <div className={styles.tabs}>
          <div className={styles.basetabstext}>
            <div className={styles.overview}>Overview</div>
          </div>
        </div>
        <div className={styles.tabs1}>
          <div className={styles.basetabstext1}>
            <div className={styles.overview}>Messages</div>
          </div>
          <div className={styles.basetabsselection} />
        </div>
        <div className={styles.tabs}>
          <div className={styles.basetabstext}>
            <div className={styles.overview}>Details</div>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.basetabstext}>
            <div className={styles.overview}>Billing</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <MessageLine />
        <div className={styles.messageBubble}>
          <div className={styles.message}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              laoreet velit vitae quam dapibus, a porttitor lorem tempus. Etiam
              vel lacinia diam, vitae tristique odio.
            </div>
          </div>
          <div className={styles.am}>8:54 AM</div>
        </div>
        <div className={styles.mTagBadge}>
          <img
            className={styles.iIconcheckSwap}
            alt=""
            src="/iiconcheck--swap1.svg"
          />
          <div className={styles.tag}>4 March</div>
          <img
            className={styles.iIconcheckSwap}
            alt=""
            src="/iiconcheck--swap1.svg"
          />
        </div>
        <div className={styles.messageBubble1}>
          <div className={styles.dAvatar}>
            <div className={styles.un}>UN</div>
            <div className={styles.dStatusDot}>
              <div className={styles.badge1} />
              <div className={styles.status}>Status</div>
            </div>
          </div>
          <div className={styles.nameTimeMessage}>
            <div className={styles.timeMessage}>
              <div className={styles.tag}>Caesar</div>
              <div className={styles.message1}>
                <div className={styles.tag}>Lorem ipsum dolor sit amet.</div>
              </div>
              <div className={styles.pm}>1:05 PM</div>
            </div>
          </div>
        </div>
        <div className={styles.messageBubble2}>
          <div className={styles.iIconcircleFillSwapParent}>
            <img
              className={styles.iIconcircleFillSwap}
              alt=""
              src="/iiconcirclefill--swap.svg"
            />
            <div className={styles.message}>
              <div className={styles.loremIpsumDolor2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              </div>
            </div>
          </div>
          <div className={styles.am}>8:33 PM</div>
        </div>
        <div className={styles.loadingDotFrameParent}>
          <div className={styles.loadingDotFrame}>
            <div className={styles.loadingDot} />
          </div>
          <div className={styles.loadingDotFrame1}>
            <div className={styles.loadingDot1} />
          </div>
          <div className={styles.loadingDotFrame}>
            <div className={styles.loadingDot} />
          </div>
        </div>
        <div className={styles.dMessenger}>
          <div className={styles.textContainer}>
            <div className={styles.partsdInputText}>
              <div className={styles.status}>Text</div>
              <div className={styles.caret}>
                <div className={styles.caret1} />
              </div>
              <div className={styles.placeholder}>Write a message...</div>
            </div>
          </div>
          <div className={styles.dDividerBorderSeparator} />
          <div className={styles.footer}>
            <div className={styles.add}>
              <div className={styles.dIconButton}>
                <img
                  className={styles.iIconmicrophoneSwap}
                  alt=""
                  src="/iiconmicrophone--swap.svg"
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
            <div className={styles.dButton}>
              <img
                className={styles.iIconcircleSwap}
                alt=""
                src="/iiconcircle--swap1.svg"
              />
              <div className={styles.tag}>Send</div>
              <img
                className={styles.iIconcircleSwap}
                alt=""
                src="/iiconcircle--swap1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerVersion20;
