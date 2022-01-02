import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import './App.css';

import SearchBar from './components/SearchBar';
import CharacterList from './components/Characters/CharacterList';
import Paginator from './components/Paginator';

function App() {
  const [term, setTerm] = useState('');
  const [activePage, setActivePage] = useState(1);
  const state = useFetch(term);
  const { data, loading } = state;

  const findCharacter = (e) => {
    setActivePage(1);
    setTerm(`?page=1&name=${e.target.value}`);
  };
  const selectPage = (page, term = '') => {
    setActivePage(page);
    if (!term) {
      setTerm(`?page=${page}`);
    } else {
      if (term.includes('page') && !term.includes('name')) {
        setTerm(`?page=${page}`);
      } else if (term.includes('name') && term.includes('page')) {
        setTerm(`?page=${page}&?name=${term}`);
      }
    }
  };

  return (
    <>
      <SearchBar findCharacter={findCharacter} />
      <CharacterList data={data} loading={loading} />
      <Paginator
        data={data}
        selectPage={selectPage}
        activePage={activePage}
        term={term}
      />
    </>
  );
}

export default App;
