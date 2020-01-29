import { Person } from './types';

export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export const fetchPerson = async (name: string = '', delay: number = 3000): Promise<Person> => {
  const people = await fetch(`https://swapi.co/api/people/?search=${name}`);
  const peopleJSON = await people.json();

  const person = peopleJSON.results[0];
  if (!person) {
    throw new Error('Could not find person!');
  }

  await sleep(delay);

  return person;
};

export const fetchPeople = async (delay: number = 3000): Promise<Person[]> => {
  const people = await fetch('https://swapi.co/api/people/');
  const peopleJSON = await people.json();

  const peopleResults = peopleJSON.results;

  if (!peopleResults) {
    throw new Error('Could not find people!');
  }

  await sleep(delay);

  return peopleResults;
};
