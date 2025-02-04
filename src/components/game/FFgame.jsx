// Import External Module. configruasion..........
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import store actions local module...........
import ffnumberSlice, { ffnumberActions } from "../../store/game/ffnumberSlice";
import { ffamountActions } from "../../store/game/ffamountSlice";
// Import Local Modules.............
import FFnumber from "./FFnumber";
import FFamount from "./FFamount";
import FFyouresult from "./FFyouresult";
import FFresult from "./FFresult";

const FFgame = () => {
  let [getNumber, setNumber] = useState([]);
  let [getAmount, setAmount] = useState([]);
  const dispatch = useDispatch();
  /////////////////////////////////////////////////
  // Number value button function..........

  // it is Number click function...............
  const nButtonClick = (number) => {
    setNumber([number]);
  };
  const clearButton = () => {
    setNumber([]);
    setAmount([]);
  };
  /////////////////////////////////////////////////////

  // Amount value button function..............
  const aButtonClick = (amount) => {
    setAmount([amount]);
  };
  const submitButton = () => {
    if (getNumber.length > 0) {
      if (getAmount.length > 0) {
        dispatch(ffnumberActions.addItems(getNumber));
        dispatch(ffamountActions.addItems(getAmount));
        setNumber([]);
        setAmount([]);
      } else {
        console.log("Not amount");
      }
    } else {
      console.log("empty");
    }
  };
  ///////////////////////////////////////////////////////
  // FF Your Result Function Button...........................
  const resultNumber = useSelector((store) => store.ffnumberSlice);
  const resultAmount = useSelector((store) => store.ffamountSlice);

  return (
    <div className="row p-3 m-0">
      <div className="col-8 col-lg-4 p-0 m-0">
        <FFnumber
          nButtonClick={nButtonClick}
          numValue={getNumber}
          clearButton={clearButton}
        />
      </div>
      <div className="col-4 col-lg-4 p-0 m-0">
        <FFamount
          aButtonClick={aButtonClick}
          amountValue={getAmount}
          submitButton={submitButton}
        />
      </div>
      <div className="col-lg-4 p-0 m-0">
        <FFyouresult resultNumber={resultNumber} resultAmount={resultAmount} />
      </div>
      <div className="col-lg p-0 m-0">
        <FFresult />
      </div>
    </div>
  );
};

export default FFgame;
