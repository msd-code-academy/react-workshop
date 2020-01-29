import React, { FC, useState, useTransition, SuspenseConfig } from 'React';
import { fetchPerson } from '../utils/fetch';
import { wrapPromise } from '../utils/wrapPromise';
import { PersonInfo } from './person';
import { SearchForm } from './searchForm';
import './style.css';
import ErrorBoundary from '../utils/errorBoundary';

const createPersonResource = (name: string) => {
  // TODO: Play around with delay
  return wrapPromise(() => fetchPerson(name, 2000));
};

// TODO: Play around with the config
// const SUSPENSE_CONFIG: SuspenseConfig = {
//   timeoutMs: 1500,
//   busyDelayMs: 500,
//   busyMinDurationMs: 800,
// };

export const Exercise03: FC<{}> = () => {
  const [name, setName] = useState('');
  const [personResource, setPersonResource] = useState(null);
  // TODO: Implement useTransition and use it with setPersonResource

  const handleSubmit = (nextName: string) => {
    setName(nextName);
    // TODO: use startTransition
    setPersonResource(createPersonResource(nextName));
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {personResource && (
        <ErrorBoundary>
          {/* TODO: Use class name 'container--loading' when transition is pending  */}
          <div>
            <div className="mt-4 card" style={{ width: '18rem' }}>
              <React.Suspense fallback={<div className="card-body">Loading {name}...</div>}>
                <PersonInfo personResource={personResource} />
              </React.Suspense>
            </div>
          </div>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default Exercise03;
