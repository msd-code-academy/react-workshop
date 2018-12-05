import React, {useState} from 'react';

export const MyStatusHook = () => {
  // whatever we pass to useState function will become the initial value
  const [myStatus, setMyStatus] = useState('cool');
  return (
    <div>
      <p>I am {myStatus}</p>
      <button onClick={() => setMyStatus((myStatus === 'cool') ? 'awesome' : 'cool')} >
        Click me
      </button>
    </div>
  );
};
