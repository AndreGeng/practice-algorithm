import { flattenArr } from './index';
import { expect } from 'chai';
import 'mocha';

describe('flattenArr', () => {
  const arr: any = [1,2,3,[4,5,[6,7]]];
  it('should return value as expected', () => {
    expect(flattenArr(arr)).to.eql([1,2,3,4,5,6,7])
  });
});
