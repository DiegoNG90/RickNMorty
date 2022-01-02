import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Should Render "Lista de Personajes"', () => {
  test('Should Render "Lista de Personajes"', () => {
    // const { getByText } = render(<App />);
    // getByText(/Lista de Personajes/i);
    render(<App />);
    screen.getByText(/Lista de Personajes/i);
  });
  // test('Should search some character', () => {
  //   render(<App />);
  //   fireEvent.change(screen.getByRole('input', { name: 'searchBar' }, 'Rick'));
  //   // TestingLibraryElementError: Unable to find an accessible element with the role "input" and name "searchBar"
  // });
});
