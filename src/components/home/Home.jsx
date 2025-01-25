// Core Module.............
import React from "react";
// External Module............

//Local Module................

import { useSelector } from "react-redux";
import ShopHome from "../shopping/ShopHome";

const Home = () => {
  const items = useSelector((store) => store.homeSlice);

  return (
    <>
      <ShopHome />
    </>
  );
};

export default Home;
