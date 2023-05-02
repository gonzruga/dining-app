import React from "react";
import { Container } from "react-bootstrap";

// import ContainerEventList from "../containers/Events/ContainerEventList";
import ContainerEventCard from "../containers/Events/ContainerEventCard";

const EventCard = () => {
  const eventsCardData = [
    {
      eventId: "01",
      imgUrl: "img_Rannabar",
      restaurantName: "Burger Kitchen Rannabaar",
      cuisine: "Burgers",
      date: "Sunday May 28 @ 12pm",
      menuLink: "https://burgerkitchen.ee/en/front-page/",
      attendence: 10,
    },
    {
      eventId: "02",
      imgUrl: "img_Katharinenthal",
      restaurantName: "Katharinenthal",
      cuisine: "Cafe",
      date: "Sunday June 11 @ 12pm",
      menuLink: "https://katharinenthal.ee/en/menu/",
      attendence: 12,
    },
  ];

  return (
    <Container>
      <h2>Welcome to Dine and Network at any Upcoming Event</h2>
      <ContainerEventCard
        eventContainerCardParameter={eventsCardData}
      ></ContainerEventCard>
    </Container>
  );
};

export default EventCard;

/*
#### DATA IN EVENT PAGE

 return (
        <Container>
            <h2>Welcome to Dine and Network at any Upcoming Event</h2>
            <ContainerEventList eventContainerParameter={eventsPageData}></ContainerEventList>
        </Container>
    );

*/
