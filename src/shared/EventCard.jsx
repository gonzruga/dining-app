import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom' 

// import event-card.css

const EventCard = ({event}) => {

    const { id, title, restaurantName, cuisine, description, date, time, address, websiteMenu, distance, maximumAttendence, reviews, avgRating, featured } = event

    return (
    <>
    <div className='event_card'>
        <Card>
        <div className="event_img">
            {/* <img src={photo} alt="event-img" /> */}
            <span>Featured</span>
        </div>
        </Card>

        <CardBody>
            <div className='top_card d-flex align-items-center justify-content-between'>
            <span className="event_location d-flex align-items-center gap-1">
                <i class="ri-map-pin-line"></i>{cuisine} 
            </span>
            <span className="event_rating d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i>{avgRating}{" "} <span>({reviews.length})</span>
            </span>
            </div>

            <h5 className='event_title'><Link to={`/events/${id}`}> {title} </Link> </h5>
        
            <div className='card_bottom d-flex align-items-center justify-content-between mt-3'>
                <h5> ${maximumAttendence} <span> people</span> </h5>

                <button className="btn booking_btn">
                    <Link to={`/events/${id}`}>Reserve Now</Link>
                </button>
            </div>    
        </CardBody>
        
    </div>
    </>);
};
 
export default EventCard;