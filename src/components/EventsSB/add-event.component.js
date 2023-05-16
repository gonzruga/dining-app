import React, { Component } from "react";
import EventDataService from "../../services/event_service";

export default class AddEvent extends Component {
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
    this.saveEvent = this.saveEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);

    this.state = {
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
      submitted: false,
    };
  }

  onChangeEventId(e) {
    this.setState({
      eventId: e.target.value,
    });
  }
  onChangeRestaurantName(e) {
    this.setState({
      restaurantName: e.target.value,
    });
  }
  onChangeCuisine(e) {
    this.setState({
      cuisine: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangeMenuLink(e) {
    this.setState({ menuLink: e.target.value });
  }

  onChangeAttendance(e) {
    this.setState({ attendance: e.target.value });
  }

  saveEvent() {
    var data = {
      eventId: this.state.eventId,
      restaurantName: this.state.restaurantName,
      cuisine: this.state.cuisine,
      description: this.state.description,
      date: this.state.date,
      address: this.state.address,
      menuLink: this.state.menuLink,
      attendance: this.state.attendance,
    };

    EventDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          eventId: response.data.eventId,
          restaurantName: response.data.restaurantName,
          cuisine: response.data.cuisine,
          description: response.data.description,
          date: response.data.date,
          address: response.data.address,
          menuLink: response.data.menuLink,
          attendance: response.data.attendance,

          published: response.data.published,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newEvent() {
    this.setState({
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
      submitted: false,
    });
  }

  render() {
    return (
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
            <div className="form-group">
              <label htmlFor="eventId">Event Id</label>
              <input
                type="text"
                className="form-control"
                id="eventId"
                required
                // placeholder="Event ID"
                value={this.state.eventId}
                onChange={this.onChangeEventId}
                name="eventid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="restaurantName">restaurant Name</label>
              <input
                type="text"
                className="form-control"
                id="restaurantName"
                required
                // placeholder="Restaurant Name"
                value={this.state.restaurantName}
                onChange={this.onChangeRestaurantName}
                name="restaurantName"
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
                onChange={this.onChangeAttendance}
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
    );
  }
}
