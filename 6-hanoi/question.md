题目:
汉诺塔问题比较经典, 这里修改一下游戏规则: 现在限制不能从最左侧的塔直接移动到最右侧, 也不能从最右侧直接移动到最左侧, 而是必须经过中间. 求当塔有N层的时候, 打印最优移动过程和最优移动总步数.

例如, 当塔数为两层时, 最上层的塔记为1, 最下层的塔记为2, 则打印:
Move 1 from left to mid
Move 1 from mid to right
Move 2 from left to mid
Move 1 from to mid
Move 1 from mid to left
Move 2 from mid to right
Move 1 from left to mid
Move 1 from mid to right
It will move 8 steps

要求:
用以下两种方法解决:
方法一: 递归的方法;
方法二: 非递归的方法, 用栈来模拟汉诺塔的三个塔.
