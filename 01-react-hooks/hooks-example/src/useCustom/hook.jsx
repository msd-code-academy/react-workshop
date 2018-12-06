import React, {useState, useEffect} from 'react';

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

/**
 * Custom hook I can reuse as many times throughout my application as I want
 * @param {String} query   Query to search for
 * @returns {Array}    Array with data: [jokes:Array, searching:Boolean]
 */
const useJokeSearch = query => {
  const [jokes, setJokes] = useState(null);
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    if (!query) {
      return;
    }
    setSearching(true);
    searchForChuckJokes(query)
      .then(dataFromApi => {
        setSearching(false);
        setJokes(dataFromApi);
      });
  }, [query]);

  return {jokes, searching};
};

export const JokeList = ({query}) => {
  const {jokes, searching} = useJokeSearch(query);

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
};
