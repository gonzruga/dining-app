// THIS WAS AN ATTEMPT TO DISPLAY SINGLE EVENT. THE PAGE IS NOT ACTIVE IN THE ROUTER
// It imports events from file in data folder and (intended to) ..
// ...compare parameter detail passed from previous page to look for respective data item

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import events from "../../data/events";

const ComponentSingleEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  const fetchEvent = async (eventId) => {
    const response = await events.eventId; //## retrieve function
    const {
      imgUrl,
      restaurantName,
      cuisine,
      description,
      date,
      address,
      menu,
      attendence,
    } = response;

    setEvent({
      eventId,
      imgUrl,
      restaurantName,
      cuisine,
      description,
      date,
      address,
      menu,
      attendence,
    });
  };

  useEffect(() => {
    const eventId = { eventId };
    fetchEvent(eventId);
  }, [eventId]);

  return (
    <div>
      <h4>COMPONENT SINGLE EVENT</h4>

      <h1> {eventId} </h1>
      {/* <h4> Venue: {restaurantName} </h4> */}
      <h4> {events.restaurantName} </h4>
      {/* <h4> {response.restaurantName} </h4> */}
    </div>
  );
};

export default ComponentSingleEvent;
