import type { NextPage } from "next";
import CardNameForm from "./card-name-form";
import styles from "./payment-method-form.module.css";

const PaymentMethodForm: NextPage = () => {
  return (
    <div className={styles.content}>
      <img className={styles.featuredIcon} alt="" src="/featured-icon.svg" />
      <div className={styles.textAndSupportingText}>
        <div className={styles.text}>Update payment method</div>
        <div className={styles.supportingText}>Update your card details.</div>
      </div>
      <div className={styles.form}>
        <div className={styles.row}>
          <CardNameForm
            paymentCardName="Name on card"
            cardHolderName="Emery Stanton"
          />
          <div className={styles.inputField}>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputFieldBase}>
                <div className={styles.label}>Expiry</div>
                <div className={styles.input}>
                  <div className={styles.content1}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.text1}>
                      <span>06</span>
                      <span className={styles.span}>{` / `}</span>
                      <span>2024</span>
                    </div>
                  </div>
                  <img
                    className={styles.helpIcon}
                    alt=""
                    src="/help-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.hintText}>
                This is a hint text to help user.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputField1}>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputFieldBase}>
                <div className={styles.label}>Card number</div>
                <div className={styles.input1}>
                  <div className={styles.content1}>
                    <img
                      className={styles.paymentMethodIcon}
                      alt=""
                      src="/payment-method-icon.svg"
                    />
                    <div className={styles.text1}>1234 1234 1234 1234</div>
                  </div>
                  <img
                    className={styles.helpIcon}
                    alt=""
                    src="/help-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.hintText}>
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <CardNameForm
            paymentCardName="CVV"
            cardHolderName="XXX"
            propFlex="unset"
            propWidth="112px"
            propHeight="70px"
          />
        </div>
      </div>
      <div className={styles.modalActions}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <div className={styles.text3}>Cancel</div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonBase1}>
            <div className={styles.text3}>Update</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
