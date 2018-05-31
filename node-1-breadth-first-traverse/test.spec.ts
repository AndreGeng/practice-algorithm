import { readDir } from './index';
import { expect } from 'chai';
import 'mocha';
import { resolve } from 'path';
import { spy } from 'sinon';

describe('breadth first folder traverse', () => {
  after(() => {
    (console.log as any).restore();
  });
  it('should traverse test-folder correctly', async () => {
    const logSpy = spy(console, 'log');
    await readDir(resolve(__dirname, 'test-folder'));
    [
      '1.txt',
      '2.txt',
      '1.1.txt',
      '1.1.1.txt',
    ].forEach((txt, index) => {
      expect(logSpy.getCall(index).args[0]).to.equal(txt);
    });
  });
});
