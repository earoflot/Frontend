import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";

const ShoppingBag = () => {
  const itemeB = {
    id: "002",
    image: "images/2.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: { stars: 4.5, count: 1400 },
  };
  return (
    <>
      <BagSummary />
      <BagItem item={itemeB} />
    </>
  );
};
export default ShoppingBag;
