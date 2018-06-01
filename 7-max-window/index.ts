function getMaxWindowArr(arr: number[], w: number) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('first param should be an array');
  }
  if (w <= 0) {
    throw new Error('window size should bigger than 0');
  }
  let result = [];
  for (let i = 0; i < arr.length - w + 1; i+=1) {
    result.push(Math.max.apply(null, arr.slice(i, i + w)));
  }
  return result;
}

class Dequeue {
  _queue = new Array();
  add(num: number) {
    const {
      _queue,
    } = this;
    _queue.push(num);
  }
  remove() {
    const {
      _queue,
    } = this;
    if (_queue.length < 0) {
      throw new Error('no more data');
    }
    return _queue.shift();
  }
  size() {
    const {
      _queue,
    } = this;
    return _queue.length;
  }
  peekLast() {
    const {
      _queue,
    } = this;
    return _queue[_queue.length - 1];
  }
  peekFirst() {
    const {
      _queue,
    } = this;
    return _queue[0];
  }
  isEmpty() {
    const {
      _queue,
    } = this;
    return _queue.length === 0;
  }
}

function getMaxWindowArrRefined(arr: number[], w: number) {
  const queue = new Dequeue();
  const result = [];
  for (let i = 0; i< arr.length; i++) {
    if (queue.size() === 0 ||
      queue.peekLast() >= arr[i]) {
      queue.add(arr[i]);
    } else {
      while(!queue.isEmpty()) {
        queue.remove();
      }
      queue.add(arr[i]);
    }
    if (i >= w - 1) {
      while(queue.size() > w) {
        queue.remove();
      }
      result.push(queue.peekFirst());
    }
  }
  return result;
}

export { getMaxWindowArrRefined as default, getMaxWindowArr as getMaxWindowArrSilly };
