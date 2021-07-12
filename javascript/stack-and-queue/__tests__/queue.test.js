const LinkedList = require('../../linked-list/index').LinkedList;
const Queue = require('../index').Queue;
xdescribe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue(new LinkedList);
  });
  xdescribe('enqueue', () => {
    test('Can successfully enqueue into a queue', () => {
      queue.enqueue("a");
      expect(queue.peek()).toEqual("a");
    });
  });
  describe('enqueue', () => {
    test('Can successfully enqueue multiple values into a queue', () => {
      queue.enqueue("a");
      queue.enqueue("b");
      expect(queue.peek()).toEqual("a");
    });
  });
  describe('dequeue', () => {
    test('Can successfully dequeue out of a queue the expected value', () => {
      queue.enqueue("a");
      queue.enqueue("b");
      expect(queue.dequeue()).toEqual("a");
    });
  });
  describe('peek', () => {
    test('Can successfully peek into a queue, seeing the expected value', () => {
      queue.enqueue("a");
      expect(queue.peek()).toEqual("a");
      queue.enqueue("b");
      expect(queue.peek()).toEqual("a");
    });
  });
 xdescribe('Can successfully empty a queue after multiple dequeues', () => {
    test('Can successfully empty a queue after multiple dequeues', () => {
      queue.enqueue("a");
      queue.enqueue("b");
      expect(queue.dequeue()).toEqual("a");
      expect(queue.dequeue()).toEqual("b");
      expect(queue.peek()).toBe("exception");
    });
  });
  test('Can successfully instantiate an empty queue', () => {
    expect(queue instanceof Queue).toBeTruthy();
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    expect(queue.peek()).toBe("exception");
    expect(queue.dequeue()).toBe('exception');
  });
});