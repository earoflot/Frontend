import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";

const ShoppingBag = () => {
  const bagItems = useSelector((state) => state.shoppingbagSlice);
  const items = useSelector((state) => state.shopping);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <BagSummary />
      {finalItems.map((item) => (
        <BagItem item={item} />
      ))}
    </>
  );
};
export default ShoppingBag;
