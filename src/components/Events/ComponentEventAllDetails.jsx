import React from "react";
import { Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/event_list_all_details.css";

function ComponentEventAllDetails({ eventAllParameters }) {
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
  } = eventAllParameters;

  return (
    <div className="event_card">
      <Card>
        <div className="event_img">
          <img src={imgUrl} alt="Image_placeholder" />
        </div>
      </Card>

      <CardBody>
        <div className="event_title"> {restaurantName}</div>

        <div className="card_bottom">
          {/* className="card_bottom d-flex align-items-center justify-content-between mt-3" */}
          <h5>{description}</h5>
          <h5>
            <i class="ri-restaurant-2-fill"></i> Cuisine: {cuisine}
          </h5>{" "}
          <h5>
            <i class="ri-calendar-event-fill"></i> {date}
          </h5>
          <h5>
            <i class="ri-group-fill"></i> Maximum Attendees: {attendence}
          </h5>
          <h5>
            <i class="ri-map-pin-line"></i> {address}
          </h5>
          <h6>
            <i class="ri-global-line"></i>{" "}
            <a href={menuLink} target="_blank">
              Menu/Website
            </a>
          </h6>
        </div>

        <div>
          <button className="btn join_btn btn-primary">Join Event</button>
        </div>

        <div>
          <button className="btn join_btn">
            <Link to={`/eventComponent/${eventId}`}>Event Page</Link>
          </button>
        </div>
      </CardBody>
      <hr></hr>
    </div>
  );
}

export default ComponentEventAllDetails;

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
