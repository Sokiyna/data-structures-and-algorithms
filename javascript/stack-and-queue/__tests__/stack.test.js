'use strict';
const LinkedList = require('../../linked-list/index').LinkedList;
const Stack = require('../index').Stack;


xdescribe('Stack', () => {
    let stack;
    beforeEach(() => {
      stack = new Stack( new LinkedList());
    });
    describe('push', () => {
        test('Can successfully push onto a stack', () => {
            stack.push("a");
            expect(stack.peek()).toEqual("a");
        });
    });
    describe('push', () => {
        test('Can successfully push multiple values onto a stack', () => {
            stack.push("a");
            stack.push("b");
            expect(stack.peek()).toEqual("b");
        });  
    });
    xdescribe('pop', () => {
        test('Can successfully pop off the stack', () => {
        stack.push("a");
        stack.push("b");
        expect(stack.pop()).toEqual("b");
       });
    });
    xdescribe('pop', () => {
        test('Can successfully empty a stack after multiple pops', () => {
        stack.push(1);
        expect(stack.pop()).toEqual(1);
        expect(stack.peek()).toBe("exception");
       });
    });
    xdescribe('peek', () => {
        test('Can successfully peek the next item on the stack', () => {
            stack.push("a");
            expect(stack.peek()).toEqual("a");
            stack.push("b");
            expect(stack.peek()).toEqual("b");
        });
    });
    test('Can successfully instantiate an empty stack', () => {
      expect(stack instanceof Stack).toBeTruthy();
    });
    test('Calling pop or peek on empty stack raises exception',()=>{
      expect(stack.pop()).toBe('exception');
    })
});