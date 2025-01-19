// External Module..........
import { useSelector } from "react-redux";
// Local Module..................
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";

const ShoppingBag = () => {
  //
  const bagItems = useSelector((state) => state.shoppingbagSlice);
  const items = useSelector((state) => state.shoppinghomeSlice);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <BagSummary />
      {finalItems.map((item) => (
        <BagItem key={item.id} item={item} />
      ))}
    </>
  );
};
export default ShoppingBag;
