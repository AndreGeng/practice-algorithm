import { isPalindrome } from "./index"
import { expect } from "chai"
import "mocha"

describe("palindrome number", () => {
  it("shoule work as expected", () => {
    expect(isPalindrome(121)).to.be.true
    expect(isPalindrome(-121)).to.be.false
    expect(isPalindrome(10)).to.be.false
    expect(isPalindrome(1122)).to.be.false
  })
})
