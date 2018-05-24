import { Dog, Cat, CatDogQueue } from './index';
import { expect } from 'chai';
import 'mocha';

describe('CatDogQueue', () => {
  let queue: CatDogQueue;
  beforeEach(() => {
    queue = new CatDogQueue();
  });
  it('pollAll should return item in insert order', () => {
    queue.add(new Dog());
    queue.add(new Cat());
    expect(queue.pollAll().getPetType()).to.equal('dog');
    expect(queue.pollAll().getPetType()).to.equal('cat');
  });
  it('pollCat should return cat in insert order', () => {
    queue.add(new Dog());
    queue.add(new Dog());
    queue.add(new Cat());
    queue.add(new Cat());
    expect(queue.pollCat().getPetType()).to.equal('cat');
    expect(queue.pollCat().getPetType()).to.equal('cat');
  });
  it('pollDog should return dog in insert order', () => {
    queue.add(new Dog());
    queue.add(new Dog());
    queue.add(new Cat());
    queue.add(new Cat());
    expect(queue.pollDog().getPetType()).to.equal('dog');
    expect(queue.pollDog().getPetType()).to.equal('dog');
  });
});

