export interface Tree {
  value: number
  left?: Tree
  right?: Tree
}
export const printTreePath0 = (tree: Tree | undefined, path: number[] = []): (number[])[] => {
  if (!tree) return []
  const result = [...path, tree.value]
  if (!tree.left && !tree.right) {
    return [result];
  }
  const leftPath = printTreePath0(tree.left, result)
  const rightPath = printTreePath0(tree.right, result)
  return [...leftPath, ...rightPath]
}

export const printTreePath = (s: Tree) => {
  const queue = [s]
  const parentPathQueue: number[][] = [[]]
  const result = []
  while(queue.length > 0) {
    const curr = queue.shift()!
    const parentPath: number[] = parentPathQueue.shift() || []
    // 叶子节点
    if (!curr.left && !curr.right) {
      result.push([...parentPath, curr.value])
      continue;
    }
    if (curr.left) {
      queue.push(curr.left)
      parentPathQueue.push([...parentPath, curr.value])
    }
    if (curr.right) {
      queue.push(curr.right)
      parentPathQueue.push([...parentPath, curr.value])
    }
  }
  return result
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

// console.log(printTreePath(tree))
