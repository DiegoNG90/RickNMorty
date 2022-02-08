import '../../../App.css';
import { Container } from '@mui/material';

import Loader from '../../Loader';
import CharacterCard from '../Character';
const CharacterList = ({ data, loading }) => {
  // console.log(`loading`, loading);

  if (loading) {
    return (
      <div data-testid="spinner">
        <h3>Lista de Personajes</h3>
        <Loader />;
      </div>
    );
  }
  const renderedCharacters = data?.results.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <div className="characterList" data-testid="character-container">
      <h3>Lista de Personajes</h3>
      <Container fixed={true} className="characterList__cards">
        {data?.results.length > 0 && renderedCharacters}
      </Container>
    </div>
  );
};

export default CharacterList;
