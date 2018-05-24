题目:
宠物, 狗和猫的类如下:
class Pet {
  type: string;
  constructor(type) {
    this.type = type;
  }
  getPetType(): string {
    return this.type;
  }
}
class Dog extends Pet {
  constructor() {
    super('dog');
  }
}
class Cat extends Pet {
  constructor() {
    super('cat');
  }
}
实现一种狗猫队列的结构, 要求如下:
* 用户可以调用add方法将cat类或dog类的实例放入队列中;
* 用户可以调用pollAll方法, 将队列中所有的实例按照进队列的先后顺序依次弹出;
* 用户可以调用pollDog方法, 将队列中dog类的实例按照进队列的先后顺序依次弹出;
* 用户可以调用pollCat方法, 将队列中cat类的实例按照进队列的先后顺序依次弹出;
* 用户可以调用isEmpty方法, 检查队列中是否还有dog或cat的实例;
* 用户可以调用isDogEmpty方法, 检查队列中是否有dog类的实例;
* 用户可以调用isCatEmpty方法, 检查队列中是否有cat类的实例;
