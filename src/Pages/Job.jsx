// Core Module.......

// External Module..........
import { useSelector } from "react-redux";

// Local Module.............
import Container from "../Container/Container";

import JobItemComp from "../Components/JobItemComp";

const Job = () => {
  const items = useSelector((store) => store.jobSlice);

  return (
    <Container>
      {items.map((item) => (
        <JobItemComp key={item.id} item={item} />
      ))}
    </Container>
  );
};
export default Job;
