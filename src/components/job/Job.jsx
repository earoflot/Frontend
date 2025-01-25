// Core Module.......

// External Module..........
import { useSelector } from "react-redux";

// Local Module.............
import Container from "../../Container/Container";

import JobItemComp from "./JobItemComp";

const Job = () => {
  const items = useSelector((store) => store.jobSlice);

  return (
    <Container>
      <div className="row">
        {items.map((item) => (
          <JobItemComp key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};
export default Job;
