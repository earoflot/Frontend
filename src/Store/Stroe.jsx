import { createContext, useStates } from "react";

export const NotificationData = createContext(null);

export const NotificationProvider = (props) => {
  const [Items] = useStates(
    {
      Title: "APPLY FOR AIRPORT JOB OF GROUND STAFF",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF RETAILS SHOPS",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF MAINTENANCE & ENGINEERING",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF CABIN CREW",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF ASSIST SERVICE",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF SECURITY OFFICER",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF FOOD SERVICE WORKER",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    }
  );
  return <NotificationProvider>{props.children}</NotificationProvider>;
};
