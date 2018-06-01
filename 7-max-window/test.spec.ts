import getMaxWindowArr from './index';
import { expect } from 'chai';
import 'mocha';

describe('getMaxWindowArr', () => {
  let arr: number[] = [4,3,5,4,3,3,6,7];
  let w: number = 3;
  it('should return value as expected', () => {
    const result = getMaxWindowArr(arr, w);
    const expectRes = [5,5,5,4,6,7];
    expect(result.length).to.equal(expectRes.length);
    expect(result.join(',')).to.equal(expectRes.join(','));
  });
});
