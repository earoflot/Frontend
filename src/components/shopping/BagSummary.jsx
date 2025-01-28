import { useSelector } from "react-redux";
import styles from "./styles/BagSummary.module.css";
import { useDispatch } from "react-redux";

const BagSummary = () => {
  return (
    <div className={styles.bagSummary}>
      <div className={styles.bagdetailsContainer}>
        <div className={styles.priceHeader}>PRICE DETAILS</div>
        <div className={styles.priceItem}>
          <span className="price-item-tag">Total MRP</span>
          <span className={styles.priceitemValue}>₹000</span>
        </div>
        <div className={styles.priceItem}>
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹000
          </span>
        </div>
        <div className={styles.priceItem} s>
          <span className="price-item-tag">Convenience Fee</span>
          <span className={styles.priceitemValue}>₹000</span>
        </div>
        <hr />
        <div className={styles.priceFooter}>
          <span className="price-item-tag">Total Amount</span>
          <span className={styles.priceitemValue}>₹000</span>
        </div>
      </div>
      <button
        className={styles.btnplaceOrder}
        onClick={() => console.log("button click")}
      >
        <div>PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
