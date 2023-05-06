// THIS WAS AN ATTEMPT TO DISPLAY SINGLE EVENT. THE PAGE IS NOT ACTIVE IN THE ROUTER
// It imports events from file in data folder and (intended to) ..
// ...compare parameter detail passed from previous page to look for respective data item

import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { events } from "../../data/events";

const ComponentSingleEvent = () => {
  const { eventId } = useParams();
  console.log("eventID::", eventId);
  const [event, setEvent] = useState({});

  const fetchEvent = (eventId) => {
    const response = events.find((eve) => eve.eventId === eventId); //## retrieve function

    setEvent(response);
  };

  useEffect(() => {
    // const eventId = { eventId };
    fetchEvent(eventId);
  }, [eventId]);

  if (event && Object.keys(event).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* className="card_bottom d-flex align-items-center justify-content-between mt-3" */}
      <h1> {eventId} </h1>
      <h4> Venue: {event.restaurantName} </h4>
      <h5>{event.description}</h5>
      <h5>
        <i class="ri-restaurant-2-fill"></i> Cuisine: {event.cuisine}
      </h5>{" "}
      <h5>
        <i class="ri-calendar-event-fill"></i> {event.date}
      </h5>
      <h5>
        <i class="ri-group-fill"></i> Maximum Attendees: {event.attendence}
      </h5>
      <h5>
        <i class="ri-map-pin-line"></i> {event.address}
      </h5>
      <h6>
        <i class="ri-global-line"></i>{" "}
        <a href={event.menuLink} target="_blank">
          Menu/Website
        </a>
      </h6>
      <div>
        <button className="btn join_btn btn-primary">Join Event</button>
      </div>
      <Link to="/events">Back to see all events.</Link>
    </div>
  );
};

export default ComponentSingleEvent;
