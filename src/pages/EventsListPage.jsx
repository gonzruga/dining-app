import React from "react";
import { Container } from "react-bootstrap";

import ContainerEventList from "../containers/Events/ContainerEventList";
import { events } from "../data/events";

const EventsListPage = () => {
  return (
    <Container>
      <h2>Welcome to Dine and Network at any Upcoming Event</h2>
      <ContainerEventList eventContainerParameter={events}></ContainerEventList>
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
