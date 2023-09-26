import type { NextPage } from "next";
import styles from "./unique-faction-container.module.css";

const UniqueFactionContainer: NextPage = () => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" src="/image3.svg" />
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
          <img className={styles.image15Icon} alt="" src="/image-151@2x.png" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.elite}>Elite</div>
          <img className={styles.image15Icon} alt="" src="/image-152@2x.png" />
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.forgotten}>Forgotten</div>
          <img className={styles.image15Icon} alt="" src="/image-153@2x.png" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.eternal}>Eternal</div>
          <img className={styles.image15Icon} alt="" src="/image-154@2x.png" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.barbarians}>Engineers</div>
          <img className={styles.image15Icon} alt="" src="/image-155@2x.png" />
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
  );
};

export default UniqueFactionContainer;
