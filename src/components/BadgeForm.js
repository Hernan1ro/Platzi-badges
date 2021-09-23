import react, { Component } from "react";
import Gravatar from "./Gravatar";

class BadgeForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              placeholder="First name"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              placeholder="Last name"
              className="form-control"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>JobTitle</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              placeholder="Job"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              placeholder="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button
            onClick={this.props.onSubmit}
            className="btn btn-primary mt-2"
          >
            Save
          </button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
