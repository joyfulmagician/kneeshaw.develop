import type { NextPage } from "next";
import ServicesContainer from "../components/services-container";
import Header from "../components/header";
import FooterLight from "../components/footer-light";
import SiteTypeButton from "../components/site-type-button";
import styles from "./landing-page-light.module.css";

const LandingPageLight: NextPage = () => {
  return (
    <div className={styles.landingPageLight}>
      <div className={styles.agencyServicesParent}>
        <h1 className={styles.agencyServices}>Agency Services</h1>
        <div className={styles.areYouLookingContainer}>
          <p className={styles.areYouLooking}>
            Are you looking for a community of gamers and developers to
            collaborate with on your next gaming project?
          </p>
          <p className={styles.areYouLooking}>
            Look no further than Kneeshaw Developments!
          </p>
          <p
            className={styles.areYouLooking}
          >{`Our community is made up of passionate gamers and developers who share the same goal of creating the next big thing in gaming. `}</p>
          <p className={styles.areYouLooking}>
            With access to the latest tools and resources, you'll have
            everything you need to bring your game ideas to life. Join us today
            and let's work together to make gaming history!
          </p>
        </div>
        <button className={styles.buttonprimary}>
          <div className={styles.readMore}>Read More</div>
        </button>
        <img className={styles.imageIcon} alt="" src="/image51.svg" />
      </div>
      <ServicesContainer />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.footerItem} />
        <div className={styles.kneeshawDevelomentAll}>
          © 2022 Kneeshaw Develoment All rights reserved
        </div>
        <img className={styles.logoWhite1} alt="" src="/logo-white-11@2x.png" />
        <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
        <div className={styles.icons}>
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/akariconslinkedinfill4.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/akariconstwitterfill3.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/phredditlogofill2.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/risteamfill4.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/mdiyoutube4.svg"
          />
        </div>
        <div className={styles.joinOurNewsletter}>Join our newsletter</div>
        <div className={styles.subscribe}>
          <div className={styles.subscribeChild} />
          <div className={styles.subscribeItem} />
          <div className={styles.subscribe1}>Subscribe</div>
          <div className={styles.yourEmail}>Your email</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.games}>Games</div>
          <div className={styles.games}>Blog</div>
          <div className={styles.games}>About Us</div>
          <div className={styles.games}>Contact us</div>
        </div>
        <div className={styles.privacy}>
          <div className={styles.terms}>Terms</div>
          <div className={styles.terms}>Privacy</div>
          <div className={styles.terms}>Cookies</div>
        </div>
      </div>
      <div className={styles.landingPageLightChild} />
      <Header />
      <section className={styles.form}>
        <h1 className={styles.haveAQuestion}>Have a Question? Let’s talk!</h1>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.fullName}>Full Name*</div>
          </div>
          <div className={styles.input}>
            <div className={styles.fullName}>Email Address</div>
          </div>
          <textarea
            className={styles.textField}
            placeholder="Write your message"
            defaultValue="0/1000"
          />
          <div className={styles.buttonprimary1}>
            <div className={styles.sendMessage}>Send Message</div>
          </div>
        </div>
      </section>
      <div className={styles.txtflds}>
        <b className={styles.haveAQuestion1}>Have a Question? Let’s talk</b>
        <div className={styles.sendButton}>
          <div className={styles.sendButtonChild} />
          <b className={styles.send}>
            <span className={styles.s}>S</span>end
          </b>
        </div>
        <div className={styles.message}>
          <div className={styles.messageChild} />
          <div className={styles.typeYourMessage}>Type your message *</div>
          <div className={styles.div}>0/1000</div>
        </div>
        <div className={styles.email}>
          <div className={styles.emailChild} />
          <div className={styles.typeYourMessage}>Email *</div>
        </div>
        <div className={styles.fullName1}>
          <div className={styles.emailChild} />
          <div className={styles.typeYourMessage}>Full name *</div>
        </div>
      </div>
      <FooterLight />
      <div className={styles.frame}>
        <h1 className={styles.craftingInnovativeExperience}>
          Crafting innovative experiences through
        </h1>
        <h1 className={styles.kneeshawDevelopments}>
          <p className={styles.areYouLooking}>Kneeshaw</p>
          <p className={styles.areYouLooking}>Developments</p>
        </h1>
        <SiteTypeButton />
        <div className={styles.meetKneeshawParent}>
          <h1 className={styles.meetKneeshaw}>Meet Kneeshaw</h1>
          <div className={styles.kneeshawDevelopmentsIsContainer}>
            <p className={styles.areYouLooking}>
              Kneeshaw Developments is a dynamic and innovative gaming
              development website that is dedicated to providing its clients
              with top-quality gaming solutions. With a team of highly skilled
              and experienced developers, Kneeshaw Developments is
              well-positioned to provide clients with a wide range of services,
              from game design and development to testing, publishing, and
              marketing.
            </p>
            <p className={styles.areYouLooking}>
              At Kneeshaw Developments, we understand that the gaming industry
              is constantly evolving, and we work tirelessly to stay up-to-date
              with the latest trends and technologies. Our team is made up of
              experts in game development, art, design, programming, and
              marketing, who are passionate about creating engaging and
              immersive gaming experiences for players of all ages.
            </p>
          </div>
          <button className={styles.buttonprimary2}>
            <div className={styles.readMore}>Read More</div>
          </button>
          <img className={styles.imageIcon1} alt="" src="/image61.svg" />
        </div>
        <section className={styles.shapes}>
          <div className={styles.shape} />
          <div className={styles.shape1} />
          <div className={styles.shape2} />
        </section>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default LandingPageLight;
