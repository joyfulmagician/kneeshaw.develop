import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./order-process-container.module.css";

type OrderProcessContainerType = {
  dimensionCode?: string;
  productCode?: string;
  dimensionText?: string;

  /** Style props */
  vuesaxlinearbag2IconBackgroundColor?: CSSProperties["backgroundColor"];
  lineColor?: CSSProperties["color"];
  walletIconBackgroundColor?: CSSProperties["backgroundColor"];
  lineColor1?: CSSProperties["color"];
  ticketIconBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const OrderProcessContainer: NextPage<OrderProcessContainerType> = ({
  dimensionCode,
  productCode,
  dimensionText,
  vuesaxlinearbag2IconBackgroundColor,
  lineColor,
  walletIconBackgroundColor,
  lineColor1,
  ticketIconBackgroundColor,
  propColor,
}) => {
  const icon1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: vuesaxlinearbag2IconBackgroundColor,
    };
  }, [vuesaxlinearbag2IconBackgroundColor]);

  const shoppingCartStyle: CSSProperties = useMemo(() => {
    return {
      color: lineColor,
    };
  }, [lineColor]);

  const icon2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: walletIconBackgroundColor,
    };
  }, [walletIconBackgroundColor]);

  const checkoutStyle: CSSProperties = useMemo(() => {
    return {
      color: lineColor1,
    };
  }, [lineColor1]);

  const icon3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ticketIconBackgroundColor,
    };
  }, [ticketIconBackgroundColor]);

  const orderCompleteStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.header}>
      <div className={styles.button}>
        <div className={styles.icon} style={icon1Style}>
          <img
            className={styles.vuesaxlinearbag2Icon}
            alt=""
            src={dimensionCode}
          />
        </div>
        <b className={styles.shoppingCart} style={shoppingCartStyle}>
          Shopping Cart
        </b>
      </div>
      <div className={styles.line} />
      <div className={styles.button1}>
        <div className={styles.icon1} style={icon2Style}>
          <img
            className={styles.vuesaxlinearbag2Icon}
            alt=""
            src={productCode}
          />
        </div>
        <b className={styles.shoppingCart} style={checkoutStyle}>
          Checkout
        </b>
      </div>
      <div className={styles.line} />
      <div className={styles.button}>
        <div className={styles.icon} style={icon3Style}>
          <img
            className={styles.vuesaxlinearbag2Icon}
            alt=""
            src={dimensionText}
          />
        </div>
        <b className={styles.shoppingCart} style={orderCompleteStyle}>
          Order Complete
        </b>
      </div>
    </div>
  );
};

export default OrderProcessContainer;
