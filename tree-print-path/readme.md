题目：
给定一个二叉树

```
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

```
输出根节点到叶子节点所有的路径
```
[1,2,4]
[1,2,5]
[1,3,6]
```
