// Core Module.............
import React from "react";
// External Module............

//Local Module................
import Container from "../Container/Container";
import HomeImages from "../Components/HomeimagesComp";
import { useSelector } from "react-redux";
import ShopHome from "../Pages/ShopHome";

const Home = () => {
  const items = useSelector((store) => store.homeSlice);

  return (
    <>
      <ShopHome />
    </>
  );
};

export default Home;
