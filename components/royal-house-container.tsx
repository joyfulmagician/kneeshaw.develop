import type { NextPage } from "next";
import CharacterContainer from "./character-container";
import styles from "./royal-house-container.module.css";

const RoyalHouseContainer: NextPage = () => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" src="/image2.svg" />
      <b className={styles.buildARoyal}>Build a Royal House</b>
      <div className={styles.groupParent}>
        <CharacterContainer
          weaponName="The Axe of the West"
          characterDescription="The retired hero of the Elven wars, experienced and wise"
          imageDescription="/image-156@2x.png"
        />
        <CharacterContainer
          weaponName="The Titan-Bond"
          characterDescription="A young nobleman with a forsaken and destroyed house, desperately seeking to save his kingdom"
          imageDescription="/image-157@2x.png"
          propLeft="83px"
        />
        <CharacterContainer
          weaponName="Arrow of the Lake"
          characterDescription="A strong hearted Noble with the eye of an Eagle and a will of an Ox"
          imageDescription="/image-158@2x.png"
          propLeft="71px"
        />
      </div>
      <div className={styles.groupContainer}>
        <CharacterContainer
          weaponName="The Sorcerer of Gems"
          characterDescription="A run away heiress with two powerful opposing elements, seeking adventure and her lost mother"
          imageDescription="/image-159@2x.png"
          propLeft="44px"
        />
        <CharacterContainer
          weaponName="The Dragon Paladin"
          characterDescription="A Commoner clad in fireproof steel with an unquenchable thirst for dragon hunting"
          imageDescription="/image-1510@2x.png"
          propLeft="57px"
        />
      </div>
      <div className={styles.inTitanSagaContainer}>
        <p className={styles.inTitanSaga}>
          In Titan Saga, players can explore a vast and diverse world filled
          with hidden secrets and treasures. They can also recruit a team of
          powerful heroes with unique abilities and skills, which can be leveled
          up and customized to suit their play style. The game also features
          challenging boss battles and a variety of quests and side missions to
          keep players engaged.
        </p>
        <p className={styles.inTitanSaga}>
          Overall, Titan Saga aims to offer an engaging and immersive RPG
          experience for players who enjoy epic stories, deep gameplay
          mechanics, and beautiful visuals.
        </p>
        <p className={styles.inTitanSaga}>
          Rebuild a fallen house, choose the strongest warriors in the land.
        </p>
      </div>
    </div>
  );
};

export default RoyalHouseContainer;
