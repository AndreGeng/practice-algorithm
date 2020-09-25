import { isPalindromeAfterDelete } from './index';
import { expect } from 'chai';
import 'mocha';
import { resolve } from 'path';

describe.only('isPalindromeAfterDelete', () => {
  it('should work as expect', async () => {
    expect(isPalindromeAfterDelete("aba")).to.equal(true)
    expect(isPalindromeAfterDelete("abca")).to.equal(true)
    expect(isPalindromeAfterDelete("abbc")).to.equal(false)
  });
});
