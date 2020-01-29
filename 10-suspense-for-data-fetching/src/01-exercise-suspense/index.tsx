import React, { FC } from 'react';
import { fetchPeople } from '../utils/fetch';
import { Person } from '../utils/types';

// TODO: Create resource

const People: FC<{}> = () => {
  // TODO: Read resource

  return <ul>{/* {people.map((person, index) => (
        <li key={index}>{person.name}</li>
      ))} */}</ul>;
};

const Exercise01: FC<{}> = () => {
  // TODO: Add Suspense with fallback
  return <People />;
};

export default Exercise01;
