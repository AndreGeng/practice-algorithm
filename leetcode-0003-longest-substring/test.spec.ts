import { lengthOfLongestSubstring } from "./index"
import { expect } from "chai"
import "mocha"

describe("leetcode find longest string", () => {
  it("shoule work as expected", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).to.equal(3)
    expect(lengthOfLongestSubstring("bbbbb")).to.equal(1)
    expect(lengthOfLongestSubstring("pwwkew")).to.equal(3)
  })
})
