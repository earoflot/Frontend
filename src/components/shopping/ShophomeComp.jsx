// External Module..........
import { shoppingbagActions } from "../../Store/shoppingbagSlice";
import { useDispatch, useSelector } from "react-redux";
// Icon import from React-Icon............
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
// CSS MODULE...........
import styles from "./styles/ShophomeComp.module.css";

const ShoppingItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.shoppingbagSlice);

  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(shoppingbagActions.addToBag(item.id));
    console.log(item);
  };

  const handleRemove = () => {
    dispatch(shoppingbagActions.removeFromBag(item.id));
  };

  return (
    <div
      /* col-mobile col-sm MOBAIL...LENDSCAP MODE col-md Google Brosers Desktop site or paid col-lg paind or leptop */
      className="col-6 col-sm-4 col-md-3 col-lg-2" /*{`col${styles.shopHomcomp}`}*/
    >
      <div className={styles.imageDiv}>
        <img className={styles.itemImage} src={item.image} alt="item image" />
      </div>

      <div className={styles.rating}>
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className={styles.companyName}>{item.company}</div>
      <div className={styles.itemName}>{item.item_name}</div>
      <div className={styles.price}>
        <span className={styles.currentPrice}>Rs {item.current_price}</span>
        <span className={styles.originalPrice}>Rs {item.original_price}</span>
        <span className={styles.discount}>
          ({item.discount_percentage}% OFF)
        </span>
      </div>
      <div className={styles.shopBtn}>
        {elementFound ? (
          <button
            type="button"
            className={`${styles.btn}btn btn-add-bag btn-danger`}
            onClick={handleRemove}
          >
            <AiFillDelete /> Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-add-bag btn-success"
            onClick={handleAddToBag}
          >
            <GrAddCircle /> Buy now
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingItems;
