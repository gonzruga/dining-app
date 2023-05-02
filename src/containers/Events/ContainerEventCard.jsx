import React from "react";

//import { Container } from 'react-bootstrap';
// import { Col } from "react-bootstrap";
//import {Card, Button, Col, Row} from "react-bootstrap";

import ComponentEventCard from "../../components/Event_Card/ComponentEventCard";

function ContainerEventCard({ eventContainerCardParameter }) {
  return eventContainerCardParameter.map((madeUpParameterForEventCard) => {
    return (
      <ComponentEventCard
        eventCardParameter={madeUpParameterForEventCard}
      ></ComponentEventCard>
    );
  });
}

export default ContainerEventCard;

/*
// #### DATA IN EVENT PAGE - CLASS version - Not using data in Container]
function ContainerEventList({eventContainerParameter}) {

    return eventContainerParameter.map((madeUpParameter) => {
        return (
            <ComponentEventCard eventCardParameter={madeUpParameter}></ComponentEventCard>
        )
    });
}

// ### MERN-Muhib - CLASS FORMULA

function ContainerEventList() {
    return eventContainerData.map((madeUpParameter) => {
        return (
                <ComponentEventCard eventCardParameter={madeUpParameter}></ComponentEventCard>
        )
    });
}

// ### Original MERN - Muhib - Item, Index
const ContainerEventList = () => {
    return (<>
        {eventContainerData.map((madeUpParameter, index) => 
            (<Col lg="6" key={index}>
                <ComponentEventCard eventCardParameter={madeUpParameter} />
            </Col>
            ))
        }   
    </>);
}

*/
