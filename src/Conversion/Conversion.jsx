// Core Module
import React, { useEffect, useState } from "react";
// External Module
import axios from "axios";
// Local Module
import NotificationsComp from "../Components/Notifications/NotificationsComp";
import PostComp from "../Components/Post/PostComp";

export function NotificationsItems() {
  const [notificationData, setNotification] = useState([]);
  useEffect(() => {
    axios.get("/user/api/notification").then((respones) => {
      setNotification(respones.data);
    });
  }, []);
  return (
    <div>
      {notificationData.map((data) => (
        <NotificationsComp
          key={data.id}
          Title={data.Title}
          Description={data.Description}
        />
      ))}
    </div>
  );
}

export function JobPost({ postItems }) {
  return (
    <>
      {postItems.map((postData) => (
        <PostComp
          key={postData.id}
          Title={postData.Title}
          Description={postData.Description}
          Image={postData.Image}
        />
      ))}
    </>
  );
}
