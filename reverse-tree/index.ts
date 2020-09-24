interface Tree {
  value: number
  left?: Tree
  right?: Tree
}
export const reverseTree = (tree: Tree | undefined): Tree | undefined => {
  if (!tree || (!tree.left && !tree.right)) return tree
  const { left, right } = tree
  delete tree.right
  delete tree.left
  const newRight = reverseTree(left)
  const newLeft = reverseTree(right)
  if (newRight) {
    tree.right = newRight
  }
  if (newLeft) {
    tree.left = newLeft
  }
  return tree
}

const tree = {
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
}
console.log(reverseTree(tree))


