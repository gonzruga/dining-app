import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/home.css";

import burgerBacon from "../assets/images/Burger_Bacon.jpeg";
import lamb from "../assets/images/lamb.png";

// import EventsListPage from "./EventsListPage";
import EventCard from "./EventCard";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center ">
                  <h3>Explore Cuisines</h3>
                  <img src={burgerBacon} alt="Banner" />
                </div>
                <h5>Explore Tallinn restaurants for great memories.</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore odio neque mollitia in ut qui quo nostrum accusamus
                  enim ipsa! Consequuntur nisi asperiores suscipit ipsa modi.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={burgerBacon} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={lamb} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div>
        <EventCard />
      </div>
    </>
  );
};

export default Home;
