import { ISearchNewsList } from 'interfaces/ISearchNewsList';
import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState
} from 'react';

type SearchNewsListContextProps = {
  searchNewsList: ISearchNewsList | undefined;
  setSearchNewsList: Dispatch<SetStateAction<ISearchNewsList | undefined>>;
};
type ListContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: SearchNewsListContextProps = {
  searchNewsList: undefined,
  setSearchNewsList: () => {}
};

export const SearchNewsListContext = createContext<SearchNewsListContextProps>(INITIAL_STATE);

export const useSearchNewsListContext = () => useContext(SearchNewsListContext);

export const SearchNewsListContextProvider = ({ children }: ListContextProviderProps) => {
  const [searchNewsList, setSearchNewsList] = useState<ISearchNewsList>();
  return (
    <SearchNewsListContext.Provider value={{ searchNewsList, setSearchNewsList }}>
      {children}
    </SearchNewsListContext.Provider>
  );
};
