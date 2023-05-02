import React from "react";
import { Container } from "react-bootstrap";

import ContainerEventList from "../containers/Events/ContainerEventList";

const EventsListPage = () => {
  const eventsPageData = [
    {
      eventId: "01",
      imgUrl: "img_Rannabar",
      restaurantName: "Burger Kitchen Rannabaar",
      cuisine: "Burgers",
      description: "There is nothing like burgers at the beach in the sun",
      date: "Sunday May 28 @ 12pm",
      address: "Kesk tee 20, Haabneeme",
      menuLink: "https://burgerkitchen.ee/en/front-page/",
      attendence: 10,
    },
    {
      eventId: "02",
      imgUrl: "img_Katharinenthal",
      restaurantName: "Katharinenthal",
      cuisine: "Cafe",
      description: "Welcome to enjoy brunch at the park.",
      date: "Sunday June 11 @ 12pm",
      address: "A. Weizenbergi 37",
      menuLink: "https://katharinenthal.ee/en/menu/",
      attendence: 12,
    },
  ];

  return (
    <Container>
      <h2>Welcome to Dine and Network at any Upcoming Event</h2>
      <ContainerEventList
        eventContainerParameter={eventsPageData}
      ></ContainerEventList>
    </Container>
  );
};

export default EventsListPage;

/*
#### DATA IN EVENT PAGE

 return (
        <Container>
            <h2>Welcome to Dine and Network at any Upcoming Event</h2>
            <ContainerEventList eventContainerParameter={eventsPageData}></ContainerEventList>
        </Container>
    );

*/
