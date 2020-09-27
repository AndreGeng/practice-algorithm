import { maxArea } from "./index"
import { expect } from "chai"
import "mocha"

describe("container with most water", () => {
  it("shoule work as expected", () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).to.equal(49)
  })
})

