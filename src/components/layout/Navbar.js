import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-dark" style={{ justifyContent: "center" }}>
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GithubCompare",
  icon: "fab fa-github m-1",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
