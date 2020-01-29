import React, { FC } from 'React';
import { fetchPeople } from '../utils/fetch';
import { wrapPromise } from '../utils/wrapPromise';
import { Person } from '../utils/types';

const createPeopleResource = () => {
  return wrapPromise<Person[]>(() => fetchPeople(100));
};

const peopleResource = createPeopleResource();

export const People: FC<{
  onClick: (name: string) => void;
}> = ({ onClick }) => {
  const people = peopleResource.read();

  return (
    <div>
      Suggestions:
      <ul>
        {people.map((person, index) => (
          <li className="badge" key={index}>
            <a href="#" onClick={() => onClick(person.name)}>
              {person.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
