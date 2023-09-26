import type { NextPage } from "next";
import styles from "./forgot-password1.module.css";

const ForgotPassword1: NextPage = () => {
  return (
    <div className={styles.forgotPassword}>
      <div className={styles.signIn}>
        <div className={styles.title}>
          <b className={styles.noWorries}>No worries</b>
          <div className={styles.forgotPassword1}>Forgot password?</div>
        </div>
        <div className={styles.form}>
          <div className={styles.enterYourEmailThatYouUsedParent}>
            <div className={styles.enterYourEmail}>
              Enter your email that you used to register your account, so we can
              send you a link to reset your password
            </div>
            <div className={styles.buttonprimary}>
              <div className={styles.enterYourEmail1}>Enter your email</div>
            </div>
          </div>
          <div className={styles.buttonprimary1}>
            <div className={styles.sendLink}>Send link</div>
          </div>
          <div className={styles.forgetYourEmailContainer}>
            <span>{`Forget your email? `}</span>
            <span className={styles.tryPhoneNumber}>Try phone number</span>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.header1}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
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
                src="/shopping-bag2.svg"
              />
              <div className={styles.badge}>
                <div className={styles.div}>0</div>
              </div>
            </div>
            <div className={styles.signIn1}>
              <div className={styles.signIn2}>Sign in</div>
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
    </div>
  );
};

export default ForgotPassword1;
