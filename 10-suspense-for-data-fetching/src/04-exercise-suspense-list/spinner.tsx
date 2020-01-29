import React, { FC } from 'react';

export const Spinner: FC<{}> = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};
