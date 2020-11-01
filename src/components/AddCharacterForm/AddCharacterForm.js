import { Component } from 'react';

class AddCharacterForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', initiative: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, fieldName) {
    this.setState({ [fieldName]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { addCharacter } = this.props;
    addCharacter(this.state);
  }

  render() {
    const { name, initiative } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name-input">
          Name:
          <input
            value={name}
            type="text"
            name="name"
            id="name-input"
            onChange={event => this.handleChange(event, 'name')}
          />
        </label>
        <label htmlFor="initiative-input">
          Initiative:
          <input
            value={initiative}
            type="number"
            min="1"
            max="50"
            name="initiative"
            id="initiative-input"
            onChange={event => this.handleChange(event, 'initiative')}
          />
        </label>
        <input type="submit" value="Add Character" />
      </form>
    );
  }
}

export default AddCharacterForm;
