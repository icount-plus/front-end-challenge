import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loading } from './Loading';

const container = (): RenderResult => render(<Loading />);

describe('Is render Loading', () => {
  container();
  it('Is render Loading', () => {
    const TESTID = screen.getByTestId('loading');
    expect(TESTID).toBeInTheDocument();
  });
});
