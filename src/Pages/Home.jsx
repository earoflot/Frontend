// Core Module.............
import React from "react";
// External Module............

//Local Module................
import Container from "../Container/Container";
import HomeImages from "../Components/HomeimagesComp";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.homeSlice);

  return (
    <Container>
      <HomeImages />
    </Container>
  );
};

export default Home;
