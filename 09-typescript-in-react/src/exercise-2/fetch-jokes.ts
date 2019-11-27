export type Joke = {
  id: string;
  icon_url: string;
  value: string;
};

const fetchJokes = async (query: string): Promise<Joke[]> => {
  try {
    const result = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const resultJSON = await result.json();
    return resultJSON.result || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchJokes;
