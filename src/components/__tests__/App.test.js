import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import CharacterList from '../Characters/CharacterList';
import '@testing-library/jest-dom';

describe('Lista de Personajes: Spinner, CharacterList y Character component', () => {
  test('When no data was passed, render the Spinner', () => {
    render(<App />);
    screen.getByTestId('spinner');
  });

  test('Should Render "Lista de Personajes"', () => {
    // const { getByText } = render(<App />);
    // getByText(/Lista de Personajes/i);
    render(<App />);
    screen.getByText(/Lista de Personajes/i);
  });

  test('Should render at least one Card Component/Character / Characters container', () => {
    const mockSuccesApiCallCharacters = {
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          url: 'https://rickandmortyapi.com/api/character/1',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
            'https://rickandmortyapi.com/api/episode/3',
          ],
        },
      ],
    };

    render(
      <CharacterList data={mockSuccesApiCallCharacters} loading={false} />
    );
    expect(mockSuccesApiCallCharacters.results.length).toBeGreaterThan(0);

    // console.log(screen);
    // screen.getByTestId('character-container');
    screen.getByTestId('character-card');
    screen.getByText(/Rick Sanchez/i);
    screen.getByTestId('favorite-icon');
  });
  test('Clicking on favorite', () => {
    const mockSuccesApiCallCharacters = {
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          url: 'https://rickandmortyapi.com/api/character/1',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
            'https://rickandmortyapi.com/api/episode/3',
          ],
        },
      ],
    };
    render(
      <CharacterList data={mockSuccesApiCallCharacters} loading={false} />
    );

    fireEvent.click(screen.getByTestId('favorite-icon'));
    expect(
      screen.getByTestId('favorite-icon').classList.contains('favorited__red')
    ).toBe(true);
  });
});

describe('Searchbar', () => {
  test('Should search some character', async () => {
    render(<App />);
    fireEvent.change(screen.getByTitle('searchBar'), 'Rick');
  });
  test('Should initially appear "Enter a name" as placeholder', () => {
    render(<App />);
    screen.getByLabelText(/Enter a name/i);
  });
});
