import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { shoppingActions } from "../Store/shoppingItems";

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
      dispatch(shoppingActions.addItems(respones.data));
    });
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { itemsActions } from "../store/itemsSlice";
// import { fetchStatusActions } from "../store/fetchStatusSlice";

// const FetchItems = () => {
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (fetchStatus.fetchDone) return;

//     const controller = new AbortController();
//     const signal = controller.signal;

//     dispatch(fetchStatusActions.markFetchingStarted());
//     fetch("http://localhost:8080/items", { signal })
//       .then((res) => res.json())
//       .then(({ items }) => {
//         dispatch(fetchStatusActions.markFetchDone());
//         dispatch(fetchStatusActions.markFetchingFinished());
//         dispatch(itemsActions.addInitialItems(items[0]));
//       });

//     return () => {
//       controller.abort();
//     };
//   }, [fetchStatus]);

//   return <></>;
// };

// export default FetchItems;
