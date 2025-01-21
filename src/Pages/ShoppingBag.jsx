// External Module..........
import { useSelector } from "react-redux";
// Local Module..................
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";
import Container from "../Container/Container";

const ShoppingBag = () => {
  //
  const bagItems = useSelector((state) => state.shoppingbagSlice);
  const items = useSelector((state) => state.shoppinghomeSlice);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <Container>
      {" "}
      <div className="row ">
        <div className="col-md-6">
          {" "}
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <div className="col-md-6">
          {" "}
          <BagSummary />
        </div>
      </div>
    </Container>
  );
};
export default ShoppingBag;
