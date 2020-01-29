import React, { FC, SuspenseList, Suspense } from 'React';
import ErrorBoundary from '../utils/errorBoundary';
import { Spinner } from './spinner';
import './style.css';

const delay = (time: number) => (promiseResult: any): Promise<any> =>
  new Promise(resolve => setTimeout(() => resolve(promiseResult), time));

const NavBar = React.lazy(() => import('./navBar').then(delay(500)));
const LeftNav = React.lazy(() => import('./leftNav').then(delay(2000)));
const MainContent = React.lazy(() => import('./mainContent').then(delay(1500)));
const RightNav = React.lazy(() => import('./rightNav').then(delay(1000)));

export const Exercise04: FC<{}> = () => {
  // TODO: Play around with SuspenseList props
  return (
    <div className="main-container">
      <ErrorBoundary>
        <SuspenseList revealOrder="forwards">
          <Suspense fallback={<Spinner />}>
            <NavBar />
          </Suspense>
          <div className="content-container">
            <SuspenseList>
              <Suspense fallback={<Spinner />}>
                <LeftNav />
              </Suspense>
              <Suspense fallback={<Spinner />}>
                <MainContent />
              </Suspense>
              <Suspense fallback={<Spinner />}>
                <RightNav />
              </Suspense>
            </SuspenseList>
          </div>
        </SuspenseList>
      </ErrorBoundary>
    </div>
  );
};

export default Exercise04;
