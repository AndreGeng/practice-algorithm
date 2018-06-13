import loop from './index';
import { expect } from 'chai';
import 'mocha';

describe('loop in spiral', () => {
  let arr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  it('should work as expected', () => {
    loop(arr);
  });
});
