import { useSelector } from "react-redux";
import styles from "../styles/BagSummary.module.css";
import { useDispatch } from "react-redux";
import { walletActions } from "../Store/walletSlice";

const BagSummary = () => {
  const bagItems = useSelector((state) => state.shoppingbagSlice);
  const items = useSelector((state) => state.shoppinghomeSlice);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className={styles.bagSummary}>
      <div className={styles.bagdetailsContainer}>
        <div className={styles.priceHeader}>
          PRICE DETAILS ({totalItem} Items)
        </div>
        <div className={styles.priceItem}>
          <span className="price-item-tag">Total MRP</span>
          <span className={styles.priceitemValue}>₹{totalMRP}</span>
        </div>
        <div className={styles.priceItem}>
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className={styles.priceItem} s>
          <span className="price-item-tag">Convenience Fee</span>
          <span className={styles.priceitemValue}>₹99</span>
        </div>
        <hr />
        <div className={styles.priceFooter}>
          <span className="price-item-tag">Total Amount</span>
          <span className={styles.priceitemValue}>₹{finalPayment}</span>
        </div>
      </div>
      <button
        className={styles.btnplaceOrder}
        onClick={() => console.log("button click")}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
