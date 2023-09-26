import type { NextPage } from "next";
import CouponCard from "../components/coupon-card";
import styles from "./index.module.css";

const OverviewVersion20: NextPage = () => {
  return (
    <div className={styles.overviewVersion20}>
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
      <div className={styles.tab}>
        <div className={styles.tabs}>
          <div className={styles.basetabstext}>
            <div className={styles.tabLabel}>Overview</div>
          </div>
          <div className={styles.basetabsselection} />
        </div>
        <div className={styles.tabs1}>
          <div className={styles.basetabstext1}>
            <div className={styles.tabLabel}>Messages</div>
          </div>
        </div>
        <div className={styles.tabs1}>
          <div className={styles.basetabstext1}>
            <div className={styles.tabLabel}>Details</div>
          </div>
        </div>
        <div className={styles.tabs1}>
          <div className={styles.basetabstext1}>
            <div className={styles.tabLabel}>Billing</div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.image}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
        <b className={styles.titanSagaChains}>Titan Saga: Chains of Kronos</b>
      </div>
      <CouponCard />
      <b className={styles.titanSagaChains1}>Titan Saga: Chains of Kronos</b>
      <div className={styles.itIsA}>
        It is a turn-based RPG (role-playing game) that takes place in a fantasy
        world filled with magic and mythical creatures. The game features a deep
        and immersive story, with players taking on the role of a hero tasked
        with saving the world from destruction.
      </div>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <div className={styles.modalActions}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>View Game</div>
          <img className={styles.icon} alt="" src="/majesticonsopen.svg" />
        </div>
        <div className={styles.buttonBase1}>
          <div className={styles.text1}>Download</div>
          <img
            className={styles.icon}
            alt=""
            src="/materialsymbolsdownload.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewVersion20;
