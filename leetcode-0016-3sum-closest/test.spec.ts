import { threeSumClosest } from "./index"
import { expect } from "chai"
import "mocha"

describe("palindrome number", () => {
  it("shoule work as expected", () => {
    expect(threeSumClosest([-1,2,1,-4], 1)).to.equal(2)
  })
})

