import type { NextPage } from "next";
import FeatureContainer from "../components/feature-container";
import CreditsContainer from "../components/credits-container";
import styles from "./game-more-old-salt.module.css";

const GameMoreOldSalt: NextPage = () => {
  return (
    <div className={styles.gameMoreOldSalt}>
      <b className={styles.oldSalt}>Old Salt</b>
      <img className={styles.imageIcon} alt="" src="/image1.svg" />
      <div className={styles.multiplayerNavalStrategy}>
        2-4 Multiplayer Naval Strategy With No Reinforcements On The Way
      </div>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon1} alt="" src="/image3.svg" />
        <b className={styles.bringUniqueFaction}>Bring Unique Faction</b>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.bootleggers}>Bootleggers</div>
            <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.barbarians}>Barbarians</div>
            <img
              className={styles.image15Icon}
              alt=""
              src="/image-151@2x.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.elite}>Elite</div>
            <img
              className={styles.image15Icon}
              alt=""
              src="/image-152@2x.png"
            />
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.forgotten}>Forgotten</div>
            <img
              className={styles.image15Icon}
              alt=""
              src="/image-153@2x.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.eternal}>Eternal</div>
            <img
              className={styles.image15Icon}
              alt=""
              src="/image-154@2x.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.barbarians}>Engineers</div>
            <img
              className={styles.image15Icon}
              alt=""
              src="/image-155@2x.png"
            />
          </div>
        </div>
        <div className={styles.embarkOnAContainer}>
          <p
            className={styles.embarkOnA}
          >{`Embark on a gripping survival adventure in the captivating world of the early 19th century. Stranded on a deserted island as a sailor, you must navigate the treacherous waters of survival in Old Salt. `}</p>
          <p className={styles.embarkOnA}>
            Engross yourself in a narrative that unfolds through journal entries
            and evocative flashbacks, providing a deeper connection to your
            character's plight.
          </p>
          <p
            className={styles.embarkOnA}
          >{`Embark on a memorable journey of survival, exploration, and self-discovery in "Old Salt" – the game that challenges your resilience and captivates your imagination. Choose your allegiance from a diverse lineup of six unique factions, each with its distinct play style, units, and abilities. `}</p>
        </div>
      </div>
      <b className={styles.features}>Features</b>
      <img className={styles.imageIcon2} alt="" src="/image3.svg" />
      <div className={styles.frameParent}>
        <FeatureContainer
          gameFeatures="/mdigamepadcircleleft.svg"
          description="Single Player Campaign"
          storylineDescription="Immerse yourself on an epic journey through a richly crafted world. Experience a thrilling storyline, engaging characters, and challenging missions as you uncover the secrets of this immersive game. Whether you're a seasoned player or new to the genre, the single-player campaign offers an exciting adventure tailored to your skill level."
        />
        <FeatureContainer
          gameFeatures="/phmaptrifoldduotone.svg"
          description="Map Maker"
          storylineDescription="Test your skills against players from around the world in intense online multiplayer matches. Engage in thrilling head-to-head battles, team-based skirmishes, or join larger-scale conflicts in massive multiplayer modes. Rise through the ranks, earn prestigious rewards, and become a renowned commander in the competitive online multiplayer arena."
          propBorderRadius="unset"
        />
        <FeatureContainer
          gameFeatures="/mdigamepadcircleleft1.svg"
          description="Multiplayer Matches"
          storylineDescription="Craft intricate landscapes, set strategic chokepoints, and customize every detail to create the perfect environment for thrilling encounters. Share your creations with the community and challenge others to conquer your masterfully designed maps. Endless possibilities for both casual players and aspiring level designers to leave their mark on the game."
          propBorderRadius="0px var(--br-5xs) var(--br-5xs) 0px"
        />
      </div>
      <b className={styles.exploreOldSalt}>Explore Old Salt’ Story</b>
      <img className={styles.imageIcon3} alt="" src="/image1.svg" />
      <div className={styles.video}>
        <img
          className={styles.skillSystemIcon}
          alt=""
          src="/skill-system@2x.png"
        />
        <img
          className={styles.tintOverlayIcon}
          alt=""
          src="/tint-overlay.svg"
        />
        <img className={styles.playIcon} alt="" src="/playicon.svg" />
        <img className={styles.pauseIcon} alt="" src="/pauseicon.svg" />
        <div className={styles.text}>
          <div className={styles.gameName}>Titan Saga</div>
        </div>
      </div>
      <div className={styles.oldSaltFeaturesContainer}>
        <p className={styles.embarkOnA}>
          Old Salt features various gameplay mechanics, including crafting,
          building, and hunting, as well as day and night cycles, and weather
          effects. The player must explore the island and solve various puzzles
          and obstacles to progress further in the game. The story is told
          through various means, such as journal entries and flashbacks, which
          provide insight into the character's background and motivations.
        </p>
        <p className={styles.embarkOnA}>
          Old Salt is designed to provide a challenging and immersive survival
          experience for players who enjoy exploring and overcoming obstacles in
          a detailed and historically accurate environment.
        </p>
      </div>
      <CreditsContainer />
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
            src="/akariconslinkedinfill2.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/akariconstwitterfill11.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/phredditlogofill1.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/risteamfill2.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/mdiyoutube2.svg"
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
          <div className={styles.frameGroup}>
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
          <div className={styles.headerChild} />
        </div>
      </div>
    </div>
  );
};

export default GameMoreOldSalt;
