import type { NextPage } from "next";
import styles from "./dropdown-list-menu.module.css";

const DropdownListMenu: NextPage = () => {
  return (
    <div className={styles.dropdownListmenu}>
      <div className={styles.opacity} />
      <div className={styles.frameParent}>
        <div className={styles.avatarParent}>
          <div className={styles.avatar}>
            <div className={styles.bg} />
            <div className={styles.es}>ES</div>
          </div>
          <div className={styles.emeryStanton}>Emery Stanton</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.materialSymbolshomeOutlineParent}>
            <img
              className={styles.materialSymbolshomeOutlineIcon}
              alt=""
              src="/materialsymbolshomeoutlinerounded.svg"
            />
            <div className={styles.myProfile}>My Profile</div>
          </div>
          <div className={styles.materialSymbolshomeOutlineParent}>
            <div className={styles.shoppingBagWrapper}>
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shopping-bag.svg"
              />
            </div>
            <div className={styles.myProfile}>Shopping Card</div>
            <div className={styles.badge}>
              <div className={styles.div}>0</div>
            </div>
          </div>
          <div className={styles.materialSymbolshomeOutlineParent}>
            <img
              className={styles.vuesaxlineardocumentTextIcon}
              alt=""
              src="/vuesaxlineardocumenttext2.svg"
            />
            <div className={styles.myProfile}>Request Quote</div>
          </div>
          <div className={styles.materialSymbolshomeOutlineParent}>
            <img
              className={styles.materialSymbolshomeOutlineIcon}
              alt=""
              src="/materialsymbolssettingsoutlinerounded.svg"
            />
            <div className={styles.myProfile}>Settings</div>
          </div>
          <img className={styles.frameChild} alt="" src="/vector-17.svg" />
          <div className={styles.evalogOutOutlineParent}>
            <img
              className={styles.materialSymbolshomeOutlineIcon}
              alt=""
              src="/evalogoutoutline.svg"
            />
            <div className={styles.myProfile}>Logout</div>
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
          <div className={styles.frameDiv}>
            <div className={styles.shoppingBagParent}>
              <img
                className={styles.shoppingBagIcon1}
                alt=""
                src="/shopping-bag.svg"
              />
              <div className={styles.badge1}>
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
              <div className={styles.emeryStanton1}>Emery Stanton</div>
              <img
                className={styles.materialSymbolshomeOutlineIcon}
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownListMenu;
