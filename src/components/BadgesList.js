import "./styles/badgesList.css";
import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className="badgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <Link
                  to={`/badges/${badge.id}`}
                  className="text-reset text-decoration-none"
                >
                  <Gravatar
                    email={badge.email}
                    alt=""
                    className="BadgesListItem__avatar"
                  />
                  <div>
                    <div>
                      <strong>
                        {badge.firstName} {badge.lastName}
                      </strong>
                    </div>
                    <div className="Twitter__name">
                      <span className="Twitter__logo"></span>@{badge.twitter}
                    </div>
                    <div>{badge.jobTitle}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default BadgesList;
