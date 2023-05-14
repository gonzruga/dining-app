import React from "react";
import { Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/componentEventCard.css";

function ComponentEventCard({ eventCardParameter }) {
  const {
    eventId,
    imgUrl,
    restaurantName,
    cuisine,
    date,
    menuLink,
    attendence,
  } = eventCardParameter;

  return (
    <div className="event_card">
      <Card>
        <div className="event_img">
          <img src={imgUrl} alt="Image_placeholder" />
        </div>
      </Card>

      <CardBody>
        <div className="event_title">
          <Link to={`/eventComponent/${eventId}`}> {restaurantName} </Link>{" "}
          {/* Link goes to page showing list of all events. */}
        </div>

        <div className="card_bottom">
          {/* className="card_bottom d-flex align-items-center justify-content-between mt-3" */}

          <h6>
            <i class="ri-restaurant-2-fill"></i> Cuisine: {cuisine}
          </h6>

          <h6>
            <i class="ri-calendar-event-fill"></i> {date}
          </h6>

          <h6>
            <i class="ri-group-fill"></i> Maximum Attendees: {attendence}
          </h6>

          <h6>
            <i class="ri-global-line"></i>
            <a href={menuLink} target="_blank">
              {" "}
              Menu/Website
            </a>
          </h6>

          <button className="btn join_btn">
            <Link to={`/eventComponent/${eventId}`}>Event Page</Link>
          </button>
        </div>
      </CardBody>
      <hr></hr>
    </div>
  );
}

export default ComponentEventCard;

/*  
<img src={imgUrl} alt="" />

####3
<Card>
            <Card.Body>
                <Card.Title>Event Title</Card.Title>
                <Card.Text>
                    CARD TEXT HERE: Join lovely events. 
                </Card.Text>
                <Button variant="primary">Join Event</Button>
            </Card.Body>
        </Card>
        
*/
