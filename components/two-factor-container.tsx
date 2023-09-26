import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./two-factor-container.module.css";

type TwoFactorContainerType = {
  /** Style props */
  titleBackgroundColor?: CSSProperties["backgroundColor"];
  forgotPasswordLetterSpacing?: CSSProperties["letterSpacing"];
  forgotPasswordColor?: CSSProperties["color"];
  formLetterSpacing?: CSSProperties["letterSpacing"];
  formColor?: CSSProperties["color"];
  frameDivColor?: CSSProperties["color"];
  mdihorizontalLineIconBorder?: CSSProperties["border"];
  mdihorizontalLineIconBackgroundColor?: CSSProperties["backgroundColor"];
  mdihorizontalLineIconBorder1?: CSSProperties["border"];
  mdihorizontalLineIconBackgroundColor1?: CSSProperties["backgroundColor"];
  mdihorizontalLineIconBorder2?: CSSProperties["border"];
  mdihorizontalLineIconBackgroundColor2?: CSSProperties["backgroundColor"];
  mdihorizontalLineIconBorder3?: CSSProperties["border"];
  mdihorizontalLineIconBackgroundColor3?: CSSProperties["backgroundColor"];
  mdihorizontalLineIconBorder4?: CSSProperties["border"];
  mdihorizontalLineIconBackgroundColor4?: CSSProperties["backgroundColor"];
  mdihorizontalLineIconBorder5?: CSSProperties["border"];
  mdihorizontalLineIconBackgroundColor5?: CSSProperties["backgroundColor"];
  mdihorizontalLineIconBorder6?: CSSProperties["border"];
  mdihorizontalLineIconBackgroundColor6?: CSSProperties["backgroundColor"];
  sendAgainColor?: CSSProperties["color"];
};

const TwoFactorContainer: NextPage<TwoFactorContainerType> = ({
  titleBackgroundColor,
  forgotPasswordLetterSpacing,
  forgotPasswordColor,
  formLetterSpacing,
  formColor,
  frameDivColor,
  mdihorizontalLineIconBorder,
  mdihorizontalLineIconBackgroundColor,
  mdihorizontalLineIconBorder1,
  mdihorizontalLineIconBackgroundColor1,
  mdihorizontalLineIconBorder2,
  mdihorizontalLineIconBackgroundColor2,
  mdihorizontalLineIconBorder3,
  mdihorizontalLineIconBackgroundColor3,
  mdihorizontalLineIconBorder4,
  mdihorizontalLineIconBackgroundColor4,
  mdihorizontalLineIconBorder5,
  mdihorizontalLineIconBackgroundColor5,
  mdihorizontalLineIconBorder6,
  mdihorizontalLineIconBackgroundColor6,
  sendAgainColor,
}) => {
  const signIn1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: titleBackgroundColor,
    };
  }, [titleBackgroundColor]);

  const noWorriesStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: forgotPasswordLetterSpacing,
      color: forgotPasswordColor,
    };
  }, [forgotPasswordLetterSpacing, forgotPasswordColor]);

  const forgotPasswordStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: formLetterSpacing,
      color: formColor,
    };
  }, [formLetterSpacing, formColor]);

  const enterYourPhoneStyle: CSSProperties = useMemo(() => {
    return {
      color: frameDivColor,
    };
  }, [frameDivColor]);

  const buttonPrimary3Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder,
      backgroundColor: mdihorizontalLineIconBackgroundColor,
    };
  }, [mdihorizontalLineIconBorder, mdihorizontalLineIconBackgroundColor]);

  const buttonPrimary4Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder1,
      backgroundColor: mdihorizontalLineIconBackgroundColor1,
    };
  }, [mdihorizontalLineIconBorder1, mdihorizontalLineIconBackgroundColor1]);

  const buttonPrimary5Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder2,
      backgroundColor: mdihorizontalLineIconBackgroundColor2,
    };
  }, [mdihorizontalLineIconBorder2, mdihorizontalLineIconBackgroundColor2]);

  const buttonPrimary6Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder3,
      backgroundColor: mdihorizontalLineIconBackgroundColor3,
    };
  }, [mdihorizontalLineIconBorder3, mdihorizontalLineIconBackgroundColor3]);

  const buttonPrimary7Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder4,
      backgroundColor: mdihorizontalLineIconBackgroundColor4,
    };
  }, [mdihorizontalLineIconBorder4, mdihorizontalLineIconBackgroundColor4]);

  const buttonPrimary8Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder5,
      backgroundColor: mdihorizontalLineIconBackgroundColor5,
    };
  }, [mdihorizontalLineIconBorder5, mdihorizontalLineIconBackgroundColor5]);

  const buttonPrimary9Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder6,
      backgroundColor: mdihorizontalLineIconBackgroundColor6,
    };
  }, [mdihorizontalLineIconBorder6, mdihorizontalLineIconBackgroundColor6]);

  const didntReceiveTheStyle: CSSProperties = useMemo(() => {
    return {
      color: sendAgainColor,
    };
  }, [sendAgainColor]);

  return (
    <div className={styles.signIn} style={signIn1Style}>
      <div className={styles.title}>
        <b className={styles.noWorries} style={noWorriesStyle}>
          No worries
        </b>
        <div className={styles.forgotPassword} style={forgotPasswordStyle}>
          Forgot password?
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.enterYourPhoneNumberThatYParent}>
          <div className={styles.enterYourPhone} style={enterYourPhoneStyle}>
            Enter your phone number that you used to register your account, so
            we can send you a code to reset your password
          </div>
          <div className={styles.buttonprimaryParent}>
            <div className={styles.buttonprimary} style={buttonPrimary3Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary4Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary5Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary6Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary7Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary8Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary9Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonprimary7}>
          <div className={styles.sendCode}>Send Code</div>
        </div>
        <div className={styles.didntReceiveTheContainer}>
          <span
            style={didntReceiveTheStyle}
          >{`Didn’t receive the code? `}</span>
          <span className={styles.sendAgain}>Send again</span>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorContainer;
