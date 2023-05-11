import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState
} from 'react';

type LoadingContextProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
type LoadingProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: LoadingContextProps = {
  loading: false,
  setLoading: () => undefined
};

export const LoadingContext = createContext<LoadingContextProps>(INITIAL_STATE);

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingContextProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
  );
};
