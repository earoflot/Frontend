import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { shoppinghomeActions } from "../../store/shopping/shoppinghomeSlice";
import { jobActions } from "../../store/job/jobSlice";
import { notificationsActions } from "../../store/update/notificationsSlice";
import { currentnotifsActions } from "../../store/update/currentnotifsSlice";
import { fetchStatusActions } from "../../store/it/fetchStatus";
import { homeActions } from "../../store/home/homeSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());
    axios.get("/user/api/shopping").then((respones) => {
      axios.get("/user/api/job").then((respones) => {
        dispatch(jobActions.addItems(respones.data));
      });
      axios.get("/user/api/notification").then((respones) => {
        dispatch(notificationsActions.addItems(respones.data));
      });
      axios.get("/user/api/currentnotifs").then((respones) => {
        dispatch(currentnotifsActions.addItems(respones.data));
      });
      axios.get("/user/api/home").then((respones) => {
        dispatch(homeActions.addItems(respones.data));
      });
      // axios.get("/user/api/game").then((respones) => {
      //   dispatch(gameActions.addItems(respones.data));
      // });

      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());

      dispatch(shoppinghomeActions.addItems(respones.data));
    });
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
