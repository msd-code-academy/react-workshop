import React, { FC, useState } from 'react';
import { People } from './people';

type Props = {
  initialName?: string;
  onSubmit: (name: string) => void;
};

export const SearchForm: FC<Props> = ({ initialName = '', onSubmit }) => {
  const [name, setName] = useState(initialName);

  const handleChange = e => {
    setName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name);
  }

  function handleSelect(name: string) {
    setName(name);
    onSubmit(name);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <React.Suspense fallback={<div>Loading people...</div>}>
        <People onClick={handleSelect} />
      </React.Suspense>
      <div>
        <input
          className="input"
          id="name-input"
          name="name"
          placeholder="Name..."
          value={name}
          onChange={handleChange}
        />
        <button type="submit" disabled={!name.length}>
          Submit
        </button>
      </div>
    </form>
  );
};
