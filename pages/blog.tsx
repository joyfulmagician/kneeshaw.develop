import type { NextPage } from "next";
import ContentCarousel from "../components/content-carousel";
import styles from "./blog.module.css";

const Blog: NextPage = () => {
  return (
    <div className={styles.blog}>
      <b className={styles.ourBlog}>Our Blog</b>
      <img className={styles.imageIcon} alt="" src="/image1.svg" />
      <div className={styles.insightsNewsAnd}>
        Insights, News, and Tips to Level Up Your Gaming Experience
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.footerItem} />
        <div className={styles.kneeshawDevelomentAll}>
          © 2022 Kneeshaw Develoment All rights reserved
        </div>
        <img className={styles.logoWhite1} alt="" src="/logo-white-11@2x.png" />
        <div className={styles.icons}>
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/akariconslinkedinfill1.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/akariconstwitterfill1.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/phredditlogofill.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/risteamfill1.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/mdiyoutube1.svg"
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
      </div>
      <ContentCarousel />
      <div className={styles.pages}>
        <div className={styles.pagesCount}>
          <div className={styles.pagesCountChild} />
          <div className={styles.pagesCountItem} />
          <div className={styles.pagesCountChild} />
          <div className={styles.pagesCountChild} />
          <div className={styles.pagesCountChild} />
          <div className={styles.pagesCountChild} />
          <div className={styles.pagesCountChild} />
          <div className={styles.pagesCountChild} />
        </div>
        <div className={styles.arrowParent}>
          <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
          <div className={styles.div}>1</div>
          <div className={styles.div1}>2</div>
          <div className={styles.div2}>3</div>
          <div className={styles.div3}>...</div>
          <div className={styles.div4}>13</div>
          <div className={styles.div5}>14</div>
          <img className={styles.arrowIcon1} alt="" src="/arrow1.svg" />
        </div>
      </div>
      <div className={styles.shape} />
      <div className={styles.shape1} />
      <div className={styles.header}>
        <div className={styles.header1}>
          <img
            className={styles.logoWhite11}
            alt=""
            src="/logo-white-1@2x.png"
          />
          <div className={styles.menu1}>
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
                src="/shopping-bag.svg"
              />
              <div className={styles.badge}>
                <div className={styles.div6}>0</div>
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
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className={styles.headerChild} />
      </div>
    </div>
  );
};

export default Blog;
