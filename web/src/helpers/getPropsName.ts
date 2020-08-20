import { styleFn } from 'styled-system';

export const getPropsName = (...args: styleFn[]) =>
  args.reduce((curr, acc) => {
    if (acc.propNames) return curr.concat(acc.propNames);
    return curr;
  }, [] as string[]);
