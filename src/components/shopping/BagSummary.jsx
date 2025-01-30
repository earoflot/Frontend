import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/BagSummary.module.css";
import { walletActions } from "../../store/walletSlice";
import { shoppingbagActions } from "../../store/shopping/shoppingbagSlice";
import { Link } from "react-router-dom";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.shoppingbagSlice);
  const items = useSelector((state) => state.shoppinghomeSlice);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  // Button function ............
  const walletsAmout = useSelector((store) => store.walletSlice);
  const dispatch = useDispatch();

  const orderFunc = () => {
    if (totalItem >= 1) {
      dispatch(walletActions.orderTo(finalPayment));
      dispatch(shoppingbagActions.toClear());
    }
  };

  return (
    <div className={styles.bagSummary}>
      <div className={styles.bagdetailsContainer}>
        <div className={styles.priceHeader}>
          PRICE DETAILS ( {totalItem} Items)
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
        <div className={styles.priceItem}>
          <span className="price-item-tag">Convenience Fee</span>
          <span className={styles.priceitemValue}>₹99</span>
        </div>
        <hr />
        <div className={styles.priceFooter}>
          <span className="price-item-tag">Total Amount</span>
          <span className={styles.priceitemValue}>₹{finalPayment}</span>
        </div>
      </div>
      <button className={styles.btnplaceOrder} onClick={orderFunc}>
        <Link to={"/home"} className={styles.btnLink}>
          PLACE ORDER
        </Link>
      </button>
    </div>
  );
};

export default BagSummary;
