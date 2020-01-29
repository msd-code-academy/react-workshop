import React, { FC } from 'react';

import Exercise01 from './01-exercise-suspense';
import Exercise02 from './02-exercise-error-boundaries';
import Exercise03 from './03-exercise-loading-states';
import Exercise04 from './04-exercise-suspense-list';

export const App: FC<{}> = () => {
  return (
    <>
      <Exercise01 />
      {/* <Exercise02 /> */}
      {/* <Exercise03 /> */}
      {/* <Exercise04 /> */}
    </>
  );
};
