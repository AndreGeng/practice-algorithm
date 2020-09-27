import { romanToInt } from "./index"
import { expect } from "chai"
import "mocha"

describe("palindrome number", () => {
  it("shoule work as expected", () => {
    expect(romanToInt("III")).to.equal(3)
    expect(romanToInt("IV")).to.equal(4)
    expect(romanToInt("IX")).to.equal(9)
    expect(romanToInt("LVIII")).to.equal(58)
    expect(romanToInt("MCMXCIV")).to.equal(1994)
  })
})

