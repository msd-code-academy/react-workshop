import React, { FC } from 'react';
import { People } from './people';

// TODO: Create ErrorBoundary component

const Exercise02: FC<{}> = () => {
  // TODO: Add ErrorBoundary
  return (
    <React.Suspense fallback={<div>Loading people...</div>}>
      <People />
    </React.Suspense>
  );
};

export default Exercise02;
