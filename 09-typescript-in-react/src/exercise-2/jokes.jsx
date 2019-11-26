import React from 'react';
import fetchJokes from './fetch-jokes';

// Exercise:
// * Change extension of this file to .tsx and restart the development server
// * Add types for props and state to the JokeList component. Hint: use "Joke" type from './fetch-jokes'
// * Add private/public declaration to component's methods
// * add proper types to the triggerFetch function
// * add proper types to the handleQueryChange event handler method, hint: React.FormEvent<HTMLInputElement>

export default class JokeList extends React.Component {
  state = {
    fetchPending: false,
    jokes: [],
    query: 'world'
  };

  triggerFetch = async () => {
    const {query} = this.state;

    this.setState({
      fetchPending: true
    });

    this.setState({
      fetchPending: false,
      jokes: await fetchJokes(query)
    });
  };

  handleQueryChange = (event) => {
    this.setState({
      query: event.currentTarget.value
    });
  };

  render() {
    const {fetchPending, query} = this.state;

    return (
      <>
        <h1>Chuck Norris Jokes</h1>
        <form onSubmit={this.triggerFetch} className="joke-list-form">
          <input type="text" placeholder="Search" value={query} onChange={this.handleQueryChange} />
          <div className="button" onClick={this.triggerFetch}>Load Jokes</div>
        </form>
        {fetchPending && <h3>Loading jokes...</h3>}
        {this.state.jokes.map((joke) => (
          <div key={joke.id} className="joke">
            <img src={joke.icon_url} alt="joke icon" />
            <div>{joke.value}</div>
          </div>
        ))}
      </>
    );
  }
}
