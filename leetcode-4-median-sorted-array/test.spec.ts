import { findMedianSortedArrays } from "./index"
import { expect } from "chai"
import "mocha"

describe.only("leetcode find longest string", () => {
  it("shoule work as expected", () => {
    expect(findMedianSortedArrays([1,3], [2])).to.equal(2)
    expect(findMedianSortedArrays([1,2], [3,4])).to.equal(2.5)
    expect(findMedianSortedArrays([0,0], [0,0])).to.equal(0)
    expect(findMedianSortedArrays([], [1])).to.equal(1)
    expect(findMedianSortedArrays([], [2,3])).to.equal(2.5)
    expect(findMedianSortedArrays([3], [-2,-1])).to.equal(-1)
    expect(findMedianSortedArrays([3], [1,2,4])).to.equal(2.5)
    expect(findMedianSortedArrays([1,2,6,7,8], [3,4,5,9,10])).to.equal(5.5)
  })
})
