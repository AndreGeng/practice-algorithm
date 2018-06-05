import knightTour from './index';
import { expect } from 'chai';
import 'mocha';

describe('knight tour', () => {
  const arr: number[][] = [];
  const size = 8;
  beforeEach(() => {
    for(let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        if (j === 0) {
          arr[i] = [];
        }
        arr[i][j] = -1;
      }
    }
  });
  it('should work as expected', function(this: any, done: () => void) {
    this.timeout(20000);
    knightTour(0, 0, arr);
    done();
  });
});
