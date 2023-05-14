import React, { Component } from "react";
import { Link } from "react-router-dom";

import EventDataService from "../../services/event_service";

export default class EventsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCuisine = this.onChangeSearchCuisine.bind(this);
    this.retrieveEvents = this.retrieveEvents.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEvent = this.setActiveEvent.bind(this);
    this.removeAllEvents = this.removeAllEvents.bind(this);
    this.searchCuisine = this.searchCuisine.bind(this);

    this.state = {
      events: [],
      currentEvent: null,
      currentIndex: -1,
      searchCuisine: "",
    };
  }

  componentDidMount() {
    this.retrieveEvents();
  }

  onChangeSearchCuisine(e) {
    const searchCuisine = e.target.value;

    this.setState({
      searchCuisine: searchCuisine,
    });
  }

  retrieveEvents() {
    EventDataService.getAll()
      .then((response) => {
        this.setState({ events: response.data });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveEvents();
    this.setState({
      currentEvent: null,
      currentIndex: -1,
    });
  }

  setActiveEvent(event, index) {
    this.setState({
      currentEvent: event,
      currentIndex: index,
    });
  }

  removeAllEvents() {
    EventDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchCuisine() {
    EventDataService.findByCuisine(this.state.searchCuisine)
      .then((response) => {
        this.setState({
          events: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchCuisine, events, currentEvent, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Cuisine Type"
              value={searchCuisine}
              onChange={this.onChangeCuisine}
            />

            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchCuisine}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4>EVENT LIST</h4>

          <ul className="list-group">
            {events &&
              events.map((event, index) => (
                <li
                  className={
                    "list-group-item" + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveEvent(event, index)}
                  key={index}
                >
                  {event.cuisine}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllEvents}
          >
            Remove All Events
          </button>
        </div>

        <div className="col-md-6">
          {currentEvent ? (
            <div>
              <h4>Event</h4>
              <div>
                <label>
                  <strong>Restaurant: </strong>
                </label>{" "}
                {currentEvent.restaurantName}
              </div>
              <div>
                <label>
                  <strong>Cuisine: </strong>
                </label>{" "}
                {currentEvent.cuisine}
              </div>
              <div>
                <label>
                  <strong>Description: </strong>
                </label>{" "}
                {currentEvent.description}
              </div>
              <div>
                <label>
                  <strong>Date: </strong>
                </label>{" "}
                {currentEvent.date}
              </div>
              <div>
                <label>
                  <strong>Address: </strong>
                </label>{" "}
                {currentEvent.address}
              </div>
              <div>
                <label>
                  <strong>Menu / Website: </strong>
                </label>{" "}
                {currentEvent.menueLink}
              </div>
              <div>
                <label>
                  <strong>Attendance: </strong>
                </label>{" "}
                {currentEvent.attendance}
              </div>

              <div>
                <label>
                  <strong>Status: </strong>
                </label>{" "}
                {currentEvent.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/events/" + currentEvent.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click an event...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
