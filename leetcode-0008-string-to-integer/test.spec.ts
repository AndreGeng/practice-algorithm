import { myAtoi } from "./index"
import { expect } from "chai"
import "mocha"

describe("reverse integer", () => {
  it("shoule work as expected", () => {
    expect(myAtoi("42")).to.equal(42)
    expect(myAtoi("   -42")).to.equal(-42)
    expect(myAtoi("4193 with words")).to.equal(4193)
    expect(myAtoi("words and 987")).to.equal(0)
    expect(myAtoi("-91283472332")).to.equal(-2147483648)
    expect(myAtoi("  -0012a42")).to.equal(-12)
    expect(myAtoi("2147483648")).to.equal(2147483647)
    expect(myAtoi("-2147483647")).to.equal(-2147483647)
    expect(myAtoi("-2147483649")).to.equal(-2147483648)
  })
})
