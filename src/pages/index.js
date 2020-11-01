import { Component } from 'react';
import AddCharacterForm from '../components/AddCharacterForm';
import CombatList from '../components/CombatList';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { characters: [] };

    this.addCharacter = this.addCharacter.bind(this);
  }

  addCharacter(character) {
    const { characters: stateCharacters } = this.state;
    let characters = JSON.parse(JSON.stringify(stateCharacters));
    characters.push(character);
    characters = characters.sort((a, b) => b.initiative - a.initiative);

    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;
    return (
      <>
        <AddCharacterForm addCharacter={this.addCharacter} />
        <CombatList characters={characters} />
      </>
    );
  }
}

export default HomePage;
