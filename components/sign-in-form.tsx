import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./sign-in-form.module.css";

type SignInFormType = {
  dimensions?: string;

  /** Style props */
  titleBackgroundColor?: CSSProperties["backgroundColor"];
  kneeshawIsHappyLetterSpacing?: CSSProperties["letterSpacing"];
  kneeshawIsHappyColor?: CSSProperties["color"];
  formLetterSpacing?: CSSProperties["letterSpacing"];
  formColor?: CSSProperties["color"];
  enterYourEmailBorder?: CSSProperties["border"];
  enterYourEmailBackgroundColor?: CSSProperties["backgroundColor"];
  createPassColor?: CSSProperties["color"];
  enterYourPasswordBorder?: CSSProperties["border"];
  enterYourPasswordBackgroundColor?: CSSProperties["backgroundColor"];
  forgotPassColor?: CSSProperties["color"];
  rememberMeBorder?: CSSProperties["border"];
  forgotPasswordColor?: CSSProperties["color"];
  iconGoogleBackgroundColor?: CSSProperties["backgroundColor"];
  iconGoogleBorder?: CSSProperties["border"];
  dontHaveAnContainerColor?: CSSProperties["color"];
  signUpColor?: CSSProperties["color"];
};

const SignInForm: NextPage<SignInFormType> = ({
  dimensions,
  titleBackgroundColor,
  kneeshawIsHappyLetterSpacing,
  kneeshawIsHappyColor,
  formLetterSpacing,
  formColor,
  enterYourEmailBorder,
  enterYourEmailBackgroundColor,
  createPassColor,
  enterYourPasswordBorder,
  enterYourPasswordBackgroundColor,
  forgotPassColor,
  rememberMeBorder,
  forgotPasswordColor,
  iconGoogleBackgroundColor,
  iconGoogleBorder,
  dontHaveAnContainerColor,
  signUpColor,
}) => {
  const signInStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: titleBackgroundColor,
    };
  }, [titleBackgroundColor]);

  const welcomeBackStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: kneeshawIsHappyLetterSpacing,
      color: kneeshawIsHappyColor,
    };
  }, [kneeshawIsHappyLetterSpacing, kneeshawIsHappyColor]);

  const kneeshawIsHappyStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: formLetterSpacing,
      color: formColor,
    };
  }, [formLetterSpacing, formColor]);

  const buttonPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      border: enterYourEmailBorder,
      backgroundColor: enterYourEmailBackgroundColor,
    };
  }, [enterYourEmailBorder, enterYourEmailBackgroundColor]);

  const enterYourEmailStyle: CSSProperties = useMemo(() => {
    return {
      color: createPassColor,
    };
  }, [createPassColor]);

  const buttonPrimary1Style: CSSProperties = useMemo(() => {
    return {
      border: enterYourPasswordBorder,
      backgroundColor: enterYourPasswordBackgroundColor,
    };
  }, [enterYourPasswordBorder, enterYourPasswordBackgroundColor]);

  const enterYourPasswordStyle: CSSProperties = useMemo(() => {
    return {
      color: forgotPassColor,
    };
  }, [forgotPassColor]);

  const shapeStyle: CSSProperties = useMemo(() => {
    return {
      border: rememberMeBorder,
    };
  }, [rememberMeBorder]);

  const rememberMeStyle: CSSProperties = useMemo(() => {
    return {
      color: forgotPasswordColor,
    };
  }, [forgotPasswordColor]);

  const buttonPrimary2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: iconGoogleBackgroundColor,
      border: iconGoogleBorder,
    };
  }, [iconGoogleBackgroundColor, iconGoogleBorder]);

  const signInWithStyle: CSSProperties = useMemo(() => {
    return {
      color: dontHaveAnContainerColor,
    };
  }, [dontHaveAnContainerColor]);

  const dontHaveAnStyle: CSSProperties = useMemo(() => {
    return {
      color: signUpColor,
    };
  }, [signUpColor]);

  return (
    <div className={styles.signIn} style={signInStyle}>
      <div className={styles.title}>
        <b className={styles.welcomeBack} style={welcomeBackStyle}>
          Welcome back!
        </b>
        <div className={styles.kneeshawIsHappy} style={kneeshawIsHappyStyle}>
          Kneeshaw is happy to see you return.
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.buttonprimary} style={buttonPrimaryStyle}>
          <div className={styles.enterYourEmail} style={enterYourEmailStyle}>
            Enter your email
          </div>
        </div>
        <div className={styles.createPass}>
          <div className={styles.buttonprimary1} style={buttonPrimary1Style}>
            <div
              className={styles.enterYourEmail}
              style={enterYourPasswordStyle}
            >
              Enter your password
            </div>
          </div>
          <div className={styles.forgotPass}>
            <div className={styles.check}>
              <div className={styles.shape} style={shapeStyle} />
              <div className={styles.rememberMe} style={rememberMeStyle}>
                Remember me
              </div>
            </div>
            <div className={styles.forgotPassword}>Forgot password?</div>
          </div>
        </div>
        <div className={styles.buttonprimary2}>
          <div className={styles.signInWith}>Sign In</div>
        </div>
        <div className={styles.buttonprimary3} style={buttonPrimary2Style}>
          <img className={styles.icongoogle} alt="" src={dimensions} />
          <div className={styles.signInWith} style={signInWithStyle}>
            Sign in with Google
          </div>
        </div>
        <div className={styles.dontHaveAnContainer}>
          <span style={dontHaveAnStyle}>{`Don't have an account? `}</span>
          <span className={styles.signUp}>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
