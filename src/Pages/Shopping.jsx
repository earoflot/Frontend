import ShoppingItems from "../Components/ShoppingItems";
import Container from "../Container/Container";
import { useSelector } from "react-redux";

const Shopping = () => {
  const items = useSelector((store) => store.shopping);

  return (
    <Container>
      {items.map((item) => (
        <ShoppingItems key={item.id} item={item} />
      ))}
    </Container>
  );
};
export default Shopping;
