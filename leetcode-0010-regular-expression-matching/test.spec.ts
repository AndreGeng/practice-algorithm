import { isMatch } from "./index"
import { expect } from "chai"
import "mocha"

describe("regular expression matching", () => {
  it("shoule work as expected", () => {
    expect(isMatch("aa", "a")).to.be.false
    expect(isMatch("aa", "a*")).to.be.true
    expect(isMatch("ab", ".*")).to.be.true
    expect(isMatch("aab", "c*a*b")).to.be.true
    expect(isMatch("mississippi", "mis*is*p*.")).to.be.false
    expect(isMatch("a", ".*..")).to.be.false
    expect(isMatch("aaa", "ab*ac*a")).to.be.true
    expect(isMatch("", ".*.*")).to.be.true
  })
})
