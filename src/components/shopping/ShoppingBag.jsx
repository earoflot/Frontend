// External Module..........
import { useSelector } from "react-redux";
// Local Module..................
import Container from "../../Container/Container";

const ShoppingBag = () => {
  const items = useSelector((state) => state.shoppinghomeSlice);

  return (
    <Container>
      <div className="row "></div>
    </Container>
  );
};
export default ShoppingBag;
