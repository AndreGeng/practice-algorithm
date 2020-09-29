import { threeSum } from "./index"
import { expect } from "chai"
import "mocha"

describe("3sum", () => {
  it("shoule work as expected", () => {
    expect(threeSum([-1,0,1,2,-1,-4])).to.eql([[-1,-1,2],[-1,0,1]])
  })
})

