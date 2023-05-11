import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'react-router-dom';
import { useTopNewsListContext } from 'contexts/TopNewsListContext';
import { useLoadingContext } from 'contexts/LoadingContext';
import { TopNews } from './TopNews';
import { mockTopNews } from '__mocks__/dataTopNews';
import { Loading } from 'components/Loading/Loading';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

jest.mock('contexts/TopNewsListContext', () => ({
  useTopNewsListContext: jest.fn()
}));
jest.mock('contexts/LoadingContext', () => ({
  useLoadingContext: jest.fn()
}));

jest.mock('services/news', () => ({
  topNewsService: jest.fn()
}));
jest.mock('components/Loading/Loading', () => ({
  Loading: jest.fn()
}));
describe('TopNews', () => {
  it('should render NewsCard Component', () => {
    (useParams as jest.Mock).mockReturnValue({});
    (useTopNewsListContext as jest.Mock).mockReturnValue({
      topNewsList: mockTopNews,
      setTopNewsList: jest.fn()
    });
    (useLoadingContext as jest.Mock).mockReturnValue({
      loading: false,
      setLoading: jest.fn()
    });
    render(<TopNews />);
    expect(screen.getByText('Mock Title')).toBeInTheDocument();
    expect(screen.getByText('Mock abstract')).toBeInTheDocument();
    expect(screen.getByText('Publicado em: 09/05/2022')).toBeInTheDocument();
    expect(screen.getByAltText('image of Mock Title')).toHaveAttribute('src', 'image3.jpg');
  });
  it('should not render NewsCard Component', () => {
    (useParams as jest.Mock).mockReturnValue({});
    (useTopNewsListContext as jest.Mock).mockReturnValue({
      topNewsList: {},
      setTopNewsList: jest.fn()
    });
    (useLoadingContext as jest.Mock).mockReturnValue({
      loading: true,
      setLoading: jest.fn()
    });
    render(<TopNews />);
    expect(Loading).toHaveBeenCalled();
  });
});
