import BattleQueue from './BattleQueue';

const clancy = { name: 'Clancy Javis', initiative: 15 };
const darth_maul = { name: 'Darth Maul', initiative: 10 };
const dark_helmet = { name: 'Dark Helmet', initiative: 20 };
const jean_luc_picard = { name: 'Jean-Luc Picard', initiative: 12 };
const rick_grimes = { name: 'Rick Grimes', initiative: 5 };

describe('BattleQueue data structure', () => {
  describe('methods', () => {
    describe('add(character)', () => {
      test('adds character into correct position', () => {
        // Arrange
        const testCharacters = [clancy, darth_maul];
        const testBattleQueue = new BattleQueue(testCharacters);
        const expected = [
          dark_helmet,
          clancy,
          jean_luc_picard,
          darth_maul,
          rick_grimes,
        ];

        // Act
        testBattleQueue.add(dark_helmet);
        testBattleQueue.add(jean_luc_picard);
        testBattleQueue.add(rick_grimes);

        // Assert
        expect(testBattleQueue.elements).toEqual(expected);
      });
    });
  });
});
