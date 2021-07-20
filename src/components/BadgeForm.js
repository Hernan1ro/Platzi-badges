import react, { Component } from "react";

class BadgeForm extends Component {
  // state = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   jobTitle: "",
  //   twitter: "",
  // };
  // handleChange = (e) => {
  //   console.log({ name: e.target.name, value: e.target.value });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    e.preventDefault();
    console.log("Button was clicked");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
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
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
