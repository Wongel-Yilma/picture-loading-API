import React from "react";

export default class Validator extends React.Component {
  state = {
    password: "",
  };
  render() {
    return (
      <div className="ui segment">
        <form className="'ui form">
          <div className="field">
            <label> Enter password</label>
            <input
              value={this.state.password}
              type="password"
              onChange={(e) =>
                this.setState({ password: e.target.value.slice(0, 4) })
              }
            />
          </div>
          {this.state.password.length < 4
            ? "Password must be at exactly 4 characters"
            : ""}
        </form>
      </div>
    );
  }
}
