import react, { Component } from "react";

class BadgeForm extends Component {
  handleChange = (e) => {
    console.log({ name: e.target.name, value: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log("Button was clicked");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="First name"
              className="form-control"
              name="name"
            />
            <button onClick={this.handleClick} className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default BadgeForm;
