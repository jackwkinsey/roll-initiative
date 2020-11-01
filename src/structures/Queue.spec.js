import Queue from './Queue';

describe('Queue data structure', () => {
  describe('constructor', () => {
    test('initializes Queue elements to given array', () => {
      // Arrange
      const testArray = [1, 2, 3];

      // Act
      const testQueue = new Queue(testArray);

      // Assert
      expect(testQueue.elements).toEqual(testArray);
    });

    test('initializes Queue to empty array if no array is given', () => {
      // Act
      const testQueue = new Queue();

      // Assert
      expect(testQueue.elements).toEqual([]);
    });
  });

  describe('methods', () => {
    describe('add(element)', () => {
      test('adds given element to back of Queue', () => {
        // Arrange
        const testQueue = new Queue(['a', 'b']);

        // Act
        testQueue.add('c');

        // Assert
        expect(testQueue.elements.length).toBe(3);
        expect(testQueue.elements[2]).toBe('c');
      });
    });

    describe('remove()', () => {
      test('removes element at front of Queue', () => {
        // Arrange
        const testQueue = new Queue(['a', 'b']);

        // Act
        testQueue.remove();

        // Assert
        expect(testQueue.elements.length).toBe(1);
        expect(testQueue.elements).toEqual(['b']);
      });
    });

    describe('moveFirstToBack()', () => {
      test('moves the first element to back of Queue', () => {
        // Arrange
        const testQueue = new Queue(['a', 'b', 'c']);

        // Act
        testQueue.moveFirstToBack();

        // Assert
        expect(testQueue.elements.length).toBe(3);
        expect(testQueue.elements).toEqual(['b', 'c', 'a']);
      });
    });
  });
});
