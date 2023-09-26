import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./character-container.module.css";

type CharacterContainerType = {
  weaponName?: string;
  characterDescription?: string;
  imageDescription?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const CharacterContainer: NextPage<CharacterContainerType> = ({
  weaponName,
  characterDescription,
  imageDescription,
  propLeft,
}) => {
  const theAxeOfStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.rectangle} />
      <div className={styles.theAxeOf} style={theAxeOfStyle}>
        {weaponName}
      </div>
      <div className={styles.theRetiredHero}>{characterDescription}</div>
      <img className={styles.image15Icon} alt="" src={imageDescription} />
    </div>
  );
};

export default CharacterContainer;
