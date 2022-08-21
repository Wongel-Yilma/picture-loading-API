import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
          <label> Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
