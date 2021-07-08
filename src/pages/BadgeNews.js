import React from "react";
import Navbar from "../components/Navbar";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} alt="" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Hernán"
                lastName="Mercado"
                jobTitle="Frontend Developer"
                avatarImage="https://media-exp1.licdn.com/dms/image/C5603AQFKPleD6VsjxQ/profile-displayphoto-shrink_200_200/0/1610956020303?e=1630540800&v=beta&t=LLJzUE3fYxIDXRYgZ4Ke8_DC18YF5aLIctmojMc9DJI"
                twitter="@Hernan1ro"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
