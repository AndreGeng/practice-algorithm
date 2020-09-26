import { convert } from "./index"
import { expect } from "chai"
import "mocha"

describe("zigzag conversion", () => {
  it("shoule work as expected", () => {
    expect(convert("PAYPALISHIRING", 3)).to.equal("PAHNAPLSIIGYIR")
    expect(convert("PAYPALISHIRING", 4)).to.equal("PINALSIGYAHRPI")
    expect(convert("", 1)).to.equal("")
  })
})
