import { useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { shoppingbagActions } from "../Store/shoppingbagSlice";
import styles from "../styles/BagItem.module.css";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(shoppingbagActions.removeFromBag(item.id));
  };

  return (
    <div className={styles.bagitemContainer}>
      <div className={styles.itemleftPart}>
        <img className={styles.bagitemImg} src={item.image} />
      </div>
      <div className={styles.itemrightPart}>
        <div className={styles.companyName}>{item.company}</div>
        <div className={styles.itemName}>{item.item_name}</div>
        <div className="price-container">
          <span className={styles.currentPrice}>Rs {item.current_price}</span>
          <span className={styles.originalPrice}>Rs {item.original_price}</span>
          <span className={styles.discount}>
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className={styles.returnPeriod}>
          <span className={styles.returnperiodDays}>
            {item.return_period} days
          </span>
          return available
        </div>
        <div className={styles.deliveryDetails}>
          Delivery by
          <span className={styles.deliveryDetailsdays}>
            {item.delivery_date}
          </span>
        </div>
      </div>

      <div className={styles.removeFromcart} onClick={handleRemoveItem}>
        <RiDeleteBin5Fill />
      </div>
    </div>
  );
};

export default BagItem;
