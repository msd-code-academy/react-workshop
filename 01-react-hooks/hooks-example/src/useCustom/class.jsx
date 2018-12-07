/* eslint-disable react/prop-types */
import React, {Component} from 'react';

const searchForChuckJokes = async query => {
  try {
    const result = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const resultJSON = await result.json();
    return resultJSON.result || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export class JokeList extends Component {
  state = {
    searching: false,
    jokes: null
  }

  componentDidMount() {
    this._handleNewSearch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this._handleNewSearch();
    }
  }

  _handleNewSearch = async() => {
    const {query} = this.props;
    if (!query) {
      return;
    }
    this.setState({searching: true});
    const jokes = await searchForChuckJokes(query);
    this.setState({
      searching: false,
      jokes
    });
  }

  render() {
    const {searching, jokes} = this.state;
    if (searching) {
      return (<div className="chuck-jokes--loader">Searching...</div>);
    }

    if (!jokes) {
      return null;
    }

    return (
      <>
        <h2>Found {jokes.length} results</h2>
        {jokes.map(item => (
          <div className="chuck-jokes--item" key={item.id}>
            {item.value}
          </div>
        ))}
      </>
    );
  }
}

// @TODO: JokeList using custom hook
// export const JokeListHook = ({query}) => {
// };
