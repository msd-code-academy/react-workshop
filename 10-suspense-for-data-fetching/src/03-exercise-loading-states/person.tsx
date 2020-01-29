import React, { FC } from 'React';
import { Person } from '../utils/types';
type PersonResource = { read: () => Person };

export const PersonInfo: FC<{
  personResource: PersonResource;
}> = ({ personResource }) => {
  const person = personResource.read();

  return (
    <div className="card-body">
      <h5 className="card-title">{person.name}</h5>
      <div>Height: {person.height}</div>
      <div>Weight: {person.mass}</div>
    </div>
  );
};
