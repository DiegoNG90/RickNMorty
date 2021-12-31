import '../../../App.css';
import { Container } from '@mui/material';

import Loader from '../../Loader';
import CharacterCard from '../Character';
const CharacterList = ({ data, loading }) => {
  // console.log(`data`, data);

  if (loading) {
    <Loader />;
  }
  const renderedCharacters = data?.results.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <Container className="characterList">
      <h3>Lista de Personajes</h3>
      {data?.results.length > 0 && renderedCharacters}
    </Container>
  );
};

export default CharacterList;
