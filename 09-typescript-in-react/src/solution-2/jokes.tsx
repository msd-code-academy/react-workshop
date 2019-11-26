import React from 'react';
import fetchJokes, {Joke} from './fetch-jokes';

type JokeListProps = {};

type JokeListState = {
  fetchPending: boolean;
  jokes: Joke[];
  query: string;
};

export default class JokeList extends React.Component<JokeListProps, JokeListState> {
  state: JokeListState = {
    fetchPending: false,
    jokes: [],
    query: 'world'
  };

  private triggerFetch = async (): Promise<void> => {
    const {query} = this.state;

    this.setState({
      fetchPending: true
    });

    this.setState({
      fetchPending: false,
      jokes: await fetchJokes(query)
    });
  };

  private handleQueryChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      query: event.currentTarget.value
    });
  };

  public render() {
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
