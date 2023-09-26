import type { NextPage } from "next";
import styles from "./sign-in-error.module.css";

const SignInError: NextPage = () => {
  return (
    <div className={styles.signInError}>
      <div className={styles.signIn}>
        <div className={styles.title}>
          <b className={styles.welcomeBack}>Welcome back!</b>
          <div className={styles.kneeshawIsHappy}>
            Kneeshaw is happy to see you return.
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.buttonprimaryParent}>
            <div className={styles.buttonprimary}>
              <div className={styles.enterYourEmail}>Enter your email</div>
            </div>
            <div className={styles.helperText}>Helper text</div>
          </div>
          <div className={styles.createPass}>
            <div className={styles.buttonprimary1}>
              <div className={styles.enterYourEmail}>Enter your password</div>
            </div>
            <div className={styles.sorryYouveEntered}>
              Sorry, you’ve entered the wrong password!
            </div>
            <div className={styles.forgotPass}>
              <div className={styles.check}>
                <div className={styles.shape} />
                <div className={styles.rememberMe}>Remember me</div>
              </div>
              <div className={styles.forgotPassword}>Forgot password?</div>
            </div>
          </div>
          <div className={styles.buttonprimary2}>
            <div className={styles.signInWith}>Sign In</div>
          </div>
          <div className={styles.buttonprimary3}>
            <img className={styles.icongoogle} alt="" src="/icongoogle3.svg" />
            <div className={styles.signInWith}>Sign in with Google</div>
          </div>
          <div className={styles.dontHaveAnContainer}>
            <span>{`Don't have an account? `}</span>
            <span className={styles.signUp}>Sign up</span>
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
            <div className={styles.signIn2}>
              <div className={styles.signIn3}>Sign in</div>
              <div className={styles.signInChild} />
              <div className={styles.signUp1}>Sign up</div>
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

export default SignInError;
