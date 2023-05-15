import React, { Component } from "react";
import EventDataService from "../../services/event_service";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.onChangeEventId = this.onChangeEventId.bind(this);
    this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);
    this.onChangeCuisine = this.onChangeCuisine.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeMenuLink = this.onChangeMenuLink.bind(this);
    this.onChangeAttendance = this.onChangeAttendance.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);

    this.state = {
      currentEvent: {
        id: null,
        eventId: "",
        restaurantName: "",
        cuisine: "",
        description: "",
        date: "",
        address: "",
        menuLink: "",
        attendance: "",

        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getEvent(this.props.math.params.id);
  }

  onChangeEventId(e) {
    const eventId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          eventId: eventId,
        },
      };
    });
  }

  onChangeRestaurantName(e) {
    const restaurantName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          restaurantName: restaurantName,
        },
      };
    });
  }

  onChangeCuisine(e) {
    const cuisine = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          cuisine: cuisine,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          description: description,
        },
      };
    });
  }

  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          date: date,
        },
      };
    });
  }

  onChangeAddress(e) {
    const address = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          address: address,
        },
      };
    });
  }

  onChangeMenuLink(e) {
    const menuLink = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          menuLink: menuLink,
        },
      };
    });
  }

  onChangeAttendance(e) {
    const attendance = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          attendance: attendance,
        },
      };
    });
  }

  getEvent(id) {
    EventDataService.get(id)
      .then((response) => {
        this.setState({ currentEvent: response.data });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentEvent.id,
      eventId: this.state.currentEvent.eventId,
      restaurantName: this.state.restaurantName,
      cuisine: this.state.cuisine,
      description: this.state.description,
      date: this.state.date,
      address: this.state.address,
      menuLink: this.state.menuLink,
      attendance: this.state.attendance,

      published: status,
    };

    EventDataService.update(this.state.currentEvent.id, data)
      .then((response) => {
        this.setState((prevState) => ({
          currentEvent: { ...prevState.currentEvent, published: status },
        }));
        console.log(response.data);
      })
      .catche((e) => {
        console.log(e);
      });
  }

  updateEvent() {
    EventDataService.update(
      this.state.currentEvent.id,
      this.state.currentEvent
    ).then((response) => {
      console.log(response.data);
      this.setState({ message: "The event was updated successfully" });
    });
  }

  deleteEvent() {
    EventDataService.delete(this.state.currentEvent.id).then((response) => {
      console.log(response.data);
      this.props.history.push("/events");
    });
  }

  render() {
    const { currentEvent } = this.state;

    return (
      <div>
        {currentEvent ? (
          <div className="edit-form">
            <h4>Event</h4>
            <form>
              <div className="form-group">
                <label htmlFor="eventId">Event Id</label>
                <input
                  id="eventId"
                  placeholder="Event ID"
                  value={currentEvent.eventId}
                  onChange={this.onChangeEventId}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="restaurantName">Restaurant Name</label>
                <input
                  id="restaurantName"
                  placeholder="Restaurant Name"
                  value={currentEvent.restaurantName}
                  onChange={this.onChangeRestaurantName}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cuisine">Cuisine</label>
                <input
                  id="cuisine"
                  placeholder="cuisine"
                  value={currentEvent.cuisine}
                  onChange={this.onChangeCuisine}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  placeholder="description"
                  value={currentEvent.description}
                  onChange={this.onChangeDescription}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Date: </label>
                <input
                  id="date"
                  placeholder="Date"
                  value={currentEvent.date}
                  onChange={this.onChangeDate}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  placeholder="Address"
                  value={currentEvent.address}
                  onChange={this.onChangeAddress}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="menuLink">Menu / Website</label>
                <input
                  id="menuLink"
                  placeholder="Link to Menu"
                  value={currentEvent.menuLink}
                  onChange={this.onChangeMenuLink}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="attendance">Attendance: </label>
                <input
                  id="attendance"
                  placeholder="attendance"
                  value={currentEvent.attendance}
                  onChange={this.onChangeAttendance}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status: </strong>
                </label>
                {currentEvent.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentEvent.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                Unpublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={() => this.deleteEvent}
            >
              DELETE
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={() => this.updateEvent}
            >
              Update
            </button>
            <p> {this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p> Click on any event</p>
          </div>
        )}
      </div>
    );
  }
}
