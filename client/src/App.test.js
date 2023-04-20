import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders Navbar component', () => {
    render(<App />, { wrapper: MemoryRouter });
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders Home component', () => {
    render(<App />, { wrapper: MemoryRouter });
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<App />, { wrapper: MemoryRouter });
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});