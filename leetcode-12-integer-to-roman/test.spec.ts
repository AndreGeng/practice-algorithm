import { intToRoman } from "./index"
import { expect } from "chai"
import "mocha"

describe("palindrome number", () => {
  it("shoule work as expected", () => {
    expect(intToRoman(3)).to.equal("III")
    expect(intToRoman(4)).to.equal("IV")
    expect(intToRoman(9)).to.equal("IX")
    expect(intToRoman(58)).to.equal("LVIII")
    expect(intToRoman(1994)).to.equal("MCMXCIV")
  })
})

