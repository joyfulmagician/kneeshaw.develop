import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./two-factor-auth-container.module.css";

type TwoFactorAuthContainerType = {
  /** Style props */
  titleBackgroundColor?: CSSProperties["backgroundColor"];
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
  didntReceiveTheColor?: CSSProperties["color"];
};

const TwoFactorAuthContainer: NextPage<TwoFactorAuthContainerType> = ({
  titleBackgroundColor,
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
  didntReceiveTheColor,
}) => {
  const signIn2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: titleBackgroundColor,
    };
  }, [titleBackgroundColor]);

  const noWorries1Style: CSSProperties = useMemo(() => {
    return {
      letterSpacing: formLetterSpacing,
      color: formColor,
    };
  }, [formLetterSpacing, formColor]);

  const pleaseEnterTheStyle: CSSProperties = useMemo(() => {
    return {
      color: frameDivColor,
    };
  }, [frameDivColor]);

  const buttonPrimary10Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder,
      backgroundColor: mdihorizontalLineIconBackgroundColor,
    };
  }, [mdihorizontalLineIconBorder, mdihorizontalLineIconBackgroundColor]);

  const buttonPrimary11Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder1,
      backgroundColor: mdihorizontalLineIconBackgroundColor1,
    };
  }, [mdihorizontalLineIconBorder1, mdihorizontalLineIconBackgroundColor1]);

  const buttonPrimary12Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder2,
      backgroundColor: mdihorizontalLineIconBackgroundColor2,
    };
  }, [mdihorizontalLineIconBorder2, mdihorizontalLineIconBackgroundColor2]);

  const buttonPrimary13Style: CSSProperties = useMemo(() => {
    return {
      border: mdihorizontalLineIconBorder3,
      backgroundColor: mdihorizontalLineIconBackgroundColor3,
    };
  }, [mdihorizontalLineIconBorder3, mdihorizontalLineIconBackgroundColor3]);

  const didntReceiveTheContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: didntReceiveTheColor,
    };
  }, [didntReceiveTheColor]);

  return (
    <div className={styles.signIn} style={signIn2Style}>
      <div className={styles.title}>
        <b className={styles.noWorries} style={noWorries1Style}>
          No worries
        </b>
      </div>
      <div className={styles.form}>
        <div className={styles.pleaseEnterTheCodeThatWeParent}>
          <div className={styles.pleaseEnterThe} style={pleaseEnterTheStyle}>
            Please enter the code that we just send to your phone
          </div>
          <div className={styles.buttonprimaryParent}>
            <div className={styles.buttonprimary} style={buttonPrimary10Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary11Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary12Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
            <div className={styles.buttonprimary} style={buttonPrimary13Style}>
              <img
                className={styles.mdihorizontalLineIcon}
                alt=""
                src="/mdihorizontalline.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonprimary4}>
          <div className={styles.submit}>Submit</div>
        </div>
        <div
          className={styles.didntReceiveTheContainer}
          style={didntReceiveTheContainerStyle}
        >
          <p
            className={styles.didntReceiveThe}
          >{`Didn’t receive the code? `}</p>
          <p className={styles.didntReceiveThe}>
            After 1:45 we automatically will send you again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuthContainer;
