// External Module..............
import { useSelector } from "react-redux";
// Local Module.................
import Container from "../Container/Container";
import ShoppingItems from "../Components/ShophomeComp";
// CSS Module.................
import styles from "../styles/ShopHome.module.css";
// Shopping Home Function.....................
const ShoppingHome = () => {
  const items = useSelector((store) => store.shoppinghomeSlice);

  return (
    <Container>
      <div className="row">
        {items.map((item) => (
          <ShoppingItems key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};
export default ShoppingHome;
