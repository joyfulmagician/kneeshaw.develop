import type { NextPage } from "next";
import Footer from "../components/footer";
import styles from "./games-version1.module.css";

const GamesVersion1: NextPage = () => {
  return (
    <div className={styles.gamesVersion1}>
      <div className={styles.gamesVersion1Child} />
      <div className={styles.buttonprimary}>
        <div className={styles.more}>More</div>
      </div>
      <div className={styles.gamesVersion1Item} />
      <div className={styles.buttonprimary1}>
        <div className={styles.more}>More</div>
      </div>
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <b className={styles.popularGames}>Popular Games</b>
      <img className={styles.imageIcon} alt="" src="/image2.svg" />
      <div className={styles.kPlayers}>7K players</div>
      <div className={styles.gamesVersion1Inner} />
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
        <div className={styles.buttonBase1}>
          <div className={styles.text}>Get it now</div>
        </div>
      </div>
      <img
        className={styles.maincapsuleBackgroundRemoved}
        alt=""
        src="/maincapsule-background-removed-1@2x.png"
      />
      <img
        className={styles.libraryCapsule1BackgroundR}
        alt=""
        src="/librarycapsule1-background-removed-1@2x.png"
      />
      <Footer
        dimensionCode="/akariconslinkedinfill11.svg"
        dimensionCodeImageUrl="/akariconstwitterfill11.svg"
        dimensionCodeText="/phredditlogofill1.svg"
        dimensionCodeTextAlternat="/risteamfill11.svg"
        dimensionCodeImageText="/mdiyoutube11.svg"
      />
      <b className={styles.allGames}>All Games</b>
      <img className={styles.imageIcon1} alt="" src="/image1.svg" />
      <div className={styles.enjoyExploringThe}>
        Enjoy exploring the diverse collection of games on the Kneeshaw Games,
        and may you find exciting experiences that match your interests and
        preferences.
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <div className={styles.content}>
            <img className={styles.mailIcon} alt="" src="/mail1.svg" />
            <div className={styles.text2}>All Categories</div>
            <img
              className={styles.materialSymbolskeyboardArroIcon}
              alt=""
              src="/materialsymbolskeyboardarrowdown.svg"
            />
          </div>
          <img
            className={styles.unfoldMoreBlack24dp1Icon}
            alt=""
            src="/unfold-more-black-24dp-1.svg"
          />
        </div>
        <div className={styles.input}>
          <div className={styles.content}>
            <img className={styles.mailIcon} alt="" src="/mail1.svg" />
            <div className={styles.text2}>All Platforms</div>
            <img
              className={styles.materialSymbolskeyboardArroIcon}
              alt=""
              src="/materialsymbolskeyboardarrowdown.svg"
            />
          </div>
          <img
            className={styles.unfoldMoreBlack24dp1Icon}
            alt=""
            src="/unfold-more-black-24dp-1.svg"
          />
        </div>
        <div className={styles.button2}>
          <div className={styles.buttonBase2}>
            <div className={styles.text}>Apply</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.content}>
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

export default GamesVersion1;
