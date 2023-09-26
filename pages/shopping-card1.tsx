import type { NextPage } from "next";
import OrderProcessContainer from "../components/order-process-container";
import EmailFormContainer from "../components/email-form-container";
import CardEntryForm from "../components/card-entry-form";
import styles from "./shopping-card1.module.css";

const ShoppingCard1: NextPage = () => {
  return (
    <div className={styles.shoppingCard}>
      <OrderProcessContainer
        dimensionCode="/vuesaxlinearbag21.svg"
        productCode="/wallet.svg"
        dimensionText="/ticket.svg"
      />
      <div className={styles.content}>
        <div className={styles.list}>
          <div className={styles.top}>
            <b className={styles.shipping}>Shipping</b>
            <div className={styles.div}>(1)</div>
          </div>
        </div>
        <div className={styles.list1}>
          <div className={styles.list2}>
            <div className={styles.row}>
              <div className={styles.shipping}>Subtotal</div>
              <div className={styles.shipping}>$123.00</div>
            </div>
            <div className={styles.row}>
              <div className={styles.shipping}>Discount</div>
              <div className={styles.shipping}>$0.0</div>
            </div>
            <div className={styles.row}>
              <div className={styles.shipping}>Shipping Costs</div>
              <div className={styles.shipping}>$0.00</div>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.checkout}>Checkout</div>
            <div className={styles.buttonChild} />
            <div className={styles.checkout}>$123.00</div>
          </div>
          <div className={styles.line} />
          <div className={styles.label}>
            <div className={styles.box}>
              <img className={styles.tickIcon} alt="" src="/tick.svg" />
            </div>
            <div className={styles.iConfirmThat}>
              I confirm that my email address is 100% correct.
            </div>
          </div>
          <div className={styles.quantity}>
            <div className={styles.securePaymentsProvided}>
              SECURE PAYMENTS PROVIDED BY
            </div>
            <div className={styles.row3}>
              <div className={styles.mastercard}>
                <img
                  className={styles.mastercardChild}
                  alt=""
                  src="/group-16.svg"
                />
              </div>
              <div className={styles.mastercard}>
                <img className={styles.visaIcon} alt="" src="/visa.svg" />
              </div>
              <div className={styles.mastercard}>
                <img
                  className={styles.logosamexIcon}
                  alt=""
                  src="/logosamex.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.list3}>
        <div className={styles.frameParent}>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>First Name</div>
            <div className={styles.input}>
              <div className={styles.emery}>Emery</div>
            </div>
          </div>
          <div className={styles.firstNameParent}>
            <div className={styles.firstName}>Last Name</div>
            <div className={styles.input}>
              <div className={styles.emery}>Stanton</div>
            </div>
          </div>
        </div>
        <EmailFormContainer
          inputLabel="Email Address"
          inputValue="emery.stanton@gmail.com"
        />
      </div>
      <div className={styles.frameGroup}>
        <EmailFormContainer
          inputLabel="Card Number"
          inputValue="xxxx xxxx xxxx xxxx"
          propTextTransform="uppercase"
        />
        <CardEntryForm />
      </div>
      <div className={styles.list4}>
        <div className={styles.top}>
          <b className={styles.shipping}>Credit Card</b>
          <div className={styles.div}>(1)</div>
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
          <div className={styles.frameContainer}>
            <div className={styles.shoppingBagParent}>
              <img
                className={styles.shoppingBagIcon}
                alt=""
                src="/shopping-bag.svg"
              />
              <div className={styles.badge}>
                <div className={styles.shipping}>0</div>
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
              <img className={styles.logosamexIcon} alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard1;
