import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'react-router-dom';
import { useSearchNewsListContext } from 'contexts/SearchNewsContextList';
import { NewsSearchList } from './NewsSearchList';
import { useLoadingContext } from 'contexts/LoadingContext';
import { mockDataSearch } from '__mocks__/dataSearch';
import { Loading } from 'components/Loading/Loading';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

jest.mock('contexts/SearchNewsContextList', () => ({
  useSearchNewsListContext: jest.fn()
}));
jest.mock('contexts/LoadingContext', () => ({
  useLoadingContext: jest.fn()
}));
jest.mock('services/news', () => ({
  searchNewsService: jest.fn()
}));
jest.mock('components/Loading/Loading', () => ({
  Loading: jest.fn()
}));

describe('NewsSearch', () => {
  it('should render a NewsCard component', () => {
    (useParams as jest.Mock).mockReturnValue({});
    (useSearchNewsListContext as jest.Mock).mockReturnValue({
      searchNewsList: mockDataSearch,
      setSearchNewsList: jest.fn()
    });
    (useLoadingContext as jest.Mock).mockReturnValue({
      loading: false,
      setLoading: jest.fn()
    });
    render(<NewsSearchList />);
    expect(screen.getByText('Test headline')).toBeInTheDocument();
    expect(screen.getByText('Test abstract')).toBeInTheDocument();
    expect(screen.getByText('Publicado em: 09/05/2022')).toBeInTheDocument();
    expect(screen.getByAltText('image of Test headline')).toHaveAttribute(
      'src',
      'https://static01.nyt.com/test.jpg'
    );
  });
  it('should render Loading', () => {
    (useParams as jest.Mock).mockReturnValue({});
    (useSearchNewsListContext as jest.Mock).mockReturnValue({
      topNewsList: {},
      setTopNewsList: jest.fn()
    });
    (useLoadingContext as jest.Mock).mockReturnValue({
      loading: true,
      setLoading: jest.fn()
    });
    render(<NewsSearchList />);
    expect(Loading).toHaveBeenCalled();
  });
});
