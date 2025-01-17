import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { shoppinghomeActions } from "../Store/shoppinghomeSlice";

import { fetchStatusActions } from "../Store/fetchStatus";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());
    axios.get("/user/api/shopping").then((respones) => {
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(shoppinghomeActions.addItems(respones.data));
    });
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
