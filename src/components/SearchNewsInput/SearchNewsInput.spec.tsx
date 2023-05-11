import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchNewsInput } from './SearchNewsInput';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const container = (): RenderResult =>
  render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SearchNewsInput />} />
      </Routes>
    </BrowserRouter>
  );

describe('Is render SearchNews Input', () => {
  container();
  it('Is render placeholder', () => {
    const PLACEHOLDER = screen.getByPlaceholderText('Pesquise por notícias');
    expect(PLACEHOLDER).toBeInTheDocument();
  });
});
