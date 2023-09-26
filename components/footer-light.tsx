import type { NextPage } from "next";
import styles from "./footer-light.module.css";

const FooterLight: NextPage = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.footerItem} />
      <div className={styles.kneeshawDevelomentAll}>
        © 2022 Kneeshaw Develoment All rights reserved
      </div>
      <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
      <div className={styles.icons}>
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src="/akariconslinkedinfill5.svg"
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src="/akariconstwitterfill4.svg"
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src="/phredditlogofill3.svg"
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src="/risteamfill5.svg"
        />
        <img
          className={styles.akarIconslinkedinFill}
          alt=""
          src="/mdiyoutube5.svg"
        />
      </div>
      <b className={styles.joinOurNewsletter}>Join our newsletter</b>
      <div className={styles.subscribe}>
        <div className={styles.subscribeChild} />
        <div className={styles.subscribeItem} />
        <div className={styles.subscribe1}>Subscribe</div>
        <div className={styles.yourEmail}>Your email</div>
      </div>
      <div className={styles.privacy}>
        <div className={styles.terms}>Terms</div>
        <div className={styles.terms}>Privacy</div>
        <div className={styles.terms}>Cookies</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.games}>Games</div>
        <div className={styles.games}>Blog</div>
        <div className={styles.games}>Services</div>
        <div className={styles.games}>About Us</div>
        <div className={styles.games}>Contact us</div>
      </div>
    </section>
  );
};

export default FooterLight;
