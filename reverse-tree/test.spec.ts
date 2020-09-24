import { reverseTree } from "./index";
import { expect } from "chai";
import "mocha";

describe.only("reverseTree", () => {
  it("shoule work as expected", () => {
    expect(
      reverseTree({
        value: 1,
        left: {
          value: 2,
          left: {
            value: 4
          },
          right: {
            value: 5
          }
        },
        right: {
          value: 3
        }
      })
    ).to.eql({
      value: 1,
      right: {
        value: 2,
        right: {
          value: 4
        },
        left: {
          value: 5
        }
      },
      left: {
        value: 3
      }
    });
  });
});
