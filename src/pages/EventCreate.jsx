import React from "react";
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { firebaseDataBase } from "../firebase";

const EventCreate = () => {
  const [events, setEvents] = useState([]);
  const usersCollectionRef = collection(firebaseDataBase, "Events");

  const [newEventId, setEventId] = useState("");
  const [newImgUrl, setImgUrl] = useState("");

  const [newRestaurantName, setRestaurantName] = useState("");
  const [newCuisine, setCuisine] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newDate, setDate] = useState("");
  const [newAddress, setAddress] = useState("");
  const [newMenuLink, setMenuLink] = useState("");

  const [newAttendence, setAttendence] = useState(10);

  const createEvent = async () => {
    await addDoc(usersCollectionRef, {
      eventId: newEventId,
      imgUrl: newImgUrl,
      restaurantName: newRestaurantName,
      cuisine: newCuisine,
      description: newDescription,
      date: newDate,
      address: newAddress,
      menuLink: newMenuLink,
      attendence: Number(newAttendence),
    });
  };

  useEffect(() => {
    const getEvents = async () => {
      const dataToGet = await getDocs(usersCollectionRef);
      console.log(dataToGet);
      setEvents(dataToGet.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
  }, [usersCollectionRef]);

  const updateEvent = async (
    id,
    eventId,
    imgUrl,
    restaurantName,
    cuisine,
    description,
    date,
    address,
    menuLink,
    attendence
  ) => {};

  const deleteEvent = async (id) => {
    const userDoc = doc(firebaseDataBase, "Events", id);
    await deleteDoc(userDoc);
  };

  return (
    <Container>
      <div>
        <h3>Create Your Event</h3>
        Event ID:
        <input
          placeholder="Event ID"
          onChange={(event) => {
            setEventId(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          placeholder="Image URL"
          onChange={(event) => {
            setImgUrl(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          placeholder="Restaurant Name"
          onChange={(event) => {
            setRestaurantName(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          placeholder="Cuisine"
          onChange={(event) => {
            setCuisine(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          placeholder="Description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          placeholder="Date"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          placeholder="Address"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          placeholder="Menu Link"
          onChange={(event) => {
            setMenuLink(event.target.value);
          }}
        />{" "}
        <br></br>
        <input
          type="number"
          placeholder="Attendence"
          onChange={(event) => {
            setAttendence(event.target.value);
          }}
        />{" "}
        <br></br>
        <button onClick={createEvent}> Create Event</button>
        <hr></hr>
        <h3>List Of Events</h3>
        {events.map((event) => {
          return (
            <div>
              <h5>EventId {event.eventId} </h5>
              <h5>Restaurant Name: {event.restaurantName}</h5>
              <h6>Cuisine: {event.cuisine}</h6>
              <h6>Description: {event.description}</h6>
              <h6>Date: {event.date}</h6>
              <h6>Address: {event.address}</h6>
              <h6>
                <i class="ri-global-line"></i> Menu Link: {event.menuLink}}
              </h6>
              <h6>Attendence: {event.attendence}</h6>
              <button
                className="btn btn-info"
                onClick={() => {
                  updateEvent(
                    event.eventId,
                    event.restaurantName,
                    event.cuisine,
                    event.description,
                    event.date,
                    event.address,
                    event.menuLink,
                    event.attendence
                  );
                }}
              >
                Edit User
              </button>
              {"  "}
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteEvent(event.id);
                }}
              >
                {" "}
                Delete Event{" "}
              </button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default EventCreate;
