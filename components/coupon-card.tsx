import type { NextPage } from "next";
import styles from "./coupon-card.module.css";

const CouponCard: NextPage = () => {
  return (
    <div className={styles.coupon}>
      <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
      <img className={styles.couponChild} alt="" src="/vector-1.svg" />
      <div className={styles.parent}>
        <div className={styles.div}>$ 1.25</div>
        <div className={styles.redeemCoupon}>Redeem Coupon</div>
      </div>
      <div className={styles.validUntil1}>Valid until 1 August 2023</div>
      <img className={styles.qrImg1Icon} alt="" src="/qr-img-1@2x.png" />
    </div>
  );
};

export default CouponCard;
