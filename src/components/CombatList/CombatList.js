const CombatList = props => {
  const { characters } = props;
  const Characters = characters.map((character, index) => {
    const { name, initiative } = character;
    return (
      <div key={name}>
        {name} - {initiative}{' '}
        {!index ? (
          <button type="button" onClick={props.endTurn}>
            End Turn
          </button>
        ) : null}
      </div>
    );
  });

  return <>{Characters}</>;
};

export default CombatList;
