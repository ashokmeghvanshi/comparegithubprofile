/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      avatar_url,
      html_url,
      name,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
    } = this.props.user;
    return (
      <Fragment>
        <Link to="/" className="btn btn-dark btn-sm my-1">
          Back
        </Link>
        <div style={boxStyle}>
          <img
            src={avatar_url}
            style={{ width: "20%", height: "20%" }}
            alt=""
          />

          <h1>{name}</h1>
          <p>{bio}</p>

          <a href={html_url} className="btn btn-success btn-sm my-1">
            Visit Github Profile
          </a>

          <div className={userData}>
            <a href="#" className="btn btn-success btn-sm my-1">
              {public_repos && (
                <Fragment>Public Repos- {public_repos}</Fragment>
              )}
            </a>
            <a href="#" className="btn btn-success btn-sm my-1">
              Public Gists- {public_gists}
            </a>
            <a href="#" className="btn btn-success btn-sm my-1">
              Followers- {followers}
            </a>
            <a href="#" className="btn btn-success btn-sm my-1">
              Following- {following}
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  JustifyContent: "center",
  alignItems: "center",
};

const userData = {
  display: "flex",
  flexDirection: "row",
  JustifyContent: "Center",
  alignItems: "center",
};
