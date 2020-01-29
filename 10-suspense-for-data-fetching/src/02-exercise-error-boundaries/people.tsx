import React, { FC } from 'react';
import { fetchPeople } from '../utils/fetch';
import { Person } from '../utils/types';
import { wrapPromise } from '../utils/wrapPromise';

const peopleResource = wrapPromise<Person[]>(fetchPeople);

export const People: FC<{}> = () => {
  const people = peopleResource.read();

  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>{person.name}</li>
      ))}
    </ul>
  );
};
