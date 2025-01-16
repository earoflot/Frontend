import ShoppingItems from "../Components/ShoppingItems";

import { useSelector } from "react-redux";

const Shopping = () => {
  const items = useSelector((store) => store.shopping);
  console.log(items);
  return (
    <>
      <ShoppingItems item={items[0]} />
    </>
  );
};
export default Shopping;
