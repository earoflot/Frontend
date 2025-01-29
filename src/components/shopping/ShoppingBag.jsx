// External Module..........
import { useSelector } from "react-redux";
// Local Module..................
import Container from "../../Container/Container";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const ShoppingBag = () => {
  const items = useSelector((state) => state.shoppinghomeSlice);
  const bagItems = useSelector((state) => state.shoppingbagSlice);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <Container>
      <div className="row ">
        {finalItems.map((items) => (
          <BagItem item={items} key={items.id} />
        ))}
        <BagSummary />
      </div>
    </Container>
  );
};
export default ShoppingBag;
