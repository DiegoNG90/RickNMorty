import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import SearchBar from './components/SearchBar';
import CharacterList from './components/Characters/CharacterList';
import './App.css';

function App() {
  const [term, setTerm] = useState('');
  const state = useFetch(term);
  const { data, loading } = state;

  const findCharacter = (e) => {
    setTerm(`?name=${e.target.value}`);
  };
  return (
    <>
      <SearchBar findCharacter={findCharacter} />
      <CharacterList data={data} loading={loading} />
    </>
  );
}

export default App;
