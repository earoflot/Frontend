// External Module..............
import { useSelector } from "react-redux";
// Local Module.................
import Container from "../Container/Container";
import ShoppingItems from "../Components/ShoppingItems";

// Shopping Home Function.....................
const ShoppingHome = () => {
  const items = useSelector((store) => store.shoppinghomeSlice);

  return (
    <Container>
      {items.map((item) => (
        <ShoppingItems key={item.id} item={item} />
      ))}
    </Container>
  );
};
export default ShoppingHome;
