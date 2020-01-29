type Status = 'pending' | 'complete' | 'error';

export const wrapPromise = <T>(promiseFn: () => Promise<T>): { read: () => T } => {
  let status: Status = 'pending';
  let result: T;

  const resourcePromise = promiseFn()
    .then(r => {
      status = 'complete';
      result = r;
    })
    .catch(e => {
      status = 'error';
      result = e;
    });

  return {
    read: () => {
      if (status === 'pending') throw resourcePromise;
      if (status === 'error') throw result;

      return result;
    },
  };
};
