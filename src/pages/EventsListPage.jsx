import React from 'react'
import { Container } from 'react-bootstrap';
// import { Container, Row, Col, } from 'reactstrap';

import ContainerEventList from '../containers/Events/ContainerEventList';


const EventsListPage = () => {

// const eventsPageData = [
//     {
//         imgUrl: "[image]] Events List",
//         title: "May Day Grilln @ Tommi",
//         cuisine: "Steak",
//         menu: "https://tuleestonia.ee",
//         attendence: 10,
//     },
//     {
//         imgUrl: "image 2 ",
//         title: "Burgers on Midsummer",
//         cuisine: "Burgerss",
//         menu: "https://tuleestonia.ee",
//         attendence: 10,
//         },
// ];

    return (
        <Container>
            <h2>Welcome to Dine and Network at any Upcoming Event</h2>
            <ContainerEventList />
        </Container>
    );
}

export default EventsListPage;

/*
#### DATA IN EVENT PAGE

 return (
        <Container>
            <h2>Welcome to Dine and Network at any Upcoming Event</h2>
            <ContainerEventList eventContainerParameter={eventsPageData}></ContainerEventList>
        </Container>
    );

#### FULL DATA
{
        imgUrl: "ssss",
        title: "May Day Grilln @ Tommi",
        restaurantName: "Tommi Grill Restaurant",
        cuisine: "Steak",
        description: "The best grill in town on Celebration Day",
        date: "May 1, 2023",
        time: "7 pm",
        address: "Viru Väljak 2",
        standardPrice: 20,
        websiteMenu: "www.tommigrill.com/en/menuu",
        tripAdvisor: "https://www.tripadvisor.com/Restaurant_Review-g274958-d2178090-Reviews-Tommi_Grill-Tallinn_Harju_County.html",
        attending: 10,
        maximumAttendence: 20,
        reviews: [
            {
                name: "Dre Dr",
                reviewDescription: "Steak at its best",
                rating: 5,
            },
            {
                name: "Jordan Klepper",
                reviewDescription: "Grilling done right",
                rating: 4,
            },
        ],
        avgRating: 4.5,
        fineDining: true, 
        featured: false,  

    },

*/