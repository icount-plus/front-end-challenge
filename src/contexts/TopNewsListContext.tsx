import { ITopNews } from 'interfaces/ITopNews';
import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState
} from 'react';

type TopNewsListContextProps = {
  topNewsList: ITopNews | undefined;
  setTopNewsList: Dispatch<SetStateAction<ITopNews | undefined>>;
};
type TopNewsContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: TopNewsListContextProps = {
  topNewsList: undefined,
  setTopNewsList: () => {}
};

export const TopNewsListContext = createContext<TopNewsListContextProps>(INITIAL_STATE);

export const useTopNewsListContext = () => useContext(TopNewsListContext);

export const TopNewsListContextProvider = ({ children }: TopNewsContextProviderProps) => {
  const [topNewsList, setTopNewsList] = useState<ITopNews>();
  return (
    <TopNewsListContext.Provider value={{ topNewsList, setTopNewsList }}>
      {children}
    </TopNewsListContext.Provider>
  );
};
