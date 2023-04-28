import React from "react";
//import {Card, Button} from "react-bootstrap";
// import Col, ROW

function ComponentEventCard({eventCardParameter}) {

    const { imgUrl, title, cuisine, menu, attendence} = eventCardParameter

    return (
        <div>
            <p>{ imgUrl } </p>  
            <h3> { title } </h3>
            <h5> Cuisine: { cuisine } </h5>
            <h6> Menu: { menu } </h6>
            <h5> Attendence: { attendence } </h5>
            <hr></hr>

        </div>
    );
}

export default  ComponentEventCard;

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