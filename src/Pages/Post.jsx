import React from "react";
import Container from "../Container/Container";
import { JobPost } from "../Conversion/Conversion";

export default function Post() {
  const postData = [
    {
      /* This is a Gound Handling */
      id: 1,
      Image: "./src/assets/images/GroundHandling.jpeg",
      Title: "Ground Handling",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
      Updated: " Last updated 3 mins ago",
    },
    {
      /* This is a Retails Shop*/
      id: 2,
      Image: "./src/assets/images/Retail_shop.avif",
      Title: "Airport Retails Shops",
      Description:
        "As a retail team member, you'll play a key role in engaging customers by promoting, advising on, and selling a wide range of exclusive tax and duty-free products.",
      Updated: " Last updated 3 mins ago",
    },

    {
      /*Maintenance and Engineering*/
      id: 3,
      Image: "./src/assets/images/Mantanance_Engeenering.jpeg",
      Title: "Maintenance & Engineering",
      Description:
        " A maintenance engineer is responsible for undertaking continuous routine maintenance on plants and machinery to ensure they run smoothly and reliably. They work with other professionals to improve efficiency and safety standards as well as organise repairs.",
      Updated: " Last updated 3 mins ago",
    },
    {
      /* Cabin Crew*/
      id: 4,
      Image: "./src/assets/images/Cabin_crew.jpg",
      Title: "Cabin Crew",
      Description:
        "Cabin crew also known as Flight Attendants provide in-flight services to ensure that airline passengers have a comfortable and smooth flying experience. Their duties include answering passengers’ questions, enforcing safety measures before, during and after takeoff and serving food and beverages during flights.",
      Updated: " Last updated 3 mins ago",
    },
    {
      /*Assist Service*/
      id: 5,
      Image: "./src/assets/images/Assist_Services.jpeg",
      Title: "Assist Service",
      Description:
        "A assist services or Customer Service Representative provides a company’s customers with the service they require. Their duties include receiving inbound calls, responding to complaints and selling a company’s products or services.",
      Updated: " Last updated 3 mins ago",
    },

    {
      /* Airport Security Officer*/
      id: 6,
      Image: "./src/assets/images/Airport_Security.jpeg",
      Title: "Airport Security Officer",
      Description:
        "The duties of an airport security employee may vary depending on their designation and specialisation. These professionals work in teams, with government officials and law enforcement agents to ensure the security and safety of passengers and personnel in an airport.",
      Updated: " Last updated 3 mins ago",
    },
    {
      /* Airlines Food Service Worker*/
      id: 7,
      Image: "./src/assets/images/Food_Worker.jpeg",
      Title: "Airlines Food Service Worker",
      Description:
        " Airline food service workers typically work in the galley of an aircraft, where they provide passengers with meals, and perform food preparation, sanitation, and stocking duties. They may also serve special meals for passengers with dietary needs.",
      Updated: " Last updated 3 mins ago",
    },
  ];
  return (
    <Container>
      <JobPost postItems={postData} />
    </Container>
  );
}
