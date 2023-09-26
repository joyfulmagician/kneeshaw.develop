import type { NextPage } from "next";
import RoyalHouseContainer from "../components/royal-house-container";
import ProgressCircleContainer from "../components/progress-circle-container";
import CreditsContainer from "../components/credits-container";
import styles from "./game-more-titan-saga.module.css";

const GameMoreTitanSaga: NextPage = () => {
  return (
    <div className={styles.gameMoreTitanSaga}>
      <b className={styles.titanSagaChains}>Titan Saga: Chains of Kronos</b>
      <b className={styles.act1Progress}>Act 1: Progress</b>
      <b className={styles.exploreTitanSaga}>Explore Titan Saga’ Story</b>
      <b className={styles.features}>Features</b>
      <img className={styles.imageIcon} alt="" src="/image1.svg" />
      <img className={styles.imageIcon1} alt="" src="/image1.svg" />
      <img className={styles.imageIcon2} alt="" src="/image1.svg" />
      <img className={styles.imageIcon3} alt="" src="/image3.svg" />
      <div className={styles.titanSagaAims}>
        Titan Saga aims to offer an engaging and immersive RPG experience for
        players who enjoy epic stories, deep gameplay mechanics, and beautiful
        visuals.
      </div>
      <RoyalHouseContainer />
      <div className={styles.progressCircleParent}>
        <ProgressCircleContainer
          imageDescription="/ring.svg"
          componentDetails="Classes | Skills"
          percentageValue="80%"
        />
        <ProgressCircleContainer
          imageDescription="/ring1.svg"
          componentDetails="Artwork"
          percentageValue="30%"
          propLeft="calc(50% - 29.5px)"
          propLeft1="calc(50% - 29.5px)"
        />
        <ProgressCircleContainer
          imageDescription="/ring2.svg"
          componentDetails="Sound Effects"
          percentageValue="100%"
          propLeft="calc(50% - 49.5px)"
          propLeft1="calc(50% - 36.5px)"
        />
        <div className={styles.progressCircle}>
          <img className={styles.ringIcon} alt="" src="/ring3.svg" />
          <div className={styles.label}>
            <p className={styles.interface}>Interface</p>
            <p className={styles.interface}>Mechanics</p>
          </div>
          <div className={styles.number}>70%</div>
        </div>
      </div>
      <div className={styles.progressCircleGroup}>
        <ProgressCircleContainer
          imageDescription="/ring4.svg"
          componentDetails="Story Quests"
          percentageValue="90%"
          propLeft="calc(50% - 45.5px)"
          propLeft1="calc(50% - 29.5px)"
        />
        <ProgressCircleContainer
          imageDescription="/ring1.svg"
          componentDetails="Guild Quests"
          percentageValue="0%"
          propLeft="calc(50% - 47.5px)"
          propLeft1="calc(50% - 20.5px)"
        />
        <ProgressCircleContainer
          imageDescription="/ring5.svg"
          componentDetails="Sides Quests"
          percentageValue="60%"
          propLeft="calc(50% - 45.5px)"
          propLeft1="calc(50% - 29.5px)"
        />
        <ProgressCircleContainer
          imageDescription="/ring3.svg"
          componentDetails="Micro Quests"
          percentageValue="70%"
          propLeft="calc(50% - 48.5px)"
          propLeft1="calc(50% - 29.5px)"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.streamlineinterfaceLightingParent}>
            <img
              className={styles.streamlineinterfaceLightingIcon}
              alt=""
              src="/streamlineinterfacelightingbrightness2brightadjustbrightnessadjustmentsunraisecontrolshalf.svg"
            />
            <div className={styles.dynamicLighting}>Dynamic Lighting</div>
          </div>
          <div
            className={styles.asPlayersVenture}
          >{`As players venture through the intricate environments, they will witness the dynamic lighting system in action. Whether it's exploring ancient dungeons, wandering through dense forests, or traversing bustling cities, the lighting dynamically adjusts to create a truly atmospheric experience. `}</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.streamlineinterfaceLightingParent}>
            <img
              className={styles.streamlineinterfaceLightingIcon}
              alt=""
              src="/arcticonsbattleforwesnoth.svg"
            />
            <div className={styles.dynamicLighting}>Action Battle System</div>
          </div>
          <div className={styles.asPlayersVenture}>
            Visually stunning and immersive battlegrounds. Engage in dynamic,
            high-octane battles with dazzling animations and explosive special
            effects. Whether you're facing off against colossal bosses or
            engaging in intense skirmishes with hordes of enemies, every fight
            feels like an epic showdown.
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.streamlineinterfaceLightingParent}>
            <img
              className={styles.streamlineinterfaceLightingIcon}
              alt=""
              src="/systemuiconsfiltering.svg"
            />
            <div className={styles.dynamicLighting}>
              Customizable Equipments
            </div>
          </div>
          <div className={styles.asPlayersVenture}>
            With customizable equipment in TitanSaga, you have the freedom to
            craft a legendary hero whose gear matches their legend. Fine-tune
            your weaponry, amplify your defenses, and create a visual
            masterpiece that sets you apart from the rest. The possibilities are
            limitless, and the path to becoming an unstoppable force lies in
            your hands.
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.streamlineinterfaceLightingParent}>
            <img
              className={styles.streamlineinterfaceLightingIcon}
              alt=""
              src="/gameiconsanimalskull.svg"
            />
            <div className={styles.uniqueEnemies}>Unique Enemies</div>
          </div>
          <div className={styles.exploreTheFar}>
            Explore the far reaches of the game world and encounter enemies that
            challenge you both physically and mentally. Adapt to their combat
            styles, study their patterns, and exploit their vulnerabilities to
            gain the upper hand. Each encounter is an opportunity to showcase
            your strategic prowess and prove your worth as a formidable hero.
          </div>
        </div>
      </div>
      <div className={styles.video}>
        <img
          className={styles.equipmentMenuIcon}
          alt=""
          src="/equipment-menu@2x.png"
        />
        <img
          className={styles.equipmentMenuIcon}
          alt=""
          src="/on-map-enemies-with-enemy-art@2x.png"
        />
        <img
          className={styles.equipmentMenuIcon}
          alt=""
          src="/dynamic-lighting@2x.png"
        />
        <img
          className={styles.equipmentMenuIcon}
          alt=""
          src="/on-map-enemies@2x.png"
        />
        <img
          className={styles.equipmentMenuIcon}
          alt=""
          src="/dialogue-with-characters@2x.png"
        />
        <img
          className={styles.equipmentMenuIcon}
          alt=""
          src="/skill-system1@2x.png"
        />
        <img
          className={styles.tintOverlayIcon}
          alt=""
          src="/tint-overlay.svg"
        />
        <img className={styles.playIcon} alt="" src="/playicon1.svg" />
        <img className={styles.pauseIcon} alt="" src="/pauseicon.svg" />
        <div className={styles.text}>
          <div className={styles.gameName}>Titan Saga</div>
        </div>
      </div>
      <div className={styles.unbeknownstToAllContainer}>
        <p className={styles.interface}>
          Unbeknownst to all, an ancient force has awakened. The elves have
          found their Titan. The very paragon of their race. He had crafted the
          first Elves in the times of old. The magic they once had, is beginning
          to return. The Elves will no longer need to bow to the Human’s
          Engineering marvels and steel.
        </p>
        <p
          className={styles.interface}
        >{`Human long knew they would never be able to use magic. Their titan had been sealed away for his great misdeed, but they were a people who looked forward. A large empire-wide guild of engineers, tinkers and scientists because of this humans had long been the most powerful race. `}</p>
        <p className={styles.interface}>
          As magic begins a new, that will not last.
        </p>
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
            src="/akariconslinkedinfill3.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/akariconstwitterfill2.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/phredditlogofill.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/risteamfill3.svg"
          />
          <img
            className={styles.akarIconslinkedinFill}
            alt=""
            src="/mdiyoutube3.svg"
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
      <CreditsContainer propTop="5074px" />
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
          <div className={styles.frameParent3}>
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

export default GameMoreTitanSaga;
