import { printTreePath, Tree } from "./index";
import { expect } from "chai";
import "mocha";

describe("print tree path", () => {
  let tree: Tree
  beforeEach(() => {
    tree = {
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
        value: 3,
        right: {
          value: 6
        }
      }
    };
  });
  it("shoule work as expected", () => {
    expect(printTreePath(tree)).to.eql([
      [1,2,4],
      [1,2,5],
      [1,3,6],
    ]);
  });
});
