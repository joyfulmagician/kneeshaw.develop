import type { NextPage } from "next";
import styles from "./services-container.module.css";

const ServicesContainer: NextPage = () => {
  return (
    <section className={styles.services}>
      <h1 className={styles.meetWithOur}>Meet With Our Services</h1>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.mobileGameDevelopmentContainer}>
            <p className={styles.mobileGame}>Mobile Game</p>
            <p className={styles.mobileGame}>Development</p>
          </div>
          <img
            className={styles.iconsaxbulkgameboy}
            alt=""
            src="/iconsaxbulkgameboy3.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.unity2dGameContainer}>
            <p className={styles.mobileGame}>Unity</p>
            <p className={styles.mobileGame}>2d Game</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkattachsquare3.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.unity2dGameContainer}>
            <p className={styles.mobileGame}>Unity</p>
            <p className={styles.mobileGame}>3d Game</p>
          </div>
          <img
            className={styles.iconsaxbulklinksquare}
            alt=""
            src="/iconsaxbulklinksquare6.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.mobileGameDevelopmentContainer}>
            <p className={styles.mobileGame}>Unreal Game</p>
            <p className={styles.mobileGame}>Development</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkcpu.svg"
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.mobileGameDevelopmentContainer}>
            <p className={styles.mobileGame}>Godot Game</p>
            <p className={styles.mobileGame}>Development</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkformatcircle.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.mobileGameDevelopmentContainer}>
            <p className={styles.mobileGame}>HTML5 Game</p>
            <p className={styles.mobileGame}>Development</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkcommand.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.mobileGameDevelopmentContainer}>
            <p className={styles.mobileGame}>Web3 Game</p>
            <p className={styles.mobileGame}>Development</p>
          </div>
          <img
            className={styles.iconsaxbulklinksquare}
            alt=""
            src="/iconsaxbulkquotedownsquare.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.mobileGameDevelopmentContainer}>
            <p className={styles.mobileGame}>Daaps</p>
            <p className={styles.mobileGame}>Development</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulksetting3.svg"
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.blockchainIntegration}>
            <p className={styles.mobileGame}>Blockchain</p>
            <p className={styles.mobileGame}>Integration</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkpictureframe.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.bugFixing}>
            <p className={styles.mobileGame}>Bug</p>
            <p className={styles.mobileGame}>Fixing</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkpenadd.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.systemDesign}>
            <p className={styles.mobileGame}>System</p>
            <p className={styles.mobileGame}>Design</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkbrushsquare.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.apiCreation}>
            <p className={styles.mobileGame}>API</p>
            <p className={styles.mobileGame}>Creation</p>
          </div>
          <img
            className={styles.iconsaxbulkattachsquare}
            alt=""
            src="/iconsaxbulkokb.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
