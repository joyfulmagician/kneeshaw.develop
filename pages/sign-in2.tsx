import type { NextPage } from "next";
import SignInForm from "../components/sign-in-form";
import styles from "./sign-in2.module.css";

const SignIn2: NextPage = () => {
  return (
    <div className={styles.signIn}>
      <SignInForm
        dimensions="/icongoogle3.svg"
        titleBackgroundColor="#f8fafc"
        kneeshawIsHappyLetterSpacing="unset"
        kneeshawIsHappyColor="#090914"
        formLetterSpacing="0.08em"
        formColor="#52525b"
        enterYourEmailBorder="1px solid var(--color-silver-200)"
        enterYourEmailBackgroundColor="#fff"
        createPassColor="#52525b"
        enterYourPasswordBorder="1px solid var(--color-silver-200)"
        enterYourPasswordBackgroundColor="#fff"
        forgotPassColor="#52525b"
        rememberMeBorder="1px solid var(--color-lightslategray-100)"
        forgotPasswordColor="#090914"
        iconGoogleBackgroundColor="#f8fafc"
        iconGoogleBorder="1px solid var(--color-silver-200)"
        dontHaveAnContainerColor="#1e293b"
        signUpColor="#71717a"
      />
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

export default SignIn2;
