import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    alert: PropTypes.object.isRequired,
  };
  onSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Your forgot to enter username", "danger");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  }
  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        {this.props.alert.display && (
          <div className={`alert alert-${this.props.alert.type}`}>
            <i className="fas fa-info-circle">{this.props.alert.msg}</i>
          </div>
        )}
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            name="text"
            placeholder="Search user"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}
