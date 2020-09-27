import { longestCommonPrefix } from "./index"
import { expect } from "chai"
import "mocha"

describe.only("palindrome number", () => {
  it("shoule work as expected", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).to.equal("fl")
    expect(longestCommonPrefix(["dog","racecar","car"])).to.equal("")
    expect(longestCommonPrefix([""])).to.equal("")
  })
})

