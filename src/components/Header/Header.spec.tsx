import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchNewsInput } from 'components/SearchNewsInput/SearchNewsInput';

jest.mock('components/SearchNewsInput/SearchNewsInput', () => ({
  SearchNewsInput: jest.fn(() => null)
}));
const container = (): RenderResult =>
  render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );

describe('Is render Header', () => {
  it('Is render title', () => {
    container();
    const TITLE = screen.getByText('Desafio React News');
    expect(TITLE).toBeInTheDocument();
  });
  it('Is render SearchNews Input', () => {
    container();
    expect(SearchNewsInput).toHaveBeenCalled();
  });
});
