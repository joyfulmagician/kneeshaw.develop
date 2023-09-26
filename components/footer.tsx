import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

type FooterType = {
  dimensionCode?: string;
  dimensionCodeImageUrl?: string;
  dimensionCodeText?: string;
  dimensionCodeTextAlternat?: string;
  dimensionCodeImageText?: string;

  /** Style props */
  servicesTop?: CSSProperties["top"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propLetterSpacing1?: CSSProperties["letterSpacing"];
  propFontWeight?: CSSProperties["fontWeight"];
  propLetterSpacing2?: CSSProperties["letterSpacing"];
  propLetterSpacing3?: CSSProperties["letterSpacing"];
  propLetterSpacing4?: CSSProperties["letterSpacing"];
  propLetterSpacing5?: CSSProperties["letterSpacing"];
  propLetterSpacing6?: CSSProperties["letterSpacing"];
  propLetterSpacing7?: CSSProperties["letterSpacing"];
  propLetterSpacing8?: CSSProperties["letterSpacing"];
  propLetterSpacing9?: CSSProperties["letterSpacing"];
  propLetterSpacing10?: CSSProperties["letterSpacing"];
  propLetterSpacing11?: CSSProperties["letterSpacing"];
};

const Footer: NextPage<FooterType> = ({
  dimensionCode,
  dimensionCodeImageUrl,
  dimensionCodeText,
  dimensionCodeTextAlternat,
  dimensionCodeImageText,
  servicesTop,
  propLetterSpacing,
  propLetterSpacing1,
  propFontWeight,
  propLetterSpacing2,
  propLetterSpacing3,
  propLetterSpacing4,
  propLetterSpacing5,
  propLetterSpacing6,
  propLetterSpacing7,
  propLetterSpacing8,
  propLetterSpacing9,
  propLetterSpacing10,
  propLetterSpacing11,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: servicesTop,
    };
  }, [servicesTop]);

  const kneeshawDevelomentAllStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  const joinOurNewsletterStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing1,
      fontWeight: propFontWeight,
    };
  }, [propLetterSpacing1, propFontWeight]);

  const subscribeStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing2,
    };
  }, [propLetterSpacing2]);

  const yourEmailStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing3,
    };
  }, [propLetterSpacing3]);

  const termsStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing4,
    };
  }, [propLetterSpacing4]);

  const privacyStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing5,
    };
  }, [propLetterSpacing5]);

  const cookiesStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing6,
    };
  }, [propLetterSpacing6]);

  const gamesStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing7,
    };
  }, [propLetterSpacing7]);

  const blogStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing8,
    };
  }, [propLetterSpacing8]);

  const servicesStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing9,
    };
  }, [propLetterSpacing9]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing10,
    };
  }, [propLetterSpacing10]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing11,
    };
  }, [propLetterSpacing11]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.footerItem} />
      <div
        className={styles.kneeshawDevelomentAll}
        style={kneeshawDevelomentAllStyle}
      >
        © 2022 Kneeshaw Develoment All rights reserved
      </div>
      <img className={styles.logoWhite1} alt="" src="/logo-white-11@2x.png" />
      <div className={styles.icons}>
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src={dimensionCode}
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src={dimensionCodeImageUrl}
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src={dimensionCodeText}
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src={dimensionCodeTextAlternat}
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src={dimensionCodeImageText}
        />
      </div>
      <div className={styles.joinOurNewsletter} style={joinOurNewsletterStyle}>
        Join our newsletter
      </div>
      <div className={styles.subscribe}>
        <div className={styles.subscribeChild} />
        <div className={styles.subscribeItem} />
        <div className={styles.subscribe1} style={subscribeStyle}>
          Subscribe
        </div>
        <div className={styles.yourEmail} style={yourEmailStyle}>
          Your email
        </div>
      </div>
      <div className={styles.privacy}>
        <div className={styles.terms} style={termsStyle}>
          Terms
        </div>
        <div className={styles.terms} style={privacyStyle}>
          Privacy
        </div>
        <div className={styles.terms} style={cookiesStyle}>
          Cookies
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.games} style={gamesStyle}>
          Games
        </div>
        <div className={styles.games} style={blogStyle}>
          Blog
        </div>
        <div className={styles.games} style={servicesStyle}>
          Services
        </div>
        <div className={styles.games} style={aboutUsStyle}>
          About Us
        </div>
        <div className={styles.games} style={contactUsStyle}>
          Contact us
        </div>
      </div>
    </div>
  );
};

export default Footer;
