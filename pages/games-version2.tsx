import type { NextPage } from "next";
import Footer from "../components/footer";
import styles from "./games-version2.module.css";

const GamesVersion2: NextPage = () => {
  return (
    <div className={styles.gamesVersion2}>
      <div className={styles.gamesVersion2Child} />
      <div className={styles.buttonprimary}>
        <div className={styles.more}>More</div>
      </div>
      <div className={styles.gamesVersion2Item} />
      <div className={styles.buttonprimary1}>
        <div className={styles.more}>More</div>
      </div>
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <b className={styles.popularGames}>Popular Games</b>
      <div className={styles.kPlayers}>7K players</div>
      <div className={styles.gamesVersion2Inner} />
      <div className={styles.kPlayers1}>7K players</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.itIsA}>
        It is a turn-based RPG (role-playing game) that takes place in a fantasy
        world filled with magic and mythical creatures. The game features a deep
        and immersive story, with players taking on the role of a hero tasked
        with saving the world from destruction.
      </div>
      <div className={styles.theGameIs}>
        {" "}
        The game is a survival adventure that requires the player to manage
        their character's hunger, thirst, and health while exploring the island
        for resources and materials to help them survive.
      </div>
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Get it now</div>
        </div>
      </div>
      <div className={styles.button1}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Get it now</div>
        </div>
      </div>
      <img
        className={styles.maincapsuleBackgroundRemoved}
        alt=""
        src="/maincapsule-background-removed-11@2x.png"
      />
      <img
        className={styles.libraryCapsule1BackgroundR}
        alt=""
        src="/librarycapsule1-background-removed-11@2x.png"
      />
      <Footer
        dimensionCode="/akariconslinkedinfill11.svg"
        dimensionCodeImageUrl="/akariconstwitterfill11.svg"
        dimensionCodeText="/phredditlogofill1.svg"
        dimensionCodeTextAlternat="/risteamfill11.svg"
        dimensionCodeImageText="/mdiyoutube11.svg"
        servicesTop="1863px"
        propLetterSpacing="0.02em"
        propLetterSpacing1="0.05em"
        propFontWeight="bold"
        propLetterSpacing2="0.1em"
        propLetterSpacing3="0.12em"
        propLetterSpacing4="0.04em"
        propLetterSpacing5="0.04em"
        propLetterSpacing6="0.04em"
        propLetterSpacing7="0.02em"
        propLetterSpacing8="0.02em"
        propLetterSpacing9="0.02em"
        propLetterSpacing10="0.02em"
        propLetterSpacing11="0.02em"
      />
      <div className={styles.header}>
        <div className={styles.header1}>
          <img
            className={styles.logoWhite1}
            alt=""
            src="/logo-white-1@2x.png"
          />
          <div className={styles.menu}>
            <div className={styles.games}>Games</div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.services}>Services</div>
            <div className={styles.job}>Job</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.menuChild} />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.shoppingBagParent}>
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shopping-bag3.svg"
              />
              <div className={styles.badge}>
                <div className={styles.div}>0</div>
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
      </div>
    </div>
  );
};

export default GamesVersion2;
