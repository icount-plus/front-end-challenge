import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchNews } from './SearchNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const container = (): RenderResult =>
  render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SearchNews />} />
      </Routes>
    </BrowserRouter>
  );

describe('Is render SearchNews', () => {
  container();
  it('Is render placeholder', () => {
    const PLACEHOLDER = screen.getByPlaceholderText('Pesquise por notícias');
    expect(PLACEHOLDER).toBeInTheDocument();
  });
});
