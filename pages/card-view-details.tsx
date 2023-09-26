import type { NextPage } from "next";
import PaymentCardContainer from "../components/payment-card-container";
import styles from "./card-view-details.module.css";

const CardViewDetails: NextPage = () => {
  return (
    <div className={styles.cardViewDetails}>
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
        <div className={styles.tabs}>
          <div className={styles.basetabstext}>
            <div className={styles.overview}>Messages</div>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.basetabstext}>
            <div className={styles.overview}>Details</div>
          </div>
        </div>
        <div className={styles.tabs3}>
          <div className={styles.basetabstext3}>
            <div className={styles.overview}>Billing</div>
          </div>
          <div className={styles.basetabsselection} />
        </div>
      </div>
      <div className={styles.modal}>
        <div className={styles.content}>
          <PaymentCardContainer />
        </div>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Edit</div>
        </div>
      </div>
      <div className={styles.modal1}>
        <div className={styles.content1}>
          <div className={styles.textWrapper}>
            <div className={styles.text1}>Billing</div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressBar1}>
              <div className={styles.background} />
              <div className={styles.progress} />
              <div className={styles.tooltip}>
                <div className={styles.content2}>
                  <div className={styles.text2}>10%</div>
                </div>
                <img className={styles.tooltipIcon} alt="" src="/tooltip.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.progressBarParent}>
            <div className={styles.progressBar2}>
              <div className={styles.progressBar3}>
                <div className={styles.background} />
                <div className={styles.progress1} />
              </div>
            </div>
            <div className={styles.paidOutParent}>
              <div className={styles.paidOut}>Paid Out</div>
              <div className={styles.div1}>$20.00</div>
            </div>
          </div>
          <div className={styles.progressBarParent}>
            <div className={styles.progressBar2}>
              <div className={styles.progressBar3}>
                <div className={styles.background} />
                <div className={styles.progress1} />
              </div>
            </div>
            <div className={styles.paidOutParent}>
              <div className={styles.paidOut}>Paid Out</div>
              <div className={styles.div1}>$20.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardViewDetails;
