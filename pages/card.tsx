import type { NextPage } from "next";
import GameModal from "../components/game-modal";
import styles from "./card.module.css";

const Card: NextPage = () => {
  return (
    <div className={styles.card}>
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
      <GameModal
        imageDimensions="/image-131@2x.png"
        gameCoverImageUrl="Titan Saga: Chains of Kronos"
        thumbnailImageUrl="/fluentcheckmark12regular.svg"
        purchaseStatus="Purchased"
      />
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.image13} />
          <div className={styles.textParent}>
            <b className={styles.text}>Titan Saga: Chains of Kronos</b>
            <div className={styles.textAndSupportingText}>
              <div className={styles.supportingText}>Purchased</div>
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
      <GameModal
        imageDimensions="/image-132@2x.png"
        gameCoverImageUrl="Old Salt"
        thumbnailImageUrl="/eosiconsloading.svg"
        purchaseStatus="In-Process"
        propLeft="541px"
        propWidth="358px"
        propBorderRadius="18px"
        propAlignSelf="stretch"
        propColor="#667085"
      />
      <div className={styles.modal1}>
        <div className={styles.content}>
          <div className={styles.image131} />
          <div className={styles.textGroup}>
            <b className={styles.text}>Old Salt</b>
            <div className={styles.textAndSupportingText}>
              <div className={styles.supportingText}>Pending, In-Process</div>
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
      <div className={styles.modal2}>
        <div className={styles.content}>
          <div className={styles.image131} />
          <div className={styles.textGroup}>
            <b className={styles.text}>Title</b>
            <div className={styles.textAndSupportingText}>
              <div className={styles.supportingText}>Status</div>
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
      <div className={styles.modal3}>
        <div className={styles.content}>
          <div className={styles.image131} />
          <div className={styles.textGroup}>
            <b className={styles.text}>Title</b>
            <div className={styles.textAndSupportingText}>
              <div className={styles.supportingText}>Status</div>
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
    </div>
  );
};

export default Card;
