import React from "react";
import BadgesList from "../components/BadgesList";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";
import { Link } from "react-router-dom";
import api from "../api";
import Pageloading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading && !this.state.data) {
      return <Pageloading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="Conf logo"
                className="Badges_conf-logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Add
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
