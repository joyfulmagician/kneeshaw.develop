import type { NextPage } from "next";
import styles from "./get-it-now.module.css";

const GetItNow: NextPage = () => {
  return (
    <div className={styles.getItNow}>
      <div className={styles.input}>
        <div className={styles.content}>
          <img className={styles.mailIcon} alt="" src="/mail1.svg" />
          <div className={styles.text}>1</div>
        </div>
        <img
          className={styles.unfoldMoreBlack24dp1Icon}
          alt=""
          src="/unfold-more-black-24dp-1.svg"
        />
      </div>
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text1}>Add to Cart</div>
        </div>
      </div>
      <b className={styles.titanSagaChains}>Titan Saga: Chains of Kronos</b>
      <div className={styles.itIsA}>
        It is a turn-based RPG (role-playing game) that takes place in a fantasy
        world filled with magic and mythical creatures. The game features a deep
        and immersive story, with players taking on the role of a hero tasked
        with saving the world from destruction.
      </div>
      <b className={styles.totalPrice}>{`Total Price: `}</b>
      <b className={styles.quantity}>Quantity</b>
      <b className={styles.usd}>$ 123.00 USD</b>
      <img className={styles.image13Icon} alt="" src="/image-133@2x.png" />
      <div className={styles.getItNowChild} />
      <div className={styles.getItNowItem} />
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
                src="/shopping-bag3.svg"
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
              <img
                className={styles.unfoldMoreBlack24dp1Icon}
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className={styles.headerChild} />
        </div>
      </div>
    </div>
  );
};

export default GetItNow;
