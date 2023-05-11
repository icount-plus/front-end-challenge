import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from 'react';

type SearchNewsInputContextProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
const INITIAL_STATE: SearchNewsInputContextProps = {
  search: '',
  setSearch: () => ''
};
type SearchNewsInputContextProviderProps = {
  children: ReactElement;
};
export const SearchNewsInputContext = createContext(INITIAL_STATE);
export const useSearchNewsInputContext = () => useContext(SearchNewsInputContext);

export const SearchNewsInputContextProvider = ({
  children
}: SearchNewsInputContextProviderProps) => {
  const [search, setSearch] = useState('');
  return (
    <SearchNewsInputContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchNewsInputContext.Provider>
  );
};
