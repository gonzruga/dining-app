// THIS WAS AN ATTEMPT TO CREATE A PAGE FOR SINGLE EVENT USING useParams
// It imports events from file in data folder and (intended to) ..
// ...compare parameter detail passed from previous page to look for respective data item
// Reference: https://www.youtube.com/watch?v=y_pr4lRoUto

import React from "react";
import { useParams, Link } from "react-router-dom";

import events from "../data/events";

const SingleEventDetails = (eventAllParameters) => {
  const { parameter } = useParams();

  const {
    eventId,
    imgUrl,
    restaurantName,
    cuisine,
    description,
    date,
    address,
    menuLink,
    attendence,
  } = event;

  // const event = events.find(() => events.eventId === parameter);
  const event = eventAllParameters.find(
    () => eventAllParameters.eventId === parameter
  );

  return (
    <div>
      <h1>EVENT SINGLE PAGE</h1>

      <h1> {eventId} </h1>
      <h4>Restaurant Name: {restaurantName} </h4>

      <Link to="/events">Back to events page.</Link>

      {/* {imgUrl} {restaurantName} {cuisine} {description} {date}{address} {menuLink}
        {attendence} */}
    </div>
  );
};

export default SingleEventDetails;

/*



### Using 'eventParameters' w/ Stringify

const EventDetails = () => {
  let eventParameters = useParams();
  console.log(eventParameters);

  return (
    <div>
      <h3>EventDetails</h3>
      <div>{JSON.stringify(eventParameters)}</div>
    </div>
  );
};

###  Display parameters passed concatenated

const EventDetails = () => {
  const { event_details } = useParams();

  return (
    <div>
      <h3>EventDetails</h3>
      <div> Event Identity: {event_details}</div>
    </div>
  );
};

*/
