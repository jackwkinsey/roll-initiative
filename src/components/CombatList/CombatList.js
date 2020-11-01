const CombatList = props => {
  const { characters } = props;
  const Characters = characters.map(character => {
    const { name, initiative } = character;
    return (
      <div key={name}>
        {name} - {initiative}
      </div>
    );
  });
  return <>{Characters}</>;
};

export default CombatList;
