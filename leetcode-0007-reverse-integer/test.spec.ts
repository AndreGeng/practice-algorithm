import { reverse } from "./index"
import { expect } from "chai"
import "mocha"

describe("reverse integer", () => {
  it("shoule work as expected", () => {
    expect(reverse(123)).to.equal(321)
    expect(reverse(-123)).to.equal(-321)
    expect(reverse(120)).to.equal(21)
  })
})
