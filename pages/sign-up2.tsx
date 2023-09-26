import type { NextPage } from "next";
import styles from "./sign-up2.module.css";

const SignUp2: NextPage = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signIn}>
        <div className={styles.title}>
          <b className={styles.welcomeToKneeshaw}>Welcome to Kneeshaw!</b>
          <div className={styles.letsCreateYour}>Let’s create your account</div>
        </div>
        <div className={styles.buttonprimaryParent}>
          <div className={styles.buttonprimary}>
            <div className={styles.developer}>Developer</div>
          </div>
          <div className={styles.buttonprimary1}>
            <div className={styles.developer}>Gamer</div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.frameParent}>
            <div className={styles.buttonprimaryGroup}>
              <div className={styles.buttonprimary2}>
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
              <div className={styles.neverShownTo}>
                Never shown to the public.
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.buttonprimary4}>
              <div className={styles.enterYourEmail}>Enter your email</div>
            </div>
            <div className={styles.neverShownTo2}>
              Never shown to the public.
            </div>
          </div>
          <div className={styles.createPass}>
            <div className={styles.buttonprimary5}>
              <div className={styles.enterYourEmail}>Create username</div>
            </div>
            <div className={styles.idealUsernameIs}>
              Ideal username is short, unique with no spaces
            </div>
          </div>
          <div className={styles.createPass1}>
            <div className={styles.buttonprimary5}>
              <div className={styles.enterYourEmail}>Create password</div>
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
            <div className={styles.createYourAccount}>Create your account</div>
          </div>
          <div className={styles.buttonprimary8}>
            <img className={styles.icongoogle} alt="" src="/icongoogle1.svg" />
            <div className={styles.createYourAccount}>Sign up with Google</div>
          </div>
          <div className={styles.alreadyHaveAnContainer}>
            <span>{`Already have an account? `}</span>
            <span className={styles.privacyPolicy}>Sign in</span>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.header1}>
          <img
            className={styles.logoWhite1}
            alt=""
            src="/logo-white-1@2x.png"
          />
          <div className={styles.menu}>
            <div className={styles.games}>Games</div>
            <div className={styles.games}>Blog</div>
            <div className={styles.games}>Services</div>
            <div className={styles.games}>Job</div>
            <div className={styles.games}>About Us</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.shoppingBagParent}>
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shopping-bag.svg"
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

export default SignUp2;
