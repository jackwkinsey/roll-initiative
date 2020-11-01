import { Component } from 'react';
import AddCharacterForm from '../components/AddCharacterForm';
import CombatList from '../components/CombatList';
import BattleQueue from '../structures/BattleQueue';

class BattleSetupPage extends Component {
  constructor(props) {
    super(props);
    this.battleQueue = new BattleQueue();

    this.state = { characters: this.battleQueue.elements };

    this.addCharacter = this.addCharacter.bind(this);
    this.endCharacterTurn = this.endCharacterTurn.bind(this);
  }

  addCharacter(character) {
    this.battleQueue.addByInitiative(character);
    this.setState({ characters: this.battleQueue.elements });
  }

  endCharacterTurn() {
    this.battleQueue.moveFirstToBack();
    this.setState({ characters: this.battleQueue.elements });
  }

  render() {
    const { characters } = this.state;
    return (
      <>
        <AddCharacterForm addCharacter={this.addCharacter} />
        <CombatList characters={characters} endTurn={this.endCharacterTurn} />
      </>
    );
  }
}

export default BattleSetupPage;
