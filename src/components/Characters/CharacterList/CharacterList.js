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
    <div className="characterList">
      <h3>Lista de Personajes</h3>
      <Container fluid className="characterList__cards">
        {data?.results.length > 0 && renderedCharacters}
      </Container>
    </div>
  );
};

export default CharacterList;
