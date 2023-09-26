import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./register-container.module.css";

type RegisterContainerType = {
  /** Style props */
  developerBackgroundColor?: CSSProperties["backgroundColor"];
  buttonPrimaryColor?: CSSProperties["color"];
  gamerBackgroundColor?: CSSProperties["backgroundColor"];
  formColor?: CSSProperties["color"];
  buttonPrimaryHeight?: CSSProperties["height"];
  firstNameHeight?: CSSProperties["height"];
};

const RegisterContainer: NextPage<RegisterContainerType> = ({
  developerBackgroundColor,
  buttonPrimaryColor,
  gamerBackgroundColor,
  formColor,
  buttonPrimaryHeight,
  firstNameHeight,
}) => {
  const buttonPrimary14Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: developerBackgroundColor,
    };
  }, [developerBackgroundColor]);

  const developerStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonPrimaryColor,
    };
  }, [buttonPrimaryColor]);

  const buttonPrimary15Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: gamerBackgroundColor,
    };
  }, [gamerBackgroundColor]);

  const gamerStyle: CSSProperties = useMemo(() => {
    return {
      color: formColor,
    };
  }, [formColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: buttonPrimaryHeight,
    };
  }, [buttonPrimaryHeight]);

  const buttonPrimary16Style: CSSProperties = useMemo(() => {
    return {
      height: firstNameHeight,
    };
  }, [firstNameHeight]);

  return (
    <div className={styles.signIn}>
      <div className={styles.title}>
        <b className={styles.welcomeToKneeshaw}>Welcome to Kneeshaw!</b>
        <div className={styles.letsCreateYour}>Let’s create your account</div>
      </div>
      <div className={styles.buttonprimaryParent}>
        <div className={styles.buttonprimary} style={buttonPrimary14Style}>
          <div className={styles.developer} style={developerStyle}>
            Developer
          </div>
        </div>
        <div className={styles.buttonprimary1} style={buttonPrimary15Style}>
          <div className={styles.developer} style={gamerStyle}>
            Gamer
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.frameParent}>
          <div className={styles.buttonprimaryGroup} style={frameDiv1Style}>
            <div className={styles.buttonprimary2} style={buttonPrimary16Style}>
              <div className={styles.firstName}>First name</div>
            </div>
            <div className={styles.neverShownTo}>
              Never shown to the public.
            </div>
          </div>
          <div className={styles.buttonprimaryContainer}>
            <div className={styles.buttonprimary3}>
              <div className={styles.firstName}>Last name</div>
            </div>
            <div className={styles.neverShownTo1}>
              Never shown to the public.
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.buttonprimary4}>
            <div className={styles.firstName}>Enter your email</div>
          </div>
          <div className={styles.neverShownTo2}>Never shown to the public.</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.buttonprimary2}>
            <div className={styles.firstName}>Create username</div>
          </div>
          <div className={styles.idealUsernameIs}>
            Ideal username is short, unique with no spaces
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.buttonprimary2}>
            <div className={styles.firstName}>Create password</div>
          </div>
          <div className={styles.forgotPass}>
            <div
              className={styles.atLeast8}
            >{`At least 8 characters, Aa, 123, &#`}</div>
            <div className={styles.show}>Show</div>
          </div>
        </div>
        <div className={styles.byRegisteringYouContainer}>
          <span>{`By registering, you agree to our `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy</span>
          <span>{` & `}</span>
          <span className={styles.privacyPolicy}>Terms of Service.</span>
        </div>
        <div className={styles.buttonprimary7}>
          <div className={styles.developer}>Create your account</div>
        </div>
        <div className={styles.buttonprimary8}>
          <img className={styles.icongoogle} alt="" src="/icongoogle.svg" />
          <div className={styles.developer}>Sign up with Google</div>
        </div>
        <div className={styles.alreadyHaveAnContainer}>
          <span>{`Already have an account? `}</span>
          <span className={styles.privacyPolicy}>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
