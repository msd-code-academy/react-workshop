import React, {Component} from 'react';
import {JokeList} from './class';

export class ChuckJokes extends Component {
  state = {
    searchInput: '',
    query: ''
  };

  _handleQueryChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  _triggerSearch = e => {
    const {searchInput} = this.state;
    e.preventDefault();
    this.setState({
      query: searchInput
    });
  };

  render() {
    const {query} = this.state;
    return (
      <div className="chuck-jokes">
        <form onSubmit={this._triggerSearch}>
          <input type="text" placeholder="Search" onChange={this._handleQueryChange} />
          <button type="submit" onClick={this._triggerSearch}>
            Search
          </button>
        </form>
        <JokeList query={query} />
      </div>
    );
  }
}
