import Queue from './Queue';

class BattleQueue extends Queue {
  addByInitiative(character) {
    this.elements.push(character);
    this.elements = this.elements.sort((a, b) => b.initiative - a.initiative);
  }
}

export default BattleQueue;
