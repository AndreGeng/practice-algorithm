class Pet {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  getPetType(): string {
    return this.type;
  }
}
export class Dog extends Pet {
  constructor() {
    super('dog');
  }
}
export class Cat extends Pet {
  constructor() {
    super('cat');
  }
}

class PetEnterQueue {
  pet: Pet;
  count: number;
  constructor(pet: Pet, count: number) {
    this.pet = pet;
    this.count = count;
  }
  getPet() {
    return this.pet;
  }
  getCount() {
    return this.count;
  }
  getEnterPetType() {
    return this.pet.getPetType();
  }
}

export class CatDogQueue {
  _catQueue = new Array();
  _dogQueue = new Array();
  count = 0;
  add(pet: Pet) {
    const {
      _catQueue: catQ,
      _dogQueue: dogQ,
    } = this;
    if (pet.getPetType() === 'dog') {
      dogQ.push(new PetEnterQueue(pet, this.count++));
    } else if (pet.getPetType() === 'cat') {
      catQ.push(new PetEnterQueue(pet, this.count++));
    } else {
      throw new Error('err');
    }
  }
  pollAll() {
    const {
      _catQueue: catQ,
      _dogQueue: dogQ,
    } = this;
    if (catQ.length <=0 && dogQ.length <= 0) {
      throw new Error('empty');
    } else if (catQ.length > 0 && dogQ.length > 0) {
      const catCount = catQ[catQ.length - 1].getCount();
      const dogCount = dogQ[dogQ.length - 1].getCount();
      if (catCount < dogCount) {
        return catQ.shift().getPet();
      } else {
        return dogQ.shift().getPet();
      }
    } else if (catQ.length > 0) {
      return catQ.shift().getPet();
    } else {
      return dogQ.shift().getPet();
    }
  }
  pollCat() {
    const {
      _catQueue: catQ,
    } = this;
    if (catQ.length <= 0) {
      throw new Error('cat empty');
    } else {
      return catQ.shift().getPet();
    }
  }
  pollDog() {
    const {
      _dogQueue: dogQ,
    } = this;
    if (dogQ.length <= 0) {
      throw new Error('dog empty');
    } else {
      return dogQ.shift().getPet();
    }

  }
}
