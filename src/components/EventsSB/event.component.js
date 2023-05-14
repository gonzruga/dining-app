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
    return (
      <div>
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newEvent}>
                Create
              </button>
            </div>
          ) : (
            <div>
              <div>
                <input
                  id="eventId"
                  name="eventid"
                  placeholder="Event ID"
                  value={this.state.eventId}
                  onChange={this.onChangeEventId}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div>
                <input
                  id="restaurantName"
                  name="restaurantName"
                  placeholder="Restaurant Name"
                  value={this.state.restaurantName}
                  onChange={this.onChangeRestaurantName}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div>
                <input
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine Type"
                  value={this.state.cuisine}
                  onChange={this.onChangeCuisine}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div>
                <input
                  id="description"
                  name="description"
                  placeholder="Event Description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div>
                <input
                  id="date"
                  name="date"
                  placeholder="Date"
                  value={this.state.date}
                  onChange={this.onChangeDate}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div>
                <input
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div>
                <input
                  id="menuLink"
                  name="menuLink"
                  placeholder="Link to Menu / Website"
                  value={this.state.menuLink}
                  onChange={this.onChangeMenuLink}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div>
                <input
                  id="attendance"
                  name="attendance"
                  placeholder="Attendance"
                  value={this.state.attendance}
                  onChange={this.onChangeattendance}
                  type="number"
                  className="form-control"
                  required
                />
              </div>

              <button className="btn btn-success" onClick={this.saveEvent}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
